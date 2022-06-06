// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
const { async } = require("@firebase/util");
const AWS = require("aws-sdk");

const handler = async function (event, context) {
  const clientParams = {
    apiVersion: "2006-03-01",
    region: "us-east-1",
    // endpoint: "http://localhost:4566",
    // s3ForcePathStyle: true,
    accessKeyId: "AKIAZPYU2ZC3CPNP7SU7",
    secretAccessKey: "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",
    delimiter: "/",
  };

  const s3Params = {
    Bucket: "paula-test",
    Delimiter: "/",
    Prefix: "tiny-",
  };

  // Create S3 service object
  const s3 = new AWS.S3(clientParams);

  const listObjPromise = s3.listObjects(s3Params).promise();

  async function getObject(bucket, objectKey) {
    try {
      const params = {
        Bucket: bucket,
        Key: objectKey,
      };

      const data = await s3.getObject(params).promise();
      return data;
    } catch (e) {
      throw new Error(`Could not retrieve file from S3: ${e.message}`);
    }
  }

  function encode(data) {
    let buf = Buffer.from(data);
    let base64 = buf.toString("base64");
    return base64;
  }

  // var bucket = new AWS.S3({ params: { Bucket: "paula-test" } });
  const response = await new Promise((resolve) => {
    s3.listObjects(s3Params, function (error, data) {
      if (error) {
        // console.log(error);
        resolve({ statusCode: 500, body: error.toString() });
      } else {
        // console.log(data);
        resolve({
          statusCode: 200,
          body: JSON.stringify(data.Contents),
          // body: "Hello World",
        });
      }
    });
  });

  return response;

  // return listObjPromise
  //   .then((data) => {
  //     const response = Promise.all(
  //       data.Contents.map(async (x) => {
  //         console.log("x.Key", x.Key);
  //         return await getObject("paula-test", x.Key);
  //       })
  //     )
  //       .then((a) => {
  //         return {
  //           statusCode: 200,
  //           body: JSON.stringify(a.map((b) => encode(b.Body))),
  //         };
  //       })
  //       .catch((error) => {
  //         return { statusCode: 500, body: error.toString() };
  //       });
  //     return response;
  //   })
  //   .catch((error) => {
  //     return { statusCode: 500, body: error.toString() };
  //   });
};

module.exports = { handler };

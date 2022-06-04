// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
const { async } = require("@firebase/util");
const AWS = require("aws-sdk");
const { FaViacoin } = require("react-icons/fa");

const handler = async function (event, context) {
  const s3Params = {
    Bucket: "paula-test",
    Delimiter: "/",
  };

  AWS.config.update({
    accessKeyId: "AKIAZPYU2ZC3CPNP7SU7",
    secretAccessKey: "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",
  });
  let s3 = new AWS.S3();
  async function getImage() {
    const data = s3
      .getObject({
        Bucket: "paula-test",
        Key: "IMG_202107033345.jpg",
      })
      .promise();
    return data;
  }

  const result = await getImage();

  function encode(data) {
    let buf = Buffer.from(data);
    console.log("data", data);
    let base64 = buf.toString("base64");
    return base64;
  }

  console.log("result", encode(result.Body));

  return { statusCode: 200, body: encode(result.Body) };

  // return { statusCode: 200, body: JSON.stringify(encode(result.Body)) };
  //
  // const listObjPromise = s3.listObjects(s3Params).promise();

  // async function getObject(bucket, objectKey) {
  //   try {
  //     const params = {
  //       Bucket: bucket,
  //       Key: objectKey,
  //     };

  //     const data = await s3.getObject(params).promise();

  //     // return data.Body.toString("utf-8");
  //     return data;
  //   } catch (e) {
  //     throw new Error(`Could not retrieve file from S3: ${e.message}`);
  //   }
  // }

  // return listObjPromise
  //   .then((data) => {
  //     const response = Promise.all(
  //       data.Contents.map(async (x) => {
  //         // return s3.getSignedUrlPromise("getObject", {
  //         //   Bucket: "paula-test",
  //         //   Key: x.Key,
  //         // });
  //         return await getObject("paula-test", x.Key);
  //       })
  //     )
  //       .then((a) => {
  //         // console.log(
  //         //   "a",
  //         //   a.map((x) => x.Body.toString("utf-8"))
  //         // );
  //         console.log(a[0].Body);
  //         return { statusCode: 200, body: JSON.stringify(a) };
  //       })
  //       .catch((error) => {
  //         return { statusCode: 500, body: error.toString() };
  //       });
  //     console.log("response", response);
  //     return response;
  //   })
  //   .catch((error) => {
  //     return { statusCode: 500, body: error.toString() };
  //   });
};

module.exports = { handler };

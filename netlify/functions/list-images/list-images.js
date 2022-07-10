// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
const AWS = require("aws-sdk");

const handler = async function (event, context) {
  const clientParams = {
    apiVersion: "2006-03-01",
    region: "us-east-1",
    // endpoint: "http://localhost:4566",
    // s3ForcePathStyle: true,
    accessKeyId: "AKIAWIJCX3R4RCJ4GT4C",
    secretAccessKey: "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",
    delimiter: "/",
  };

  const s3Params = {
    Bucket: "paula-test",
    Delimiter: "/",
    Prefix: "thumbnails/",
  };

  // Create S3 service object
  const s3 = new AWS.S3(clientParams);

  // const response = await new Promise((resolve) => {
  //   s3.listObjects(s3Params, function (error, data) {
  //     if (error) {
  //       // console.log(error);
  //       resolve({ statusCode: 500, body: error.toString() });
  //     } else {
  //       // console.log(data);
  //       resolve({
  //         statusCode: 200,
  //         body: JSON.stringify(data.Contents),
  //         // body: "Hello World",
  //       });
  //     }
  //   });
  // });
  function getContent(prefix) {
    return new Promise((resolve, reject) => {
      s3.listObjects({ ...s3Params, Prefix: prefix }, function (error, data) {
        if (error) {
          reject(error);
        } else {
          resolve(data.Contents);
        }
      });
    });
  }

  function getPrefixes() {
    return new Promise((resolve, reject) => {
      s3.listObjects(s3Params, function (error, data) {
        if (error) {
          reject(error);
        } else {
          resolve(data.CommonPrefixes);
        }
      });
    });
  }

  let contents = [];

  const response = await new Promise(async (resolve) => {
    let prefixes = [];
    try {
      const response = await getPrefixes();
      prefixes = [...response];
      for (let i = 0; i < prefixes.length; i++) {
        const content = await getContent(prefixes[i].Prefix);
        contents.push(content);
      }
      resolve({ statusCode: 200, body: JSON.stringify(contents.flat()) });
    } catch (e) {
      resolve({ statusCode: 500, body: e.toString() });
    }
  });

  return response;
};

module.exports = { handler };

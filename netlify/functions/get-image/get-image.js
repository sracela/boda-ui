// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
const AWS = require("aws-sdk");

const handler = async function (event, context) {
  AWS.config.update({
    accessKeyId: "AKIAWIJCX3R4RCJ4GT4C",
    secretAccessKey: "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",
  });

  console.log("event", event.queryStringParameters.filename);

  let s3 = new AWS.S3();

  async function getImage() {
    const data = s3
      .getObject({
        Bucket: "paula-test",
        Key: event.queryStringParameters.filename,
      })
      .promise();
    return data;
  }

  const result = await getImage();

  function encode(data) {
    let buf = Buffer.from(data);
    let base64 = buf.toString("base64");
    return base64;
  }

  return { statusCode: 200, body: encode(result.Body) };
};

module.exports = { handler };

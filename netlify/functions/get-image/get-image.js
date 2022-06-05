// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
const { async } = require("@firebase/util");
const AWS = require("aws-sdk");
const { FaViacoin } = require("react-icons/fa");

const handler = async function (event, context) {
  AWS.config.update({
    accessKeyId: "AKIAZPYU2ZC3CPNP7SU7",
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

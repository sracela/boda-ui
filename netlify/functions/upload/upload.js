const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client } = require("@aws-sdk/client-s3");

const handler = async (event) => {
  const s3Bucket = "paula-test";

  try {
    const s3Params = {
      Key: event.queryStringParameters.filename,
      Bucket: s3Bucket,
      // ACL: "public-read",
      Delimiter: "/",
    };
    const client = new S3Client({
      region: "us-east-2",
      credentials: {
        accessKeyId: "AKIAWIJCX3R4RCJ4GT4C",
        secretAccessKey: "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",
      },
    });

    const command = new PutObjectCommand(s3Params);
    let url = await getSignedUrl(client, command, { expiresIn: 3600 });
    return {
      statusCode: 200,
      body: JSON.stringify({ url }),
    };
  } catch (error) {
    console.log("error", error);
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };

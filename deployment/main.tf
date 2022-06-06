provider "aws" {
  region                      = "us-east-1"
  access_key                  = "test"
  secret_key                  = "test"
  s3_use_path_style           = true
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true

  endpoints {
    s3 = "http://s3.localhost.localstack.cloud:4566"
  }
}

resource "aws_s3_bucket" "test_bucket" {
  bucket = "paula-local"

  tags = {
    Name        = "Photos"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_acl" "test_bucket_acl" {
  bucket = aws_s3_bucket.test_bucket.id
  acl    = "public-read-write"
}

resource "aws_s3_bucket_cors_configuration" "example" {
  bucket = aws_s3_bucket.test_bucket.bucket

  cors_rule {
    #    allowed_methods = ["GET", "POST", "PUT", "DELETE", "HEAD"]
    allowed_headers = ["*"]
    allowed_methods = ["PUT"]
    allowed_origins = ["*", "dev.paula.local:8888"]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }
  cors_rule {
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
  }
}

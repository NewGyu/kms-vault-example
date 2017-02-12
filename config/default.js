"use strict";
const encrypted = require("kms-vault").KmsConfig.encrypted;

module.exports = {
  db: {
    user: "hogehoge",
    password: encrypted("AQECAHhyvC+4FgLo7XdXfh5o6JgnT/l9P+Sq+EPVjq7mGLAIIwAAAGowaAYJKoZIhvcNAQcGoFswWQIBADBUBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDBHdBm6J8K2A4rKkXAIBEIAnni4TuIRTjGUlmVVgXoXlVRnVBgeqsYD3p+i9HvuqPt7FmbMPx+3V")
  },
  "kms-vault": {
    awsOpts: {
      region: "us-east-1"
    },
    kmsKeyAlias: "alias/forTest"
  }
}
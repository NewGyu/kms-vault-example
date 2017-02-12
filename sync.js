"use strict";
const KmsConfig = require("kms-vault").KmsConfig;
const d = new KmsConfig.DecryptSync({
  awsOpts: {
    region: "us-east-1"
  }
});

const decryptedString = d.decryptSync("AQECAHhyvC+4FgLo7XdXfh5o6JgnT/l9P+Sq+EPVjq7mGLAIIwAAAGowaAYJKoZIhvcNAQcGoFswWQIBADBUBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDBHdBm6J8K2A4rKkXAIBEIAnni4TuIRTjGUlmVVgXoXlVRnVBgeqsYD3p+i9HvuqPt7FmbMPx+3V");
console.log(decryptedString);

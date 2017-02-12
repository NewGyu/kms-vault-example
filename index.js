"use strict";

const co = require("co");
const KmsConfig = require("kms-vault").KmsConfig;

co(function* () {
  const cfg = yield KmsConfig.decryptConfig(require("config"));
  console.log(cfg);
}).then(r => {
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
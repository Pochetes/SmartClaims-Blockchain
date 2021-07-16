var SmartClaims = artifacts.require("./SmartClaims.sol");

module.exports = function(deployer) {
  deployer.deploy(SmartClaims);
};

var smartContract = artifacts.require("./Registration.sol");

module.exports = function(deployer) {
    deployer.deploy(smartContract);
}
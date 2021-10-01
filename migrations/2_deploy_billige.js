const Billige = artifacts.require("Billige");

module.exports = function (deployer, network, account) {
  deployer.deploy(Billige);
};

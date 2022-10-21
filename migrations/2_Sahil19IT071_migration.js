const Sahil19IT071 = artifacts.require("./Sahil19IT071.sol");
const Sahil19IT071TokenSale = artifacts.require("./Sahil19IT071TokenSale.sol");
const tokenPrice = 1000000000000000; // in wei
module.exports = function (deployer) {
  deployer.deploy(Sahil19IT071,1000000).then(()=>{
    return deployer.deploy(Sahil19IT071TokenSale,Sahil19IT071.address,tokenPrice);
  });
};
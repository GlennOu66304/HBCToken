require('dotenv').config();
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');
var mainNetPrivateKey = Buffer.from(process.env["MAINNET_PRIVATE_KEY"], "hex")
var mainNetWallet = Wallet['default'].fromPrivateKey(mainNetPrivateKey);
var mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/v3/85fe169848c2437fa68f42ed475af1dd");
var ropstenPrivateKey = Buffer.from(process.env["ROPSTEN_PRIVATE_KEY"], "hex")
var ropstenWallet = Wallet['default'].fromPrivateKey(ropstenPrivateKey);
var ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/v3/85fe169848c2437fa68f42ed475af1dd");
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: ropstenProvider,
      // You can get the current gasLimit by running
      // truffle deploy --network rinkeby
      // truffle(rinkeby)> web3.eth.getBlock("pending", (error, result) =>
      //   console.log(result.gasLimit))
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
      network_id: "3",
    },
    mainnet: {
      provider: mainNetProvider,
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
      network_id: "1",
    }
  }
};
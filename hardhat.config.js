require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      hardhat: {
        chainId: 31337,
      },
    },
    sep: {
      url: process.env.SEP_RPC,
      chainId: process.env.SEP_CID * 1,
      accounts: [process.env.PKEY],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      {
        version: "0.8.20",
      },
    ],
  },
};

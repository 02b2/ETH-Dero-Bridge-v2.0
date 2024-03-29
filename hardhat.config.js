require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PRIVATE_KEY}`,
      accounts: [process.env.WALLET_PRIVATE_KEY]
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PRIVATE_KEY}`,
      accounts:[process.env.WALLET_PRIVATE_KEY]
    },
    mainnet: {
      url:`https://polygon-mainnet.infura.io/v3/${process.env.INFURA_PRIVATE_KEY}`,
      accounts:[process.env.WALLET_PRIVATE_KEY]
    }
  }
};

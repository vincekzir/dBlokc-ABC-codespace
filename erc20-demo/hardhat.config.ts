import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as env from 'dotenv';
env.config();

const {DEFAULT_PRIVATE_KEY} = process.env
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    "arbitrum-sepolia": {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      accounts: [`${DEFAULT_PRIVATE_KEY}`],
      chainId: 421614
    }
  }
};

export default config
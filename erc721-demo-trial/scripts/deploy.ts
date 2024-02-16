import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.deployContract("Crazybluu");

  await NFT.waitForDeployment();
  const contractAddress = await NFT.getAddress();

  console.log(
    `Token contract to ${contractAddress} deployed to ${NFT.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
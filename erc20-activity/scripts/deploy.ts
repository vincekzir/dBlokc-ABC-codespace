import { ethers } from "hardhat";

async function main() {
  const token = await ethers.deployContract("ER20Act", ["0xa76B0e69f01E28b1B52596A92A37371E01faC8df"]);

  await token.waitForDeployment();

  console.log(
    `Token deployed to ${token.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

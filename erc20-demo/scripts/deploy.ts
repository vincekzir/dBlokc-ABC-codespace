import { ethers } from "hardhat";

async function main() {
  const token = await ethers.deployContract("Crazybluu", ["0xa76B0e69f01E28b1B52596A92A37371E01faC8df"]);

  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.parseEther("0.001");

  // const lock = await ethers.deployContract("Lock", [unlockTime], {
  //   value: lockedAmount,
  // });

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

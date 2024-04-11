const hre = require("hardhat");
const fs = require("fs");
const { error } = require("console");

// Asynchronous funciton to deploy the NFTMarketPlace contract and write its address

async function main() {
  // Getting the contract Factory for the NFTMarketPlace contract
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  // Deploying the NFTMarketPlace contract
  const nftMarketplace = await NFTMarketplace.deploy();

  //Waiting for the contract to be deployed
  await nftMarketplace.deployed();
  // Logging the address of the deployed nftMarkeplace contract
  console.log("nftMarketPlace deployed to:", nftMarketplace.address);
  // Writing the contract address to a config file
  fs.writeFileSync(
    "./config.js",
    `export const marketplaceAddress = "${nftMarketplace.address}"`
  );
}

// Calling the main function

main()
    // Existing the process if the deployment is successful
  .then(() => process.exit(0))
  // Handling errors if any
  .catch((error) => { 
    console.error(error);
    process.exit(1);
  });

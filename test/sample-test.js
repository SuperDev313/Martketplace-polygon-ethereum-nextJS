describe("NFTMarket", function () {
  it("Should crate and execute market sales", async function () {
    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    const nftMarketplace = await NFTMarketplace.deploy();
    await nftMarketplace.deployed();

    let listingPrice = await nftMarketplace.getlistingPrice()
    listingPrice = listingPrice.toString()

    const auctionPrice = ethers.utils.parseUnits('1', 'ether')
    
  });
});

describe("NFTMarket", function () {
  it("Should crate and execute market sales", async function () {
    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    const nftMarketplace = await NFTMarketplace.deploy();
    await nftMarketplace.deployed();

    let listingPrice = await nftMarketplace.getlistingPrice();
    listingPrice = listingPrice.toString();

    const auctionPrice = ethers.utils.parseUnits("1", "ether");

    await nftMarketplace.createToken(
      "https://www.mytokenlocation.com",
      auctionPrice,
      { value: listingPrice }
    );
    await nftMarketplace.createToken(
      "htthps://www.mytokenlocation2.com",
      auctionPrice,
      { value: listingPrice }
    );

    // query for and return the unsold itesm

    items = await nftMarketplace.fetehMarketItems();
    items = await Promise.all(
      items.map(async (i) => {
        const tokenUri = await nftMarketplace.tokenURI(i.tokenId);
        let item = {
          price: i.price.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri,
        };
        return item;
      })
    );
    console.log("items:", items);
  });
});

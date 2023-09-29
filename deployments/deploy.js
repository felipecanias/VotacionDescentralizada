
// ERC20 Deploy
async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const weiAmount = (await deployer.getBalance()).toString();

    console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

    // make sure to replace the "GoofyGoober" reference with your own ERC-20 name!
    const Token = await ethers.getContractFactory("N2Vote");
    const token = await Token.deploy();

    console.log("Token address:", token.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// Deploy

// async function main() {
//     const Contract = await ethers.getContractFactory("MyGovernor");
//     const contract = await Contract.deploy("Done!");
//     console.log("Contract Deployed to Address:", contract.address);
// }
// main()
//     .then(() => process.exit(0))
//     .catch(error => {
//         console.error(error);
//         process.exit(1);
//     });
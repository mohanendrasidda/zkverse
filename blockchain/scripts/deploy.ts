import {ethers} from "hardhat";
import { MyContract } from "../typechain-types";

async function deploy(){
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const contractFactory = await ethers.getContractFactory("MyContract");
    const contract= await contractFactory.deploy() as MyContract;
    await contract.waitForDeployment();

    console.log("contract deployed to: ", contract.getAddress());
}

deploy().catch((error)=>{
    console.error(error);
    process.exitCode=1;
})
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../helper-functions"
import { networkConfig, developmentChains } from "../helper-hardhat-config"
import { ethers } from "hardhat"

const deployTradeableCashFlow: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  // const { getNamedAccounts, deployments, network } = hre
  // const { deploy, log } = deployments
  // const { deployer } = await getNamedAccounts()
  // log("----------------------------------------------------")
  // log("Deploying TradeableCashflow and waiting for confirmations...")
  // const TradeableCashflow = await deploy("TradeableCashflow", {
  //   from: deployer,
  //   args: [deployer, 'Holy Grail', 'GRAIL', '0x22ff293e14F1EC3A09B137e9e06084AFd63adDF9','0xEd6BcbF6907D4feEEe8a8875543249bEa9D308E8','0xf2d68898557ccb2cf4c10c3ef2b034b2a69dad00'],
  //   log: true,
  //   // we need to wait if on a live network so we can verify properly
  //   waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  // })
  // log(`TradeableCashflow at ${TradeableCashflow.address}`)
  // // if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
  // //   await verify(TradeableCashflow.address, [])
  // // }
  // // const TradeableCashFlowContract = await ethers.getContractAt("TradeableCashflow", TradeableCashflow.address)
  // // const timeLock = await ethers.getContract("TimeLock")
  // // const transferTx = await TradeableCashFlowContract.transferOwnership(timeLock.address)
  // // await transferTx.wait(1)
}

export default deployTradeableCashFlow
deployTradeableCashFlow.tags = ["all", "TradeableCashflow"]

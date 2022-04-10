import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../helper-functions"
import { networkConfig, developmentChains } from "../helper-hardhat-config"
import { ethers } from "hardhat"

const deployBonus: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  log("----------------------------------------------------")
  log("Deploying Bonus and waiting for confirmations...")
  const bonus = await deploy("Bonus", {
    from: deployer,
    args: [],
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  })
  log(`Bonus at ${bonus.address}`)
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(bonus.address, [])
  }
  const bonusContract = await ethers.getContractAt("Bonus", bonus.address)
  const timeLock = await ethers.getContract("TimeLock")
  const transferTx = await bonusContract.transferOwnership(timeLock.address)
  await transferTx.wait(1)
}

export default deployBonus
deployBonus.tags = ["all", "bonus"]

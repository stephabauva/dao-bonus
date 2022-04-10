# DAO Bonus

DISCLAIMER: Unfortunetly, I could not inter-connect all pieces together in time, so only isolated pieces can work: It is possible to get the performance from the data from Covalent and you can also do proposal/queueing/voting but it is not yet connected to Superfluid. For now, instead of doing the change of ownership of the NFT from one team to the other, Timelock only store the address of the winning team in a separate contract.

## The idea 
The idea of this project is to reward teams that manage portfolios for a fund manager. For example, Team 1 is in charge of a partfolio of certains assets, Team 2 is in charge of a portfolio of other assets, etc..
At regular interval, the performance fo each team is measured by getting the overall performance of each portfolio via Covalent and calculating its growth rate. 
The best team gets rewarded an NFT with carries streams from Superfluid.

Each team has a specific target growth to reach.
For e.g. Team 1 is in charge of mature/well-established assets. The growth rate needed for Team 1 to get and the NFT is 5%.

Once all calculation are done, we can imagine a certain duration where those performances are reviewed (e.g. via reportings).

Once performances have been reviewed, if a team has outperformed the current NFT holder, a proposal is created to vote for the transfer of the NFT that another team.
If the vote passes, then the Bonus NFT ownership changes to the best performing team which will receive the flow from the NFT via Superluid.

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version`and get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` And get an output like: `x.x.x`
    - You might need to install it with npm

### Installation

1. Clone this repo:
```
git clone https://github.com/stephanBV/dao-bonus
cd dao-bonus
```
2. Install dependencies
```sh
yarn
```

or 

```
npm i 
```

If you want to deploy to a testnet:
4. Add a `.env` file with the same contents of `.env.example`, but replaced with your variables.
![WARNING](https://via.placeholder.com/15/f03c15/000000?text=+) **WARNING** ![WARNING](https://via.placeholder.com/15/f03c15/000000?text=+)
> DO NOT PUSH YOUR PRIVATE_KEY TO GITHUB


<!-- USAGE  -->
## Usage
1. Get the teams performances
```
node scripts/FindGoodPortfolios.js
```
For this example, the current NFT holder is Team 1.
If we see that for e.g. Team 2 has performed better and should get the NFT with the Superfluid stream, we continue with the proposal below.

2. Setup local blockchain 
```
yarn hardhat node
```

3. Propose a new address to be added to our Bonus contract
For this example, you can find all parameters in helper-hardhat-config.ts where you can change the value of NEW_STORE_VALUE with the Team address. 

In a second terminal (leave your blockchain running)
```
yarn hardhat run scripts/propose.ts --network localhost
```

```

4. Vote on that proposal

```
yarn hardhat run scripts/vote.ts --network localhost
```

5. Queue & Execute proposal!

```
yarn hardhat run scripts/queue-and-execute.ts --network localhost
```

You can also use the [Openzeppelin contract wizard](https://wizard.openzeppelin.com/#governor) to get other contracts to work with variations of this governance contract. 

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>





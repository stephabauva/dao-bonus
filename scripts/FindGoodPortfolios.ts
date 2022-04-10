import axios from 'axios';

export async function getPortfolioValue(){
    let chainId = 1
	let address = '0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de'
	let api_key = 'ckey_cd02df29f46247359d01414a144:'
	let items
    let data
    //Team 1
    let team1PreviousPerformance = 340084
    let team1CurrentPerformance = 0
    let team1PerfGrowth = 0
    //Team 2
    let team2PreviousPerformance = 35452
    let team2CurrentPerformance = 0
    let team2PerfGrowth = 0
    //Team 3
    let team3PreviousPerformance = 2906
    let team3CurrentPerformance = 0
    let team3PerfGrowth = 0

	const getItems = (res:any) => {
		items = res.data.data.items;
		for (let i=0; i<2; i++) {
			let value = items[i].holdings[0].close.quote
			team1CurrentPerformance += value
		}
        for (let i=2; i<10; i++) {
			let value = items[i].holdings[0].close.quote
			team2CurrentPerformance += value
		}
        for (let i=10; i<20; i++) {
			let value = items[i].holdings[0].close.quote
			team3CurrentPerformance += value
		}
        team1PerfGrowth = ((team1CurrentPerformance - team1PreviousPerformance) / team1PreviousPerformance) *100 
        team2PerfGrowth = ((team2CurrentPerformance - team2PreviousPerformance) / team2PreviousPerformance) *100 
        team3PerfGrowth = ((team3CurrentPerformance - team3PreviousPerformance) / team3PreviousPerformance) *100 

        console.log("======================================================================= \n")
        console.log("Team 1: mature pf, account: 0xe59Fc16f9933aaBe1a25aaa82E82bce3Aa1b2da8")
        console.log("Team 2: Mid-mature pf, account: 0x7b45f0D9ccAb8a104365fF7c00C4111801c00CC1")
        console.log("Team 3: Team 3: new/hyped pf, account: 0x3251E1Ee9F00EEf039d26E8F6068517bC0E136f2")

        console.log("Current Bonus recipient: Team 1 \n")
        console.log("=======================================================================\n")

		console.log(`Team 1 latest performance: ${team1CurrentPerformance.toFixed(2)}`)
        console.log(`A delta of ${team1PerfGrowth.toFixed(2)} % compared to last review. Needs 5% to get Bonus. \n` )
        
		console.log(`Team 2 latest performance: ${team2CurrentPerformance.toFixed(2)}`)
        console.log(`A delta of ${team2PerfGrowth.toFixed(2)} % compared to last review. Needs 10% to get Bonus. \n` )

        console.log(`Team 3 latest performance: ${team3CurrentPerformance.toFixed(2)}`)
        console.log(`A delta of ${team3PerfGrowth.toFixed(2)} % compared to last review. Needs 15% to get Bonus. \n` )
		// console.log('items:', items)
	};
    console.log("\nRetrieving portfolios data from Covalent and calculating performances\n")
    data = await axios.get(`https://api.covalenthq.com/v1/1/address/demo.eth/portfolio_v2/?key=ckey_cd02df29f46247359d01414a144`).then(response => {
  		getItems(response);
		// console.log(response.data.data);
		})
}
getPortfolioValue()

	

		

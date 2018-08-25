var axios = require('axios');

var url = "https://query2.finance.yahoo.com/v7/finance/options/BRKB"
var url2 = "https://query2.finance.yahoo.com/v7/finance/options/WMT"

module.exports = {
	async getBRKB() {
		console.log(url); 
		return axios.get(url)
	},

	async getData() {
		console.log("Getting data from", url2);
		return axios.get(url2);
	}

}

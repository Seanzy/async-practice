var axios = require('axios');

var url = "https://query2.finance.yahoo.com/v7/finance/options/BRKB"
var url2 = "https://query2.finance.yahoo.com/v7/finance/options/WMT"
var url3 = "https://query2.finance.yahoo.com/v7/finance/options/BRKB?date=1537488000"

module.exports = {
	async getBRKB() {
		console.log(url); 
		return axios.get(url)
	},

	async getData() {
		console.log("Getting data from", url2);
		return axios.get(url2);
	},

  async getPrice() {
    console.log("Getting price of BRKB...");
    return axios.get(url);
  },

  async getOptions() {
    console.log("Getting options for BRKB");
    return axios.get(url3);
  }
}

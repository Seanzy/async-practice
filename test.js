var finance = require('./financeModel.js'); //without ./ it looks in node modules

(async function() {
	console.log('****sean');

	try {

		const result = await finance.getBRKB(); // await has to be used inside an async function
		console.log('result:', result.data.optionChain.result[0].underlyingSymbol);

		const price2 = await finance.getData(); //this lines is equivalent to 
		console.log(price2.data.optionChain.result[0].underlyingSymbol);

    const price3 = await finance.getPrice();
    console.log("BRKB bid:", price3.data.optionChain.result[0].quote.bid);
    console.log("BRKB ask:", price3.data.optionChain.result[0].quote.ask);
	}
	catch (err) {
		console.log(err);
	}
})();


console.log("++++Sean");

finance.getBRKB().then((result) => { 
	console.log(result.data.optionChain.result[0].underlyingSymbol);
	return finance.getData(result.xzy);
})
.then(price2 => {
	console.log(price2.data.optionChain.result[0].underlyingSymbol); //this line
})
.catch(err => {

}) 


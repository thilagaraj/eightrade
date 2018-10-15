const FormatNumber=(number)=>{ console.log(number);
	 return Math.floor(number)
			.toString()
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const FormatCurrency=(number)=>{ console.log(number);
	return '$' + FormatNumber(number);
}


export {FormatNumber,FormatCurrency};
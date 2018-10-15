const GetTodayDateString=(separator,formatingType)=>{ 
	let today=new Date(),
		dd = today.getDate(),
		mm = today.getMonth()+1, 
		yyyy = today.getFullYear(),
		differentFormats={};
	if(dd<10){
		dd = '0'+dd
	} 
	if(mm<10){
		mm = '0'+mm
	} 
	differentFormats={
		'mmddyyyy':mm + separator + dd + separator + yyyy,
		'ddmmyyyy':dd + separator + mm + separator + yyyy,
		'yyyymmdd':yyyy + separator + mm + separator + dd,
		'yyyyddmm':yyyy + separator + dd + separator + mm,
		
	};	
	if(differentFormats[formatingType]){
		return differentFormats[formatingType];
	}
	return differentFormats['mmddyyyy'];
}

const GetFormattedDateString=(date,separator,formatingType)=>{ 
	let today=new Date(date),
		dd = today.getDate(),
		mm = today.getMonth()+1, 
		yyyy = today.getFullYear(),
		differentFormats={};
	if(dd<10){
		dd = '0'+dd
	} 
	if(mm<10){
		mm = '0'+mm
	} 
	differentFormats={
		'mmddyyyy':mm + separator + dd + separator + yyyy,
		'ddmmyyyy':dd + separator + mm + separator + yyyy,
		'yyyymmdd':yyyy + separator + mm + separator + dd,
		'yyyyddmm':yyyy + separator + dd + separator + mm,
		
	};	
	if(differentFormats[formatingType]){
		return differentFormats[formatingType];
	}
	return differentFormats['mmddyyyy'];
}


export {GetTodayDateString,GetFormattedDateString};
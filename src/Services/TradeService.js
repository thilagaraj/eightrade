import React from 'react';
import APISerivce from './APIService';
import Constants from '../Constants';

export default {		
	
	/*
	Name : getTradesForChart
	Purpose : Get limited data for chart in the dashboard
	Input : limit|<Number> , offset|<Number> Eg : 1,10
	Output : data|<Array>, errors|<Array>
	*/
	getTradesForChart(limit,offset){
		return new Promise((resolve,reject)=>{
			APISerivce.get(`/trades?_sort=tradeDate,volume&_order=asc,asc`).then((response)=>{
				resolve(response.data);		
			}).catch((errorResponse)=>{
				reject([Constants.ERRORS["500"]]);	
			});
		});
	},
	
	/*
	Name : getAllTrades
	Purpose : Get full trades data with various filter options
	Input : filter|<Bbject> Eg : {column:<columnName',value:<fiterValue>}
	Output : data|<Array>, errors|<Array>
	*/
	getAllTrades(filters){
		let queryString=[],
			datesFilter=[];
		if(filters){			
			filters.forEach((o)=>{
				if(o.value && o.columnName!=="_TRADE_DATES_"){
					queryString.push(o.columnName+"="+o.value);
				}
				if(o.columnName==="_TRADE_DATES_"){
					datesFilter=o.value;
				}
			});
		}
		queryString=queryString.join('&');
		
		return new Promise((resolve,reject)=>{
			APISerivce.get(`/trades?_sort=tradeDate,tradeId&_order=desc,desc&${queryString}`).then((response)=>{				
				if(datesFilter && (datesFilter[0] && datesFilter[1])){					
					const dsf=new Date(datesFilter[0]).getTime();
					const dst=new Date(datesFilter[1]).getTime();
					response=response.data.filter((o)=>dsf<=new Date(o.tradeDate).getTime() && dst>=new Date(o.tradeDate).getTime());					
				}
				else{
					response=response.data;
				}				
				resolve(response);		
			}).catch((errorResponse)=>{
				reject([Constants.ERRORS["500"]]);	
			});
		});
	},
	
	getTradesByDate(fromDate,toDate){
		
		
	}
	
}

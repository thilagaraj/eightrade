import React, { Component } from 'react';
import axios from 'axios';
import APISerivce from './APIService';

export default {		
	
	getTradesForChart(limit,offset){
		return new Promise(function(resolve,reject){
			APISerivce.get(`/trades?_sort=tradeDate&_order=asc`).then(function(response){
				resolve(response.data);		
			}).catch(function(errorResponse){
				reject(errorResponse);	
			});
		});
	},
	
	getAllTrades(){
		return new Promise(function(resolve,reject){
			APISerivce.get(`/trades?_sort=tradeDate,tradeId&_order=desc,desc`).then(function(response){
				resolve(response.data);		
			}).catch(function(errorResponse){
				reject(errorResponse);	
			});
		});
	},
	
	getTradesByDate(fromDate,toDate){
		
		
	}
	
}
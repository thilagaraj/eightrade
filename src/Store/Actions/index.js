import TradeService from '../../Services/TradeService'

export default {
	onChartError(errorResponse){
		return {type:'ON_CHART_ERROR',payload:errorResponse}
	},	
	
	onChartData(response){
		return {type:'ON_CHART_DATA',payload:response}
	},
	
	onChartLoading(loading){
		return {type:'ON_CHART_LOADING',payload:loading}
	},
	
	getChartData(){
		return (dispatch)=>{
			dispatch(this.onChartLoading(true));		
			TradeService.getTradesForChart().then((response)=>{
				dispatch(this.onChartData(response));			
			}).catch((errorResponse)=>{
				dispatch(this.onChartError(errorResponse));
			}).finally(()=>{
				dispatch(this.onChartLoading(false));
			});
		};		
	},
	
	onTradeError(errorResponse){
		return {type:'ON_TRADE_ERROR',payload:errorResponse}
	},	
	
	onTradeData(response){
		return {type:'ON_TRADE_DATA',payload:response}
	},
	
	onTradeLoading(loading){
		return {type:'ON_TRADE_LOADING',payload:loading}
	},
	
	getTradesData(filters){
		return (dispatch)=>{
			dispatch(this.onTradeLoading(true));		
			TradeService.getAllTrades(filters).then((response)=>{			
				dispatch(this.onTradeData(response));					
			}).catch((errorResponse)=>{
				dispatch(this.onTradeError(errorResponse));				
			}).finally(()=>{
				dispatch(this.onTradeLoading(false));
			});;
		};		
	}
	
}

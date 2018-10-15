import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from '../../Store/Actions';
import Errors from '../Errors';
import './TradeChart.scss';

/*
Component Name : RecentTrades
Description : List out recent trades with different columns. By default all data will be shown. Fiters are added for aggregate results.
Filters : Trade Date, Asset Class, Instrument Type and Account Number
*/

class TradeChart extends PureComponent{	
	
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		this.props.getChartData();		
	}
	
	getChartSeries(actionType){
		let filtered=[],
			expected=[],
			d=new Date();
		d.setDate(d.getDate()-this.props.noOfDays);console.log(d);
		d=d.getTime();
		if(actionType=='BUY' && this.props.chartVolumeList){
			filtered=this.props.chartVolumeList.filter((o,k)=>
				o.transactionType==="BUY" && 
				new Date(o.tradeDate).getTime()>=d
			);
		}
		if(actionType=='SELL' && this.props.chartVolumeList){
			filtered=this.props.chartVolumeList.filter((o,k)=>
				o.transactionType==="SELL" &&
				new Date(o.tradeDate).getTime()>=d
			);
		}
		filtered.forEach((o,k)=>{
			expected.push({
				x:new Date(o.tradeDate).getTime(),
				y:o.quantity,
				ticker:o.ticker,
				assetClass:o.assetClass,
				tradeDate:o.tradeDate,
				account:o.accountId
			});
		});
		return expected;
	}
	
	getChartOptions(){
		const options = {
			rangeSelector: {				
				enabled: false,
				inputEnableds:false,
				selected:1
			},
			chart:{
				type:"spline"
			},
			navigator: {
				enabled: false
			},
			title: {
				text: "Stats for recent  15 Days"
			},
			scrollbar: {
				enabled: false
			},
			yAxis:{
				opposite:false
			},
			credits: {
				enabled: false
			},	
			legend:{
				enabledd:true,
				layout: 'vertical'
			},
			tooltip: {
				formatter:function(){					
					return (
						`<strong>Account # ${this.points[0].point.account}</strong>						
						<br /><strong>Buy | ${this.points[0].point.tradeDate}</strong>						
						<br /><strong>Ticker </strong> : ${this.points[0].point.ticker}
						<br /><strong>Class </strong> : ${this.points[0].point.assetClass}
						<br /><strong>Volume </strong> : ${this.y}
					`);
				}
			},
			series: [{
				name:"Buy",
				data: this.getChartSeries('BUY'),
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, Highcharts.getOptions().colors[0]],
						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				}
			},
			{
				name:"Sell",
				data: this.getChartSeries('SELL')				
			}]
		};
		
		return options;
		
	}
	
	renderChart(){		
		return (
			<HighchartsReact
				highcharts={Highcharts}
				constructorType={'stockChart'}
				options={this.getChartOptions()}
			/>
		);
		
	}
	
	render(){
        return (
            <Row className="statisticsWrapper m-t-40">
				<Col lg="12">
					<h2 className="title">
						Trade Statistics
					</h2>					
					<Errors messages={this.props.errors}/>
				</Col>
				<Col lg="12">	
					<div className="cardStyled p-t-20 p-b-20">
					{this.renderChart()}
					</div>
				</Col>
            </Row>
        );
    }
	
}

TradeChart.propTypes={
	noOfDays:PropTypes.number.isRequired
}
	
const mapStateToProps=(state)=>{
	return {
		chartVolumeList:state.chartState.chartData,
		isLoading:state.chartState.isLoading,
		errors:state.chartState.errors
	}
}

const mapDispatchToProps=(dispatch)=>{	
	return {
		getChartData:()=>dispatch(Actions.getChartData()),		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(TradeChart); 
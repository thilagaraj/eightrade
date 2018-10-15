import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from '../../Store/Actions';
import './TradeChart.scss';

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
				tradeDate:o.tradeDate
			});
		});
		return expected;
	}
	
	renderChart(){		
		const options = {
			rangeSelector: {				
				enabled: false,
				inputEnableds:false,
				selected:1
			},
			chart:{
				type:"areaspline"
			},
			navigator: {
				enabled: false
			},
			title: {
				text: false
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
			tooltip: {
				formatter:function(){					
					return (
						`<strong>Buy | ${this.points[0].point.tradeDate}</strong>						
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
			/*{
				data: this.getChartSeries('SELL')
			}*/]
		};
		
		return (
			<HighchartsReact
				highcharts={Highcharts}
				constructorType={'stockChart'}
				options={options}
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
				</Col>
				<Col lg="12">	
					<div className="cardStyled">
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
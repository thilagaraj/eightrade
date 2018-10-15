import React, { PureComponent } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import Select from 'react-select';
import Config from '../../Config';
import Constants from '../../Constants';
import Errors from '../Errors';
import 'ag-grid-community/dist/styles/ag-grid.css';
import './RecentTrades.scss';
import '../../Styles/AGGridOverrides.scss';
import Actions from '../../Store/Actions';
import {FormatNumber,FormatCurrency} from '../../Utils/NumberUtils';
import {GetFormattedDateString} from '../../Utils/DateUtils';

/*
Component Name : RecentTrades
Description : List out recent trades with different columns. By default all data will be shown. Fiters are added for aggregate results.
Props : NA
Filters : Trade Date, Asset Class, Instrument Type and Account Number
*/

class RecentTrades extends PureComponent{
    constructor(props){
        super(props);
		this.onFilterChange=this.onFilterChange.bind(this);
		this.state={
			totalRecords:0,
			showingFrom:1,
			showingRecords:0,
			filters:{
				AssetClassFilter:Object.keys(Constants.ASSET_CLASSES),
				InstrTypeFilter:Object.keys(Constants.INSTRUMENT_TYPES),
				AccountFilter:"",
				FromDateFilter:"",
				ToDateFilter:""		
			}
		}
    }
	
	componentDidMount(){
		this.doFilter();
	}
	
	componentDidUpdate(preProps, prevState){
		if(prevState.filters.AssetClassFilter!==this.state.filters.AssetClassFilter || 
			prevState.filters.InstrTypeFilter!==this.state.filters.InstrTypeFilter || 
			prevState.filters.AccountFilter!==this.state.filters.AccountFilter || 
			prevState.filters.FromDateFilter!==this.state.filters.FromDateFilter || 
			prevState.filters.ToDateFilter!==this.state.filters.ToDateFilter
		){
			this.doFilter();			
		}
	}
	
	doFilter(){
		let filters=[
			{
				columnName:"accountId_like",
				value:this.state.filters.AccountFilter
			},
			{
				columnName:"assetClass_like",
				value:`^(${this.state.filters.AssetClassFilter && this.state.filters.AssetClassFilter.join('|')})`
			},
			{
				columnName:"instrumentType_like",
				value:`^(${this.state.filters.InstrTypeFilter && this.state.filters.InstrTypeFilter.join('|')})`
			},
			{
				columnName:"instrumentType_like",
				value:`^(${this.state.filters.InstrTypeFilter && this.state.filters.InstrTypeFilter.join('|')})`
			},				
			{
				columnName:"_TRADE_DATES_",
				value:[this.state.filters.FromDateFilter,this.state.filters.ToDateFilter]
			}				
		];
		this.props.getTradesData(filters);
		setTimeout(()=>{
			this.setPagination();
		},500);
	}
	
	formatNumber(params){
		return FormatNumber(params.value);
	}
	
	formatCurrency(params){
		return FormatCurrency(params.value);
	}
	
	formatDate(params){
		return GetFormattedDateString(params.value,"/","mmddyyyy");
	}	
		
	createColumnDefs(){
		return [
			{
				headerName: "Trade ID",
				field: "tradeId"
			},
			{
				headerName: "Date",
				field: "tradeDate",
				sort:"desc",
				valueFormatter: this.formatDate
			},
			{
				headerName: "Settled On",
				field: "settlementDate",
				valueFormatter: this.formatDate
			},
			{
				headerName: "Class",
				field: "assetClass"
			},
			{
				headerName: "Instr. Type",
				field: "instrumentType"
			},
			{
				headerName: "Accnt Id",
				field: "accountId"
			},
			{
				headerName: "Borker",
				field: "brokerCode"
			},
			{
				headerName: "Amount",
				field: "amount",
				valueFormatter: this.formatCurrency,
				cellClass:'text-positive'
			},
			{
				headerName: "Trans. Type",
				field: "transactionType",
				cellClass:'buyOrSell'
			},
			{
				headerName: "Quantity",
				field: "quantity",
				valueFormatter: this.formatNumber
			},
			{
				headerName: "Ticker",
				field: "ticker"
			}

		];        
	}	
	
	setPagination(){
		if(this.api){
			this.setState({
				totalRecords:this.api.paginationGetRowCount(),
				showingFrom:
					(this.api.paginationGetPageSize && this.api.paginationGetCurrentPage ) ? 
					(this.api.paginationGetPageSize()*this.api.paginationGetCurrentPage())+1: 
					1,
				showingRecords:
					(this.api.paginationGetPageSize && this.api.paginationGetCurrentPage ) ? 
					this.api.paginationGetPageSize()*(this.api.paginationGetCurrentPage()+1): 
					0
			});
		}
	}
	
	onGridReady = (params) => {
		this.api = params.api;
		this.columnApi = params.columnApi;
		this.api.sizeColumnsToFit();
		this.api.paginationSetPageSize(Config.GRID_ROWS_SIZE);
		setTimeout(()=>{
			this.setPagination();
		},500);		
	}
	
	onNext(){
		this.api.paginationGoToNextPage();
		this.setPagination();
	}
	
	onPrevious(){
		this.api.paginationGoToPreviousPage();
		this.setPagination();
	}
	
	onFilterChange(value,field){
		if(field==="InstrTypeFilter" || field==="AssetClassFilter"){
			value=value.map((o)=>o.value);
		}
		this.setState({
			filters:{...this.state.filters,[field]:value}			
		})
	}
	
	renderAssetClassFilter(){
		const acOptions=[];console.log(Constants);
		for(let item in Constants.ASSET_CLASSES){ 
			acOptions.push({
				value:item,
				label:Constants.ASSET_CLASSES[item]
			});
		};
		return (
			<div>
				<label>Asset Class</label>
				<Select
					onChange={e=>this.onFilterChange(e,'AssetClassFilter')}
					name="AssetClassFilter"
					closeMenuOnSelect={false}			 
					defaultValue={acOptions}
					isMulti
					options={acOptions}
				/>
			</div>
		  );
	}
	
	renderInstrumentTypeFilter(){
		const acOptions=[];
		for(let item in Constants.INSTRUMENT_TYPES){ 
			acOptions.push({
				value:item,
				label:Constants.INSTRUMENT_TYPES[item]
			});
		};
		return (
			<div>
				<label>Instrument Type </label>
				<Select
					onChange={e=>this.onFilterChange(e,'InstrTypeFilter')}
					name="InstrTypeFilter"
					closeMenuOnSelect={false}			 
					defaultValue={acOptions}
					isMulti
					options={acOptions}
				/>
			</div>
		);
	}
	
	renderAccountFilter(){
		return (
			<div>
				<label>Account #</label>
				<input
					value={this.state.filters.AccountFilter}
					onChange={e=>this.onFilterChange(e.target.value,'AccountFilter')}
					name="AccountFilter"
					type="number"			 
					placeholder="Account no..."
					className="form-control"
				/>
			</div>
		);		
	}
	
	renderFromDatesFilter(){
		return (
			<div>
				<label>Trades from</label>
				<input
					value={this.state.filters.FromDateFilter}					
					onChange={e=>this.onFilterChange(e.target.value,'FromDateFilter')}
					name="FromDateFilter"
					type="date"			 
					placeholder="MM/DD/YYYY"
					className="form-control"
				/>
			</div>
		);		
	}
	
	renderToDateFilter(){
		return (
			<div>
				<label>Trades to</label>
				<input
					value={this.state.filters.ToDateFilter}					
					onChange={e=>this.onFilterChange(e.target.value,'ToDateFilter')}
					name="ToDateFilter"
					type="date"			 
					placeholder="MM/DD/YYYY"
					className="form-control"
				/>
			</div>
		);		
	}
	
	
	
    render(){
        return (			
            <section className=" m-t-40"> 
                <h2 className="title">
                    Recent Trades
                </h2>
				<Errors messages={this.props.errors}/>
				<Row className="filterWrapper">
					<Col lg="3">
						{this.renderAssetClassFilter()}		
					</Col>
					<Col lg="3">
						{this.renderInstrumentTypeFilter()}		
					</Col>
					<Col lg="2">
						{this.renderAccountFilter()}		
					</Col>
					<Col lg="2">
						{this.renderFromDatesFilter()}		
					</Col>
					<Col lg="2">
						{this.renderToDateFilter()}		
					</Col>
				</Row>
                <div className="cardStyled RecentActivityWrapper m-t-20">
                    <div className="grid">
                        <div className="gridWrapper">                           
                            <div style={{height: (72*Config.GRID_ROWS_SIZE)+'px', width: '100%' }} className="ag-grid-custom">								
								<AgGridReact
									headerHeight="65"
									rowHeight="65"
									paginationAutoPageSize={true}
									suppressPaginationPanel={true}
									pagination={true}
									onGridReady={this.onGridReady}
									enableSorting={true}
									columnDefs={this.createColumnDefs()}
									rowData={this.props.tradesData}>
								</AgGridReact>
							</div>
                            <div className="gridFooter">
                                <div className="paginationWrapper">
                                    <span className="paginationInfo">
										{this.state.showingFrom}
										<span>-</span>  
										{this.state.showingRecords}
										<span>of</span>  
										{this.state.totalRecords}
									</span>
                                    <span className="paginationLeft" onClick={()=>this.onPrevious()}>
										<MaterialIcon icon="chevron_left"/>
									</span>
                                    <span className="paginationRight" onClick={()=>this.onNext()}>
										<MaterialIcon icon="chevron_right"/>
									</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        );
    }

} 

const mapStateToProps=(state)=>{
	return {
		tradesData:state.tradesState.tradesData,
		isLoading:state.tradesState.isLoading,
		errors:state.tradesState.errors
	}
}

const mapDispatchToProps=(dispatch)=>{	
	return {
		getTradesData:(filters)=>dispatch(Actions.getTradesData(filters)),		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(RecentTrades); 
import React, { PureComponent } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Config from '../../Config';
import 'ag-grid-community/dist/styles/ag-grid.css';
import './RecentActivities.scss';
import '../../Styles/AGGridOverrides.scss';
import MaterialIcon from 'material-icons-react';
import Actions from '../../Store/Actions';
import {FormatNumber,FormatCurrency} from '../../Utils';

class RecentActivity extends PureComponent{
    constructor(props){
        super(props);
		this.state={
			totalRecords:0,
			showingFrom:1,
			showingRecords:0,
		}
    }
	
	componentDidMount(){
		this.props.getTradesData();
	}

	formatNumber(params){
		return FormatNumber(params.value);
	}
	
	formatCurrency(params){
		return FormatCurrency(params.value);
	}
		
	createColumnDefs(){
		return [
			{headerName: "Trade ID", field: "tradeId"},
			{headerName: "Date", field: "tradeDate",sort:"desc"},
			{headerName: "Settled On", field: "settlementDate"},
			{headerName: "Class", field: "assetClass"},
			{headerName: "Instr. Type", field: "instrumentType"},
			{headerName: "Accnt Id", field: "accountId"},
			{headerName: "Borker", field: "brokerCode"},
			{headerName: "Amount", field: "amount",valueFormatter: this.formatCurrency},
			{headerName: "Trans. Type", field: "transactionType"},
			{headerName: "Quantity", field: "quantity",valueFormatter: this.formatNumber},
			{headerName: "Ticker", field: "ticker"}

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
	
    render(){
        return (
            <section className=" m-t-40"> 
                <h2 className="title">
                    Recent Trades
                </h2>               
                <div className="cardStyled RecentActivityWrapper">
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
		getTradesData:()=>dispatch(Actions.getTradesData()),		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(RecentActivity); 
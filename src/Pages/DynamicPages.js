import React from 'react';
import Statistics from '../Components/Statistics';
import RecentTrades from '../Components/RecentTrades';
import ActiveQuotes from '../Components/ActiveQuotes';
import TradeChart from '../Components/TradeChart';
import { Row, Col } from 'reactstrap';

const DashboardPage=(props)=>{
	return (
		<div>
			<Row>
				<Col lg="9">
					<Row>
						<Col lg="12">
							<Statistics/>
						</Col>						
					</Row>
					<Row>
						<Col lg="12">
							<TradeChart noOfDays={15}/>
						</Col>						
					</Row>
				</Col>
				<Col lg="3">
					<ActiveQuotes/>
				</Col>
			</Row>
			<Row>
				<Col lg="12">
					<RecentTrades/>
				</Col>
			</Row> 
		</div>
	);	
}

export default DashboardPage;
import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Statistics from './Components/Statistics';
import RecentActivity from './Components/RecentActivities';
import RecentAccounts from './Components/RecentAccounts';
import TradeChart from './Components/TradeChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './Styles/Reset.scss';
import './Styles/Variables.scss';
import './Styles/App.scss';

/*
Component Name : App
Description : Main page component containing routing
Props : NA
*/

class App extends React.Component {
  render() {
    return (
		<Container fluid>
			<Row>
				<Col lg="12">
					<Header/>
				</Col>
			</Row>
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
					<RecentAccounts/>
				</Col>
			</Row>
			<Row>
				<Col lg="12">
					<RecentActivity/>
				</Col>
			</Row>       
			<Row>
				<Col lg="12">
					<Footer/>  
				</Col>
			</Row>                    
		</Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import DashboardPage from './Pages/DynamicPages';
import AboutPage from './Pages/StaticPages';
import 'bootstrap/dist/css/bootstrap.min.css';
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
			<Router>
				<Switch>
					<Route exact path="/" component={DashboardPage}/>
					<Route path="/dashboard" component={DashboardPage}/>
					<Route path="/about" component={AboutPage}/>
				</Switch>
			</Router>      
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

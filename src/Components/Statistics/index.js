import React from 'react';
import { Row, Col } from 'reactstrap';
import './Statistics.scss';
import MaterialIcon from 'material-icons-react';

/*
Component Name : Statistics
Description : Top header statistics components to show stats of DOW, S&P and Nasdaq live market data
Props : NA
*/

const Statistics =(props)=>{
	
    const renderDOWStats=()=>{
        return (
            <div className="cardStyled">
               <div className="cardWrapper">
                    <div className="statContainer">
                        <h4 className="statTitle">Dow <MaterialIcon icon="arrow_upward"/></h4>
                        <h3 className="statSubTitle text-positive">+1.15% <span className="text-default normal">(25,339.99 / +287.16)</span></h3>
                    </div>
               </div>
            </div>
        );
    }

    const renderNasdaqStats=()=>{
        return (
            <div className="cardStyled">
               <div className="cardWrapper">
                    <div className="statContainer positive">
                        <h4 className="statTitle">Nasdaq <MaterialIcon icon="arrow_upward"/></h4>
                        <h3 className="statSubTitle text-positive">+2.29% <span className="text-default normal">(74,96.89 / +167.83)</span></h3>
                    </div>
               </div>
            </div>
        );
    }

    const renderSPStats=()=>{
        return (
            <div className="cardStyled">
               <div className="cardWrapper">
                    <div className="statContainer positive">
                        <h4 className="statTitle">S&P <MaterialIcon icon="arrow_downward"/></h4>
                        <h3 className="statSubTitle text-negative">-1.42% <span className="text-default normal">(27,67.13 / -38.76)</span></h3>
                    </div>
               </div>
            </div>
        );
    }
    
   
	return (
		<Row className="statisticsWrapper m-t-40">
			<Col lg="12">
				<h2 className="title">
					Quick Stats
				</h2>
			</Col>
			<Col lg="4">					
				{renderDOWStats()}
			</Col>
			<Col lg="4">	
				{renderNasdaqStats()} 
			</Col>
			<Col lg="4">	
				{renderSPStats()} 
			</Col> 
		</Row>
	);    

} 

export default Statistics; 
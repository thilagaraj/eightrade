import React from 'react';
import About from '../Components/About';
import Errors from '../Components/Errors';
import { Row, Col } from 'reactstrap';

const AboutPage=(props)=>{
	return (
		<Row>
			<Col lg="12">				
				<About/>
			</Col>
		</Row>		
	);	
}

export default AboutPage;
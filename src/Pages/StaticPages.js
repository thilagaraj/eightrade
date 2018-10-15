import React from 'react';
import About from '../Components/About';
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

const TermsPage=(props)=>{
	return "";	
}

const PivacyPolicyPage=(props)=>{
	return "";	
}


export default {AboutPage,TermsPage,PivacyPolicyPage};
import React from 'react';
import { Row, Col } from 'reactstrap';

/*
Component Name : Footer
Description : Footer with copyright information
Props : NA
*/

const About=()=>{
     return (				
		<Row>
			<Col lg="12">
				<h2 className="title">
					About us
				</h2>
			</Col>
			<Col lg="12">
				<div className="cardStyled aboutWrapper">
					<div className="cardWrapper">
						<p className="text-condensed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum velit rhoncus, porttitor risus quis, ultrices magna. Vivamus est sapien, accumsan in metus vel, sollicitudin tincidunt eros. Sed vitae augue ornare, egestas erat in, egestas erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis nulla nunc, efficitur sed elit quis, mattis iaculis justo. Ut ornare in nibh eu fermentum. Ut et ante gravida, luctus eros a, fermentum elit. Nam ut volutpat arcu. Vestibulum elit tellus, vestibulum vitae facilisis vel, volutpat placerat nulla. Donec quis arcu vitae libero vestibulum semper at non sapien. Donec in erat metus. Nunc varius nec ex nec accumsan.</p>

						<p className="text-condensed">Suspendisse vel fringilla odio. Curabitur gravida mi sit amet tempus cursus. Aenean non arcu at ipsum ornare feugiat. Maecenas pulvinar nisi ut faucibus eleifend. Morbi imperdiet eros a sapien ultricies, non vestibulum ipsum condimentum. Proin sed est tincidunt, imperdiet augue sed, euismod erat. Donec egestas scelerisque tellus non tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse posuere posuere ipsum, eu rhoncus purus ultricies quis. Quisque auctor placerat euismod. Fusce volutpat felis nunc. Ut odio erat, lobortis quis consequat vel, blandit nec nisl. Donec nisl nulla, tincidunt ut mi at, tempus lobortis lacus.</p>
					</div>
				</div>
			</Col>
		</Row> 
    );
}

export default About;
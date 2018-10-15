import React from 'react';
import { Row, Col } from 'reactstrap';
import './Header.scss';
import MaterialIcon from 'material-icons-react';

/*
Component Name : Header
Description : Header component with collapsable navigation
Props : NA
*/

const Header=(props)=>{    

    const renderLogo=()=>{
        return (
            <div className="logoWrapper flex flex-align-item">
                <a href="#">
                    <MaterialIcon icon="menu"/>  
                </a> 
                <a href="#" className="m-l-20">
                    <img src="/images/logo.png"/>
                </a>           
            </div>
        );
    }

    const renderUserDetails=()=>{
        return (
            <div className="userDetailsWrapper">
                <ul className="flex flex-align-item float-right">
                    <li className="userDetailsName p-r-10">
                        <div >
                            <span>Hey,</span><span> Thilagaraj!</span>
                        </div>
                       
                    </li>
                    <li className="logoutWrapper ">
                        <a href="#" className="SettingsLink p-r-10">
                            <MaterialIcon icon="settings"/>
                        </a>
                        <a href="#" className="logoutLink">
                            <MaterialIcon icon="power_settings_new"/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }

   
	return (
		<header className="headerWrapper">
			<Row>
				<Col lg="6">
					{renderLogo()}
				</Col>
				<Col lg="6">
					{renderUserDetails()}
				</Col>
			</Row>
		</header>
	);
    

} 

export default Header; 
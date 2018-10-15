import React, { Component } from 'react';
import './RecentAccounts.scss';
import MaterialIcon from 'material-icons-react';

class RecentAccounts extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section className="recentAccountsWrapper m-t-40">
                <h2 className="title">
                    Quick statistics
                </h2> 
                <div className="card">                    
                    <ul>
                        <li>
                            <div className="accountSeachWrapper">
                            <input type="text" className="accountSearch" placeholder="Search accounts..." />
                            </div>
                        </li>
                        <li>
                            <div className="accountAvatar">
                                <MaterialIcon icon="account_circle"/>
                            </div>
                            <div className="accountDetails">
                                <h2 className="p-b-5">Anderson Jefry</h2>
                                <small>+91 9788238892</small>
                            </div>
                        </li>
                        <li>
                            <div className="accountAvatar">
                                <MaterialIcon icon="account_circle"/>
                            </div>
                            <div className="accountDetails">
                                <h2 className="p-b-5">Anderson Jefry</h2>
                                <small>+91 9788238892</small>
                            </div>
                        </li>
                        <li>
                            <div className="accountAvatar">
                                <MaterialIcon icon="account_circle"/>
                            </div>
                            <div className="accountDetails">
                                <h2 className="p-b-5">Anderson Jefry</h2>
                                <small>+91 9788238892</small>
                            </div>
                        </li>
                        <li>
                            <div className="accountAvatar">
                                <MaterialIcon icon="account_circle"/>
                            </div>
                            <div className="accountDetails">
                                <h2 className="p-b-5">Anderson Jefry</h2>
                                <small>+91 9788238892</small>
                            </div>
                        </li>
                        <li>
                            <div className="accountAvatar">
                                <MaterialIcon icon="account_circle"/>
                            </div>
                            <div className="accountDetails">
                                <h2 className="p-b-5">Anderson Jefry</h2>
                                <small>+91 9788238892</small>
                            </div>
                        </li> 
                        <li className="buttonWrapper text-right">
                            <button className="button">View all <MaterialIcon icon="arrow_right_alt"/></button>    
                        </li>                      
                    </ul>
                </div>
            </section>
        );
    }

} 

export default RecentAccounts; 
import React from 'react';
import './ActiveQuotes.scss';

/*
Component Name : ActiveQuotes
Description : Temporary static module, Yet to integrate with live feed
Props : NA
*/

const ActiveQuotes =(props)=>{    
   
        return (
            <section className="activeQuotesWrapper m-t-40">
                <h2 className="title">
                    Active Quotes
                </h2> 
                <div className="cardStyled">                    
                    <ul>
                        <li>
                            <div className="activeQuotesSeachWrapper">
                            <input type="text" className="activeQuotesSearch" placeholder="Search accounts..." />
                            </div>
                        </li>
                        <li>                            
                            <div className="activeQuotesDetails">
                                <h2 className="p-b-5">
									<span className="float-left">Advanced Micro Devices (AMD)</span> 
									<span className="float-right bold text-default">23.36</span>
								</h2>
								<br/>
                                <small className="text-positive">+0.2 | +0.23%</small>
                            </div>
                        </li>
                        <li>                            
                            <div className="activeQuotesDetails">
                                <h2 className="p-b-5">
									<span className="float-left">Microsoft Corp (MSFT)</span> 
									<span className="float-right bold text-default">108.74</span>
								</h2>
								<br/>
                                <small className="text-negative">-0.80 | -0.73%</small>
                            </div>
                        </li>
						 <li>                            
                            <div className="activeQuotesDetails">
                                <h2 className="p-b-5">
									<span className="float-left">Wells Fargo & Co (WFC)</span> 
									<span className="float-right bold text-default">28.2</span>
								</h2>
								<br/>
                                <small className="text-positive">+0.4 | +0.33%</small>
                            </div>
                        </li>
						<li>                            
                            <div className="activeQuotesDetails">
                                <h2 className="p-b-5">
									<span className="float-left">Apple Inc (AAPL)</span> 
									<span className="float-right bold text-default">208.13</span>
								</h2>
								<br/>
                                <small className="text-positive">+0.3 | +0.63%</small>
                            </div>
                        </li>
						<li>                            
                            <div className="activeQuotesDetails">
                                <h2 className="p-b-5">
									<span className="float-left">Cisco Systems Inc (CSCO)</span> 
									<span className="float-right bold text-default">58.33</span>
								</h2>
								<br/>
                                <small className="text-negative">-1.3 | -1.63%</small>
                            </div>
                        </li>
						<li>                            
                            <div className="activeQuotesDetails">
                                <h2 className="p-b-5">
									<span className="float-left">General Electric Co (GE)</span> 
									<span className="float-right bold text-default">12.33</span>
								</h2>
								<br/>
                                <small className="text-positive">+0.17 | +2.09%</small>
                            </div>
                        </li>
						<li>                            
                            <div className="activeQuotesDetails">
                                <h2 className="p-b-5">
									<span className="float-left">Micron Technology Inc (MU)</span> 
									<span className="float-right bold text-default">52.38</span>
								</h2>
								<br/>
                                <small className="text-positive">+0.12 | +1.09%</small>
                            </div>
                        </li>
                        <li className="statusWrapper text-right">
                            <small>Last refresh on <i>10/17/2018 09:00 PM</i></small>  
                        </li>                      
                    </ul>
                </div>
            </section>
        );

} 

export default ActiveQuotes; 

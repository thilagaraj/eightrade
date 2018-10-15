import React from 'react';
import './Footer.scss';

/*
Component Name : Footer
Description : Footer with copyright information
Props : NA
*/

const Footer=()=>{
    return (
        <footer>
            <div className="copyrightWrapper">
                <p className="text-center">&copy; 2018. eighTrade.com | an optimized trading platform.</p>
            </div>
        </footer>
    );
}

export default Footer;
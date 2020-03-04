import React from 'react';
import './Footer.css';
import RSS_logo from './nav_bar_logo.png'; // RSS Logo
import linkedin from './LI-In-Bug.png'; // LinkedIn Logo
import facebook from './f_logo_RGB-White_58.png'; // Twitter Logo
console.log(RSS_logo);
console.log(linkedin);
console.log(facebook);

function Footer() {
    return (
        <div>
            {/* <!-- FOOTER --> */}
            <div class='footer'>
                <div class='footer-1'>
                    <img src={RSS_logo} alt='RSS logo' class='logo_footer' />
                    <em> ©2020 by the Regents Scholar Society, UCLA. <br /> All rights reserved.
                    </em>
                </div>
                <div class='footer-2'>
                    <a href='linkedin.com'> <img src={linkedin} alt='RSS LinkedIn' class='socialmedia' /> </a>
                </div>
                <div class='footer-3'>
                    <a href='facebook.com'> <img src={facebook} alt='RSS Facebook' class='socialmedia' /></a>
                </div>
                <div class='credits'>
                    <b>Code by:</b> <em>James Yoon, Chelsey Wang, Tiffany Trinh, Rishi Sankar, Ray Huang, Solomon Lo,
                        Danny Choi</em></div>
            </div>
        </div>
    );
}
export default Footer; 
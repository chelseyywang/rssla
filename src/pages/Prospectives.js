import React from 'react';
import './Prospectives.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from '../components/NewHeader/NewHeader';
import Sessions from './Sessions.js';
import Scholarship from './Scholarship';
import OSP_panels from './pictures/OSP Panels.png';
import TWR_coords from './TWR_coords.js'

function Prospectives() {
    return (
        <div className="prospectives">
            <div class='body-1-prospectives'>
                <div class='body-1-title'>
                    <strong>PROSPECTIVES</strong>
                </div>
                <br /><br />
                <p class='body-1-prospectives-text'>
                    From our annual OSP to our transfer events, the Society does lots to guide prospective Regents scholars
                    in their college decision process. Check out our programs below!
                </p>
            </div>


            <div class="body-3-prospectives">
                <div class="capital-heading">
                    INTRODUCING RSS
                    </div>

                <div class="blue-padding dates-itinerary">
                    <div class="video-container"><iframe width="640" height="auto" src="https://www.youtube.com/embed/BFsoW4t7Agc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div class='video-caption'>
                        First and foremost, we at the Regents Scholar Society would like to congratulate you on receiving the scholarship. Watch the video above to get a gist of what we do,
                        and scroll down for events tailored for both freshman and transfer prospective students. Hope to see you soon!
                    </div>
                </div>
            </div>
            <div class="freshman-prospectives">

                <div class="freshman-transfer-header">
                    <span>FOR FRESHMAN PROSPECTIVES</span>
                </div>

                <p class='body-2-prospectives'><br /><br />
                    Questions about how to choose classes, clubs, or even a major?
                Unsure if UCLA is the right choice for you?<br />
                    To answer those questions, and more — attend our OSP! <br /><br />

                    Historically, OSP has stood for our Overnight Stay Program, which took place over the course of 3-day, 2-night programs at UCLA. In light of current events, we will not be offering this program in person this year - however, we will be offering <strong>OSP: Online Socially-distanced Program!</strong> Through this, you’ll be able to:

                </p>

                <div class='body-3-prospectives'>
                    <div class="blue-padding">
                        <ul>
                            <li><a href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfhfsHue8E7YOgSMbR4axMG5XmJs96A7SNxUfWHJ6cLXxY5mA/viewform?usp=send_form">SIGN UP HERE</a> to attend online panels and Q&A sessions with current Regents Scholars and faculty members!</li>
                        </ul>
                        <div class= 'OSP-panel-picture'>
                            <img src={OSP_panels} alt='OSP panels' />
                        </div>
                        <ul>
                            <li>Join <a href="https://www.facebook.com/groups/1484769195012533/">this Facebook group</a> to meet both prospective c/o 2024 Regents Scholars, and current Regents Scholars!</li>
                            <li>Reach out to any of the program coordinators listed below, or to your student advisors, who will be reaching out to you soon via email and/or mail. </li>
                        </ul>
                    </div>
                </div>

                <p class='body-2-prospectives'>
                    Below, you can find details about coordinators for each of the four OSP sessions that were originally scheduled to take place. They’ve included their contact information below - don’t hesitate to reach out to them if you have any questions, concerns, or just want to chat! For more information or general questions, please reach out to outreach director Rebecca Zhu at outreach@rssla.org.

                </p>

                <div class="body-3-prospectives">
                    <div class="capital-heading">
                        COORDINATORS
                    </div>
                    <div id='coordinators'>
                        < Sessions />
                    </div>

                    {/*
                    <div class="blue-padding dates-itinerary">
                        <button type='button' class="collapsible" href='javascript:collapsible()'>OSP 1 COORDINATORS</button>
                        <div class='content'>

                            <collapsible />
                            {/* <span class="nobreak right-float">
                                <button class="button-1">Itinerary</button>
                                <button class="button-1">Sign&nbsp;Up!</button>
                                <button class="button-1">Waiver</button>
                            </span>
                            
    
                            <br />
                        </div>
                        <br />
                        <div><span class="left-float">OSP Session 2</span><br />
                            <span class="nobreak right-float">
                                <button class="button-1">Itinerary</button>
                                <button class="button-1">Sign&nbsp;Up!</button>
                                <button class="button-1">Waiver</button>
                            </span>
                            <br />
                        </div>
                        <br />
                        <div><span class="left-float">OSP Session 3: April XX, 2020</span>
                            <span class="nobreak right-float">
                                <button class="button-1">Itinerary</button>
                                <button class="button-1">Sign&nbsp;Up!</button>
                                <button class="button-1">Waiver</button>
                            </span>
                            <br />
                        </div>
                        <br />
                        <div><span class="left-float">OSP Session 4: April XX, 2020</span>
                            <span class="nobreak right-float">
                                <button class="button-1">Itinerary</button>
                                <button class="button-1">Sign&nbsp;Up!</button>
                                <button class="button-1">Waiver</button>
                                <br />
                            </span>
                            <br />
                        </div>
                        <br /><br /><br />
                    </div>
                    */}

                </div>
            </div>


            <div class="transfer-prospectives">
                <div class="freshman-transfer-header">
                    <span>FOR TRANSFER PROSPECTIVES</span>
                </div>

                <p class='body-2-prospectives'>
                    <br />Stay tuned for updates regarding TWR (Transfer Welcome Reception)!                     For more information, reach out to the Transfer Affairs Director at transfers@rssla.org.

                </p>

                <div class="body-3-prospectives">
                    <div class="capital-heading">
                        YOUR TWR COORDINATORS
                    </div>
                    <div id='coordinators'>
                        < TWR_coords />
                    </div>
                {/*
                <div class='body-3-prospectives'>
                    <div class="blue-padding">
                        TWR INFORMATION
                        <ul>
                            <li>Listen to transfer Regents Scholar panelists discuss their experiences!</li>
                            <li>Get your questions on transfer life answered!</li>
                            <li>Eat in a UCLA dining hall &mdash; for free!</li>
                            <li>Do a small tour with current UCLA Regents Scholars!</li>
                        </ul>
                    </div>
                </div>
                

                <p class='body-2-prospectives'>
                    For more information, reach out to the Transfer Affairs Director at transfers@rssla.org.
                </p>

                <div class="body-3-prospectives">
                    <div class="capital-heading">
                        MORE INFORMATION
                    </div>
                    <div class="blue-padding">
                        <span class="nobreak right-float">
                            <button class="button-1">Itinerary</button>
                            <button class="button-1">Sign&nbsp;Up!</button>
                        </span>
                        <br /><br />
                    </div>

                </div>
                */}
            </div>
                </div>


            <div class="the-scholarship">
                <Scholarship />
            </div>
        </div>
    );
}

export default Prospectives; 
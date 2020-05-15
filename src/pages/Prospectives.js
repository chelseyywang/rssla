import React from 'react';
import './Prospectives.css';
//import { Route, Switch, BrowserRouter } from 'react-router-dom';
//import Header from '../components/NewHeader/NewHeader';
import Sessions from './Sessions.js';
import Scholarship from './Scholarship';
//import OSP_panels from './pictures/OSP Panels.png';
import TWRCoords from './TWRCoords.js'

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

            <div class="freshman-prospectives">

                <div class="body-2-prospectives">
                    <div class="capital-heading-1">
                        INTRODUCING RSS
                    </div>
                    <div class="video-container">
                        <iframe title="Introducing RSS" width="640" height="auto" src="https://www.youtube.com/embed/BFsoW4t7Agc" frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" SameSite="none"></iframe>
                    </div>
                    <div id="video-caption">
                        First and foremost, we at the Regents Scholar Society would like to congratulate you on receiving the scholarship. Watch the video above to get a gist of what we do,
                        and scroll down for events tailored for both freshman and transfer prospective students. Hope to see you soon!
                    </div>
                </div>
            </div>

            <TransferProspectives/>
            <FreshmanProspectives/>
            <Scholarship />
        </div>
    );
}

function FreshmanProspectives(props) {
    return (
        <div class="content_wrapper freshman">
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
                        <li>Join <a href="https://www.facebook.com/groups/1484769195012533/">this Facebook group</a> to meet both prospective c/o 2024 Regents Scholars, and current Regents Scholars!</li>
                        <li>Reach out to any of the program coordinators listed below, or to your student advisors, who will be reaching out to you soon via email and/or mail. </li>
                    </ul>
                </div>
                {/*<div class='OSP-panel-picture'>
                    <img src={OSP_panels} alt='OSP panels' />
                </div>
*/}
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
    );
}

function TransferProspectives(props) {
    return (
        <div class="content_wrapper transfer">
            <div class="freshman-transfer-header">
                <span>FOR TRANSFER PROSPECTIVES</span>
            </div>

            <p class='body-2-prospectives'>
                <br />Welcome to the Regents Scholar Society’s Transfer Welcome Week! <br /><br />
                If you have questions regarding RSS, academics, research, extracurriculars, and student life at UCLA, then please attend our events during Transfer Welcome Week!
                Originally, the society planned to welcome all RSS prospective transfer students with an in-person welcome reception and a 2-day, 1-night program at UCLA.
                However, due to the unprecedented pandemic, the society is providing a virtual Transfer Welcome Week to welcome all of its prospective transfer students.
                The Transfer Welcome Week will be held from <strong>Monday, May 18th to Friday, May 22nd</strong>, and all events will be held through Zoom. We hope to see you there! <br /><br /></p>

            <div class= 'twr-itinerary'>
                <div class='twr-itinerary-title'>
                    THE ITINERARY: </div>
                <ul class='twr-itinerary-heading'>
                    <li>MONDAY, MAY 18TH: Transfer Welcome Week Begins!</li>
                    <ul class='twr-itinerary-subheading'>
                        <li>General Information Session: 5:00 PM - 6:00 PM</li>
                        <li>RSS Student Panel: 7:00 PM - 8:00 PM</li>
                    </ul>
                    <li>TUESDAY, MAY 19TH: Get to Know RSS! </li>
                    <ul class='twr-itinerary-subheading'>
                        <li>Inroduction to the Transfer Student Center ft. Georgia de Laine: 12:00 PM - 1:00 PM</li>
                        <li>General Information Session: 5:00 PM - 6:00 PM</li>
                        <li>Game Night: 8:00 PM - 9:00 PM</li>
                    </ul>
                    <li>WEDNESDAY, MAY 20TH: Research and Academics </li>
                    <ul class='twr-itinerary-subheading'>
                        <li>Research Panel: 1:00 PM - 2:00 PM</li>
                        <li>Academic Advising Workshop: 5:30 PM - 6:30 PM</li>
                        <li>Transfer Timeline Workshop: 6:30 PM - 7:30 PM</li>
                    </ul>
                    <li>THURSDAY, MAY 21ST: Extracurriculars </li>
                    <ul class='twr-itinerary-subheading'>
                        <li>Meet the Board: Extracurriulars Panel: 6:00 PM - 7:00 PM</li>
                        <li>Internship Discussion: 7:00 PM - 8:00 PM</li>
                    </ul>
                    <li>FRIDAY, MAY 22ND: Transfer Welcome Week Ends! </li>
                    <ul class='twr-itinerary-subheading'>
                        <li>Ask the Coords (Q&A Session): 5:00 PM - 6:00 PM</li>
                    </ul>
                </ul>
            </div>

            <p class='body-2-prospectives'>If you are a prospective UCLA transfer student who was accepted to UCLA with the Regents Scholarship, please 
                join <a href="https://www.facebook.com/groups/661412984441205/">this Facebook Group</a> to meet other prospective transfers as well as current RSS students!<br/><br/>
                Below, you can find details about our Transfer Affairs coordinators that have worked hard to put on our Transfer Welcome Week.
                For more information or general questions, please reach out to the Transfer Affairs Director, Raymond DeAngelo, at <a href="mailto:transfers@rssla.org">transfers@rssla.org</a>.
            </p>

            <div class="body-3-prospectives">
                <div class="capital-heading">
                    YOUR TWR COORDINATORS
                </div>
                <div id='coordinators'>
                    <TWRCoords/>
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
    );
}

export default Prospectives; 
import React from 'react';
import './Prospectives.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from '../components/NewHeader/NewHeader';
import Sessions from './Sessions.js';


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

                <p class='body-2-prospectives'><br />
                    Questions about how to choose classes, clubs, or even a major?
                Unsure if UCLA is the right choice for you?<br />
                    To answer those questions, and more — attend our OSP! <br /><br />

                    Historically, OSP has stood for our Overnight Stay Program, which took place over the course of 3-day, 2-night programs at UCLA. In light of current events, we will not be offering this program in person this year - however, we will be offering <strong>OSP: Online Socially-distanced Program!</strong> Through this, you’ll be able to:

                </p>

                <div class='body-3-prospectives'>
                    <div class="blue-padding">
                        <ul>
                            <li><a href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSe2v5Wk6InDTGgmhn_Y0wVHUBljZKZrH0mtOqQwL4jy1l4_Uw/viewform?usp=send_form">Attend online panels and Q&A sessions</a> with current Regents Scholars! These panels will be about:</li>
                            <ul>
                                <li>UCLA in general: academics, extracurriculars, etc.</li>
                                <li>What it means to be a Regents Scholar at UCLA: three-faceted mentorship (peer, faculty, alumni), professional opportunities, </li>
                                <li>Specific sessions, such as: Pre-Medicine at UCLA, Engineering at UCLA, Pre-Law at UCLA, etc. - <a href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSe2v5Wk6InDTGgmhn_Y0wVHUBljZKZrH0mtOqQwL4jy1l4_Uw/viewform?usp=send_form" >click here</a> let us know what topics you’re interested in!</li>
                            </ul>
                            <li>[TBA] Join this Facebook group to meet both prospective c/o 2024 Regents Scholars, and current Regents Scholars!</li>
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
                    <div id = 'coordinators'>
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
                    <br />We'd like to invite you to our Transfer Welcome Reception (TWR) and Transfer Overnight Program (TOP)!
                </p>

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
                    <br /><br />
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
            </div>

            <div class="capital-heading2"><span>THE SCHOLARSHIP</span></div>

            <div class="capital-heading3">Benefits of the Scholarship</div>

            <div class="the-scholarship">
                <p class="class-enrollment">
                    The Regents Scholarship is awarded to up to 100 incoming freshmen and transfer students. Alongside membership in the
                    Regents Scholar Society, all Regents Scholars receive:
                    <br />
                    <li><strong>A $2,000 honorarium,</strong> awarded quarterly for four years (or two years for transfers).</li>
                    <li>University scholarships or grants to cover the student's financial need.</li>
                    <br />
                    Alongside the scholarship's financial benefits, scholarship recipients are guaranteed: <br />
                    <li>Priority enrollment in 13 class units, starting in their first winter quarter.</li>
                    <li>Four years of university housing upon submission of the Housing application.</li>
                    <li>A parking pass upon submission of the Parking application.</li>
                    <li>A peer, alumni, and faculty mentor, should you apply for one.</li>
                    <li>Leadership opportunities within the Regents Scholar Society</li>

                    {/** 
                    As a Regents Scholar, you will have the ability to enroll in 13 units before most other student on campus (besides other priority passers) starting your first winter quarter. Most UCLA pre-requisite courses are 4-unit courses, and many general education courses are 5-units. With 13 priority units, you are able to get 3 of your classes before other students. 
                    <br/><br/>With priority enrollment, many of our scholars are able to complete their degrees in 3 years if they choose to. Along with that, due to their access to core curriculum classes, many of our scholars are able to complete double majors, triple majors, one major with two minors, etc. 
                    */}
                    <br />
                </p>

                {/* 
                <div class="mentorship-guarentees">
                    <div class="mentorship-program">
                        <div class="capital-heading4">Financial Benefits</div>
                        <div class="m-p-g">
                            <br />All Regents Scholars receive:
                            <br /><br />
                            <ul>
                                <li>A $2,000 honorarium, awardly quarterly for four years (or two years for transfers).</li>
                                <li>University scholarships or grants to cover the student's financial need.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="guarentees">
                        <div class="capital-heading4">Guarantees</div>
                        <div class="m-p-g">
                            <br />Because of the Regents Scholarship, you are guaranteed:
                            <br /><br />
                            <ul>
                                <li>Four years of university housing,.</li>
                                <li>A parking pass, should you apply for one.</li>
                                <li>Leadership opportunities, through our RSS networks.</li>
                                <li>Resources to succeed through our RSS Facebook page.</li>
                                <li>$2500 honorarium every quarter, along with additional need-based financial aid.</li>
                            </ul>
                            <br />&amp; because you go to UCLA, you'll be guaranteed:
                            <br /><br />
                            <ul>
                                <li>World-class library at your fingertips.</li>
                                <li>Delicious food at the #1 ranked dining halls in the country.</li>
                                <li>A quality education at the #1 public school.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                */}
            </div>

            <div class="faq blue-padding">
                <p class="faq-header">FREQUENTLY ASKED QUESTIONS</p>
                <p class="faq-q">I. How can I get the scholarship?</p>
                <p class="faq-a">The application for the scholarship is offered by a scholarship committee of chosen faculty members upon review of your UCLA application. Thus, the selection process is up to the quality of your application.</p>
                <p class="faq-q">II. Who gets offered the scholarship?</p>
                <p class="faq-a">The "top 1.5%" of applicants is a little vague &mdash; but those who are offered to apply for the scholarship are often very successful in their academics and have shown a track record of leadership experience or commitment to their extracurriculars.</p>
                <p class="faq-q">III. Can I talk to someone about the scholarship?</p>
                <p class="faq-a">You can reach out to the RSS president with any questions.</p>
                <p class="faq-q">IV . Are there any restrictions to keep the scholarship?</p>
                <p class="faq-a">Yes, all Regents Scholars must maintain a cumulative 3.0 GPA at UCLA to continue to receive full benefits of the scholarship.</p>
                <br />
            </div>
        </div>
    );
}

export default Prospectives; 
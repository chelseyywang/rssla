import React from 'react';
import './Prospectives.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

function Prospectives() {
    return (
        <div className="prospectives">
            <div class='body-1-prospectives'>
                <div class='body-1-title'>
                    <strong>Congratulations!</strong>
                </div>
                <br /><br />
                <p class='body-1-prospectives-text'>
                    First and foremost, we'd like to congratulate you on the scholarship! The Regents Scholarship is one of the most prestigious awards given to UCLA undergraduates, and you should feel very proud of yourself for your accomplishments thus far!
                </p>
            </div>

            <div class="freshman-prospectives">
                <div class="freshman-transfer-header">
                    <span>FOR FRESHMAN PROSPECTIVES</span>
                </div>

                <p class='body-2-prospectives'>
                    We'd like to invite you to our <strong>overnight stay program</strong>!
                    <br /><br />
                    OSP, or the overnight stay program, is hosted by the Regents Scholar Society during the first two weekends of April. At our program, you'll be able to:
                </p>

                <div class='body-3-prospectives'>
                    <div class="blue-padding">
                        <ul>
                            <li>Meet new people &mdash; some who will become close friends!</li>
                            <li>Explore Westwood &mdash; UCLA's adjacent college town.</li>
                            <li>Have a taste of what it's like to be a bruin &mdash; literally! You'll be eating at UCLA's #1 ranked dining halls.</li>
                            <li>Shadow classes and see what college lectures are like.</li>
                            <li>Talk to current students and see what we do!</li>
                            <li>Truly get a feel for what UCLA is like &mdash; and whether this school is the right fit for you.</li>
                        </ul>
                    </div>
                </div>

                <p class='body-2-prospectives'>
                    <br /><br />
                    Interested? We hope you are! Learn more about what you'll do, who you'll meet, and how to sign up for each session below. For more information, reach out to the Rebecca Zhu at outreach@rssla.org.
                </p>

                <div class="body-3-prospectives">
                    <div class="capital-heading">
                        DATES AND ITINERARIES
                    </div>

                    <div class="blue-padding dates-itinerary">
                        <div><span class="left-float">OSP Session 1: April XX, 2020</span>
                            <span class="nobreak right-float">
                                <button class="button-1">Itinerary</button>
                                <button class="button-1">Sign&nbsp;Up!</button>
                                <button class="button-1">Waiver</button>
                            </span>
                            <br />
                        </div>
                        <br />
                        <div><span class="left-float">OSP Session 2: April XX, 2020</span>
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

                </div>
            </div>

            <br /><br /><br /><br /><br /><br />

            <div class="transfer-prospectives">
                <div class="freshman-transfer-header">
                    <span>FOR TRANSFER PROSPECTIVES</span>
                </div>

                <p class='body-2-prospectives'>
                    We'd love to invite you to our Transfer Welcome Reception on Saturday, May 11th! During this event, you'll have the opportunity to:
                </p>

                <div class='body-3-prospectives'>
                    <div class="blue-padding">
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
                    <br /><br /><br /><br />
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
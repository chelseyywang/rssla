import React from 'react';
//import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './About.css';
//import Footer from '../components/Footer/Footer';
import blueprint from './pictures/blueprint logo.png';
import nextstep from './pictures/nextstep-footer.png';
import kaplan from './pictures/kaplan.png';
//import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import AboutCarousel from './AboutCarousel'

function About() {
    return (
        <header>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <div class='body-1-wrapper'>
                <div class='body-1-title'>RSSLA</div>
                <div class='body-1-title-caption'>Regents Scholar Society at UCLA<br /><br /></div>
                <div class='body-1-text'>
                    Members of the Regents Scholar Society are the top 1.5% of UCLA undergraduate applicants each year.
                    We're smart, we're dedicated, and we're passionate. More than that, we believe what we do speaks for itself.
                </div>
                <div class='button-wrap'>
                    <button class='body-1-button' onclick="window.location.href = '/programs';"> Learn More</button>
                </div>
            </div>


            <div class='page-wrapper'>
                <div class='body-2-wrapper'>
                    <div class='aboutcarousel'>
                        <AboutCarousel />
                    </div>

                    <div class='body-2-title-wrap'>
                        <div class='body-2-title'><strong>INTRODUCING RSS</strong></div>
                    </div>
                    <div class='body-2-text-2'>
                        The Regents Scholar Society is composed of students with different identities, interests, and passions.
                        Whether north campus or south campus, pre-med or business, scientists or artists,
                            the society transcends these divisions through our shared commitment to scholarship, leadership, and service. <br /><br />
                            We strive to support our members and the local community through our various internal and external programs,
                            including service events, leadership opportunities, and the Los Angeles Mentorship Program.
                            </div>
                </div>

                <div class='body-3'>
                    <div class='body-3-wrap'>
                        <div class="body-3-title">
                            THE THREE PILLARS </div>
                        <div class='pillar-wrap'>
                            <div class='pillar'>
                                <div class='pillar-text-1'>Scholarship</div>
                                <div class='pillar-text-2'>Members of the Regents Scholar Society exemplify academic excellence, both in and out of the classroom.  </div>
                            </div>
                            <div class='pillar'>
                                <div class='pillar-text-1'>Service</div>
                                <div class='pillar-text-2'>The Regents Scholar Society dedicates itself to improving the local community. We participate in beach clean-ups, tutoring through the Los Angeles Mentorship Program, and outreach.</div>
                            </div>
                            <div class='pillar'>
                                <div class='pillar-text-1'>Leadership</div>
                                <div class='pillar-text-2'>Members of the Regents Scholar Society work as driven leaders, both within campus organizations and in the local, state, and national  community.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='sponsors'>
                    <div class='sponsors-title'><strong>SPONSORS</strong></div>
                    <div class='sponsor-row'>
                        <div class='sponsor-column'>
                            <img src={blueprint} alt='Blueprint LSAT Tutoring' class='img-sponsor' />
                        </div>
                        <div class='sponsor-column'>
                            <img src={nextstep} alt='NextStep MCAT Tutoring' class='img-sponsor' />
                        </div>
                        <div class='sponsor-column'>
                            <img src={kaplan} alt='Kaplan Test Prep' class='img-sponsor' />
                        </div>
                    </div>
                </div>
            </div >
        </header>
    );
}

export default About;

import React, { Component, Fragment } from 'react';
import './Programs.css';
import LAMP_logo from './dependent/lamp_logo.svg';
import mentor_pic from './dependent/mentor.png';
import book_pic from './dependent/book.png';
import SPIEL_pic from './dependent/SPIEL.jpg'
import ucla from './dependent/ucla.png';

import committee_pic from './dependent/committee_pic.png';

import meals_on_wheels from './dependent/meals_on_wheels_LA.jpg';
import heal_the_bay from './dependent/healthebay.png';


import ProgramCarousel from './ProgramCarousel';

class Programs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    resize(size) {
        var circle = document.getElementById('theCircleDiv'),
            text = document.getElementById('theText');
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
        circle.style.borderRadius = (size / 2) + 'px';

        text.style.lineHeight = size + 'px';
    }

    render() {
        return (
            <React.Fragment>
           
                <div class='what-do-we-do'>
                    <div class='what-do-we-do-title'>What do we do?</div>
                    <div class='what-do-we-do-body'>
                        The Regents Scholar Society hosts multiple events through the year.
                        Some connect our members to resources, while others strive to engage the broader UCLA and local community.
                </div>
                </div>
                
                <div id="program-list">
                   

                        <div class='subheading'>
                            <span>
                            INTERNAL PROGRAMS
                            </span>
                        </div>

                        <ProgramCarousel/>

                    <div id="body-container">


                        <div id="title">
                            Los Angeles Mentorship Program (L.A.M.P.)
                    </div>
                        <img id="left" src={LAMP_logo} width="350" height="350" />
                        <div id="text-LAMP">
                            <p1>
                                The Los Angeles Mentorship Program (LAMP) provides UCLA students the opportunity to give back to the local
                                community through tutoring at University High School. This program aims to provide resources to underserved
                                youth - giving them access to SAT and ACT preparation along with workshops regarding financial literacy,
                                college applications, and more.
                            <br></br>
                                <br></br>
                                Students interested in tutoring and volunteering through LAMP are not required
                                nor expected to have previous experience, although strong interpersonal and communication skills are required
                                to succeed in the role.
                            </p1>
                        </div>
                        

                    </div>
                    <div id="body-container">
                        <div id="title">
                            STUDENTS PRESENTING, INNOVATING, ENTERTAINING, LEARNING (S.P.I.E.L.)
                    </div>
                        <div id="text-SPIEL">
                            <p1>
                                SPIEL stands for Students Presenting, Innovating, Entertaining and Learning. Inspired by TED Talks,
                                this campus-wide speaker event is put on by students, for students. The aim of SPIEL is to give students from
                                all backgrounds the chance to talk about something that is not only important to the presenters themselves,
                                but is also often important to the greater UCLA and global community.
                            <br></br>
                                <br></br>
                                In the past, SPIEL presenters have addressed a variety of topics, ranging from mental health to ground-breaking student research.
                        </p1>
                        </div>
                    </div>
                    <div id="body-container">
                        <div id="title">
                            Service
                    </div>
                    
                        <img className="service_img_big" src={ucla} width="350" height="350" />
                        <div id="text-SERVICE">
                            <p1>
                                Through partnerships with Heal the Bay and Meals on Wheels, the Regents Scholar Society hosts periodic service events throughout the year.
                                Stay tuned on our Facebook group to get involved!
                            </p1> 
                        </div>
                        <img className="service_img_small" src={heal_the_bay} width="350" height="350" />
                        <img className="service_img_small" src={meals_on_wheels} width="350" height="350" />   

                    </div>
                    <div class='subheading'>
                        <span>EXTERNAL PROGRAMS</span>
                    </div>
                    <div id="body-container">
                        <div id="title">
                            Mentorship Information
                    </div>
                        <img id="left" src={mentor_pic} width="350" height="350" />
                        <div id="text-MENTORSHIP">
                            <p1>
                                Our peer mentors are upperclassmen who have recently been in the shoes of our new RSSers and want to give back by helping them learn the ropes of UCLA!
                        <br></br><br></br>
                                Our alumni mentors are graduated RSSers who have broken through their industries and can provide professional advice to aspiring professionals.
                        <br></br><br></br>
                                Finally, our faculty mentorship program pairs RSSers and faculty members to cultivate relationships and help members learn more about their passions and fields of study.
                        </p1>
                        </div>
                    </div>

                    <div id="body-container">
                        <div id="title">
                            Education Resource
                    </div>
                        <img id="right" src={book_pic} width="350" height="350" />

                        <div id="text-SPIEL">
                            <p1>
                                We want our Regents Scholars to grow, to succeed, and to thrive. Thus, we offer a variety of different resources for our members to take advantage of! Whether it be resume reviews,
                                information sessions, workshops, or course planning events - we aim to ensure that each RSS member has the resources they need to succeed.
                        </p1>
                        </div>

                    </div>


                    <div id="container-committee">
                        <div id="title">
                            Committees
                    </div>
                        <div id="text-committee">
                            <p1>
                                Through our committees, you can engage with the society, develop leadership skills, and utilize all of our resources! Applications open every fall quarter.
                        </p1>
                        </div>

                        <div id="committee">
                            <div id="title">
                                2019-2020 Committees
                            </div>
                            <div id="committee-text">
                                <ul class="committee">
                                    <li>A.C.E. (Activity, Community Service, Education Program</li>
                                    <li>Special Events</li>
                                    <li>Funding</li>
                                    <li>Website</li>
                                    <li>Los Angeles Mentorship Program (LAMP)</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            
            </React.Fragment>
        );
    }

}

export default Programs;


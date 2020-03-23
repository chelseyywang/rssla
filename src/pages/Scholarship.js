import React from 'react';
import Collapsible from 'react-collapsible';
import './Scholarship.css';

export class Scholarship extends React.Component {
    render() {
        return (
            <div id="scholarship">
                <div class="capital-heading2"><span>ABOUT THE SCHOLARSHIP</span></div>
                <Collapsible trigger="Benefits of the Scholarship">
                    <div id="benefits">
                        <p>
                            The Regents Scholarship is awarded to up to 100 incoming freshmen and transfer students. Alongside membership in the
                            Regents Scholar Society, all Regents Scholars receive:
                            <br />
                            <ul>
                                <li><strong>A $2,000 honorarium,</strong> awarded quarterly for four years (or two years for transfers).</li>
                                <li>University scholarships or grants to cover the student's financial need.</li>
                            </ul>
                            <br />
                            Alongside the scholarship's financial benefits, scholarship recipients are guaranteed: <br />
                            <ul>
                                <li>Priority enrollment in 13 class units, starting in their first winter quarter.</li>
                                <li>Four years of university housing upon submission of the Housing application.</li>
                                <li>A parking pass upon submission of the Parking application.</li>
                                <li>A peer, alumni, and faculty mentor, should you apply for one.</li>
                                <li>Leadership opportunities within the Regents Scholar Society</li>
                            </ul>

                            {/** 
                            As a Regents Scholar, you will have the ability to enroll in 13 units before most other student on campus (besides other priority passers) starting your first winter quarter. Most UCLA pre-requisite courses are 4-unit courses, and many general education courses are 5-units. With 13 priority units, you are able to get 3 of your classes before other students. 
                            <br/><br/>With priority enrollment, many of our scholars are able to complete their degrees in 3 years if they choose to. Along with that, due to their access to core curriculum classes, many of our scholars are able to complete double majors, triple majors, one major with two minors, etc. 
                            */}
                            <br />
                        </p>
                    </div>
                </Collapsible>
                <Collapsible trigger="FAQ" id="collapsible-faq">
                    <div class="faq">  
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
                </Collapsible>
            </div>
        );
    }
}

export default Scholarship;
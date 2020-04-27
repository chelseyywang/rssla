import React from 'react';
import Collapsible from 'react-collapsible';
import './TWR_coords.css';
import baktash from './pictures/baktash.PNG';
import hector from './pictures/hector.PNG';
import justine from './pictures/justine.PNG';
import liz from './pictures/liz.PNG';

export class TWR_coords extends React.Component {

    render() {
        return (
            <div>
                <Collapsible trigger="BAKTASH OLOMI">
                    <br />
                    <div id='TWR_coord-background'>
                        <div class='TWR_coord'>
                            <div id='TWR_coord-picture'><img src={baktash} alt='Baktash' /></div>
                        </div>
                        <div class='TWR_coord'>
                            <div class='TWR_coord-bio'>Baktash Olomi is currently a third-year pre-law Sociology Major who transferred in from San Diego Mesa College. Baktash identifies as a first-generation Afghan-American with aspirations
                            of pursuing a career in civil rights and advocacy. He is currently involved with the Pre-Law
                            Transfer Society, Muslim Student Association, United Afghan Club, and is currently exploring
                            research opportunities and law internships.</div>
                        </div>
                    </div>

                </Collapsible>

                <Collapsible trigger="H&Eacute;CTOR OSORIO">
                    <br />
                    <div id='TWR_coord-background'>
                        <div class='TWR_coord'>
                            <div id='TWR_coord-picture'><img src={hector} alt='Hector' /></div>
                        </div>
                        <div class='TWR_coord'>
                            <div class='TWR_coord-bio'>Héctor Osorio is a Senior Transfer who is a Sociology Major and Public Affairs Minor. He has
                            participated in different research programs: URFP (UCLA), National Science Foundation (NSF)
                            REU in North Carolina, and whose research focuses on the intersectionality of housing,
                            healthcare, and food security in historically marginalized communities in Charlotte. Héctor is
                            also a founding board member for the Association of First-Generation Undergraduates (AFGU),
                            relaunched Roosevelt@UCLA, and on behalf of the UCLA Honors College has awarded
$100,000 to three local nonprofits that focus on social problems in LA neighborhoods.</div>
                        </div>
                    </div>

                </Collapsible>

                <Collapsible trigger="JUSTINE RAMOS">
                    <br />
                    <div id='TWR_coord-background'>
                        <div class='TWR_coord'>
                            <div id='TWR_coord-picture'><img src={justine} alt='Justine' /></div>
                        </div>
                        <div class='TWR_coord'>
                            <div class='TWR_coord-bio'>Justine Ramos is a fourth-year English and Human Biology &amp; Society major and Global Health
                            minor. She is a speaker recruiter for SPIEL, an Alumni Scholar, the founding President of SLAM
                            uniVERSE @ UCLA and the co-founder of Think Global @ UCLA. Justine is an aspiring
                            Occupational Therapist interested in the intersection of creativity and rehabilitative health.
                            Currently, Justine is a research assistant at David Geffen School of Medicine and the Bedari
                            Kindness institute as well as an Occupational Therapy Aide at the Children’s Hospital Los Angeles.</div>
                        </div>
                    </div>

                </Collapsible>

                <Collapsible trigger="LIZ HARTWELL">
                    <br />
                    <div id='TWR_coord-background'>
                        <div class='TWR_coord'>
                            <div id='TWR_coord-picture'><img src={liz} alt='Liz' /></div>
                        </div>
                        <div class='TWR_coord'>
                            <div class='TWR_coord-bio'>Liz Hartwell transferred from Citrus College and Mt. Sac. She is a political science major
                            currently interning at the office of U.S. Senator Kamala Harris as she strives to be a U.S.
                            Senator, herself. She is a Regents, Lambda, and Alumni Scholar, serving on the Scholar
                            Relations Committee. She enjoys rock climbing at Wooden and watching movies with her roommates.</div>
                        </div>
                    </div>

                </Collapsible>
            </div>



        );
    };
};
export default TWR_coords;



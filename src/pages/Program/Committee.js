import React from 'react';
import Collapsible from 'react-collapsible';
import './Programs.css';
import './Committee.css';
import family_christmas from '../pictures/2019_family_christmas_(2).jpg'
import alumni_mixer from '../pictures/2018_Alumni_Mixer_2.jpg'

export class Committee extends React.Component {
    render() {
        return (
            <div>
                <Collapsible trigger="A.C.E.">
                    <div class="description">
                        <img class='committee-image' src={family_christmas} />
                        <div class='image-caption'>The 2019 All Family Holiday Extravaganza, planned by A.C.E.'s very own Anusha!</div>
                        <p>
                            The A.C.E. committee helps plan fun and afforable social activities,
                            arranges community service opportunities, and fosters engagement and bonding between members of the society.
                            In the past, the A.C.E. committee has put on events like: </p>
                        <ul>
                            <li>All-Family Holiday Extravaganza</li>
                            <li>Beach cleanups</li>
                            <li>Hiking trips</li>
                            <li>Broomball and ice skating</li>
                        </ul>
                        <br />
                        <p><strong>The A.C.E. committee is led by:</strong></p>
                        <ul>
                            <li>Donya Masdeyasnan (EPD), Pranit Kumaran and Chelsey Wang (Activities), Andrew Kang (CSD)</li>
                        </ul>
                        <p><strong>Members:</strong></p>
                        <ul>
                            <li>Zack Pakin, Joy Lee, Anusha Fatehpuria, Brenda Soun, Mylani Sonico, Quincey Kawahara, Christian Aguilar, and Mason Seden-Hansen</li>
                        </ul>
                    </div>
                </Collapsible>

                <Collapsible trigger="Special Events">
                <div class="description">

                <img class='committee-image' src={alumni_mixer} />
                        <div class='image-caption'>The 2019 alumni mixer, planned by the 2018-2019 Special Events committee!</div>
                        <p>
                            The Special Events commitee plans the Society's large-scale events, such as
                            S.P.I.E.L. and winter retreat. In addition, they advocate for the needs of all members, from first to fourth years, transfers, and non-traditional students.<br /><br/>
                            <p><strong>The Special Events committee is led by:</strong></p>
                            <ul>
                                <li>Alex Soohoo (EVP) and Kajal Maran (IVP)</li>
                            </ul>
                            <p><strong>Members:</strong></p>
                            <ul>
                                <li>Angela Lu, Ishaan Gill, Paymon Haddad, Derrick Chau, Tina Huang, Pearl Doan, Carlie Lin, Abhinav Vempati, Jeffrey Chen, Oladapo Sangokoya, Anais Hernandez, and Jocelyn Tzeng</li>
                            </ul>
                            </p>
                        </div>
                </Collapsible>

                    <Collapsible trigger="Funding">
                        <div class="description">
                            <p>
                                The Funding Committee runs all of RSS's fundraisers and serves as liaisons between RSS
                                and corporate sponsors.
                            
                            <br /><br/>
                            <p><strong>The Funding committee is led by:</strong></p>
                            <ul>
                                <li>Aditya Guru (CRD) and Jason Liu (Treasurer)</li>
                            </ul>
                            <p><strong>Members:</strong></p>
                            <ul>
                                <li>Juan Gonzalez, Bilal Hamid, Kayla Thorgusen, Christopher Loekman, and Jaslyn Brar</li>
                            </ul>
                            </p>
                        </div>
                    </Collapsible>

                    <Collapsible trigger="L.A.M.P.">
                        <div class="description">
                            <p>
                                The L.A.M.P. (Los Angeles Mentorship Program) committee works to provide subject
                                tutoring for University High School students. They've worked on SAT/AP prep courses and long-term mentorship.
                            </p>
                            
                            <br />
                            <p><strong>The L.A.M.P. committee is led by:</strong></p>
                            <ul>
                                <li>Maggie Bui (LAMP)</li>
                            </ul>
                            {/*<p><strong>Members:</strong></p>
                            <ul>
                                <li>Zack Pakin, Aaminah Choudry, Valeria Garcia, Joy Lee, Anusha Fatehpuria, Brenda Soun, Mylani Sonico, Quincey Kawahara, Christian Aguilar, and Mason Seden-Hansen</li>
                            </ul>
                            */}
                        </div>
                    </Collapsible>

                    <Collapsible trigger="Website">
                        <div class="description">
                            <p>
                                The Website committee works to maintain and improve the RSS website and to facilitate communication between the society and its members.
                        <br /></p>
                            <p><strong>The Website committee is led by:</strong></p>
                            <ul>
                                <li>James Yoon (Comm) and Nilla Sivakumar (Secretary)</li>
                            </ul>
                            <p><strong>Members:</strong></p>
                            <ul>
                                <li>Tiffany Trinh, Chelsey Wang, Solomon Lo, Ray Huang, Danny Choi, Rishi Sankar</li>
                            </ul>
                        </div>
                    </Collapsible>
            </div>
        );
    }
}

export default Committee;
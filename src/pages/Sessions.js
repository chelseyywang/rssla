import React from 'react';
import Collapsible from 'react-collapsible';
import './Sessions.css';
import OSP1 from './pictures/OSP_2020/OSP1_coords_1.png';
import OSP1_2 from './pictures/OSP_2020/OSP1_coords_2.png';
import OSP1_contact from './pictures/OSP_2020/OSP1_contact.png';
import OSP2 from './pictures/OSP_2020/OSP2_coords_1.png';
import OSP2_2 from './pictures/OSP_2020/OSP2_coords_2.png';
import OSP2_contact from './pictures/OSP_2020/OSP2_contact.png';
import OSP3 from './pictures/OSP_2020/OSP3_coords_1.png';
import OSP3_2 from './pictures/OSP_2020/OSP3_coords_2.png';
import OSP3_contact from './pictures/OSP_2020/OSP3_contact.png';
import OSP4 from './pictures/OSP_2020/OSP4_coords_1.png';
import OSP4_2 from './pictures/OSP_2020/OSP4_coords_2.png';
import OSP4_contact from './pictures/OSP_2020/OSP4_contact.png';

export class Sessions extends React.Component{

    render() {
        return (
            <div>

                <Collapsible trigger=" OSP 1 COORDINATORS ">
                    <br/>
                    <div id ='coord-background'>
                        <div class='coord'>
                            <img src={OSP1} alt='OSP 1 coordinators' />
                        </div>
                        <div class='coord'>
                            <img src={OSP1_2} alt='OSP 1 coordinators' />
                        </div>
                        <div class='coord'>
                            <img src={OSP1_contact} alt='OSP 1 contact information'/>
                        </div>
                        </div>
                </Collapsible>

                <Collapsible trigger=" OSP 2 COORDINATORS">
                    <br/>
                    <div id ='coord-background'>

                        <div class='coord'>
                            <img src={OSP2} alt='OSP 2 coordinators' />
                        </div>
                        <div class='coord'>
                            <img src={OSP2_2} alt='OSP 2 coordinators' />
                        </div>
                        <div class='coord'>
                            <img src={OSP2_contact} alt='OSP 1 contact information'/>
                        </div>
                        </div>

                </Collapsible>
                <Collapsible trigger=" OSP 3 COORDINATORS">
                    <br/>
                    <div id ='coord-background'>

                        <div class='coord'>
                            <img src={OSP3} alt='OSP 3 coordinators' />
                        </div>
                        <div class='coord'>
                            <img src={OSP3_2} alt='OSP 3 coordinators' />
                        </div>
                        <div class='coord'>
                            <img src={OSP3_contact} alt='OSP 1 contact information'/>
                        </div>
                        </div>

                </Collapsible>
                <Collapsible trigger=" OSP 4 COORDINATORS">
                    <br/>
                    <div id ='coord-background'>

                        <div class='coord'>
                            <img src={OSP4} alt='OSP 4 coordinators' />
                        </div>
                        <div class='coord'>
                            <img src={OSP4_2} alt='OSP 4 coordinators' />
                        </div>
                        <div class='coord'>
                            <img src={OSP4_contact} alt='OSP 1 contact information'/>
                        </div>
                        </div>
                </Collapsible>
            </div>


        );
    };
};
export default Sessions;



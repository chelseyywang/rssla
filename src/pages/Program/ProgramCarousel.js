import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './ProgramCarousel.css'

import pic1 from '../pictures/2017_Beach_Cleanup.JPG';
import pic2 from '../pictures/2018_Beach_Cleanup_(2).jpg';


class ProgramCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src = {pic1} alt="Beach Cleanup, 2017"/>
                    <p className="legend">2017 Beach Cleanup</p>
                </div>
                <div>
                    <img src = {pic2} alt="Beach Cleanup, 2018"/>
                    <p className="legend">2018 Beach Cleanup</p>
                </div>

            </Carousel>
        );
    }
}

export default ProgramCarousel
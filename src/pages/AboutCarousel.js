import React, { Component, Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './AboutCarousel.css'

import pic1 from './pictures/2019_Conference.jpg';
import pic2 from './pictures/2018_Kayaking_2.JPG';
import pic3 from './pictures/2018_DinnerwiththeDean.jpg';
import pic4 from './pictures/2017_SD.jpg'


class AboutCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src = {pic1}/>
                    <p className="legend">inter-uc conference at ucsb, 2019</p>
                </div>
                <div>
                    <img src = {pic2} />
                    <p className="legend">kayaking at marina del rey, 2018</p>
                </div>
                <div>
                    <img src = {pic3} />
                    <p className="legend">dinner with the dean, 2018</p>
                </div>
                <div>
                    <img src = {pic4} />
                    <p className="legend">inter-uc event at the san diego zoo, 2017</p>
                </div>

            </Carousel>
        );
    }
}

export default AboutCarousel
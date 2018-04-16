import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';

import exampleImg from '../img/amenidades2.jpg';
import exampleImg2 from '../img/amenidades1.jpg';
import exampleImg3 from '../img/amenidades3.jpg';

export default class Ammenities extends Component {
    render(){
        return(
            <secrtion className="Ammenities">
                <div className="Ammenities-left">
                    <h2 className="Ammenities-title">Amenidades</h2>
                    <p className="Ammenities-text">Wise Living cuenta con amenidades de primer nivel:</p>
                    <ul className="Ammenities-list">
                        <li>Seguridad 24/7</li>
                        <li>Bodega</li>
                        <li>Gimnasio con vapor</li>
                        <li>Cancha de pádel</li>
                    </ul>
                </div>
                <div className="Ammenities-right">
                    <Carousel showArrows={false} showStatus={false} showThumbs={false}>
                        <div className="Carousel-single">
                            <img src={exampleImg} alt=""/>
                        </div>
                        <div className="Carousel-single">
                            <img src={exampleImg2} alt=""/>
                        </div>
                        <div className="Carousel-single">
                            <img src={exampleImg3} alt=""/>
                        </div>
                    </Carousel>
                </div>
            </secrtion>
        );
    }
}

import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';

import exampleImg from '../img/amenities/amenidades1-squashed.jpg';
import exampleImg2 from '../img/amenities/amenidades2-squashed.jpg';
import exampleImg3 from '../img/amenities/amenidades3-squashed.jpg';
import exampleImg4 from '../img/amenities/amenidades4-squashed.jpg';
import exampleImg5 from '../img/amenities/amenidades5-squashed.jpg';

export default class Ammenities extends Component {
    render(){
        return(
            <section className="Ammenities">
                <div className="Ammenities-left">
                    <h2 className="Ammenities-title">Amenidades</h2>
                    <p className="Ammenities-text">Wise Living cuenta con amenidades de primer nivel:</p>
                    <ul className="Ammenities-list">
                        <li>Gimnasio completamente equipado</li>
                        <li>Baño con vapor</li>
                        <li>Cancha de pádel</li>
                        <li>Juegos infantiles</li>
                        <li>Asadores</li>
                        <li>Alberca con chapoteadero</li>
                    </ul>
                </div>
                <div className="Ammenities-right">
                    <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} interval={5000} infiniteLoop={true}>
                        <div className="Carousel-single">
                            <img src={exampleImg} alt=""/>
                        </div>
                        <div className="Carousel-single">
                            <img src={exampleImg2} alt=""/>
                        </div>
                        <div className="Carousel-single">
                            <img src={exampleImg3} alt=""/>
                        </div>
                        <div className="Carousel-single">
                            <img src={exampleImg4} alt=""/>
                        </div>
                        <div className="Carousel-single">
                            <img src={exampleImg5} alt=""/>
                        </div>
                    </Carousel>
                </div>
            </section>
        );
    }
}

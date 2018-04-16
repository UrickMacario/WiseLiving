import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';

import twoRoomsImg from '../img/2_recamaras.png';
import threeRoomsImg from '../img/3_recamaras.png';
import exampleImg from '../img/galeria.jpg';

export default class Apartments extends Component {
    render(){
        return(
            <section className="Apartments">
                <h2 className="Apartments-title">
                    <span className="Apartments-title-highlight">Departamentos</span><span className="Apartments-title-normal">Wise Living cuenta con dos tipos de departamentos en venta:</span>
                </h2>
                <div className="Apartments-single">
                    <ul className="Apartments-single-details">
                        <li><span className="Apartments-single-details-highlight">2 recámaras</span>, 2.0 baños, estancia, cuarto de servicio y bodega. (170 m<sup>2</sup>)</li>
                    </ul>
                    <div className="Apartments-single-views">
                        <div className="Apartments-single-views-left">
                            <img src={twoRoomsImg} alt=""/>
                        </div>
                        <div className="Apartments-single-views-right">
                        <Carousel showArrows={false} showStatus={false} showThumbs={false}>
                            <div className="Carousel-single">
                                <img src={exampleImg} alt=""/>
                            </div>
                            <div className="Carousel-single">
                                <img src={exampleImg} alt=""/>
                            </div>
                            <div className="Carousel-single">
                                <img src={exampleImg} alt=""/>
                            </div>
                        </Carousel>
                        </div>
                    </div>
                </div>
                <div className="Apartments-single">
                    <ul className="Apartments-single-details">
                        <li><span className="Apartments-single-details-highlight">3 recámaras</span>, 2.5 baños, estancia, cuarto de servicio y bodega. (224 m<sup>2</sup>)</li>
                    </ul>
                    <div className="Apartments-single-views Apartments-single-views--reverse">
                        <div className="Apartments-single-views-left">
                            <img src={threeRoomsImg} alt=""/>
                        </div>
                        <div className="Apartments-single-views-right">
                        <Carousel showArrows={false} showStatus={false} showThumbs={false}>
                            <div className="Carousel-single">
                                <img src={exampleImg} alt=""/>
                            </div>
                            <div className="Carousel-single">
                                <img src={exampleImg} alt=""/>
                            </div>
                            <div className="Carousel-single">
                                <img src={exampleImg} alt=""/>
                            </div>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
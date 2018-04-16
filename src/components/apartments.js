import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';

import twoRoomsImg from '../img/departamento_de_2_recamaras.png';
import threeRoomsImg from '../img/departamento_de_3_recamaras.png';
import exampleImg from '../img/departamento_2recamaras_galeria.jpg';
import exampleImg2 from '../img/departamento_2recamaras_galeria2.jpg';
import exampleImg3 from '../img/departamento_2recamaras_galeria3.jpg';
import exampleImg4 from '../img/departamento_2recamaras_galeria4.jpg';
import exampleImg5 from '../img/departamento_3recamaras_galeria1.jpg';
import exampleImg6 from '../img/departamento_3recamaras_galeria2.jpg';
import exampleImg7 from '../img/departamento_3recamaras_galeria3.jpg';
import exampleImg8 from '../img/departamento_3recamaras_galeria4.jpg';
import exampleImg9 from '../img/departamento_3recamaras_galeria5.jpg';


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
                                <img src={exampleImg2} alt=""/>
                            </div>
                            <div className="Carousel-single">
                                <img src={exampleImg3} alt=""/>
                            </div>
                            <div className="Carousel-single">
                                <img src={exampleImg4} alt=""/>
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
                                <img src={exampleImg7} alt=""/>
                            </div>
                            <div className="Carousel-single">
                                <img src={exampleImg6} alt=""/>
                            </div>
                            <div className="Carousel-single">
                                <img src={exampleImg5} alt=""/>
                            </div>
                            <div className="Carousel-single">
                                <img src={exampleImg8} alt=""/>
                            </div>
                            <div className="Carousel-single">
                                <img src={exampleImg9} alt=""/>
                            </div>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

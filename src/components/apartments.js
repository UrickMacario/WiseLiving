import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';

import twoRoomsImg from '../img/departamento_de_2_recamaras.png';
import threeRoomsImg from '../img/departamento_de_3_recamaras.png';
import exampleImg from '../img/2rooms/departamento_2recamaras_galeria2_643e4d6c04ea0fc81a5f35dc0e7c82ac-squashed.jpg';
import exampleImg2 from '../img/2rooms/departamento_2recamaras_galeria3_2c371c5fa956316916e53ef0c6284171-squashed.jpg';
import exampleImg3 from '../img/2rooms/departamento_2recamaras_galeria4_fe5c1b9581e585f29d91a794fb8b8dc9-squashed.jpg';
import exampleImg4 from '../img/2rooms/departamento_2recamaras_galeria_e14ea61082111b6e15b7cbd5ae9c7303-squashed.jpg';
import exampleImg5 from '../img/3rooms/departamento_3recamaras_galeria1_dbe816d7b14c91f23c3c50113434df42-squashed.jpg';
import exampleImg6 from '../img/3rooms/departamento_3recamaras_galeria2_53c859d799b5a651e606c6be509d522d-squashed.jpg';
import exampleImg7 from '../img/3rooms/departamento_3recamaras_galeria3_055e5d9f8d7cca4ef371168db7c623b2-squashed.jpg';
import exampleImg8 from '../img/3rooms/departamento_3recamaras_galeria4_81afbb133b4b528baeda1a76e16c47df-squashed.jpg';
import exampleImg9 from '../img/3rooms/departamento_3recamaras_galeria5_2514a83f4e3aa5c159d3212831245dda-squashed.jpg';


export default class Apartments extends Component {
    render(){
        return(
            <section className="Apartments" data-section="apartments">
                <h2 className="Apartments-title">
                    <span className="Apartments-title-highlight">Departamentos</span><span className="Apartments-title-normal">La Torre A de Wise Living Cañada cuenta con dos tipos de departamentos disponibles para venta:</span>
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
                        <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
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
                        <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
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

import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import $ from 'jquery';

import exampleImg from '../img/Wise Living Cañada.jpg';
import exampleImg2 from '../img/Wise Living Juriquilla.jpg';
import exampleImg3 from '../img/departamentosWiseLiving.jpg';

export default class MainBanner extends Component {

    onScrollToContact(){
        const target = $('[data-section=contact]');
        const distance = target.offset().top;

        $('html,body').animate({
            scrollTop: distance
        }, 1500);
    }

    render(){
        return(
            <div className={this.props.reference}>
                <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} interval={5000} infiniteLoop={true}>
                    <div className="Carousel-single">
                        <img src={exampleImg2} alt=""/>
                        <p className="legend">Un concepto de vida integral en un espacio vanguardista.</p>
                    </div>
                    <div className="Carousel-single">
                        <img src={exampleImg} alt=""/>
                        <p className="legend">Un concepto de vida integral en un espacio vanguardista.</p>
                    </div>
                    <div className="Carousel-single">
                        <img src={exampleImg3} alt=""/>
                        <p className="legend">Un concepto de vida integral en un espacio vanguardista.</p>
                    </div>
                </Carousel>
                <span onClick={this.onScrollToContact}>
                    <i className="fas fa-sort-down"></i>
                </span>
            </div>
        );
    }
}

MainBanner.propTypes = {
    reference: PropTypes.string
};

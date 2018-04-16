import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

import exampleImg from '../img/galeria.jpg';

export default class MainBanner extends Component {
    render(){
        return(
            <div className={this.props.reference}>
                <Carousel showArrows={false} showStatus={false} showThumbs={false}>
                    <div className="Carousel-single">
                        <img src={exampleImg} alt=""/>
                        <p className="legend">Legend</p>
                    </div>
                    <div className="Carousel-single">
                        <img src={exampleImg} alt=""/>
                        <p className="legend">Legend</p>
                    </div>
                    <div className="Carousel-single">
                        <img src={exampleImg} alt=""/>
                        <p className="legend">Legend</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

MainBanner.propTypes = {
    reference: PropTypes.string
};
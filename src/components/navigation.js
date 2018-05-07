import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import logo from '../img/logo.png';

export default class Navigation extends Component {

    onScrollToContact(){
        const target = $('[data-section=contact]');
        const distance = target.offset().top;

        $('html,body').animate({
            scrollTop: distance
        }, 1500);
    }

    render(){
        return(
            <nav className="Navigation">
                <Link to="/" className="Navigation-logo">
                    <img src={logo} alt="Wise Living Cañada"/>
                </Link>
                {/* TODO: Remove commented button once approved */}
                {/* <button className="Button Navigation-contact" onClick={this.onScrollToContact}>Contacto</button> */}
            </nav>
        );
    }
}

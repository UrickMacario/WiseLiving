import React, {Component} from 'react';
import $ from 'jquery';

import logo from '../img/logo.png';

export default class Navigation extends Component {

    onScrollToContact(e){
        const target = $('[data-section=contact]');
        const distance = target.offset().top;

        $('html,body').animate({
            scrollTop: distance
        }, 1500);
    }

    render(){
        return(
            <nav className="Navigation">
                <div className="Navigation-logo">
                    <img src={logo} alt="Wise Living Cañada"/>
                </div>
                <button className="Button Navigation-contact" onClick={this.onScrollToContact}>Contacto</button>
            </nav>
        );
    }
}

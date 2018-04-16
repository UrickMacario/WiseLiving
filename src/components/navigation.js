import React, {Component} from 'react';

import logo from '../img/logo.png';

export default class Navigation extends Component {
    render(){
        return(
            <nav className="Navigation">
                <div className="Navigation-logo">
                    <img src={logo} alt="Wise Living Cañada"/>
                </div>
                <button className="Button Navigation-contact">Contacto</button>
            </nav>
        );
    }
}

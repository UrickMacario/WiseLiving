import React, {Component} from 'react';

export default class Navigation extends Component {
    render(){
        return(
            <nav className="Navigation">
                <div className="Navigation-logo">
                    <img src='../img/logo.png' alt="Wise Living Cañada"/>
                </div>
                <button className="Button Navigation-contact">Contacto</button>
            </nav>
        );
    }
}

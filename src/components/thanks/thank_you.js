import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Navigation from '../navigation';

import exampleImg from '../../img/Wise Living Cañada 404.jpg';

export default class Thanks extends Component {
    render(){
        console.log(exampleImg);
        return(
            <section className="Thanks" style={{backgroundImage:`url('${exampleImg}')`}}>
                <Navigation />
                <div className="Thanks-content">
                    <p className="Thanks-text">¡Gracias por contactarnos!</p>
                    <p className="Thanks-text">En breve un asesor se pondrá en contacto contigo para ofrecerte una atención personalizada.</p>
                    <Link to="/" className="Button Thanks-back">Regresar</Link>
                </div>
            </section>
        );
    }
}
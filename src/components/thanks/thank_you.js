import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Navigation from '../navigation';
import Footer from '../footer';

import exampleImg from '../../img/Wise Living Cañada 404.jpg';

export default class Thanks extends Component {
    render(){
        console.log(exampleImg);
        return(
            <section className="Thanks" style={{backgroundImage:`url('${exampleImg}')`}}>
                <Navigation />
                <div className="Thanks-content">
                    <p className="Thanks-text">Gracias, en breve</p>
                    <p className="Thanks-text">te contactaremos.</p>
                    <Link to="/" className="Button Thanks-back">Regresar</Link>
                </div>
            </section>
        );
    }
}
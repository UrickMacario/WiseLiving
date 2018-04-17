import React, {Component} from 'react';

import Navigation from '../navigation';
import Footer from '../footer';

export default class Aviso extends Component {
    render(){
        return(
            <section className="Aviso">
                <Navigation />
                <div className="Aviso-text">
                    <h2 className="Aviso-title">Preguntas frecuentes / Aviso de Privacidad</h2>
                    <p className="Aviso-paragraph"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Doloribus, iusto. Tempora impedit molestias enim illo dolorem, laborum maxime exercitationem, ipsam cum sequi laboriosam eligendi, commodi corporis nulla ducimus. Quia, magnam.</p>
                    <p className="Aviso-paragraph"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iusto. Tempora impedit molestias enim illo dolorem, laborum maxime exercitationem, ipsam cum sequi laboriosam eligendi, commodi corporis nulla ducimus. Quia, magnam.</p>
                </div>
                <Footer />
            </section>
        );
    }
}
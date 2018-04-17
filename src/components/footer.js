import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render(){
        return(
            <section className="Footer">
                <h4 className="Footer-title">- Próximamente <span>Torre B</span> -</h4>
                <div className="Footer-info">
                    <div className="Footer-info-social">
                        <a href="https://www.facebook.com/wiselivingcanada/" className="Footer-info-social-single" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/wiselivingcanada/" className="Footer-info-social-single" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="tel:+524422946060" className="Footer-info-social-single" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone"></i></a>
                    </div>
                    <div className="Footer-info-info">
                    <a href="tel:+524422946060">(442) 294 6060</a>
                    <span>|</span>
                    <Link to="/aviso-de-privacidad">Aviso de privacidad</Link>
                    <span>|</span>
                    <Link to="/aviso-de-privacidad">Preguntas Frecuentes</Link>
                    </div>
                    <div className="Footer-info-mail">
                        <a href="mailto:contacto@wiseliving.com.mx">contacto@wiseliving.com.mx</a>
                    </div>
                </div>
            </section>
        );
    }
}
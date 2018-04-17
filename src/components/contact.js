import React, {Component} from 'react';

export default class Contact extends Component {
    
    onSubmitContact(e){
        e.preventDefault();
    }

    render(){
        return(
            <section className="Contact" data-section="contact">
                <h2 className="Contact-title">Me interesa conocer más de Wise Living, quiero que me contacte un asesor.</h2>
                <form action="#" className="Contact-form">
                    <div className="Contact-form-left">
                        <div className="Contact-form-select">
                            <label htmlFor="" className="Contact-form-label">Tipo de departamento</label>
                            <select  className="Contact-form-customSelect" name="tipo" id="">
                                <option value="2">2 recámaras</option>
                                <option value="3">3 recámaras</option>
                            </select>
                        </div>
                        <div className="Contact-form-select">
                            <label htmlFor="" className="Contact-form-label">¿Donde nos encontraste?</label>
                            <select className="Contact-form-customSelect" name="tipo" id="">
                                <option value="redes sociales">Redes sociales</option>
                                <option value="internet">Internet</option>
                                <option value="boca en boca">Boca en boca</option>
                                <option value="otros">Otros</option>
                            </select>
                        </div>
                    </div>
                    <div className="Contact-form-right">
                        <input type="text" className="Contact-form-input-base Contact-form-input-full" placeholder="Nombre completo"/>
                        <div className="Contact-form-inputGroup">
                            <input type="text" className="Contact-form-input-base Contact-form-input-small" placeholder="Teléfono"/>
                            <input type="text" className="Contact-form-input-base Contact-form-input-small" placeholder="Mail"/>
                        </div>
                        <textarea className="Contact-form-input-base Contact-form-input-textarea" name="" id="" placeholder="Mensaje"></textarea>
                        <button className="Button Contact-form-submit" onClick={this.onSubmitContact}>Enviar</button>
                    </div>
                </form>
            </section>
        );
    }
}
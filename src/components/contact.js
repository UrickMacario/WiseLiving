import React, {Component} from 'react';
import $ from 'jquery';

export default class Contact extends Component {
    
    onSubmitContact(e){
        e.preventDefault();
        const json = {};
        const form = document.querySelector('[data-form=contact]');
        const data = Array.prototype.slice.call(form.querySelectorAll('[data-input]'));

        const values = data.map( single => {
            const key = single.dataset.title;
            const value = single.value;

            json[key] = value;
        });

        $.post('/contact/send_contact.php', json, function(res){
            console.log(res);
        });
    }

    render(){
        return(
            <section className="Contact" data-section="contact">
                <h2 className="Contact-title">Me interesa conocer más de Wise Living, quiero que me contacte un asesor.</h2>
                <form action="#" className="Contact-form" data-form="contact">
                    <div className="Contact-form-left">
                        <div className="Contact-form-select">
                            <label htmlFor="" className="Contact-form-label">Tipo de departamento</label>
                            <select  className="Contact-form-customSelect" name="tipo" id="" data-input data-title="tipoDepartamentos">
                                <option value="2">2 recámaras</option>
                                <option value="3">3 recámaras</option>
                            </select>
                        </div>
                        <div className="Contact-form-select">
                            <label htmlFor="" className="Contact-form-label">¿Donde nos encontraste?</label>
                            <select className="Contact-form-customSelect" name="tipo" id="" data-input data-title="dondeEncontraste">
                                <option value="redes sociales">Redes sociales</option>
                                <option value="internet">Internet</option>
                                <option value="boca en boca">Boca en boca</option>
                                <option value="otros">Otros</option>
                            </select>
                        </div>
                    </div>
                    <div className="Contact-form-right">
                        <input type="text" className="Contact-form-input-base Contact-form-input-full" placeholder="Nombre completo" data-input data-title="nombre"/>
                        <div className="Contact-form-inputGroup">
                            <input type="text" className="Contact-form-input-base Contact-form-input-small" placeholder="Teléfono" data-input data-title="telefono"/>
                            <input type="text" className="Contact-form-input-base Contact-form-input-small" placeholder="Mail" data-input data-title="mail"/>
                        </div>
                        <textarea className="Contact-form-input-base Contact-form-input-textarea" name="" id="" placeholder="Mensaje" data-input data-title="mensaje"></textarea>
                        <button className="Button Contact-form-submit" onClick={this.onSubmitContact}>Enviar</button>
                    </div>
                </form>
            </section>
        );
    }
}
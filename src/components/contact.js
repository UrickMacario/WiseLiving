import React, {Component} from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class Contact extends Component {

    constructor(props){
        super(props);
        this.onSubmitContact = this.onSubmitContact.bind(this);
        this.onValueUpdate = this.onValueUpdate.bind(this);

        this.state = {
            tipoDepartamentos: '',
            dondeEncontraste: '',
            nombre: '',
            telefono: '',
            mail: '',
            mensaje: '',
        };
    }

    onValueUpdate(e){
        const value = e.target.value;
        const stateKey = e.target.dataset.title;

        document.querySelector('.Contact-form-submit').removeAttribute('disabled');

        if(stateKey === 'tipoDepartamentos'){
            this.setState({ tipoDepartamentos: value });
            if(!value){
                document.querySelector('[for=tipoDepartamentos]').classList.add('input-error');
            }else{
                document.querySelector('[for=tipoDepartamentos]').classList.remove('input-error');
            }
        }

        if(stateKey === 'dondeEncontraste'){
            this.setState({ dondeEncontraste: value });
            if(!value){
                document.querySelector('[for=dondeEncontraste]').classList.add('input-error');
            }else{
                document.querySelector('[for=dondeEncontraste]').classList.remove('input-error');
            }
        }

        if(stateKey === 'nombre'){
            this.setState({ nombre: value });
            if(!value){
                document.querySelector('[data-title=nombre]').classList.add('input-error');
            }else{
                document.querySelector('[data-title=nombre]').classList.remove('input-error');
            }
        }

        if(stateKey === 'telefono'){
            this.setState({ telefono: value });
            var isnum = /^\d+$/.test(value);
            if(!value || !isnum){
                document.querySelector('[data-title=telefono]').classList.add('input-error');
            }else{
                document.querySelector('[data-title=telefono]').classList.remove('input-error');
            }
        }

        if(stateKey === 'mail'){
            this.setState({ mail: value });
            if(!value || !value.includes('@') || !value.includes('.')){
                document.querySelector('[data-title=mail]').classList.add('input-error');
            }else{
                document.querySelector('[data-title=mail]').classList.remove('input-error');
            }
        }

        if(stateKey === 'mensaje'){
            this.setState({ mensaje: value });
            if(!value){
                document.querySelector('[data-title=mensaje]').classList.add('input-error');
            }else{
                document.querySelector('[data-title=mensaje]').classList.remove('input-error');
            }
        }
    }

    onSubmitCRM(json, history){
        $.post('/contact/insert.php', json, function(res){
            console.log(res);
        }).done(function(){
            history.push('/gracias');
        });
    }
    
    onSubmitContact(e){
        e.preventDefault();
        const history = this.props.history;
        const $this = this;
        const json = {
            tipoDepartamentos: this.state.tipoDepartamentos,
            dondeEncontraste: this.state.dondeEncontraste,
            nombre: this.state.nombre,
            telefono: this.state.telefono,
            mail: this.state.mail
        };

        const errors = document.querySelectorAll('.input-error');
        if(errors.length){
            document.querySelector('.Contact-form-submit').innerHTML = 'Algunos campos necesitan revisarse.';
            setTimeout( () => {
                document.querySelector('.Contact-form-submit').innerHTML = 'Enviar';
            }, 3000 );
            return;
        }


        $.post('/contact/send_contact.php', json, function(res){
            console.log(res);
        }).done(function(){
            $this.onSubmitCRM(json, history);
        });
    }

    render(){
        return(
            <section className="Contact" data-section="contact">
                <h2 className="Contact-title">Me interesa conocer más de Wise Living, quiero que me contacte un asesor.</h2>
                <form action="#" className="Contact-form" data-form="contact">
                    <div className="Contact-form-left">
                        <div className="Contact-form-select">
                            <label htmlFor="tipoDepartamentos" className="Contact-form-label">Tipo de departamento</label>
                            <select  className="Contact-form-customSelect" name="tipoDepartamentos" id="tipoDepartamentos" data-input data-title="tipoDepartamentos" onChange={this.onValueUpdate} value={this.state.tipoDepartamentos}>
                                <option value="2">2 recámaras</option>
                                <option value="3">3 recámaras</option>
                                <option value="">Selecciona una opción</option>
                            </select>
                        </div>
                        <div className="Contact-form-select">
                            <label htmlFor="dondeEncontraste" className="Contact-form-label">¿Donde nos encontraste?</label>
                            <select className="Contact-form-customSelect" name="dondeEncontraste" id="" data-input data-title="dondeEncontraste" onChange={this.onValueUpdate} value={this.state.dondeEncontraste}>
                                <option value="redes sociales">Redes sociales</option>
                                <option value="internet">Internet</option>
                                <option value="boca en boca">Boca en boca</option>
                                <option value="otros">Otros</option>
                                <option value="">Selecciona una opción</option>
                            </select>
                        </div>
                    </div>
                    <div className="Contact-form-right">
                        <input type="text" className="Contact-form-input-base Contact-form-input-full" placeholder="Nombre completo" data-input data-title="nombre" onChange={this.onValueUpdate} value={this.state.nombre}/>
                        <div className="Contact-form-inputGroup">
                            <input type="text" className="Contact-form-input-base Contact-form-input-small" placeholder="Teléfono" data-input data-title="telefono" onChange={this.onValueUpdate} value={this.state.telefono}/>
                            <input type="text" className="Contact-form-input-base Contact-form-input-small" placeholder="Mail" data-input data-title="mail" onChange={this.onValueUpdate} value={this.state.mail}/>
                        </div>
                        <textarea className="Contact-form-input-base Contact-form-input-textarea" name="" id="" placeholder="Mensaje" data-input data-title="mensaje" onChange={this.onValueUpdate} value={this.state.mensaje}></textarea>
                        <button className="Button Contact-form-submit" data-submit onClick={this.onSubmitContact} disabled>Enviar</button>
                    </div>
                </form>
            </section>
        );
    }
}

Contact.propTypes = {
    history: PropTypes.object
};

export default withRouter(Contact);
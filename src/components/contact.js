import React, {Component} from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

class Contact extends Component {

    constructor(props){
        super(props);
        this.onSubmitContact = this.onSubmitContact.bind(this);
        this.onValueUpdate = this.onValueUpdate.bind(this);
        this.onRecaptcha = this.onRecaptcha.bind(this);

        this.state = {
            nombre: '',
            telefono: '',
            mail: '',
            mensaje: '',
            time: '',
            date: '',
            captcha: false,
            ready: false
        };
    }

    onValueUpdate(e){
        const value = e.target.value;
        const stateKey = e.target.dataset.title;

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
            if(!value){
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

        if(stateKey === 'time'){
            this.setState({ time: value });
            if(!value){
                document.querySelector('[data-title=time]').classList.add('input-error');
            }else{
                document.querySelector('[data-title=time]').classList.remove('input-error');
            }
        }

        if(stateKey === 'date'){
            this.setState({ date: value });
            if(!value){
                document.querySelector('[data-title=date]').classList.add('input-error');
            }else{
                document.querySelector('[data-title=date]').classList.remove('input-error');
            }
        }

        if(this.state.nombre && this.state.mail && this.state.mensaje && this.state.time && this.state.date){
            this.setState({
                ready: true
            });
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
            nombre: this.state.nombre,
            telefono: this.state.telefono,
            mail: this.state.mail,
            mensaje: this.state.mensaje,
            time: this.state.time,
            date: this.state.date
        };

        const errors = document.querySelectorAll('.input-error');
        if(errors.length){
            document.querySelector('.Contact-form-submit').innerHTML = 'Algunos campos necesitan revisarse.';
            setTimeout( () => {
                document.querySelector('.Contact-form-submit').innerHTML = 'Enviar';
            }, 3000 );
            return;
        }

        if(!this.state.captcha){
            document.querySelector('.Contact-form-submit').innerHTML = 'Sabemos que no eres un bot, activa el reCAPTCHA.';
            setTimeout( () => {
                document.querySelector('.Contact-form-submit').innerHTML = 'Enviar';
            }, 3000 );
            return;
        }

        if(!this.state.ready){
            document.querySelector('.Contact-form-submit').innerHTML = 'Algunos campos importantes están vacios.';
            return;
        }

        $.post('/contact/send_contact.php', json, function(res){
            console.log(res);
        }).done(function(){
            $this.onSubmitCRM(json, history);
        });
    }

    onRecaptcha(){
        this.setState({captcha: true});

        document.querySelector('.Contact-form-submit').removeAttribute('disabled');
    }

    render(){
        return(
            <section className="Contact" data-section="contact">
                <h2 className="Contact-title">Quiero que me contacte un asesor.</h2>
                <form className="Contact-form" data-form="contact" onSubmit={this.onSubmitContact} name="WiseContactForm">
                    <div className="Contact-form-right">
                        <input type="text" className="Contact-form-input-base Contact-form-input-full" placeholder="Nombre completo" data-input data-title="nombre" onChange={this.onValueUpdate} value={this.state.nombre}/>
                        <div className="Contact-form-inputGroup">
                            <input type="text" className="Contact-form-input-base Contact-form-input-small" placeholder="Teléfono" data-input data-title="telefono" onChange={this.onValueUpdate} value={this.state.telefono}/>
                            <input type="text" className="Contact-form-input-base Contact-form-input-small" placeholder="Mail" data-input data-title="mail" onChange={this.onValueUpdate} value={this.state.mail}/>
                        </div>
                        <div className="Contact-form-inputGroup">
                            <p className="Contact-form-label">En qué momento nos podemos comunicar contigo:</p>     
                            <input type="text" name="" className="Contact-form-input-base Contact-form-input-small" placeholder="Horario (00:00)" value={this.state.time} onChange={this.onValueUpdate} data-title="time"/>
                            <input type="text" name="" className="Contact-form-input-base Contact-form-input-small" placeholder="Fecha (DD/MM)" value={this.state.date} onChange={this.onValueUpdate} data-title="date"/>
                        </div>
                        <textarea className="Contact-form-input-base Contact-form-input-textarea" name="" id="" placeholder="Mensaje" data-input data-title="mensaje" onChange={this.onValueUpdate} value={this.state.mensaje}></textarea>
                        <div className="Contact-recaptcha">
                            <ReCAPTCHA sitekey="6Ld6JVQUAAAAAHafmP-RCQwVN0GBiUz36FgblSFb" onChange={this.onRecaptcha}  />
                        </div>
                        <button className="Button Contact-form-submit" data-submit disabled>Enviar</button>
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

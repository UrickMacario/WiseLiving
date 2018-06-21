import React, {Component} from 'react';

import img from '../img/logo.png';

export default class Loading extends Component {
    render(){
        return(
            <section className="Loading">
                <img src={img} alt="" />
            </section>
        );
    }
}
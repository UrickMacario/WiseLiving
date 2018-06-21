import React, { Component } from 'react';

import Notice from './notice';
import Navigation from './navigation';
import MainBanner from './Carousel';
import Apartments from './apartments';
import Location from './location';
import Ammenities from './commodities';
import Footer from './footer';
import Loading from './loading';

export default class App extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <section>
                <Loading />
                <Notice />
                <Navigation />
                <MainBanner reference="MainBanner"/>
                <Apartments />
                <Location />
                <Ammenities />
                <Footer />
            </section>
        );
    }
}
import React, { Component } from 'react';

import Notice from './notice';
import Navigation from './navigation';
import MainBanner from './Carousel';
import Apartments from './apartments';
import Location from './location';
import Ammenities from './commodities';
import Footer from './footer';

export default class App extends Component {
    render(){
        return(
            <section>
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
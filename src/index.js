import scss from './scss/app.scss';
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('App')
);
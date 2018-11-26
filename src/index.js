import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './components/home';
import * as serviceWorker from './registerServiceWorker';

render((
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    ), document.getElementById('root'));

serviceWorker.unregister();

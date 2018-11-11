import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home.jsx';
import * as serviceWorker from './registerServiceWorker';

render((
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    ), document.getElementById('root'));

serviceWorker.unregister();

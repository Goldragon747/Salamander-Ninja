import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Home from './components/home';
import AppContainer from "./components/AppContainer";
import * as serviceWorker from './registerServiceWorker';

const store = configureStore();

render((
    <Provider store={store}>
        <AppContainer />
    </Provider>
    ), document.getElementById('root'));

serviceWorker.unregister();

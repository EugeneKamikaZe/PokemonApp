import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import App from './App';
import configureStore from './configeStore'

import './index.module.scss';

const store = configureStore({})

window.addEventListener('load', () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, document.getElementById('root')
    )
})

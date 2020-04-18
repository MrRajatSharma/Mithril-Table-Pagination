import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Routes, DefaultRoute } from './view/routes';

import './assets/stylesheet/main.scss';
import 'tachyons/css/tachyons.min.css';

if (module.hot) {
    module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const $root = document.body.querySelector('#root');
m.route($root, DefaultRoute, Routes);

import React from 'react';
import ReactDOM from 'react-dom/client';
import {ReduxRenderer} from './redux-manager';
import {store} from './store';
import './index.css';
import {Game} from './game';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReduxRenderer store={store}>
    <Game />
  </ReduxRenderer>
);



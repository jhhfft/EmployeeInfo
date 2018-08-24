import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import RouterMap from './RouterMap';


ReactDOM.render((
  <HashRouter>
    <RouterMap />
  </HashRouter>
), document.getElementById('root'));

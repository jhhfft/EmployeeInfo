import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './Page/App';
import RouterMap from './Router/RouterMap'

ReactDOM.render((
  <HashRouter>
    <RouterMap />
  </HashRouter>
), document.getElementById('root'));

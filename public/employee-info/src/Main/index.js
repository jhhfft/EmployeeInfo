import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Content from './Content';

import './index.css';

class Main extends React.Component{
    render(){
      return (
        <div className="main">
          <Header />
            <div className="wrapper">
              <Content />
            </div>
          {/* <Footer /> */}
        </div>
      )
    }
}

export default Main
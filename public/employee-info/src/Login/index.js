import React from 'react';
import './index.css';
import bgImg from './images/login_bg.png';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

class Login extends React.Component{
    render(){
      return (
        <div class="login">
          <Header/>
          <div class="wrap">
            <img src={bgImg}/>
          </div>
          <Footer/>
        </div>
      )
    }
}

export default Login
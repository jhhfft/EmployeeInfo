import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import bgImg from './images/login_bg.png';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LoginBox from './LoginBox'

class Login extends React.Component{
    render(){
      return (
        <div class="login">
          <Header color={0}/>
          <div class="wrap">
            <img src={bgImg}/>
            <LoginBox/>
          </div>
          <Footer/>
        </div>
      )
    }
}

export default Login
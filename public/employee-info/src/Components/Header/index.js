import React from 'react';
import './index.css';
import logoImg from './images/dianxin.png'

class Header extends React.Component{
  render(){
    return (
      <div class="header">
        <div class="header-logo">
          <img src={logoImg}/>
        </div>
        <div class="header-about">关于电信</div>
      </div>
    )
  }
}

export default Header;
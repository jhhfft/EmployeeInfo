import React from 'react';
import './index.css';
import logoImgBlue from './images/dianxin.png';
import logoImgWhite from './images/dianxin-white.png';

class Header extends React.Component{
  render(){
    const color = this.props.color
    let styleColor = {
      color: color === 0 ? '#02489d' : '#fff',
      borderLeft: color === 0 ? '1px solid  #02489d' : '1px solid  #fff'
    }
    return (
      <div className="header" style={color==0?{background:'#fff'}:{background:'#2358d4'}}>
        <div className="header-logo">
          <img src={color === 0 ? logoImgBlue : logoImgWhite}/>
        </div>
        <div className="header-about" style={styleColor}>
          中国电信晋城分公司员工履历管理系统
        </div>
      </div>
    )
  }
}

export default Header;
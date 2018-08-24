import React from 'react';
import {withRouter} from "react-router-dom"

import { message } from 'antd';
import './index.css';
import WrapperSearchForm from '../WrapperSearchForm';
import ResultTable from '../ResultTable';
import post from '../../utils/post'

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      employeeList: null,
      current: 1, 
      total: 10
    }
  }
  formatData = (result) =>{
    result.forEach((item,index)=>{
      let {birthday, startwork} = item
      let date = new Date(birthday)
      item.birthday= date.toLocaleDateString()
      date = new Date(startwork)
      item.startwork = date.toLocaleDateString()

      item.key = item.id
      // delete item.id
    })
  }
  queryInfor = async (opts) => {
    // console.log('this is Content')
    // console.log(employee)
    const employee = {}
    for(let i in opts){
      if(opts[i]){
        employee[i] = opts[i]
      }
    }
    // console.log('this is content',employee)
    let result = await post('http://127.0.0.1:8080/employee/base',employee)
    if(result.code == 0){
      // 说明用户未登录
      message.error('请先登录');
      this.props.history.push('/login');
    }else {
      let employeeList = result.employee
      this.formatData(employeeList)
      this.setState({employeeList})
    }
  }
  render(){
    const {employeeList, current, total} = this.state
    return (
      <div className="content">
        <WrapperSearchForm queryInfor={this.queryInfor}/>
        <ResultTable data={employeeList} pagination={{current, total}}/>
      </div>
    )
  }
}

export default withRouter(Content);
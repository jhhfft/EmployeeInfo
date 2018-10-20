import React from 'react';
import { withRouter } from "react-router-dom"

import { message, Button } from 'antd';
import './index.css';
import WrapperSearchForm from '../WrapperSearchForm';
import ResultTable from '../ResultTable';
import post from '../../utils/post'

import URL from '../../Constant'

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opts: null,
      employeeList: null,
      current: 0, // 当前页数
      pageSize: 5,
      total: 0, // 数据总数
      isShowSpin: false // 是否显示等待框
    }
  }
  formatData = (result) => {
    result.forEach((item, index) => {
      let { birthday, workdate } = item
      let date = new Date(birthday)
      item.birthday = date.toLocaleDateString()
      date = new Date(workdate)
      item.workdate = date.toLocaleDateString()

      item.key = item.id
      // delete item.id
    })
  }
  deleteInfo = async (id) => {
    const { opts, current, pageSize } = this.state
    this.setState({ isShowSpin: true })
    try {
      let result = await post(URL.delete, { id, current, pageSize, where: opts })

      if (result.code == 0) {
        // 说明用户未登录
        message.error('请先登录');
        this.props.history.push('/login');
      } else if (result.code == 2) {
        message.error('删除失败，请稍后再试');
      } else {
        let employeeList = result.employee
        let total = result.total
        this.formatData(employeeList)
        this.setState({ employeeList, total, current, pageSize, opts, isShowSpin: false })
      }
    } catch (e) {
      this.setState({ isShowSpin: false })
      message.error('网络故障，请稍后再试')
    }
  }
  addEmployee = () => {
    window.open(URL.addpage)
  }
  queryInfor = async (opts) => {
    const { current, pageSize } = this.state
    // const employee = {}
    // for(let i in opts){
    //   if(opts[i]){
    //     employee[i] = opts[i]
    //   }
    // }
    // console.log('this is content',employee)
    let result = await post(URL.search, { where: opts, current: 1, pageSize })
    if (result.code == 0) {
      // 说明用户未登录
      message.error('请先登录');
      this.props.history.push('/login');
    } else {
      let employeeList = result.employee
      let total = result.total
      this.formatData(employeeList)
      this.setState({ employeeList, total, current: 1, pageSize, opts })
    }
  }
  onPageChange = async (newPage, pageSize) => {
    // console.log(newPage)
    const { opts } = this.state
    let result = await post(URL.search, { where: opts, current: newPage, pageSize })
    if (result.code == 0) {
      // 说明用户未登录
      message.error('请先登录');
      this.props.history.push('/login');
    } else {
      let employeeList = result.employee
      let total = result.total
      this.formatData(employeeList)
      this.setState({ employeeList, total, current: newPage, pageSize })
    }
  }
  render() {
    const { employeeList, current, total, pageSize, isShowSpin } = this.state
    console.log(total)
    return (
      <div className="content">
        <WrapperSearchForm queryInfor={this.queryInfor} />
        <ResultTable data={employeeList} pagination={{ current, total, pageSize, onChange: this.onPageChange }} deleteInfo={this.deleteInfo} addEmployee={this.addEmployee} isShow={isShowSpin} />
      </div>
    )
  }
}

export default withRouter(Content);
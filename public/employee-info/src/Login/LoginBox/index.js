import React from 'react';
import './index.css';

import { withRouter } from "react-router-dom"
import axios from 'axios';
import { message } from 'antd';

// class LoginBox extends React.Component{
//   render(){
//     return (
//       <div className="login-box">
//         <div className="username">
//           <p>用户名</p>
//           <input placeholder="请输入用户名"/>
//         </div>
//         <div className="password">
//           <p>密码</p>
//           <input placeholder="请输入密码"/>
//         </div>
//       </div>
//     )
//   }
// }

// export default LoginBox;

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import URL from '../../Constant'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.localStorage.setItem('rememberPwd', true)
    const username = window.localStorage.getItem('username')
    const password = window.localStorage.getItem('password')
    this.props.form.setFieldsValue({
      username, password
    })

  }
  handleRememberChange = (e) => {
    if (e.target.checked) {
      window.localStorage.setItem('rememberPwd', true)
    } else {
      window.localStorage.setItem('rememberPwd', false)
      window.localStorage.removeItem('username')
      window.localStorage.removeItem('password')
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const self = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (window.localStorage.getItem('rememberPwd')) {
          window.localStorage.setItem('username', values.username)
          window.localStorage.setItem('password', values.password)
        }else{
          window.localStorage.removeItem('username', values.username)
          window.localStorage.removeItem('password', values.password)
        }
        //console.log('asdfadsfasdfasdf', values);
        axios.post(URL.user, values).then(function (response) {
          if (response.data.code === 1) {
            self.props.history.push('/main')
          } else {
            message.error('用户名或者密码错误');
          }
        }).catch(function (err) {
          console.log(err)
        })

      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" autocomplete="off" >
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 10 }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 10 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox onChange={this.handleRememberChange}>记住密码</Checkbox>
          )}
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const LoginBox = Form.create()(withRouter(NormalLoginForm));

export default LoginBox;
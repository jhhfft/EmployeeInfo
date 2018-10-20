import React from 'react';
import './index.css';

import {withRouter} from "react-router-dom"
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
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const self = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //console.log('asdfadsfasdfasdf', values);
        axios.post('http://127.0.0.1:8080/user', values).then(function(response){
          if(response.data.code === 1){
            self.props.history.push('/main')
          }else {
            message.error('用户名或者密码错误');
          }
        }).catch(function(err){
          console.log(err)
        })
        
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form"  autocomplete="off" >
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
            <Checkbox>记住密码</Checkbox>
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
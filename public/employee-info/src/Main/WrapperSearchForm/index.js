import React from 'react';
import { Form, Row, Col, Button, Icon, Input, Select, DatePicker } from 'antd';
import './index.css';

const FormItem = Form.Item;
const Option = Select.Option;
/* 
      姓名（input）、
      性别（select）、
      年龄
      入职时间
      籍贯（input）
      学历(select)
      专业
      身份证号（input）
      联系方式（input）
      政治面貌（select）
      部门
      职务（input）
      */
class SearchForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.props.form.getFieldsValue())
    const opts = this.props.form.getFieldsValue()
    this.props.queryInfor(opts)
  }
  handleReset = () => {
    this.props.form.resetFields();
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };
    return (
      <Form className="search-form" onSubmit={this.handleSubmit}>
        <Row gutter={30}>
          <Col span={8} key='name'>
            <FormItem {...formItemLayout} label="姓名">
              {getFieldDecorator('name')(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={8} key='sex'>
            <FormItem {...formItemLayout} label="性别">
              {getFieldDecorator('sex', {initialValue: undefined})(
                <Select>
                  <Option value="">全部</Option>
                  <Option value="男">男</Option>
                  <Option value="女">女</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8} key='birthday'>
            <FormItem {...formItemLayout} label="出生日期">
              {getFieldDecorator('birthday')(
                <DatePicker style={{width: '100%'}}/>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={40}>
          <Col span={8} key='hometown'>
            <FormItem {...formItemLayout} label="籍贯">
              {getFieldDecorator('hometown')(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={8} key='education'>
            <FormItem {...formItemLayout} label="学历">
              {getFieldDecorator('education',{initialValue: undefined})(
                <Select>
                  <Option value="">全部</Option>
                  <Option value="初中">初中</Option>
                  <Option value="高中">高中</Option>
                  <Option value="中专">中专</Option>
                  <Option value="大专">大专</Option>
                  <Option value="本科">本科</Option>
                  <Option value="硕士研究生">硕士研究生</Option>
                  <Option value="博士研究生">博士研究生</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8} key='major'>
            <FormItem {...formItemLayout} label="专业">
              {getFieldDecorator('major',{initialValue: undefined})(
                <Input />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={40}>
          <Col span={8} key='idNum'>
            <FormItem {...formItemLayout} label="身份证号">
              {getFieldDecorator('idNum')(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={8} key='phone'>
            <FormItem {...formItemLayout} label="联系方式">
              {getFieldDecorator('phone')(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={8} key='politicalStatus'>
            <FormItem {...formItemLayout} label="政治面貌">
              {getFieldDecorator('politicalStatus',{initialValue: undefined})(
                <Select>
                  <Option value="">全部</Option>
                  <Option value="党员">党员</Option>
                  <Option value="预备党员">预备党员</Option>
                  <Option value="共青团员">共青团员</Option>
                  <Option value="群众">群众</Option>
                  <Option value="民主党派成员">民主党派成员</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={40}>
          <Col span={8} key='department'>
            <FormItem {...formItemLayout} label="部门">
              {getFieldDecorator('department')(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={8} key='job'>
            <FormItem {...formItemLayout} label="职务">
              {getFieldDecorator('job')(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={8} style={{ textAlign: 'center'}}>
            <Button type="primary" htmlType="submit" style={{width: '30%', marginRight: 15}}>搜索</Button>
            <Button type="primary" htmlType="reset" style={{width: '30%'}} onClick={this.handleReset}>重置</Button>
          </Col>
        </Row>
        {/* <Row gutter={40}>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">搜索</Button>
          </Col>
        </Row> */}
      </Form>
    )
  }
}

const WrapperSearchForm = Form.create()(SearchForm);
export default WrapperSearchForm
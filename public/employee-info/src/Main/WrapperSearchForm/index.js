import React from 'react';
import { Form, Row, Col, Button, Icon, Input, Select, DatePicker } from 'antd';
import { LocaleProvider } from 'antd';

import zh_CN from 'antd/lib/locale-provider/zh_CN';

import 'moment/locale/zh-cn';
import './index.css';

const { RangePicker } = DatePicker;
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
      labelCol: { span: 7 },
      wrapperCol: { span: 17 },
    };
    return (
      <Form className="search-form" onSubmit={this.handleSubmit} autocomplete="off" >
        <Row gutter={30}>
          <Col span={6} key='name'>
            <FormItem {...formItemLayout} label="姓名">
              {getFieldDecorator('name')(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={6} key='sex'>
            <FormItem {...formItemLayout} label="性别">
              {getFieldDecorator('sex', { initialValue: undefined })(
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
              <LocaleProvider locale={zh_CN}>
                {getFieldDecorator('birthday')(
                  <RangePicker style={{ width: '150%' }} />
                )}
              </LocaleProvider>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col span={6} key='education'>
            <FormItem {...formItemLayout} label="学历">
              {getFieldDecorator('education', { initialValue: undefined })(
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
          <Col span={6} key='politicalStatus'>
            <FormItem {...formItemLayout} label="政治面貌">
              {getFieldDecorator('politicalStatus', { initialValue: undefined })(
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
          <Col span={8} key='workdate'>
            <FormItem {...formItemLayout} label="参加工作时间">
              <LocaleProvider locale={zh_CN}>
                {getFieldDecorator('workdate')(
                  <RangePicker style={{ width: '150%' }} />
                )}
              </LocaleProvider>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col span={6} key='department'>
            <FormItem {...formItemLayout} label="部门">
              {getFieldDecorator('department', { initialValue: undefined })(
                <Select>
                  <Option value="办公室">办公室</Option>
                  <Option value="财务管理部">财务管理部</Option>
                  <Option value="党群工作部">党群工作部</Option>
                  <Option value="人力资源部">人力资源部</Option>
                  <Option value="运行维护部">运行维护部</Option>
                  <Option value="网络发展部">网络发展部</Option>
                  <Option value="客户服务部">客户服务部</Option>
                  <Option value="市场营销部">市场营销部</Option>
                  <Option value="业务管理支撑中心">业务管理支撑中心</Option>
                  <Option value="渠道销售部">渠道销售部</Option>
                  <Option value="政企客户部">政企客户部</Option>
                  <Option value="东城分局">东城分局</Option>
                  <Option value="西城分局">西城分局</Option>
                  <Option value="商圈分局">商圈分局</Option>
                  <Option value="高平分公司">高平分公司</Option>
                  <Option value="陵川分公司">陵川分公司</Option>
                  <Option value="沁水分公司">沁水分公司</Option>
                  <Option value="阳城分公司">阳城分公司</Option>
                  <Option value="泽州分公司">泽州分公司</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={6} key='job'>
            <FormItem {...formItemLayout} label="职务">
              {getFieldDecorator('job', { initialValue: undefined })(
                <Select>
                  <Option value="员工">员工</Option>
                  <Option value="助理">助理</Option>
                  <Option value="中层干部">中层干部</Option>
                  <Option value="公司领导">公司领导</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={8} key='postLevel'>
            <FormItem {...formItemLayout} label="岗级">
              {getFieldDecorator('postLevelA01', { initialValue: undefined })(
                <Select style={{ width: '25%' }}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                  <Option value="9">9</Option>
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                  <Option value="13">13</Option>
                  <Option value="14">14</Option>
                  <Option value="15">15</Option>
                  <Option value="16">16</Option>
                  <Option value="17">17</Option>
                  <Option value="18">18</Option>
                  <Option value="19">19</Option>
                  <Option value="20">20</Option>
                  <Option value="20">21</Option>
                  <Option value="20">22</Option>
                  <Option value="20">23</Option>
                  <Option value="20">24</Option>
                  <Option value="20">25</Option>
                  <Option value="20">26</Option>
                </Select>
              )}
              {getFieldDecorator('postLevelB01', { initialValue: undefined })(
                <Select style={{ width: '20%' }}>
                  <Option value="1">A</Option>
                  <Option value="2">B</Option>
                  <Option value="3">C</Option>
                  <Option value="4">D</Option>
                  <Option value="5">E</Option>
                  <Option value="6">F</Option>
                  <Option value="7">G</Option>
                  <Option value="8">H</Option>
                  <Option value="9">I</Option>
                  <Option value="10">J</Option>
                </Select>
              )}
              <span> ~ </span>
              {getFieldDecorator('postLevelA02', { initialValue: undefined })(
                <Select style={{ width: '25%' }}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                  <Option value="9">9</Option>
                  <Option value="10">10</Option>
                  <Option value="11">11</Option>
                  <Option value="12">12</Option>
                  <Option value="13">13</Option>
                  <Option value="14">14</Option>
                  <Option value="15">15</Option>
                  <Option value="16">16</Option>
                  <Option value="17">17</Option>
                  <Option value="18">18</Option>
                  <Option value="19">19</Option>
                  <Option value="20">20</Option>
                  <Option value="21">21</Option>
                  <Option value="22">22</Option>
                  <Option value="23">23</Option>
                  <Option value="24">24</Option>
                  <Option value="25">25</Option>
                  <Option value="26">26</Option>
                </Select>
              )}
              {getFieldDecorator('postLevelB02', { initialValue: undefined })(
                <Select style={{ width: '20%' }}>
                  <Option value="1">A</Option>
                  <Option value="2">B</Option>
                  <Option value="3">C</Option>
                  <Option value="4">D</Option>
                  <Option value="5">E</Option>
                  <Option value="6">F</Option>
                  <Option value="7">G</Option>
                  <Option value="8">H</Option>
                  <Option value="9">I</Option>
                  <Option value="10">J</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col span={6} key='contract'>
            <FormItem {...formItemLayout} label="合同类别">
              {getFieldDecorator('contract', { initialValue: undefined })(
                <Select>
                  <Option value="0">劳动合同制</Option>
                  <Option value="1">业务外包制</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          {/* <Col span={6} key='idNum'>
            <FormItem {...formItemLayout} label="身份证号">
              {getFieldDecorator('idNum')(
                <Input />
              )}
            </FormItem>
          </Col> */}
          <Col span={6} key='phone'>
            <FormItem {...formItemLayout} label="联系电话">
              {getFieldDecorator('phone')(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={6} offset={3} style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" style={{ width: '30%', marginRight: 15 }}>搜索</Button>
            <Button type="primary" htmlType="reset" style={{ width: '30%' }} onClick={this.handleReset}>重置</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

const WrapperSearchForm = Form.create()(SearchForm);
export default WrapperSearchForm
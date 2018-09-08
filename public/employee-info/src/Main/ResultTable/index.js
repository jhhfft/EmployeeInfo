import React from 'react';
import './index.css';
import { Table, Icon, Button } from 'antd';

const { Column } = Table

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: (text, record) => {
    return <a href={'http://127.0.0.1:8080/employee/detail?id=' + record.id} target='_blank'>{text}</a>
  }
}, {
  title: '性别',
  dataIndex: 'sex',
  key: 'sex',

}, {
  title: '出生日期',
  dataIndex: 'birthday',
  key: 'birthday',

}, {
  title: '联系方式',
  dataIndex: 'phone',
  key: 'phone',

}, {
  title: '籍贯',
  dataIndex: 'hometown',
  key: 'hometown',

}, {
  title: '学历',
  dataIndex: 'education',
  key: 'education',

}, {
  title: '专业',
  dataIndex: 'major',
  key: 'major',

}, {
  title: '政治面貌',
  dataIndex: 'politicalStatus',
  key: 'politicalStatus',

}, {
  title: '部门',
  dataIndex: 'department',
  key: 'department',

}, {
  title: '职务',
  dataIndex: 'job',
  key: 'job',

}, {
  title: '参加工作时间',
  dataIndex: 'startwork',
  key: 'startwork',

}, {
  title: '操作',
  key: 'action',

  render: (text, record) => {
    // console.log(text)
    // console.log(record)
    return (
      <span>
        <a href={'http://127.0.0.1:8080/employee/update?id=' + record.id} target='_blank'>修改</a>
        <span className="ant-divider" />
        <a href={'#'} onClick={() => { console.log(this.props) }}>删除</a>
      </span>
    )
  },
}];

const selfdata = [{
  id: 1,
  key: '1',
  name: '闫鑫鑫',
  sex: '男',
  birthday: '1994/10/14',
  hometown: '晋城',
  education: '研究生',
  major: '计算机',
  phone: '15303566679',
  politicalStatus: '共青团员',
  department: '人力资源部',
  job: '职员',
  startwork: '2018/08/23'
}, {
  id: 2,
  key: '2',
  name: '闫鑫鑫',
  sex: '男',
  birthday: '1994/10/14',
  hometown: '晋城',
  education: '研究生',
  major: '计算机',
  phone: '15303566679',
  politicalStatus: '共青团员',
  department: '人力资源部',
  job: '职员',
  startwork: '2018/08/23'
},
{
  id: 3,
  key: '3',
  name: '闫鑫鑫',
  sex: '男',
  birthday: '1994/10/14',
  hometown: '晋城',
  education: '研究生',
  major: '计算机',
  phone: '15303566679',
  politicalStatus: '共青团员',
  department: '人力资源部',
  job: '职员',
  startwork: '2018/08/23'
}, {
  id: 4,
  key: '4',
  name: '闫鑫鑫',
  sex: '男',
  birthday: '1994/10/14',
  hometown: '晋城',
  education: '研究生',
  major: '计算机',
  phone: '15303566679',
  politicalStatus: '共青团员',
  department: '人力资源部',
  job: '职员',
  startwork: '2018/08/23'
}, {
  id: 5,
  key: '5',
  name: '闫鑫鑫',
  sex: '男',
  birthday: '1994/10/14',
  hometown: '晋城',
  education: '研究生',
  major: '计算机',
  phone: '15303566679',
  politicalStatus: '共青团员',
  department: '人力资源部',
  job: '职员',
  startwork: '2018/08/23'
},
{
  id: 6,
  key: '6',
  name: '闫鑫鑫',
  sex: '男',
  birthday: '1994/10/14',
  hometown: '晋城',
  education: '研究生',
  major: '计算机',
  phone: '15303566679',
  politicalStatus: '共青团员',
  department: '人力资源部',
  job: '职员',
  startwork: '2018/08/23'
}];

class ResultTable extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDelete = (e, id) => {
    e.preventDefault()
    this.props.deleteInfo(id)
  }
  handleAdd = () => {
    this.props.addEmployee()
  }
  render() {
    const { data, pagination } = this.props
    const self = this
    return (
      <div className="result-table">
        <Table dataSource={data} pagination={pagination}>
          <Column
            title="姓名"
            dataIndex='name'
            key='name'
            render={(text, record) => <a href={'http://127.0.0.1:8080/employee/detail?id=' + record.id} target='_blank'>{text}</a>}>
          </Column>
          <Column
            title="性别"
            dataIndex="sex"
            key="sex"
          />
          <Column
            title="出生日期"
            dataIndex="birthday"
            key="birthday"
          />
          <Column
            title="联系方式"
            dataIndex="phone"
            key="phone"
          />
          <Column
            title="籍贯"
            dataIndex="hometown"
            key="hometown"
          />
          <Column
            title="学历"
            dataIndex="education"
            key="education"
          />
          <Column
            title="专业"
            dataIndex="major"
            key="major"
          />
          <Column
            title="政治面貌"
            dataIndex="politicalStatus"
            key="politicalStatus"
          />
          <Column
            title="部门"
            dataIndex="department"
            key="department"
          />
          <Column
            title="职务"
            dataIndex="job"
            key="job"
          />
          <Column
            title="参加工作时间"
            dataIndex="startwork"
            key="startwork"
          />
          <Column
            title="操作"
            key="action"
            render={(text, record) => (
              <span>
                <a href={'http://127.0.0.1:8080/employee/update?id=' + record.id} target='_blank'>修改</a>
                <span className="ant-divider" />
                <a onClick={(e) => self.handleDelete(e, record.id)}>删除</a>
              </span>
            )}
          />
        </Table >
        <Button className="add-new" type="primary" onClick={this.handleAdd}>添加员工信息</Button>
      </div>
    )
  }
}

export default ResultTable
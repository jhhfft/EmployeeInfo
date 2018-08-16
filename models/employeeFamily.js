const Sequelize = require('sequelize')
const path = require('path')

var sequelize = new Sequelize('employee',undefined,undefined,{
    host: 'localhost',
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database/database.sqlite')
})

// 测试数据库是否能连接成功
// sequelize.authenticate().then(()=>{
//     console.log('success')
// }).catch(error => {
//     console.log('error')
// })

const EmployeeFamily = sequelize.define('employeeFamily',{
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    relation: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    // 出生日期
    birthday: {
        type: Sequelize.DATE,
    },
    // 民族
    nation: {
        type: Sequelize.STRING,   
    },
    // 籍贯
    hometown: {
        type: Sequelize.STRING,
    },
    // 参加工作时间
    startwork: {
        type: Sequelize.DATE,
    },
    // 政治面貌
    political: {
        type: Sequelize.STRING
    },
    // 学历
    education: {
        type: Sequelize.STRING,
    },
    // 专业技术职务
    major: {
        type: Sequelize.STRING,
    },
    // 工资情况
    salary: {
        type: Sequelize.NUMBER
    },
    // 毕业院校及专业
    school: {
        type: Sequelize.STRING
    },
    // 工作单位及职务
    workplace: {
        type: Sequelize.STRING
    }
})

EmployeeFamily.sync()

module.exports = EmployeeFamily
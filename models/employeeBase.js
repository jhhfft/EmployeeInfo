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

const EmployeeBase = sequelize.define('employeeBase',{
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        autoIncrement: true
    },
    // 姓名
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 曾用名
    oldname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 性别
    sex: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    // 民族
    nation: {
        type: Sequelize.STRING,
        allowNull: false,    
    },
    // 出生日期
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    },
    // 籍贯
    hometown: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 学历
    education: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 出生地
    birthplace: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 学位
    degree: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 专业
    major: {
        type: Sequelize.STRING,
    },
    // 照片
    photo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 部门
    department: {
        type: Sequelize.STRING
    },
    // 职务
    job: {
        type: Sequelize.STRING
    },
    // 身份证号
    idNum: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 健康状况
    health: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 家庭住址
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 联系电话
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 岗位标准
    level: {
        type: Sequelize.STRING,
    },
    // 岗位系数
    levelratio: {
        type: Sequelize.STRING,
    },
    // 岗位工资
    salary: {
        type: Sequelize.NUMBER
    },
    // // 何年何月何处参加工作
    // startwork: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // // 何年何月由何人介绍加入中国共产党，何时转正
    // startCCP: {
    //     type: Sequelize.STRING
    // },
    // // 何年何月加入中国共产主义青年团
    // startCCYL: {
    //     type: Sequelize.STRING
    // },
    // // 何年何月何人介绍加入何民主党派，任何职
    // democratic: {
    //     type: Sequelize.STRING
    // },
    
})

EmployeeBase.sync()

module.exports = EmployeeBase
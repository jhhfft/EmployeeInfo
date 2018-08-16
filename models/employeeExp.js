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

const EmployeeExp = sequelize.define('employeeExp',{
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        autoIncrement: true
    },
    type: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

EmployeeExp.sync()

module.exports = EmployeeExp
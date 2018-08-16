const Sequelize = require('sequelize')
const path = require('path')

var sequelize = new Sequelize(undefined,undefined,undefined,{
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

const User = sequelize.define('employee',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    oldname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sex: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    nation: {
        type: Sequelize.STRING,
        allowNull: false,    
    },
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
    degree: {
        type: Sequelize.STRING,
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department: {
        type: Sequelize.STRING
    },
    job: {// 职务
        type: Sequelize.STRING
    },
    id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    health: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
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
    // 何年何月何处参加工作
    startwork: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 何年何月由何人介绍加入中国共产党，何时转正
    startCCP: {
        type: Sequelize.STRING
    },
    // 何年何月加入中国共产主义青年团
    startCCYL: {
        type: Sequelize.STRING
    },
    // 何年何月何人介绍加入何民主党派，任何职
    democratic: {
        type: Sequelize.STRING
    },
    
})

User.sync()

module.exports = User
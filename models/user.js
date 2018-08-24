const Sequelize = require('sequelize')
const path = require('path')

var sequelize = new Sequelize('employee', undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database/database.sqlite')
})

// // 测试数据库是否能连接成功
// sequelize.authenticate().then(()=>{
//     console.log('success')
// }).catch(error => {
//     console.log('error')
// })

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING, 
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    level: {  // 操作等级，1级最高，能够对各类信息进行操作
        type: Sequelize.INTEGER, 
        defaultValue: 1,
        allowNull: false
    }
},
    {
        freezeTableName: true // Model 对应的表名将与model名相同
    })

User.sync()
// User.sync({ force: true }).then(function () {
//     // 已创建数据表
//     User.create({
//         username: 'yanxinxin',
//         password: '358941877'
//     });
// }).catch(error => {

// })



module.exports = User

// const opts = {
//     where: {
//         username: "yanxinxin",
//         password: "358941877"
//     }
// }
// User.findAll(opts).then(user=>{
//     console.log('------')
//     console.log('用户存在')
//     console.log(user[0])
//     console.log('------')
// }).catch(error=>{
//     console.log('用户不存在')
// })


// // 测试 
// user = User.findOne()
// user.get('username').then(result => {
//     console.log('-------')
//     console.log(result)
//     console.log('-------')
// }).catch(() => { console.log('error') })
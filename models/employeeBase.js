const Sequelize = require('sequelize')
const path = require('path')

var sequelize = new Sequelize('employee', undefined, undefined, {
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

const EmployeeBase = sequelize.define('employeeBase', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // 姓名
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 曾用名
    oldname: {
        type: Sequelize.STRING
    },
    // 性别
    sex: {
        type: Sequelize.STRING,
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
    // 出生地
    birthplace: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 身份证号
    idNum: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 家庭住址
    address: {
        type: Sequelize.STRING
    },
    // 联系电话
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 健康状况
    health: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 学历
    education: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 学位
    degree: {
        type: Sequelize.STRING
    },
    // 专业
    major: {
        type: Sequelize.STRING,
    },
    // 政治面貌
    politicalStatus: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 照片
    photo: {
        type: Sequelize.STRING
    },
    // 部门
    department: {
        type: Sequelize.STRING
    },
    // 职务
    job: {
        type: Sequelize.STRING
    },
    startwork: {
        type: Sequelize.DATE
    },
    // 岗位标准
    postLevel: {
        type: Sequelize.STRING,
    },
    // 岗位系数
    postRatio: {
        type: Sequelize.STRING,
    },
    // 岗位工资
    postSalary: {
        type: Sequelize.INTEGER
    }
},
    {
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: false
    })

EmployeeBase.sync()

module.exports = EmployeeBase

// const opts = {
//     where: {
//         name: "闫鑫鑫",
//     }
// }
// EmployeeBase.findAll(opts).then(employeebase=>{
//     console.log('------')
//     console.log('用户存在')
//     console.log(employeebase[0])
//     console.log('------')
// }).catch(error=>{
//     console.log('用户不存在')
// })


// EmployeeBase.sync({ force: true }).then(function () {
//     // 已创建数据表
//     let birthday = new Date(1994, 10, 14)
//     let startwork = new Date(2018, 7, 16)
//     EmployeeBase.create({
//         name: '闫鑫鑫',
//         sex: '男',
//         nation: '汉族',
//         birthday,
//         hometown: '晋城市郊区',
//         birthplace: '晋城市城区',
//         idNum: '140502199410140033',
//         address: '城区瑞丰路926号1号楼202室',
//         phone: '15303566679',
//         health: '健康',
//         education: '硕士研究生',
//         degree: '硕士',
//         major: '计算机技术',
//         politicalStatus: '共青团员',
//         photo: 'yanxinxin',
//         department: '人力资源部',
//         job: '职员',
//         startwork
//     });
// }).catch(error => {

// })
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

// 可以增加 曾用名和专业 字段
const EmployeeBase = sequelize.define('employeeBase', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // 姓名
    name: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    // 性别
    sex: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    // 照片
    portrait: {
        type: Sequelize.STRING
    },
    // 民族
    nation: {
        type: Sequelize.STRING,
        // allowNull: false,
    },
    // 出生日期
    birthday: {
        type: Sequelize.DATE,
        // allowNull: false
    },
    // 籍贯
    hometown: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    // 学历
    education: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    // 出生地
    birthplace: {
        type: Sequelize.STRING
    },
    // 学位
    degree: {
        type: Sequelize.STRING
    },
    // 健康状况
    health: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    // 毕业院校
    school: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    // 政治面貌
    politicalStatus: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    // 身份证号
    idNum: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    // 联系电话
    phone: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    // 家庭住址
    address: {
        type: Sequelize.STRING
    },
    // 专业
    major: {
        type: Sequelize.STRING,
    },
    // 职务
    job: {
        type: Sequelize.STRING
    },
    // 职级
    jobLevel: {
        type: Sequelize.INTEGER
    },
    // 岗位标准
    postLevelA: {
        type: Sequelize.INTEGER,
    },
    postLevelB: {
        type: Sequelize.INTEGER,
    },
    // 部门
    department: {
        type: Sequelize.STRING
    },
    // 岗位系数
    postRatio: {
        type: Sequelize.STRING,
    },
    // 参加工作时间
    workdate: {
        type: Sequelize.DATE
    },
    // 合同类别
    contract: {
        type: Sequelize.INTEGER
    },
    // 岗位工资
    postSalary: {
        type: Sequelize.INTEGER
    },
    // 婚姻状况
    marriage: {
        type: Sequelize.STRING,
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

//     },
//     offset: (3-1)*2, // (page - 1) * pageSize
//     limit: 2 // (page - 1) * pageSize
// }
// EmployeeBase.findAndCountAll(opts).then(employeebase => {
//     // console.log('------')
//     // console.log('用户存在')
//     // console.log(employeebase[0].get('name'))
//     // console.log(employeebase[1].get('name'))
//     // console.log(employeebase[2].get('name'))
//     // console.log('------')
//     console.log("符合条件的数据有", employeebase.count)
//     console.log("目前只展示第", employeebase.rows.length)
//     console.log(employeebase.rows[0].get('name'))
//     console.log(employeebase.rows[1].get('name'))
// }).catch(error => {
//     console.log('用户不存在')
// })


// 已创建数据表
// let birthday = new Date(1991, 9, 14)
// let startwork = new Date(2018, 6, 16)
// EmployeeBase.create({
//     name: '李欣',
//     sex: '女',
//     nation: '汉族',
//     birthday,
//     hometown: '晋城市高平',
//     birthplace: '晋城市城区',
//     idNum: '444444444444444444',
//     address: '晋城市泽州路凤翔小区',
//     phone: '15303564444',
//     health: '健康',
//     education: '硕士研究生',
//     degree: '硕士',
//     major: '金融学',
//     politicalStatus: '党员',
//     photo: 'lixin',
//     department: '人力资源部',
//     job: '职员',
//     startwork
// });


// name: '李卓远',
//         sex: '男',
//         nation: '汉族',
//         birthday,
//         hometown: '晋城市城区',
//         birthplace: '晋城市城区',
//         idNum: '111111111111111111',
//         address: '泽州路邮电局',
//         phone: '15303561111',
//         health: '健康',
//         education: '本科',
//         degree: '学士',
//         major: '计算机科学与技术',
//         politicalStatus: '共青团员',
//         photo: 'lizhuoyuan',
//         department: '人力资源部',
//         job: '职员',
//         startwork
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

const EmployeeOther = sequelize.define('employeeOther', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    startwork: {
        type: Sequelize.STRING
    },
    startCPC: {
        type: Sequelize.STRING
    },
    startCCYL: {
        type: Sequelize.STRING,
    },
    startCDP: {
        type: Sequelize.STRING,
    },
    //历次何时经由何部门审批通过何专业技术职务任职资格及现所聘专业技术职务
    techpost: {
        type: Sequelize.STRING,
    },
    //何时经由何部门审批通过何专业技术工种、何技术等级资格及现所聘专业技术工种等级职务
    techlevel: {
        type: Sequelize.STRING,
    },
    // 何年何月何机关授予何军种、警衔
    police: {
        type: Sequelize.STRING
    },
    // 何年何月至何年何月参加何单位举办的政治理论或业务培训（包括各级党校培训或学习）
    train: {
        type: Sequelize.STRING,
    },
    // 有何业务技术专长、重要发明创造、科研成果、著作、译著
    create: {
        type: Sequelize.STRING,
    },
    // 何时何处参加何社会团体，任何职务
    socialgroup: {
        type: Sequelize.STRING
    },
    // 有何宗教信仰
    religion: {
        type: Sequelize.STRING
    },
    // 何年何月出国（境）及参加重大国际性活动的情况
    internation: {
        type: Sequelize.STRING
    },
    // 掌握何种外语或少数民族语言及其他技能情况
    language: {
        type: Sequelize.STRING
    },
    // 何时何处何原因受过何种奖励
    award: {
        type: Sequelize.STRING
    },
    // 何时何处何原因受过何种处分
    punish: {
        type: Sequelize.STRING
    },
    // 历史上参加过何种反动组织，任何职务，有何结论
    negative: {
        type: Sequelize.STRING
    },
    // “文化大革命”中犯有何种错误，组织意见如何
    revolution: {
        type: Sequelize.STRING
    },
    // 学习简历
    study_exp: {
        type: Sequelize.STRING
    },
    // 工作经历
    work_exp: {
        type: Sequelize.STRING
    },
    // 政治经历
    politics_exp: {
        type: Sequelize.STRING
    },
    // 配偶信息
    mate: {
        type: Sequelize.STRING
    },
    // 家庭成员信息
    family: {
        type: Sequelize.STRING
    },
    // 社会关系信息
    social_rela: {
        type: Sequelize.STRING
    }
},
    {
        freezeTableName: true, // Model 对应的表名将与model名相同
        timestamps: false
    })

EmployeeOther.sync()

module.exports = EmployeeOther
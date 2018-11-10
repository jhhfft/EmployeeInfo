var express = require('express');
var router = express.Router();

var fs = require('fs')
var multer = require('multer')

const EmployeeBase = require('../models/employeeBase');
const EmployeeOther = require('../models/employeeOther');

let portrait_dir = ''
// // 使用硬盘存储模式设置存放接收到的文件的路径以及文件名
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 接收到文件后输出的保存路径（若不存在则需要创建）
    cb(null, 'public/upload-img/');
  },
  filename: function (req, file, cb) {
    // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
    portrait_dir = req.body.name + '-' + Date.now() + '-' + file.originalname
    cb(null, portrait_dir);
  }
});

// 创建文件夹
var createFolder = function (folder) {
  try {
    // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
    // 如果文件路径不存在将会抛出错误"no such file or directory"
    fs.accessSync(folder);
  } catch (e) {
    // 文件夹不存在，以同步的方式创建文件目录。
    fs.mkdirSync(folder);
  }
};

var uploadFolder = './public/upload-img';
createFolder(uploadFolder);
// 创建 multer 对象
var upload = multer({ storage: storage });


const getBaseInfo = (queryResult) => {
  const baseTitle = ['name', 'sex', 'birthday', 'workdate', 'phone', 'hometown', 'education', 'major', 'politicalStatus', 'department', 'job', 'startwork', 'id'];
  const finalResult = []
  queryResult.forEach((item, index) => {
    finalResult[index] = {}
    baseTitle.forEach(title => {
      finalResult[index][title] = item.get(title)
    })
  })
  return finalResult
}

const basePostFunc = async (req, res, next) => {
  // const {name, sex, birthday, hometown, education, major, idNum, phone, politicalStatus, department, job} = req.body;
  if (req.session.user) {
    // 未登录
    res.send({
      code: 0,
      state: 'fail'
    })
    return
  } else {
    // console.log("rrrrrrrrrrrrrrrrrrrr", req.body)
    const opts = {}
    // opts.where = req.body.where;
    opts.where = {...req.body.where}
    const current = req.body.current
    const pageSize = req.body.pageSize
    opts.offset = (current - 1) * pageSize
    opts.limit = pageSize
    const queryResult = await EmployeeBase.findAndCountAll(opts)
    const total = queryResult.count
    const currentPageEmployee = getBaseInfo(queryResult.rows)
    res.send({
      code: 1,
      state: 'success',
      employee: currentPageEmployee,
      total
    })
  }

  // const result = EmployeeBase.findAll(opts)
}

const getDetailFunc = async (req, res, next) => {
  // console.log(req.query.id)
  if (req.session.user) {
    // 未登录
    res.send({
      code: 0,
      state: 'fail'
    })
    return
  } else {
    const opts = {}
    opts.where = { id: req.query.id }
    const baseResult = await EmployeeBase.findOne(opts)
    const otherResult = await EmployeeOther.findOne(opts)
    // console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbb')
    // console.log(baseResult)
    // console.log(otherResult)
    let birthday = new Date(baseResult.dataValues.birthday)
    let workdate = new Date(baseResult.dataValues.workdate)
    res.render('employeeDetail', { ...baseResult.dataValues, ...otherResult.dataValues, birthday: birthday.toLocaleDateString(), workdate: workdate.toLocaleDateString() });
  }



}

const addEmployeeFunc = (req, res, next) => {
  res.render('employee', { id: 1 });
}

const postEmployeeFunc = async (req, res, next) => {
  // var name = req.body.name
  // console.log(req.body)
  // var file = req.file;
  // console.log(file)
  // console.log('文件类型：%s', file.mimetype);
  // console.log('原始文件名：%s', file.originalname);
  // console.log('文件大小：%s', file.size);
  // console.log('文件保存路径：%s', file.path);
  // 接收文件成功后返回数据给前端
  // res.json({ res_code: '0' });
  let { name, sex, nation, hometown, education, birthplace, degree,
    health, school, politicalStatus, idNum, phone, address, job, department,
    postLevel, postRatio, postSalary, marriage, startwork, startCPC, startCCYL,
    startCDP, techpost, techlevel, police, train, create, socialgroup, religion,
    internation, language, award, punish, negative, revolution, study_exp, work_exp, politics_exp, mate,
    family, social_rela } = req.body
  let birthday = new Date(req.body.birthday)
  let workdate = new Date(req.body.workdate)
  let portrait = 'upload-img/' + portrait_dir
  // console.log(portrait)

  // console.log({
  //     name, sex, portrait, nation, birthday, hometown, education, birthplace, degree, 
  //     health, school, politicalStatus, idNum, phone, address, job, department,
  //     workdate, postLevel, postRatio, postSalary, marriage
  //   })
  try {
    const BaseResult = await EmployeeBase.create({
      name, sex, portrait, nation, birthday, hometown, education, birthplace, degree,
      health, school, politicalStatus, idNum, phone, address, job, department,
      workdate, postLevel, postRatio, postSalary, marriage
    })
    EmployeeOther.create({
      id: BaseResult.dataValues.id, startwork, startCPC, startCCYL,
      startCDP, techpost, techlevel, police, train, create, socialgroup,
      religion, internation, language, award, punish, negative, revolution,
      study_exp, work_exp, politics_exp, mate, family, social_rela
    })
    res.send({
      code: 1,
      state: 'success'
    })
  } catch (err) {
    res.send({
      code: 0,
      state: 'fail'
    })
  }

}

const getUpdatePageFunc = async (req, res, next) => {
  // console.log(req.query.id)
  if (req.session.user) {
    // 未登录
    res.send({
      code: 0,
      state: 'fail'
    })
    return
  } else {
    const opts = {}
    opts.where = { id: req.query.id }
    const baseResult = await EmployeeBase.findOne(opts)
    const otherResult = await EmployeeOther.findOne(opts)
    // console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbb')
    // console.log(baseResult)
    // console.log(otherResult)
    let birthday = new Date(baseResult.dataValues.birthday)
    let workdate = new Date(baseResult.dataValues.workdate)
    res.render('employeeUpdate', { ...baseResult.dataValues, ...otherResult.dataValues, birthday: birthday.toLocaleDateString(), workdate: workdate.toLocaleDateString() });
  }
}

const postUpdateFunc = async (req, res, next) => {
  let { name, sex, nation, hometown, education, birthplace, degree,
    health, school, politicalStatus, idNum, phone, address, job, department,
    postLevel, postRatio, postSalary, marriage, startwork, startCPC, startCCYL,
    startCDP, techpost, techlevel, police, train, create, socialgroup, religion,
    internation, language, award, punish, negative, revolution, study_exp, work_exp, politics_exp, mate,
    family, social_rela } = req.body
  let birthday = new Date(req.body.birthday)
  let workdate = new Date(req.body.workdate)

  let portrait = null
  if (!req.file) {
    const baseInfo = await EmployeeBase.findOne({ where: { id: req.query.id } })
    portrait = baseInfo.dataValues.portrait
  } else {
    portrait = 'upload-img/' + portrait_dir
  }

  try {
    await EmployeeBase.update({
      name, sex, portrait, nation, birthday, hometown, education, birthplace, degree,
      health, school, politicalStatus, idNum, phone, address, job, department,
      workdate, postLevel, postRatio, postSalary, marriage
    }, { where: { id: req.query.id } })
    await EmployeeOther.update({
      startwork, startCPC, startCCYL,
      startCDP, techpost, techlevel, police, train, create, socialgroup,
      religion, internation, language, award, punish, negative, revolution,
      study_exp, work_exp, politics_exp, mate, family, social_rela
    }, { where: { id: req.query.id } })
    res.send({
      code: 1,
      state: 'success'
    })
  } catch (err) {
    res.send({
      code: 0,
      state: 'fail'
    })
  }
}

const deleteEmployeeFunc = async (req, res, next) => {
  if (req.session.user) {
    // 未登录
    res.send({
      code: 0,
      state: 'fail'
    })
    return
  }
  const { id, current, pageSize, where } = req.body
  try {
    await EmployeeBase.destroy({ where: { id } })
    await EmployeeOther.destroy({ where: { id } })
  } catch (err) {
    res.send({
      code: 2,
      state: 'fail'
    })
    return
  }

  try {
    const opts = {}
    opts.where = where
    opts.offset = (current - 1) * pageSize
    opts.limit = pageSize
    const queryResult = await EmployeeBase.findAndCountAll(opts)
    const total = queryResult.count
    const currentPageEmployee = getBaseInfo(queryResult.rows)
    res.send({
      code: 1,
      state: 'success',
      employee: currentPageEmployee,
      total
    })
  } catch (err) {
    res.send({
      code: 2,
      state: 'fail'
    })
  }

}

router.post('/base', basePostFunc);
router.get('/detail', getDetailFunc);
router.get('/addpage', addEmployeeFunc);
router.post('/save', upload.single('portrait'), postEmployeeFunc);
router.get('/updatepage', getUpdatePageFunc);
router.post('/update', upload.single('portrait'), postUpdateFunc);
router.post('/delete', deleteEmployeeFunc);

module.exports = router;
var express = require('express');
var router = express.Router();

const EmployeeBase = require('../models/employeeBase');

const getBaseInfo = (queryResult) => {
  const baseTitle = ['name','sex','birthday','phone','hometown','education','major','politicalStatus','department','job','startwork','id'];
  const finalResult = []
  queryResult.forEach((item, index) => {
    finalResult[index]={}
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
    console.log("rrrrrrrrrrrrrrrrrrrr",req.body)
    const opts = {}
    opts.where= req.body.where;
    const current = req.body.current
    const pageSize = req.body.pageSize
    opts.offset = (current-1)*pageSize
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



router.post('/base', basePostFunc);

module.exports = router;
var express = require('express')
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
    const opts = req.body;
    const queryResult = await EmployeeBase.findAll(opts)
    const finalResult = getBaseInfo(queryResult)
    res.send({
      code: 1,
      state: 'success',
      employee: finalResult
    })
  }

  // const result = EmployeeBase.findAll(opts)
}



router.post('/base', basePostFunc);

module.exports = router;
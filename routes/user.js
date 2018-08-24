var express = require('express');
var router = express.Router();

const User = require('../models/user');

/* GET home page. */
router.post('/', function(req, res, next) {
  // console.log(req.body)
  const { username, password } = req.body;
  const opts = {
    where: {
      username, password
    }
  }
  User.findAll(opts).then(result=>{
    if(result.length>0){
      // 用户存在
      console.log(result[0].level)
      req.session.user = {
        username: req.body.username,
        level: result[0].level
      };
      res.send({
        code: 1,
        state: 'ok'
      })
    }else{
      // 用户不存在
      res.send({
        code: 0,
        state: 'fail'
      })
    }
  }).catch(error => {
    console.log(error)
  })
  
});

module.exports = router;

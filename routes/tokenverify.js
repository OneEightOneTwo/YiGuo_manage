var express = require('express');
var router = express.Router();
// var db=require('../db/mysql.js');
var token=require('../libs/token.js');
/* GET home page. */
router.post('/',function(req, res, next) {
    // console.log(req.body);
    
    let {token} = req.body;
    //验证token
    let res = verify(token);
    if(res){
        ctx.body = {
            status:200,
            msg:'success'
        }
    }else{
        ctx.body = {
            status:302,
            msg:'fail'
        }
    }
    // res.send('登录路由信息');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var db=require('../db/mysql.js');
var token=require('../libs/token.js');
/* GET home page. */
router.post('/',async function(req, res, next) {
    // console.log(req.body);
    let {
        username,
        password,
        _mdl
    }=req.body;
    await db(`SELECT * FROM users WHERE username="${username}" AND psw='${password}'`,null,data=>{
        // console.log(data);
        let resturn=data[0];
        if(resturn){
            //登录成功：发令牌
            let _token=token.create(username);
            res.json({
                id:resturn.id,
                username:resturn.username,
                sex:resturn.sex,
                identity:resturn.identity,
                mdl:_mdl,
                token:_token
            })
        }else{
            res.json({
                code:100,
                msg:'fail'
            })
        }
    });
    // res.send('登录路由信息');

});

module.exports = router;

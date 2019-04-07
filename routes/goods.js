var express = require('express');
var router = express.Router();
var db=require('../db/mysql.js');

/* GET home page. */
router.post('/addgoods', async(req, res, next) =>{
    // console.log(req.body);
    let {
        name,
        picture,
        classify,
        oldprice,
        nowprice,
        inventory,
        status,
        introduce,
    }=req.body;
    // await console.log(name,picture,classify,oldprice,nowprice,inventory,status,introduce);
    await db(`INSERT INTO goodslist(name,picture,classify,oldprice,nowprice,inventory,addTime,status,introduce) VALUES('${name}','${picture}','${classify}','${oldprice}','${nowprice}','${inventory}','${Date.now()}','${status}','${introduce}')`,null,(data)=>{
        // console.log(data);
        var {affectedRows}=data;
        if(affectedRows>0){
            res.send('success');
        }else{
            res.send('faile');
        }
    })
    // res.send('添加商品');
});


module.exports = router;

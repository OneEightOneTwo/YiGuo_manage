var express = require('express');
var router = express.Router();
var db=require('../db/mysql.js');
/* GET home page. */
router.get('/', async(req, res, next)=> {
    await db('SELECT * FROM category',null,(data)=>{
        // console.log(data);
        res.send(data);
    })
    // res.send('商品分类路由信息');
});

router.get('/delectOne', async(req, res, next)=> {
    // await console.log(req.query);
    let {currentId}=req.query;
    await db(`DELETE FROM category WHERE id=${currentId}`,null,(data)=>{
        // console.log(data);
        // res.send(data);
        var {affectedRows}=data;
        if(affectedRows>0){
            res.send('success');
        }else{
            res.send('faile');
        }
    })
});

router.post('/query', async(req, res, next)=> {
    // await console.log(req.body);
    let {addtxt}=req.body;
    await db(`SELECT * FROM category where category ='${addtxt}'`,null,(data)=>{
        // console.log(data);
        if(data.length>0){
            //数据已存在==exist
            res.send('exist');
        }else{
            res.send('no-exist');
        }
        // res.send(data);
    })
});

router.post('/addOne', async(req, res, next)=> {
    // await console.log(req.body);
    let {addtxt}=req.body;
    await db(`INSERT INTO category(category,addTime) VALUES('${addtxt}','${Date.now()}')`,null,(data)=>{
        // console.log(data);
        var {affectedRows}=data;
        if(affectedRows>0){
            res.send('success');
        }else{
            res.send('faile');
        }
    })
});

module.exports = router;










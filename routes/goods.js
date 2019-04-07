var express = require('express');
var router = express.Router();
let db = require('../db/mysql');//引入mysql连接

//查询整个数据库进行渲染
router.get('/all', async(req, res, next) =>{
    await db('select * from goodslist', null, (data) => {
        // console.log(data); 
    res.send(data);
    })
});

//价格升序
router.get('/up', async(req, res, next) =>{
    await db('SELECT * from goodslist ORDER BY newprice ASC ', null, (data) => {
        // console.log(data); 
    res.send(data);
    })
});
//价格降序
router.get('/down', async(req, res, next) =>{
    await db('SELECT * from goodslist ORDER BY newprice DESC ', null, (data) => {
        // console.log(data); 
    res.send(data);
    })
});
//库存升序
router.get('/upInventory', async(req, res, next) =>{
    await db('SELECT * from goodslist ORDER BY inventory ASC ', null, (data) => {
        // console.log(data); 
    res.send(data);
    })
});
//库存降序
router.get('/downInventory', async(req, res, next) =>{
    await db('SELECT * from goodslist ORDER BY inventory DESC ', null, (data) => {
        // console.log(data); 
    res.send(data);
    })
});
//商品名称查询
router.get('/searchName', async(req, res, next) =>{
    let {name}=req.query;
    // console.log(name);
    await db(`SELECT * FROM goodslist where name like "%${name}%"`, null, (data) => {
        // console.log(data); 
    res.send(data);
    })
});
//商品分类查询
router.get('/searchClassify', async(req, res, next) =>{
    let {classify}=req.query;
    await db(`SELECT * FROM goodslist where classify like "%${classify}%"`, null, (data) => {
        // console.log(data); 
    res.send(data);
    })
});
//编辑时前端传id进行数据库查询来渲染
router.get('/id', async(req, res, next) =>{
    let {id}=req.query;
    await db(`select * from goodslist where id ='${id}'`, null, (data) => {
               // console.log(data.length); 
    res.send(data);
  }); 
 });
 //编辑确定时把价格和库存量数据更新到数据库
 router.get('/price', async(req, res, next) =>{
    let {newprice,inventory,id}=req.query;
    await db(`UPDATE goodslist set newprice = '${newprice}' ,inventory = '${inventory}' where id = ${id}`, null, (data) => {
               // console.log(data.length); 
    res.send(data);
  }); 
 });
//编辑确定时把价格数据更新到数据库
  router.get('/priceOne', async(req, res, next) =>{
    let {newprice,id}=req.query;
    await db(`UPDATE goodslist set newprice = '${newprice}' where id = ${id}`, null, (data) => {
               // console.log(data.length); 
    res.send(data);
  }); 
 });
 //编辑确定时把库存量数据更新到数据库
 router.get('/priceTwo', async(req, res, next) =>{
    let {inventory,id}=req.query;
    await db(`UPDATE goodslist set inventory = '${inventory}' where id = ${id}`, null, (data) => {
               // console.log(data.length); 
    res.send(data);
  }); 
 });
//点击删除时对当行数据进行删除
router.get('/delete', async(req, res, next) =>{
    let {id}=req.query;
    await db(`DELETE from goodslist where id = ${id}`, null, (data) => {
               // console.log(data.length); 
    res.send(data);
  }); 
 });
//分页
router.get('/data', async(req, res, next) =>{
    let {page,qty}=req.query;
    await db(`select * from goodslist limit ${(page-1)*qty},${qty}` , null, (data) => {
        // console.log(data); 
    res.send(data);
    })
});


module.exports = router;

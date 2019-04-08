var express = require('express');
var router = express.Router();
var db=require('../db/mysql.js');

/* GET home page. */
router.post('/',async function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.body);
  let {
      page,
      qty
  }=req.body;
  var index=(page-1)*qty;
  await db(`SELECT * FROM orders limit ${index},${qty}`,null,(data)=>{
    // console.log(data);
    res.send(data);
  })
  // res.send('返回订单列表数据');
});

router.post('/searchname',async function(req, res, next) {
  // console.log(req.body);
  let {
     name
  }=req.body;
<<<<<<< HEAD
  await db(`SELECT * FROM orders where name='${name}'`,null,(data)=>{
=======
  await db(`SELECT * FROM orders where name LIKE '%${name}%'`,null,(data)=>{
>>>>>>> dev
    // console.log(data);
    res.send(data);
  })
});


router.post('/searchcontact',async function(req, res, next) {
  // console.log(req.body);
  let {
     contact
  }=req.body;
  await db(`SELECT * FROM orders where contact='${contact}'`,null,(data)=>{
    // console.log(data);
    res.send(data);
  })
});
module.exports = router;

var express = require('express');
var router = express.Router();
let db = require('../db/mysql');//引入mysql连接

//整个用户列表查询
router.get('/all', async(req, res, next)=> {
    await db('select * from users', null, (data) => {
                // console.log(data); 
    res.send(data);
 }); 
});
//修改用户名或添加用户信息时查询用户名是否存在
router.get('/name', async(req, res, next) =>{
   let {username}=req.query;
   await db(`select * from users where username ='${username}'`, null, (data) => {
              // console.log(data.length); 
          if(data.length == 0){//用户名不存在
            res.send('0')
          }else{//用户名存在
            res.send('1')
          }
 }); 
});
//修改用户名及身份
router.post('/update', async(req, res, next) =>{
   let {username,identity,id}=req.body;
  //  console.log(username,identity,id);
   await db(`UPDATE users set username = '${username}' ,identity = '${identity}' where id = ${id}`, null, (data) => {
    res.send(data); 
 }); 
});
//只修改身份
router.post('/updates', async(req, res, next) =>{
  let {identity,id}=req.body;
  // console.log(identity,id);
  await db(`UPDATE users set  identity = '${identity}' where id = ${id}`, null, (data) => {
    res.send(data);
}); 
});
//点击删除
router.post('/deleteOne', async(req, res, next) =>{
  let {id}=req.body;
  // console.log(identity,id);
  await db(`DELETE from users where id = ${id}`, null, (data) => {
    res.send(data);  
}); 
});




//添加用户时把数据插入到数据库
router.post('/message', async(req, res, next) =>{
  let {username,psw,identity,sex}=req.body;
  // console.log(username,psw,identify,sex);
  await db(`INSERT into users (username,psw,identity,sex,time) VALUES('${username}','${psw}','${identity}','${sex}','${Date.now()}')`, null, (data) => {
    res.send(data);
}); 
});
module.exports = router;

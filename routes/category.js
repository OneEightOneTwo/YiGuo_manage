var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    //req.body 接收前端（客户端）发送过来的数据
    //res.send 给前端（客户端）返回数据
    res.send('商品分类路由信息');
});

module.exports = router;

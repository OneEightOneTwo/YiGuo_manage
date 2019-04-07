var express = require('express');
var router = express.Router();
var db=require('../db/mysql.js');
// var uniq=require('../libs/uniq.js');
/* GET home page. */
router.get('/',async function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // res.send('首页路由信息');
    await db('select * from orders',null,(data)=>{
        // console.log(data);
        let address=[];
        data.forEach(item=>{
            address.push(item.address);
        });
        // console.log(address);
        // var num=[];
        
        //组装x轴数据
        //去重
        var address1=uniq(address); 
        //组装y轴数据
        var total=[];
        for(var i=0;i<address1.length;i++){
            var resture=address.filter(function(item){
                return item==address[i];
            });
            total.push(resture.length);
        }
        // console.log(address1,total);
        //注意：不要进行mysql查询的循环操作,影响性能
        // for(var i=0;i<address.length;i++){
        // // var total='';
        //     db(`SELECT * FROM orders WHERE address='${address[i]}'`,null,data=>{
        //     // console.log(data.length);
        //     var total=data.length;
        //     // console.log(total);
        //     // num.push(total);
        //     // return num;
        //     add(num,total);
        //     })
        // // console.log(num);

        // }
        // function add(num,total){
        //     num.push(total);
        //     return num;
        // }
        // var res=add(num);
        
        // console.log(res);
        res.json(
             {
                title: {
                    text: '商品销售地区的直观图'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    // data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    data:address1
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    // data: [5, 20, 36, 10, 10, 20, 10, 10, 20]
                    data:total
                }]
            }
        )
    })
    
    //======封装去重的方法====
    function uniq(array){
        //数组去重封装
        var temp=[];//一个新的临时数组
        for(var i=0;i<array.length;i++){
            if(temp.indexOf(array[i])==-1){
                temp.push(array[i]);
            }
        }
        return temp;
    }
});

module.exports = router;

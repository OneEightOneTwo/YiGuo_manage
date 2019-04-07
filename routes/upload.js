var express = require('express');
var router = express.Router();
var multer = require("multer");
/* GET home page. */
// router.post('/', function(req, res, next) {
//     // console.log(req.body);
//     console.log(req.files);
//     let {file}=req.files;
//     console.log(file);
//     res.send('商品图片上传');
// });



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        var str = file.originalname.split('.');
        cb(null, Date.now()+'.'+str[1]);
    }
})
var upload = multer({ storage: storage });
router.post("/",upload.array("file",20),function(req,res,next){
    // console.log(req.files)
    var arr = [];
    for(var i in req.files){
        
        arr.push(req.files[i].filename);
    }
    res.json({
        code:200,
        data:arr
    })

})


module.exports = router; 
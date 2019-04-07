$(()=>{
    //======================选择图片并显示出来========================
    var input=document.getElementById("uploadfile");
    var div;
    // 当用户上传时触发事件
    input.onchange=function(){
        readFile(this);
    }
    //处理图片并添加都dom中的函数
    var readFile=function(obj){
        // 获取input里面的文件组
        var fileList=obj.files;
        // console.log(fileList);
        //对文件组进行遍历，可以到控制台打印出fileList去看看
        for(var i=0;i<fileList.length;i++){
            var reader= new FileReader();
            reader.readAsDataURL(fileList[i]);
             // 当文件读取成功时执行的函数
            reader.onload=function(e){
                div=document.createElement('div');
                div.innerHTML='<img src="'+this.result+'" />';
                document.getElementById("img-box").appendChild(div);
            }
        }

    }

    //=======渲染商品列表==========
    $.ajax({
        type:'get',
        url:'http://localhost:10086/category',
        data:{},
        async:true,
        success:function(str){
            // fn(str);
            console.log(str);
            var res='<option value="">选择商品分类</option>';
            res+=str.map(function(item,idx){
              return `<option value="${item.category}">${item.category}</option>`;
            }).join('');
            
            $('.add_categroy').html(res);
        }
     });    


//=====添加商品信息
//思路：等图片传到了服务器，然后再插入数据库
// var on=$('.layui-form-switch').hasClass('layui-form-onswitch');
// console.log(on);
var off='下线';



//============表单============
//Demo
layui.use('form', function(){
  var form = layui.form;
  //======点击之后上线下线的变化===========
  $('.layui-input-block div').on('click',function(){
    var on=$('.layui-form-switch').hasClass('layui-form-onswitch');
    if(on){
        off='上线';
    }else{
        off="下线";
    }
});



  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});

$('#addBtn').on('click',function(){
    console.log(off);
});
//========================================
    $('#addBtn').on('click',function(){
        var name=$('.name').val();
        var category=$('select').val();
        var oldprice=$('.oldprice').val();
        var nowprice=$('.nowprice').val();
        var inventory=$('.inventory').val();
        var introduce=$('.introduce').val();



        // console.log(input.files);
        var formData=new FormData();
        for(var i=0;i<input.files.length;i++){
            formData.append('file',input.files[i]);
            // console.log(11);
        }
        // console.log(formData.get('file'));
        $.ajax({
            url:'http://localhost:10086/upload',
            type:'post',
            data:formData,
            cache: false,
            contentType: false,
            processData: false,
        }).done(res=>{
            console.log(res);
            //几张图片放一块
            var picture='';
            for(var i=0;i<res.data.length;i++){
                // res.data[i].replace("public\images\", "")
                picture+=res.data[i]+'&';
            }
            // console.log(picture);
            //图片上传到数据库成功
            if(res.code==200){
                console.log(name,category,nowprice,inventory,introduce)
                if(name&&category&&nowprice&&inventory&&introduce){
                    console.log(picture)
                    $.ajax({
                        type:'post',
                        url:'http://localhost:10086/goods/addgoods',
                        data:{
                            name,
                            picture,
                            "classify":category,
                            oldprice,
                            nowprice,
                            inventory,
                            introduce,
                            "status":off
                        },
                    }).done(res=>{
                        console.log(res);
                        if(res=="success"){
                            location.href="./goodlist.html?";
                        }else{
                            alert('添加商品失败');
                        }
                    });
                }else{
                    alert('信息不完整');
                }
            }
        });
    })



    //=======用户名渲染=================
    showUsername();

    //点击退出按键
    outUsername();
});










// function uploadFile(){
//             var file = document.getElementById("file")
//             var formData = new FormData();
//             for(var i in file.files){//这里如果单张上传就不必遍历直接formData.append('file',file.files[0])
//                     formData.append('file',file.files[i]);
//             }
//             $.ajax({
//                 url: '/upload',
//                 type: 'POST',
//                 data: formData,
//                 cache: false,
//                 contentType: false,
//                 processData: false,
//                 success: function(data){
//                     if(200 === data.code) {
//                         $('#result').html("上传成功！");
//                         $('#img').attr('src',data.data);
//                     } else {
//                         $('#result').html("上传失败！");
//                     }
//                     console.log('imgUploader upload success');
//                 },
//                 error: function(){
//                     $("#result").html("与服务器通信发生错误");
//                 }
//             });
//         }
        
//         function postPage() {
//             var uploada = document.getElementById('upload');
//             uploada.addEventListener("click",function () {
//                 uploadFile();
//             },false);
//         }
        
//         window.onload = function () {
//             postPage();
//         }


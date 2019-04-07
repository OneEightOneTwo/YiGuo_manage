$(()=>{
    //=====渲染订单列表的页面（初始化数据）====
    showAll();
    function showAll(){
        $.ajax({
            type:'get',
            data:'',
            url:'http://localhost:10086/category',
        }).done(res=>{
            console.log(res);
            show(res);
            //========删除一条数据==========
            delOne();

        });
    }
    //================================
     //点击增加商品类别，出来弹窗
    $('.addBtn').on('click',function(){
      $('.addCategory').css('display','block');
      // layuiLayout.style.opacity = '0.8';
      // categoryShade.style.opacity = '1';
      // $('.layuiLayout').css('opacity','0.8');//加不上属性
    });
    // editBtn

    
    // //点击弹窗的X,弹窗隐藏
    $('.categoryClose').on('click',function(){
      $('.addCategory').css('display','none');
      $('.editCategory').css('display','none');

    //   layuiLayout.style.opacity = '1';
    //   $('#cateVal').val('');
    });

     //点击增加商品类别，出来弹窗




    //============添加商品分类=================
    //思路是：先查询再添加
    // function add(){

    // }
    $('#addAlterBtn').on('click',function(){
        var addtxt=$('#addtxt').val();
        if(addtxt){
            // console.log(addtxt);
            // 查询
            $.ajax({
                type:'post',
                url:'http://localhost:10086/category/query',
                data:{
                    'addtxt':addtxt,
                },
            }).done(function(res){
                // console.log(res);
                if(res=='exist'){
                    alert('商品分类名已存在');
                }else{
                    $.ajax({
                        type:'post',
                        url:'http://localhost:10086/category/addOne',
                        data:{
                            'addtxt':addtxt,
                        },
                    }).done(res=>{
                        console.log(res);
                        if(res=='success'){
                             showAll();
                             $('#addtxt').val('')
                            $('.addCategory').css('display','none');
                            // alert('删除数据成功');
                        }else{
                            alert('添加数据失败');
                        }
                    });
                }
            });
        }else{
            alert('添加的内容不能为空');
        }
    });
//============================封装函数================================
    //=========初始化第一页数据================
    function show(res){
        var html=res.map((item,idx)=>{
            //时间
            var newDates = item.addTime;
            var date = new Date(item.addTime*1);
            Y = date.getFullYear() + '-';
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            D = date.getDate() + ' ';
            h = date.getHours() + ':';
            m = date.getMinutes() + ':';
            s = date.getSeconds(); 

            return `<tr data-id=${item.id}>
                        <td>${idx+1}</td>
                        <td>${item.category}</td>
                        <td>${Y+M+D+h+m+s}</td>
                        <td >
                          <button class="layui-btn layui-btn-sm delBtn"><i class="layui-icon"></i></button>
                        </td>
                    </tr>`;
        }).join('');
        $('tbody').html(html);
    }

    //============删除一条数据=============
    function delOne(){
        $('tbody .delBtn').on('click',function(){
            // console.log($(this));
            var currentId=$(this).parent().parent().attr('data-id');
            // console.log(currentId);
            var currentTr=$(this).parent().parent();
            var resDel=confirm("你确定要删除？");
            if(resDel){
                $.ajax({
                    type:'get',
                    url:'http://localhost:10086/category/delectOne',
                    data:{
                       currentId:currentId,
                    },
                }).done(res=>{
                    // console.log(res);
                    if(res=='success'){
                        currentTr.remove();
                        showAll();
                        // alert('删除数据成功');
                    }else{
                        alert('删除数据失败');
                    }
                })
            }else{
                return false;
            }
            
        })
    }



    //=======用户名渲染=================
    showUsername();

    //点击退出按键
    outUsername();

})
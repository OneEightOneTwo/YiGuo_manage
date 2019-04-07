 $(()=>{
    //=====渲染订单列表的页面（初始化数据）====
    $.ajax({
        type:'post',
        data:'page=1&qty=10',
        url:'http://localhost:10086/order',
    }).done(res=>{
        console.log(res);
        show(res);
    });


    //点击商品查询按键时
    $('.goods-search').on('click',function(){
        var goods=$('#goods-txt').val();
        if(goods){
            $.ajax({
                type:'post',
                data:{
                    name:goods,
                },
                url:'http://localhost:10086/order/searchname',
            }).done(res=>{
                // console.log(res);
                show(res);
                $('#goods-txt').val('');
            });
        }else{
            alert('请输入需要查询的商品名称');
        }
    })


    //点击联系人查询按键时
    $('.contact-search').on('click',function(){
        var contact=$('#contact-txt').val();
        // console.log(11)
        if(contact){
            $.ajax({
                type:'post',
                data:{
                    contact,
                },
                url:'http://localhost:10086/order/searchcontact',
            }).done(res=>{
                // console.log(res);
                show(res);
                $('#contact-txt').val('');
            });
        }else{
            alert('请输入需要查询的联系人');
        }
    })

//=========初始化第一页数据================
    function show(res){
        var html=res.map((item,idx)=>{
            return `<tr>
                        <td>${idx+1}</td>
                        <td>${item.orderNumber}</td>
                        <td>${item.name}</td>
                        <td>${item.total}</td>
                        <td>${item.placeOrder}</td>
                        <td>${item.placeTime}</td>
                        <td>${item.payState}</td>
                        <td>${item.orderSource}</td>
                        <td>${item.contact}</td>
                        <td>${item.tel}</td>
                    </tr>`;
        }).join('');
        $('tbody').html(html);
    }

    //=======点击哪一页跳转到对应的页======
    // layui.use('laypage', function(){
    //     var laypage = layui.laypage;

    //     //执行一个laypage实例
    //     laypage.render({
    //     elem: 'test1' //注意，这里的 test1 是 ID，不用加 # 号
    //     ,count: 50 //数据总数，从服务端得到
    //     });
    //     $('#test1 span').on('click',function(){
    //         // console.log($('#test1'));
    //         console.log($(this));
    //     })
    // });


    //=======用户名渲染=================
    showUsername();

    //点击退出按键
    outUsername();
    
});
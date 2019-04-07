$(function () {
    //-------商品列表数据渲染
         $.ajax({
        type: 'get',
        url: 'http://localhost:10086/goods/all',
        data: '',
        async: true,
        success: function (str) {
            show(str);//列表数据渲染调用
            all();//编辑弹窗调用
            $.ajax({
                type: 'get',
                url: 'http://localhost:10086/goods/data',
                data: {
                    'page':1,
                    'qty':6
                },
                async: true,
                success: function (str) {
                    show(str);
                    all()
                }
                
            })
            page(str);
            }

    })          
//------------------价格升序
    $('.downprice').on('click', function () {
        $('.page').css('display','none');
        $.ajax({
            type: 'get',
            url: 'http://localhost:10086/goods/up',
            data: '',
            async: true,
            success: function (str) {
                show(str);
                all();
            }
        })
    })
//---------------------价格降序
    $('.upprice').on('click', function () {
        $('.page').css('display','none');
        $.ajax({
            type: 'get',
            url: 'http://localhost:10086/goods/down',
            data: '',
            async: true,
            success: function (str) {
                show(str);
                all();
            }
        })
        all();
    })
//--------------------库存升序
    $('.downInventory').on('click', function () {
        $('.page').css('display','none')
        $.ajax({
            type: 'get',
            url: 'http://localhost:10086/goods/upInventory',
            data: '',
            async: true,
            success: function (str) {
                show(str);
                all();
            }
        })
    })
//-------------------------库存降序
    $('.upInventory').on('click', function () {
        $('.page').css('display','none');
        $.ajax({
            type: 'get',
            url: 'http://localhost:10086/goods/downInventory',
            data: '',
            async: true,
            success: function (str) {
                show(str);
                all();
            }
        })
    })
//-------------------商品查询
    $('.search').on('click', function () {
        $('.page').css('display','none')
        let name = $('.goodsname').val();
        $.ajax({
            type: 'get',
            url: 'http://localhost:10086/goods/searchName',
            data: {
                'name': name,
            },
            async: true,
            success: function (str) {
                show(str);
                all();
            }
        });
    })
//------------------分类查询
    $('.searchs').on('click', function () {
        $('.page').css('display','none');
        let classify = $('.classify').val();
        console.log(classify)
        $.ajax({
            type: 'get',
            url: 'http://localhost:10086/goods/searchClassify',
            data: {
                'classify': classify,
            },
            async: true,
            success: function (str) {
                show(str);
                all();
            }
        });
    })
//---------------点击编辑的关闭按钮时关闭
    $('.goodsCloses').on('click',function(){
        $('.goodEdit').css('display', 'none');
        $('.table').css('opacity', '1');
    })
//----------------点击添加跳转到添加商品页面
    $('.addBtn').on('click', function () {
        location.href = 'addgood.html'
    })

//--------------列表总数据渲染封装
    function show(str) {
        var res = str.map(function (item, idx) {
            //时间戳转成日期格式
            var newDates = item.addTime;
            // console.log(newDates)
            var date = new Date(newDates*1);
            Y = date.getFullYear() + '-';
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            D = date.getDate() + ' ';
            h = date.getHours() + ':';
            m = date.getMinutes() + ':';
            s = date.getSeconds(); 
            return `<tr data-id=${item.id}>
                    <td>${idx + 1}</td>
                    <td>${item.name}</td>
                    <td><img src="../images/${item.picture}" alt=""></td>
                    <td>${item.classify}</td>
                    <td>${item.sell}</td>
                    <td>${item.newprice}</td>
                    <td>${item.inventory}</td>
                    <th class='status'>${item.status}</th>
                    <td>${Y+M+D+h+m+s}</td>
                    <td>
                        <button class="layui-btn layui-btn-sm edit" style='margin-left: 15px;'>
                        <i class="layui-icon ">&#xe642;</i>
                        </button>
                        <button class="layui-btn layui-btn-sm delete">
                        <i class="layui-icon">&#xe640;</i>
                        </button>
                    </td>
                </tr>  `;
        }).join('');
        $('tbody').html(res);
    }

//编辑弹窗内容封装
    function all(){
        //--------点击编辑时跳出弹窗，对商品信息进行修改
    $('.edit').on('click', function () {
        $('.goodEdit').css('display', 'block');
        $('.table').css('opacity', '0.6');
        var currentId = $(this).parent().parent().attr('data-id');
        // console.log(currentId);
        $.ajax({
            type: 'get',
            url: 'http://localhost:10086/goods/id',
            data: {
                'id': currentId,
            },
            async: true,
            success: function (str) {
                // console.log(str)
                list(str);
                //点击取消时关闭弹窗
                $('.btnTwo').on('click',function(){
                    $('.goodEdit').css('display', 'none');
                    $('.table').css('opacity', '1');
                })
                //点击确定时把修改的数据更新到数据库
                $('.btnOne').on('click',function(){
                    let newprice = $('.new').val();
                    let inventory = $('.cun').val();
                    // console.log(newprice,inventory)
                    // console.log(currentId);
                    //两个都进行修改
                   if(newprice&&inventory){
                    $.ajax({
                        type: 'get',
                        url: 'http://localhost:10086/goods/price',
                        data: {
                            'id':currentId,
                            'newprice': newprice,
                            'inventory':inventory
                        },
                        async: true,
                        success: function (str) {
                        }
                    });
                   }else if(newprice&&!inventory){//只修改价格
                    $.ajax({
                        type: 'get',
                        url: 'http://localhost:10086/goods/priceOne',
                        data: {
                            'id':currentId,
                            'newprice': newprice,
                        },
                        async: true,
                        success: function (str) {
                        }
                    });
                   }else{//只修改库存量
                    $.ajax({
                        type: 'get',
                        url: 'http://localhost:10086/goods/priceTwo',
                        data: {
                            'id':currentId,
                            'inventory': inventory,
                        },
                        async: true,
                        success: function (str) {
                        }
                    });
                   }
                    $('.goodEdit').css('display', 'none');
                    $('.table').css('opacity', '1');
                    location.reload();
                })
            }
        });
    });

        //==========点击删除对当行数据进行删除
    $('.delete').on('click',function(){
        var currentId = $(this).parent().parent().attr('data-id');
        var res = confirm('您确定删除？')
        if(res){
             $.ajax({
            type: 'get',
            url: 'http://localhost:10086/goods/delete',
            data: {
                'id':currentId,
            },
            async: true,
            success: function (str) {

            }
        });
        location.reload();
        }
       
    });
}
//==========分页封装
function page(str){
    
    var pageNum = document.getElementById('page');
    var total = str.length;
    var num = Math.ceil(total /6);
    var html = '';
            for(var i =0;i<num;i++){
                html +=`<span class='dianji'>${i+1}</span>`
            }
            pageNum.innerHTML = html;
            pageNum.children[0].className = 'active';
            var pageNum = document.getElementById('page');
          
            pageNum.onclick = ev=>{
                var ev = ev || window.event;
                if(ev.target.tagName.toLowerCase()=='span'){
                    var num2 = ev.target.innerHTML;
                    // console.log(num2)
                    $.ajax({
                        type: 'get',
                        url: 'http://localhost:10086/goods/data',
                        data: {
                            'page':num2,
                            'qty':6
                        },
                        async: true,
                        success: function (str) {
                            show(str);
                            all();
                            for(var i =0;i<pageNum.children.length;i++){
                                pageNum.children[i].className = '';
                            }
                            ev.target.className = 'active';
                        }
                        
                    })
                }
            }
}
//-----------------编辑数据渲染封装
    function list(str) {
        var res = str.map(function (item) {
            return ` 
            <div class="EditConnect">
                <img src="../images/${item.picture}" alt="">
                <li>
                    <p>图片名称&nbsp;：${item.name}</p>
                    <p>分类&nbsp;：${item.classify}</p>
                    <p>已售出&nbsp;：${item.sell}</p>
                    <p>现价&nbsp;：<input type="text" placeholder="￥${item.newprice}" class="new"></p>
                    <p>库存&nbsp;：<input type="text" placeholder="${item.inventory}" class="cun"></p>
                    <p>添加时间&nbsp;：${item.addTime}</p>
                </li>
        </div>
        <div>
                <button class="layui-btn btnOne">确认修改</button>
                <button class="layui-btn btnTwo">取消修改</button>
        </div>`;
        }).join('');
        $('.goodEditBottom').html(res);
    }
})
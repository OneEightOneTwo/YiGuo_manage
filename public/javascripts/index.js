
$(()=>{
    //========================
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        $.ajax({
            type:'get',
            url:'http://localhost:10086/index'
        }).done(res=>{
            console.log(res);
            var option=res;
            // var option = {
            //     title: {
            //         text: '商品销售地区的直观图'
            //     },
            //     tooltip: {},
            //     legend: {
            //         data:['销量']
            //     },
            //     xAxis: {
            //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            //     },
            //     yAxis: {},
            //     series: [{
            //         name: '销量',
            //         type: 'bar',
            //         data: [5, 20, 36, 10, 10, 20]
            //     }]
            // };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        });


        //=======用户名渲染=================
        showUsername();

        //点击退出按键
        outUsername();


        //登录时的用户名渲染
        function showUsername(){
            // 通过cookie设置头部的用户名显示,如果不是登录状态，都跳转到登陆页面
            let userLocal=localStorage.getItem('users');
            let userSession=sessionStorage.getItem('users');
            if(userLocal||userSession){
                let username;
                if(userLocal){
                    username=JSON.parse(userLocal).username;
                }else{
                    username=JSON.parse(userSession).username;
                }
                // console.log(username);
                $('.layui-layout-right span').html(username);
            }else{
                location.href='html/login.html';
            }
        }

        //点击用户名退出按键

        function outUsername(){
            $('#outName').on('click',function(){
                localStorage.removeItem('users');
                sessionStorage.removeItem('users');
                location.reload();
            })
        }


        //涵涵========================
        //
        var myChart2 = echarts.init(document.getElementById('main2'));
        var myChart1 = echarts.init(document.getElementById('main1'));
        var arr=[];
        var cos = [];
        var cos1 =[];
        $.ajax({
            type: 'get',
            url: 'http://localhost:10086/goods/all',
            data: '',
            async: true,
            success: function (str) {
                // console.log(str)
                for(i=0;i<str.length;i++){
                    arr.push(str[i].name);//商品名称
                    cos.push(str[i].inventory);//商品库存
                    cos1.push(str[i].sell);//商品销售量
                }
                // console.log(arr)
                // console.log(cos)
    //===========商品库存量
        var option2 = {
            title: {
                text: '商品列表库存'
            },
            tooltip: {},
            legend: {
                data:['库存量']
            },
            xAxis: {
                data: arr
            },
            yAxis: {},
            series: [{
                name: '库存量',
                type: 'bar',
                data: cos
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option2);
    //===================商品销售量
        option1 = {
            title: {
                text: '商品销售量'
            },
            xAxis: {
                type: 'category',
                data: arr
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data:cos1,
                type: 'line',
                smooth: true
            }]
        };
        myChart1.setOption(option1);
            }
        });
        






})



// window.onload = () =>{
    
// }

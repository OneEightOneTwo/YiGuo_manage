window.onload = () =>{
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
    
}
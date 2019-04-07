$(function(){
    $.ajax({
    type:'get',
    url:'../../routes/user.js',
    data:'',
    async:true,
    success:function(str){
        // console.log(str);
        // 更新成功，重新渲染
        console.log(str)
    }
})
$('.allDelete').on('click',function(){
    console.log('666')
});
})
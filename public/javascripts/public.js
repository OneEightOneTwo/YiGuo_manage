//登录时的用户名渲染
function showUsername(){
    // 通过cookie设置头部的用户名显示,如果不是登录状态，都跳转到登陆页面
    let userLocal=localStorage.getItem('users');
    let userSession=sessionStorage.getItem('users');
    if(userLocal||userSession){
        let username;
        let id;

        if(userLocal){
            username=JSON.parse(userLocal).username;
            id=JSON.parse(userLocal).identity;
        }else{
            username=JSON.parse(userSession).username;
            id=JSON.parse(userSession).identity;
        }
        // console.log(id);
        if(id=="超级管理员"){
            // console.log(11);
        }else{
            // console.log(22);
            $('.addUserLi').css('display','none');
        }
        $('.layui-layout-right span').html(username);
    }else{
        location.href='login.html';
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


// $(()=>{

// })
$(()=>{
    $('#loginBtn').on('click',function(){
        let username=$('#username').val();
        let password=$('#password').val();
        let _mdl = mdl.checked;
        // console.log(_mdl);
        if(username&&password){
            $.ajax({
                type:'post',
                url:'http://localhost:10086/login',
                data:{
                    username,
                    password,
                    _mdl
                },
            }).done(res=>{
                // console.log(res);
                // console.log(JSON.stringify(res));
                let user=JSON.stringify(res);
                if(res.id){
                    //勾选记住我
                    if(_mdl){
                        localStorage.setItem('users',user);
                        let users=localStorage.getItem('users');
                        // 此处有待研究 
                        if(users.token){
                            //判断本地是否有token
                            $.ajax({
                                type:'post',
                                url:'http://localhost:10086/tokenverify',
                                data:{
                                    token:users.token,
                                },
                            }).done(res=>{
                                let result=res;
                                console.log(result);
                            })
                        }
                        location.href='../index.html';
                    }else{
                        //不勾选
                        sessionStorage.setItem('users',user);
                        let users = sessionStorage.getItem('users');
                        location.href='../index.html';
                    }
                }else{
                    alert('用户名或者密码不正确');
                }
            })  
        }else{
            alert('信息不完整');
        }
    });

});
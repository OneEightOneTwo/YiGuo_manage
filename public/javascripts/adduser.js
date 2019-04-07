$(function () {
    //点击提交时插入数据库
    $('.submit').on('click', function () {
        var username = $('.username').val();
        var password = $('.password').val();
        var identity = $('.identity').find(`.layui-anim dd`).filter('.layui-this').html();//获取身份
        var sex = $('.userSex').find(`.layui-form-radioed div`).html();//获取性别
        // console.log(username,password,identity,sex)
        //不为空判断
        if (username && password && identity && sex) {
            //用户名是否存在判断
            $.ajax({
                type: 'get',
                url: 'http://localhost:10086/users/name',
                data: {
                    'username': username,
                },
                async: true,
                success: function (str) {
                    // console.log(str)
                    if (str == 1) {
                        alert('用户名已被占用，请重新输入')
                    } else {
                        // console.log(username,password,identity,sex)
                        $.ajax({
                            type: 'post',
                            url: 'http://localhost:10086/users/message',
                            data: {
                                'username': username,
                                'password':password,
                                'identity':identity,
                                'sex':sex,
                            },
                            async: true,
                            success: function (str) {

                            }
                        });
                        location.href = 'userlist.html'
                        }
                }
                })
            //用户名是否存在判断

        } else {
            alert('内容不能为空')
        }
    })
});
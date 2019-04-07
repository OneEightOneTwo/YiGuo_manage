$(function () {
//--------ajax查询整个用户列表
    $.ajax({
        type: 'get',
        url: 'http://localhost:10086/users/all',
        data: '',
        async: true,
        success: function (str) {
            // console.log(str)
            show(str);//渲染用户列表

 //--------全选、不选、不全选取消全选勾选
            var all = document.getElementById("allCheck");
            var one = document.getElementsByTagName("input");
            all.onclick = function () {
                for (var i = 1; i < one.length; i++) {
                    one[i].checked = all.checked;
                }
            }
            for (var i = 1; i < one.length; i++) {
                one[i].onclick = function () {
                    var num = 0;
                    for (var j = 1; j < one.length; j++) {
                        if (one[j].checked == true) {
                            num++;
                        }
                    }
                    if (num == one.length - 1) {
                        all.checked = true;
                    }
                    else {
                        all.checked = false;
                    }
                }
            }
//--------------勾选多个删除
            $('.allDelete').on('click',function(){
               var res = confirm('你确定要删除？')
               if(res){
                $('input:checkbox:checked').each(function(){
                    $(this).parent().parent().remove();
                    currentAllTr = $(this).parent().parent();
                   var currentAllId = currentAllTr.attr('data-id');
                    // console.log(currentAllId);
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:10086/users/deleteOne',
                        data: {
                            'id':currentAllId,
                        },
                        async: true,
                        success: function (str) {
                        }
                    });
                    location.reload();
                })
               }
            })
//-----超级管理员点击编辑时出现修改信息弹窗
            $('.edit').on('click', function () {
                $('.usersShade').css('display', 'block');
                $('.layui-body').css('opacity', '0.6');
                //超级管理员修改信息
                // console.log($(this).parent().parent().attr('data-id'));
                var currentAllId = $(this).parent().parent().attr('data-id');
                // console.log(currentAllId);
//-----点击确定时把用户名和身份更改进数据库
                $('#adminBtn').on('click', function () {
                    let username = $('.username').val();
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
                            } else {//用户名或身份修改
                                var identity = $('#AlterIdentU').val();//获取身份的值
                                let username = $('.username').val();//获取用户名的值
                                // console.log(identity,username)
                                // console.log(currentAllId)
                                if (username) {//用户名及身份修改
                                    $.ajax({
                                        type: 'post',
                                        url: 'http://localhost:10086/users/update',
                                        data: {
                                            'id': currentAllId,
                                            'username': username,
                                            'identity': identity,
                                        },
                                        async: true,
                                        success: function (str) {
                                            // console.log(str)
                                            show(str);
                                        }

                                    });
                                } else {//只修改身份 不修改用户名
                                    // console.log(currentAllId,identity)
                                    $.ajax({
                                        type: 'post',
                                        url: 'http://localhost:10086/users/updates',
                                        data: {
                                            'id': currentAllId,
                                            'identity': identity,
                                        },
                                        async: true,
                                        success: function (str) {
                                            // console.log(str)
                                            show(str);
                                        }

                                    });
                                }
                                $('.usersShade').css('display', 'none');
                                $('.layui-body').css('opacity', '1');
                                location.reload();

                            }
                        }
                    });
                });

            });


//--------单行删除 
            $('.delete').on('click', function () {
                // 获取点击当行的id
                var currentAllId = $(this).parent().parent().attr('data-id');
                // console.log(currentAllId);
                var res = confirm('您确定要删除吗？')
                if (res) {
                    $.ajax({
                        type: 'post',
                        url: 'http://localhost:10086/users/deleteOne',
                        data: {
                            'id': currentAllId,
                        },
                        async: true,
                        success: function (str) {
                            // console.log(str)
                            show(str);
                        }
                    });
                    location.reload();
                }


            })


        }

    })

//--------编辑点击x时关闭编辑框
    $('.userCloses').on('click', function () {
        $('.usersShade').css('display', 'none');
        $('.layui-body').css('opacity', '1');
    })


//---------------封装用户列表
    function show(str) {
        var res = str.map(function (item, idx) {
            //时间戳转成日期格式
            var newDates = item.time;
            //  console.log(newDates)
            var date = new Date(newDates);
            Y = date.getFullYear() + '-';
            M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            D = date.getDate() + ' ';
            h = date.getHours() + ':';
            m = date.getMinutes() + ':';
            s = date.getSeconds();
            //  console.log(Y+M+D+h+m+s);
            return `
        <tr data-id="${item.id}">
              <td style="text-align: center;"><input type="checkbox" class="onechecked"></td>
              <td>${idx + 1}</td>
              <td style="text-align: center;">${item.username}</td>
              <td style="text-align: center;">${item.sex}</td>
              <td style="text-align: center;">${item.identity}</td>
              <td style="text-align: center;">${Y + M + D + h + m + s}</td>
              <td>
                <button class="layui-btn layui-btn-sm edit"><i class="layui-icon"></i></button>
                <button class="layui-btn layui-btn-sm delete"><i class="layui-icon"></i></button>
              </td>
        </tr>
        `;
        }).join('');
        $('tbody').html(res);
    };
//-------------点击添加时跳转到添加用户页面
    $('.add').on('click', function () {
        location.href = 'adduser.html';
    })


})
$(document).ready(function () {
    if (localStorage.token) {
        $(".header-right").append("<ul id='user'><li class='my-list'><a href='#'>我的订单</a></li><li id='user-li'><span id='user-avatar'></span><span id='user-name'>nihjao</span><span class='glyphicon glyphicon-menu-up saber'></span><ul id='nav'><li id='self'>个人中心<i id='icon'></i></li><li id='account'>账户设置</li><li id='backlogin'>退出登录</li></ul></li></ul>");
    } else {
        $(".header-right").append("<ul id='reg'><li><a href='zhuce.html'>注册</a></li><li><a href='register.html'>登录</a></li></ul>");
    }
});
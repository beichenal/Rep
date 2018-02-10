// 登录切换
function denglu() {
    document.querySelector(".tishi label").innerHTML = "没有账户，前去注册";
    document.getElementById("regist").classList.remove("denglu-sty");
    document.getElementById("regist").classList.add("zhuce-sty");
    document.getElementById("zhuce-item").classList.remove("zhuce-sty");
    document.getElementById("zhuce-item").classList.add("denglu-sty");
    document.getElementById("btl").classList.remove("bottom-line-2");
    document.getElementById("btl").classList.add("bottom-line-1");
    yingchang("form1", "xianshi", "yingchang");
    yingchang("form2", "yingchang", "xianshi");
}
document.getElementById("regist").onclick = denglu;


//注册切换
document.getElementById("zhuce-item").onclick = function () {
    var list = document.querySelectorAll("#form1 .biaoshi");
    for (let i = 0; i < list.length; i++) {
        if (list[i].classList.contains("err")) {
            list[i].classList.remove("err");
        }
    }


    document.getElementById("form1").reset();

    document.querySelector(".tishi label").innerHTML = "已有账户，马上登陆";
    document.getElementById("regist").classList.remove("zhuce-sty");
    document.getElementById("regist").classList.add("denglu-sty");
    document.getElementById("zhuce-item").classList.remove("denglu-sty");
    document.getElementById("zhuce-item").classList.add("zhuce-sty");
    document.getElementById("btl").classList.remove("bottom-line-1");
    document.getElementById("btl").classList.add("bottom-line-2");

    yingchang("form1", "yingchang", "xianshi");
    yingchang("form2", "xianshi", "yingchang");
};


//底部切换
document.querySelector(".tishi label").onclick = function () {
    if (this.innerHTML == "已有账户，马上登陆") {
        document.getElementById("regist").classList.remove("denglu-sty");
        document.getElementById("regist").classList.add("zhuce-sty");
        document.getElementById("zhuce-item").classList.remove("zhuce-sty");
        document.getElementById("zhuce-item").classList.add("denglu-sty");
        document.getElementById("btl").classList.remove("bottom-line-2");
        document.getElementById("btl").classList.add("bottom-line-1");
        yingchang("form1", "xianshi", "yingchang");
        yingchang("form2", "yingchang", "xianshi");
        this.innerHTML = "没有账户，前去注册";
    } else {
        document.getElementById("regist").classList.remove("zhuce-sty");
        document.getElementById("regist").classList.add("denglu-sty");
        document.getElementById("zhuce-item").classList.remove("denglu-sty");
        document.getElementById("zhuce-item").classList.add("zhuce-sty");
        document.getElementById("btl").classList.remove("bottom-line-1");
        document.getElementById("btl").classList.add("bottom-line-2");

        yingchang("form2", "xianshi", "yingchang");
        yingchang("form1", "yingchang", "xianshi");
        this.innerHTML = "已有账户，马上登陆";

    }

};


// 手机号码验证
yanzheng("phoneNum", /^1[3|4|5|7|8][0-9]{9}$/, "err", function (that) {
    that.value = " ";
    that.focus();

});


//密码格式验证
yanzheng("pwd", /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,32}/, "err", function (that) {
    that.value = "";
    that.focus();
});


//重复密码验证
document.getElementById("pwd2").onblur = function () {
    var pwd2n = document.getElementById("pwd").value;
    if (this.value != pwd2n) {
        this.classList.add("err");
        // alert("密码错误请重输！");
        this.value = "";
        this.focus();

    } else {
        this.classList.remove("err");

    }
};
//获取验证码
document.getElementById("yanzhenma").onclick = function () {
    var vl;
    var yanz = document.querySelector(".yanzhengma");
    this.classList.add("yanzheng-sty");
    this.setAttribute("disabled", true);
    var now = new Date();
    this.value = 300;
    var time = now.getMinutes() * 60 + now.getSeconds();
    var that = this;

    function daojishi() {
        var now2 = new Date();
        var timediff = time + 300 - (now2.getMinutes() * 60 + now2.getSeconds());
        that.value = timediff;
        if (timediff == 0) {
            clearInterval(timer);
            that.classList.remove("yanzheng-sty");
            that.removeAttribute("disabled");
            that.value = "获取验证码";
        } else if (yanz.value == vl) {
            clearInterval(timer);
            that.classList.remove("yanzheng-sty");
            that.removeAttribute("disabled");
            that.value = "获取验证码";
        }
    }
    var timer = setInterval(daojishi, 1000);
    myajax("GET", url + "/captcha" + "?type=register&phone=" + document.querySelector("#phoneNum").value, function (data) {
        if (data.code == "SUCCESS") {
            if (!document.querySelector("#biaoshi-string").classList.contains("yingchang")) {
                document.querySelector("#biaoshi-string").classList.remove("xianshi");
                document.querySelector("#biaoshi-string").classList.add("yingchang");
            }
            vl = data.captcha;
            yanz.value = data.captcha;
        } else {
            switch (data.code) {
                case "param_incomplete":
                case "param_type_error":
                    break;
                case "account_has_registered":
                    if (!document.querySelector("#biaoshi-string").classList.contains("yingchang")) {
                        document.querySelector("#biaoshi-string").innerHTML = "已注册！";
                        clearInterval(timer);
                        that.classList.remove("yanzheng-sty");
                        that.removeAttribute("disabled");
                        that.value = "获取验证码";
                        document.querySelector("#biaoshi-string").classList.add("xianshi");
                    } else {
                        document.querySelector("#biaoshi-string").classList.remove("yingchang");
                        clearInterval(timer);
                        that.classList.remove("yanzheng-sty");
                        that.removeAttribute("disabled");
                        that.value = "获取验证码";
                        document.querySelector("#biaoshi-string").innerHTML = "已注册！";
                        document.querySelector("#biaoshi-string").classList.add("xianshi");
                    }
                    break;
                case "phone_format_error":
                    if (!document.querySelector("#biaoshi-string").classList.contains("yingchang")) {
                        document.querySelector("#biaoshi-string").innerHTML = "格式错误！";
                        document.querySelector("#biaoshi-string").classList.add("xianshi");
                    } else {
                        document.querySelector("#biaoshi-string").classList.remove("yingchang");
                        document.querySelector("#biaoshi-string").innerHTML = "格式错误！";
                        document.querySelector("#biaoshi-string").classList.add("xianshi");
                    }
                    break;
                default:
                    break;
            }
        }
    });
};


//注册
document.querySelector("#regis").onclick = function () {
    this.setAttribute("disabled", true);
    var that = this;
    this.classList.add("yanzheng-sty");
    var phone = document.querySelector("#phoneNum").value;
    var yanzhengma = document.querySelector(".yanzhengma").value;
    var pwd = document.querySelector("#pwd2").value;
    myajax("POST", url + "93yRm5kF@/account/register", function (data) {
        if (data.code == "SUCCESS") {
            if (!document.querySelector("#yanzheng-biaoshi").classList.contains("yingchang")) {
                document.querySelector("#yanzheng-biaoshi").classList.remove("xianshi");
                document.querySelector("#yanzheng-biaoshi").classList.add("yingchang");
            }
            denglu();
        } else if (data.code == "sms_captcha_overdue") {
            panduan("#yanzheng-biaoshi");
            that.removeAttribute("disabled");
            that.classList.remove("yanzheng-sty");
        }
    }, "account=" + phone + "&password=" + pwd + "&captcha=" + yanzhengma);

};


//登录
document.querySelector("#denglu-but").onclick = function () {
    this.setAttribute("disabled", true);
    var that = this;
    this.classList.add("yanzheng-sty");
    var phone = document.querySelector("#username").value;
    var pwd = document.querySelector("#mima").value;
    myajax("POST", url + "/account/login", function (data) {
        if (data.code == "SUCCESS") {
            localStorage.constellations=data.data.user.constellations;
            localStorage.token = data.data.user.token;
            localStorage.name = data.data.user.name;
            localStorage.background = data.data.user.background;
            localStorage.city = data.data.user.city;
            localStorage.gender = data.data.user.gender;
            localStorage.avatar = data.data.user.avatar;
            localStorage.id = data.data.user._id;
            localStorage.account = data.data.user.account;
            window.location.href = "articleList.html";
        } else if (data.code == "account_password_error") {
            panduan("#denglu-tishi");
        }
    }, "account=" + phone + "&password=" + pwd);
};
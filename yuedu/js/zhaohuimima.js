//手机号格式验证
yanzheng("phoneNum", /^1[3|4|5|7|8][0-9]{9}$/, "err", function (that) {
    that.value = " ";
    that.focus();

});



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
        }

    }
    var timer = setInterval(daojishi, 1000);

};








document.querySelector("#queding").onclick = function () {
    var that = this;
    this.setAttribute("disabled", true);
    this.classList.add("queding");
    var pwd = document.querySelector("#pwd2").value;
    var cap = document.querySelector("#captcha").value;
    var pho = document.querySelector("#phoneNum").value;
    var pram;
    if (localStorage.token) {
        pram = "password=" + pwd + "&token=" + localStorage.token + "&captcha=" + cap;
    } else {
        pram = "password=" + pwd + "&captcha=" + cap + "&phone=" + pho;
    }
    myajax("POST", url + "/account/reset", function (data) {
        if (data.code == "SUCCESS") {
            localStorage.token = data.token;
            window.location.href = "dengluzhuce.html";
        } else {
            switch (data.code) {
                case "account_token_invalid":
                    document.querySelector("#tishi-item").innerHTML = "登录标识已失效，请重新登录!";
                    that.classList.remove("queding");
                    that.removeAttribute("disabled");

                    break;
                case "sms_captcha_fail":
                    document.querySelector("#tishi-item").innerHTML = "验证码错误！";
                    that.classList.remove("queding");
                    that.removeAttribute("disabled");
                    break;
                case "sms_captcha_overdue":
                    document.querySelector("#tishi-item").innerHTML = "验证码已过期!";
                    that.classList.remove("queding");
                    that.removeAttribute("disabled");
                    break;
                case "account_not_found":
                    document.querySelector("#tishi-item").innerHTML = "用户不存在!";
                    that.classList.remove("queding");
                    that.removeAttribute("disabled");
                    break;
                default:
                    document.querySelector("#tishi-item").innerHTML = " ";
                    that.classList.remove("queding");
                    that.removeAttribute("disabled");
                    break;
            }
        }
    }, pram);

};
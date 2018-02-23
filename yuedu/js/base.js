var static_url="https://dev.apis.sh/93yRm5kF@/static/";
var url = "https://dev.apis.sh/93yRm5kF@";




/**
 * 
 * @param {*} idn 标签id
 * @param {*} reg 正则
 * @param {*} errstyle 错误样式
 * @param {*} myfunction 错误处理函数
 */
function yanzheng(idn, reg, errstyle, myfunction) {
    document.getElementById(idn).onblur = function () {
        if (!reg.test(this.value)) {
            this.classList.add(errstyle);
            var that = this;
            myfunction(that);
        } else {
            this.classList.remove(errstyle);
        }
    };
}


/**
 * 原生AJAX封装函数
 * @param {String} method http请求方式(如'GET','POST')
 * @param {String} url 请求接口地址
 * @param {function} cb 请求成功后执行函数
 * @param {String} params 'POST'请求时传递参数
 */

function myajax(method, url, cb, params) {
    var xhr = new XMLHttpRequest(); // E7+、Firefox、Chrome、Safari 以及 Opera

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) { // 请求已完成，且响应已就绪
            var data = JSON.parse(xhr.response); // 将JSON字符串转化为JSON对象
            cb(data); //成功的时候调用这个方法
        }
    };
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //设置请求头类型，POST请求时必须设置
    xhr.withCredentials = true;
    xhr.send(params); // 发送请求
}






function myNewAjax(method, url, cb, params) {
    var xhr = new XMLHttpRequest(); // E7+、Firefox、Chrome、Safari 以及 Opera

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) { // 请求已完成，且响应已就绪
            var data = JSON.parse(xhr.response); // 将JSON字符串转化为JSON对象
            cb(data); //成功的时候调用这个方法
        }
    };
    xhr.open(method, url, true);
    xhr.withCredentials = true;
    // xhr.setRequestHeader("Content-Type", type);  //设置请求头类型，POST请求时必须设置
    xhr.send(params); // 发送请求
}




/**
 * 样式切换
 * @param {string} iden 标签id 
 * @param {string} mystyles1 样式类名1
 * @param {*} mystyles2      样式类名2
 */
function yingchang(iden, mystyles1, mystyles2) {
    document.getElementById(iden).classList.remove(mystyles1);
    document.getElementById(iden).classList.add(mystyles2);
}

/**
 * 判断标签是否隐藏
 * @param {string} iden 
 */
function panduan(iden) {
    if (!document.querySelector(iden).classList.contains("yingchang")) {
        document.querySelector(iden).classList.add("xianshi");
    } else {
        document.querySelector(iden).classList.remove("yingchang");
        document.querySelector(iden).classList.add("xianshi");
    }
}


/**
 * 
 * @param {*} json 
 * @param {*} id1 
 * @param {*} id2 
 * @param {*} that 
 * @param {*} id3 
 * @param {*} id4 
 */
function hander(json, id1, id2, that, id3, id4 = "name") {
    var id;
    var UL = document.querySelector(id2);
    if (UL.classList.contains("yingchang")) {
        UL.classList.remove("yingchang");
        UL.classList.add("xianshi");
    } else {
        UL.classList.add("xianshi");
    }
    // data-myvalue是自定义数据属性 其中存放的是province数组的下标
    var li = "<li style='list-style-type:none' data-myvalue='" + 0 + "'" + ">" + json[0][id4] + "</li>";
    for (let i = 1; i < json.length; i++) {
        li += "<li style='list-style-type:none'  data-myvalue='" + i + "'" + ">" + json[i][id4] + "</li>";
    }

    UL.innerHTML = li;
    UL.onclick = function (e) {

        document.querySelector(id1).innerHTML = e.target.innerHTML;
        //e.target指向被点击的li.    [e.target.dataset.myvalue是被点击的li对应的province下标
        // 此处id3为字符串 取“ProID”或“CityID”,将其放入id1标签的自定义数据属性data-ID中，以供下级获取。
        document.querySelector(id1).dataset.ID = json[e.target.dataset.myvalue][id3];
        this.classList.remove("xianshi");
        this.classList.add("yingchang");
        that.classList.remove("biankuang");
    };
}



/**
 * 
 * @param {*} add 
 * @param {*} img 
 */
function preLoadImg(add, img) {
    var tmpImg = new Image();
    tmpImg.src = add;
    // 图片加载成功后，替换临时图片。
    tmpImg.onload = function () {
        img.src = tmpImg.src;
    };
    // 加载失败。
    tmpImg.onerror = function () {
        var error = "../images/error.png"; // 此处为错误图片地址，用户自行修改
        img.src = error;
    };
    // 预加载图片(接口返回的图片地址需要前加上服务器地址)。

}


/**
 * 
 */
function lazyload() {
    // 获取所有img
    var imgs = document.getElementsByClassName('covers');
    var imags = Array.prototype.slice.call(imgs, 0);
    // 循环所有图片
    imags.forEach(function (img) {
        // 图片请求后不再执行该函数
        if (img.dataset.src === '') return;
        if (img.getBoundingClientRect().top < document.documentElement.clientHeight) {
            // 当图片出现在视窗中时，请求该图片。
            preLoadImg(img.dataset.src, img);
            // 通过dataset获取图片的真实地址
            // 清空自定义数据，之后在执行函数时避免重复请求。
            img.dataset.src = '';
        }
    });
}


/**
 * 
 * @param {*string} data_src 
 * @param {*string} real_src 
 * @param {*string} biaoti 
 * @param {*string} neirong 
 * @param {*string} avatar 
 * @param {*string} name 
 * @param {*string} time 
 * @param {*string} zan_num 
 * @param {*string} liulan_num 
 */
function dealwith_li(data_src, real_src, biaoti, neirong, avatar, name, time, zan_num, liulan_num, au_id, art_id) {
    var li = "<img class='li-left covers' style='text-align:center' data-src=" + data_src + " src=" + real_src + ">" +
        "<div class='li-right'>" +
        "<h3 class='biaoti' data-art_id=" + art_id + ">" + biaoti + "</h3>" +
        "<p class='neirong' data-art_id=" + art_id + ">" + neirong + "</p>" +
        "<div class='li-dd'>" +
        "<div class='li-dd-user'>" +
        "<span class='li-dd-user-ico touxiange' data-au_id=" + au_id + " style='background:url(" + "\"" + avatar + "\"" + ") no-repeat center'>" + "</span>" +
        "<span class='li-dd-username touxiang' data-au_id=" + au_id + ">" + name + "</span>" +
        "<span class='li-dd-time'>" + time + "</span>" +
        "<span class='li-dd-zan'>" +
        "<i class='zan_ico' data-flag='no'>" + "</i>" +
        "<span class='li-dd-zan-num'>" + zan_num + "</span>" +
        "</span>" +
        "<span class='li-dd-liulan'>" +
        "<i>" + "</i>" +
        "<span class='li-dd-liulan-num'>" + liulan_num + "</span>" +
        "</span>" +
        "</div>" +
        "</div>" +
        "</div>";
    return li;
}

function dealwith_pinglun(avatar, au_id, name, time, num, neirong) {
    var li =
        "<div class='li-dd-user'>" +
        "<span class='li-dd-user-ico' style='background:url(" + "\"" + avatar + "\"" + ") no-repeat center;' background-size='100%' data-au_id=" + au_id +"></span>" +
        "<span class='li-dd-username' data-au_id=" + au_id + ">" + name + "</span>" +
        "<span class='li-dd-time'>" + time + "</span>" +
        "<span class='li-dd-zan'>" +
        "<i class='zan_ico' data-flag='no'></i>" +
        "<span class='li-dd-zan-num'>" + num + "</span>" +
        "</span>" +
        "</div>" +
        "<p class='suojing'>" + neirong + "</p>";
    return li;
}


function time(creat_time) {
    if (creat_time == "undefined" || creat_time == "null" || creat_time == " ") return;
    var time = new Date(creat_time);
    var newtime = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDay() + "  " + time.getHours() + ":" + time.getMinutes();
    return newtime;
}

document.querySelector("#self").onclick = function () {
    window.location.href = "selfCenter.html?id=" + localStorage.id;
};
document.querySelector("#account").onclick = function () {
    window.location.href = "zhanghushezhi.html";
};
document.querySelector("#backlogin").onclick=function(){
    localStorage="";
    window.location.href="dengluzhuce.html";
};
document.querySelector(".pic").style.background = "url(" + static_url+localStorage.avatar + ") no-repeat center";
document.querySelector(".user").innerHTML = localStorage.name;
if(document.querySelector(".xiewenzhang")){
    document.querySelector(".xiewenzhang").onclick=function(){
        window.location.href="xiewenzhang.html";
    };
}

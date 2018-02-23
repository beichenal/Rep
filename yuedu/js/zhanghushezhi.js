
console.log(localStorage);
//预填写
document.querySelector("#nichen").value = localStorage.name;
if (localStorage.gender == "man") {
    var input = "<input type='radio' name='sex' id='male' value='man' class='chex' checked >" +
        "<label for='male'>男</label>" +
        "<input type='radio' name='sex' id='female' value='woman' class='chex'>" +
        "<label for='female'>女</label>";
    document.querySelector("#sex").insertAdjacentHTML("afterbegin", input);
} else if (localStorage.gender == "woman") {
    var input = "<input type='radio' name='sex' id='male' value='man' class='chex' >" +
        "<label for='male'>男</label>" +
        "<input type='radio' name='sex' id='female' value='woman' class='chex' checked>" +
        "<label for='female'>女</label>";
    document.querySelector("#sex").insertAdjacentHTML("afterbegin", input);
}
document.querySelector("#select").innerHTML = localStorage.constellations;

myajax("GET", url + "/city/province?ProID=" + localStorage.city.split(",")[0], function (data) {
    if (data.code == "SUCCESS") {
        document.querySelector("#select2").innerHTML = data.data.province;
    }
});
myajax("GET", url + "/city/city?ProID=" + localStorage.city.split(",")[0] + "&CityID=" + localStorage.city.split(",")[1], function (data) {
    if (data.code == "SUCCESS") {
        document.querySelector("#select3").innerHTML = data.data.city;
    }
});

myajax("GET", url + "/city/area?Id=" + localStorage.city.split(",")[2] + "&CityID=" + localStorage.city.split(",")[1], function (data) {
    if (data.code == "SUCCESS") {
        document.querySelector("#select4").innerHTML = data.data.area;
    }
});
//end





var btn = document.getElementById("file-img");
btn.onchange = function () {
    var img_reader = new FileReader();

    img_reader.readAsDataURL(this.files[0]);
    img_reader.onload = function (e) {
        var img = document.createElement("img");
        img.src = e.target.result;
        img.className = "up-img";
        document.querySelector("#tx").appendChild(img);
    };
};



document.querySelector("#select").onclick = function () {
    var that = this;
    this.classList.add("biankuang");
    var UL = document.querySelector("#xuanxiang");
    if (UL.classList.contains("yingchang")) {
        UL.classList.remove("yingchang");
        UL.classList.add("xianshi");
    } else {
        UL.classList.add("xianshi");
    }
    //获取后端星座数据
    var json = {
        "code": "SUCCESS",
        "data": {
            "constellations": ["白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座", "水瓶座", "双鱼座"]
        }
    };
    var li = "<li style='list-style-type:none'>" + json.data.constellations[0] + "</li>";
    for (let i = 1; i < 12; i++) {
        li += "<li style='list-style-type:none'>" + json.data.constellations[i] + "</li>";
    }

    UL.innerHTML = li;
    UL.addEventListener("click", function (e) {
        document.querySelector("#select").innerHTML = e.target.innerHTML;
    });
    UL.addEventListener("mouseleave", function () {
        this.classList.remove("xianshi");
        this.classList.add("yingchang");
        that.classList.remove("biankuang");

    });
};




// 获取省
document.querySelector("#select2").onclick = function () {
    var that = this;
    this.classList.add("biankuang");
    if (!localStorage.json) {
        myajax("GET", url + "/city/province", function (data) {
            if (data.code == "SUCCESS") {
                localStorage.json = JSON.stringify(data);
                hander(data.data.province, "#select2", "#xuanxiang2", that, "ProID");
            }
        });
    } else {
        var jsonp = JSON.parse(localStorage.json);
        hander(jsonp.data.province, "#select2", "#xuanxiang2", that, "ProID");
    }
};









//获取市
document.querySelector("#select3").onclick = function () {
    var ProID = document.querySelector("#select2").dataset.ID;
    var that = this;
    this.classList.add("biankuang");
    if (!localStorage.jsoncity) {
        myajax("GET", url + "/city/city?" + "ProID=" + ProID, function (data) {
            if (data.code == "SUCCESS") {
                localStorage.jsoncity = JSON.stringify(data);
                hander(data.data.city, "#select3", "#xuanxiang3", that, "CityID");
            }
        });
    } else {
        var json_city = JSON.parse(localStorage.jsoncity);
        hander(json_city.data.city, "#select3", "#xuanxiang3", that, "CityID");
    }
};


//获取区

document.querySelector("#select4").onclick = function () {
    var CityID = document.querySelector("#select3").dataset.ID;
    var that = this;
    this.classList.add("biankuang");
    if (!localStorage.jsoncity_qu) {
        myajax("GET", url + "/city/area?" + "CityID=" + CityID, function (data) {
            if (data.code == "SUCCESS") {
                localStorage.jsoncity_qu = JSON.stringify(data);
                hander(data.data.area, "#select4", "#xuanxiang4", that, "Id", "DisName");
            }
        });
    } else {
        var json_city_up = JSON.parse(localStorage.jsoncity_qu);
        hander(json_city_up.data.area, "#select4", "#xuanxiang4", that, "Id", "DisName");
    }
};



















//确定
document.querySelector("#queding").onclick = function () {
    this.classList.add("yanzheng-sty");
    this.setAttribute("disabled", true);
    var sex;
    var node = document.querySelectorAll("input[type='radio']");
    for (let i = 0; i < node.length; i++) {
        if (node[i].checked) {
            sex = node[i].value;
        }
    }
    var that = this;

if(document.querySelector("#select2").dataset.id==""){
    arr=["[" + document.querySelector("#select2").dataset.ID, document.querySelector("#select3").dataset.ID, document.querySelector("#select4").dataset.ID + "]"];
}
else{
    arr=["[" +localStorage.city.split(",")[0],localStorage.city.split(",")[1] , localStorage.city.split(",")[2] + "]"];
}

    // var arr2 = [parseInt(document.querySelector("#select2").dataset.ID), parseInt(document.querySelector("#select3").dataset.ID), parseInt(document.querySelector("#select4").dataset.ID)];
    var formdata = new FormData();
    formdata.append("token", localStorage.token);
    formdata.append("avatar", document.querySelector("#file-img").files[0]);
    formdata.append("gender", sex);
    formdata.append("city", arr);
    // formdata.append("constellation", document.querySelector("#select").innerHTML);
    formdata.append("name", document.querySelector("#nichen").value);



    myNewAjax("POST", url + "/account/profile", function (data) {
        if (data.code == "SUCCESS") {
            localStorage.token = data.data.user.token;
            localStorage.name = data.data.user.name;
            localStorage.background = data.data.user.background;
            localStorage.city = data.data.user.city;
            localStorage.gender = data.data.user.gender;
            localStorage.avatar = data.data.user.avatar;
            localStorage.id = data.data.user._id;
            localStorage.account = data.data.user.account;
            window.location.href = "dengluzhuce.html";
        } else if (data.code == "sms_captcha_overdue") {
            panduan("#yanzheng-biaoshi");
            that.removeAttribute("disabled");
            that.classList.remove("yanzheng-sty");
        }
    }, formdata);

};
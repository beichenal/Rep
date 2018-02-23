
document.querySelector(".touxiang").style.background = "url(" + static_url+localStorage.avatar + ") no-repeat center";
document.querySelector(".user").innerHTML = localStorage.name;
var UL = document.querySelector("#List");
var id = window.location.href.split('=')[1];
/*
if (id == localStorage.id) {
    document.querySelector(".top").style.backgroundImage = "url(" + "../images/bg_center5.png" + ")";
    document.querySelector(".top-p").innerHTML = localStorage.name;
    document.querySelector(".top-c").style.background = "url(" + "../images/article.png" + ") no-repeat center";
    if (localStorage.gender == "man") {
        document.querySelector(".top-c span").style.background = "url(" + "../images/icon_boy.png" + ") no-repeat center";
    } else {
        document.querySelector(".top-c span").style.background = "url(" + "../images/icon_girl.png" + ") no-repeat center";
    }
    document.querySelector("#local").innerHTML = (localStorage.myselfcity ? localStorage.myselfcity[1] : "  ");
    document.querySelector("#xingzuo").innerHTML = (localStorage.constellations ? localStorage.constellations : "  ");   
} else {
  */  
    
(function(){
var freq=0;
function f(){
    myajax("GET", url + "/posts/list?page=" + (freq +=1) + "&limit=3&user=" + id, function (data) {
        if (data.code == "SUCCESS") {
            localStorage.self_count = data.count;
            document.querySelector(".top-c").style.background = "url(" + static_url + data.data.articles[0].author.avatar + ") no-repeat center";
            document.querySelector(".top-c").style.backgroundSize = "cover";
            if (data.data.articles[0].author.gender == "man") {
                document.querySelector(".top-c span").style.background = "url(" + "../images/icon_boy.png" + ")";
            } else {
                document.querySelector(".top-c span").style.background = "url(" + "../images/icon_girl.png" + ")";
            }
            document.querySelector(".top-p").innerHTML = data.data.articles[0].author.name;
            // document.querySelector("#local").innerHTML = data.data.articles[0].author.city[0];
            //.split(" ")[1];
            document.querySelector("#xingzuo").innerHTML = data.data.articles[0].author.constellations;
            document.querySelector(".wzg").innerHTML = "文章(" + data.count + ")";
            //需要在写一点
            for (let i = 0; i < 2; i++) {
                var ul_li = document.createElement("li");
                ul_li.innerHTML = dealwith_li(static_url + data.data.articles[i].cover, static_url + data.data.articles[i].cover, data.data.articles[i].title, data.data.articles[i].abstract, static_url + data.data.articles[i].author.avatar, data.data.articles[i].author.name,
                    time(data.data.articles[i].create_time), data.data.articles[i].praise_sum, data.data.articles[i].look_sum, data.data.articles[i].author._id, data.data.articles[i]._id);
                UL.appendChild(ul_li);
            }
        }
    });
}
return f();

}());

//}
document.body.onscroll =(function(){
    var freq=1;
    // function f() {
    //     lazyload();
    //     if (UL.querySelectorAll("li").length <= localStorage.self_count) {
    //         myajax("GET",url+"/posts/list?page="+(freq=freq+1)+"&limit=3&user="+id,function(data){
    //             if(data.code =="SUCCESS"){
    //                 for(let i=0;i<2;i++){
    //                     var ul_li=document.createElement("li");
    //                     ul_li.innerHTML=dealwith_li(static_url+data.data.articles[i].cover," ",data.data.articles[i].title, data.data.articles[i].abstract, static_url+data.data.articles[i].author.avatar,data.data.articles[i].author.name,
    //                     time(data.data.articles[i].create_time),data.data.articles[i].praise_sum,data.data.articles[i].look_sum,data.data.articles[i].author._id,data.data.articles[i]._id);
    //                     UL.appendChild(ul_li);
    //                 }
    //             }
    //         });
    //     }
    // }
    // return f;
}());
   

UL.onclick = function (e) {
    if (e.target.classList.contains("zan_ico")) {
        if (e.target.dataset.flag == "yes") {
            e.target.style.backgroundImage = "url(" + "../images/icon_thumb_up.png" + ")";
            e.target.nextSibling.innerHTML = parseInt(e.target.nextSibling.innerHTML) - 1;
            e.target.dataset.flag = "no";
        } else if (e.target.dataset.flag == "no") {
            e.target.style.backgroundImage = "url(" + "../images/icon_thumb_up_like.png" + ")";
            e.target.nextSibling.innerHTML = parseInt(e.target.nextSibling.innerHTML) + 1;
            e.target.dataset.flag = "yes";
        }
    } else if (e.target.classList.contains("neirong")) {
        window.location.href = "wenzhangxiangqing.html?id=" + e.target.dataset.art_id;
    } else if (e.target.classList.contains("biaoti")) {
        window.location.href = "wenzhangxiangqing.html?id=" + e.target.dataset.art_id;
    }

};

myajax("GET", url + "/city/province?ProID=" + localStorage.city.split(",")[0], function (data) {
    if (data.code == "SUCCESS") {
        document.querySelector("#local").innerHTML = data.data.province;
    }
});
myajax("GET", url + "/city/city?ProID=" + localStorage.city.split(",")[0] + "&CityID=" + localStorage.city.split(",")[1], function (data) {
    if (data.code == "SUCCESS") {
        document.querySelector("#local2").innerHTML = data.data.city;
    }
});

// myajax("GET", url + "/city/province?id=" + localStorage.city.split(",")[2] + "&CityID=" + localStorage.city.split(",")[1], function (data) {
//     if (data.code == "SUCCESS") {
//         document.querySelector("#select4").innerHTML = data.data.area;
//     }
// });
document.querySelector("#xingzuo").innerHTML = localStorage.constellations;
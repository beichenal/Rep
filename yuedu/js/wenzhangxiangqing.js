var art_id = window.location.href.split('=')[1];
    myajax("GET", url + "/posts/details?id=" + art_id, function (data) {
            if (data.code == "SUCCESS") {
                document.querySelector(".li-dd-user-ico").dataset.au_id=data.data.article.author._id;
                document.querySelector(".li-dd-username").dataset.au_id=data.data.article.author._id;
                localStorage.my_art_id = data.data.article._id;
                document.querySelector(".biaoti h3").innerHTML = data.data.article.title;
                document.querySelector(".li-dd-user-ico").style.background = "url(" + static_url + data.data.article.author.avatar + ") " + "no-repeat center";
                document.querySelector(".li-dd-user-ico").style.backgroundSize="100%";
                document.querySelector(".li-dd-username").innerHTML = data.data.article.author.name;
                document.querySelector(".li-dd-time").innerHTML = time(data.data.article.create_time);
                //点赞，浏览数
                document.querySelector(".li-dd-zan-num").innerHTML = data.data.article.praise_sum;
                document.querySelector(".li-dd-liulan-num").textContent = data.data.article.look_sum;
        
        
                //文章
                document.querySelector(".tupian").style.background = "url(" + static_url + data.data.article.pic + ") no-repeat center";
                document.querySelector(".tupian").style.backgroundSize="cover";
                document.querySelector(".wenzhang").innerHTML = data.data.article.body;
            }
        });
        
var UL = document.querySelector("#dianping-item");
(function(){
    var freq=0;
    function f(){
        myajax("GET", url + "/comment/list?article=" + localStorage.my_art_id + "&page=" + (freq += 1) + "&limit=5", function (data) {
            if (data.code == "SUCCESS") {
                localStorage.comments_count = data.count;
                for (let i = 0; i<(data.data.comments.length< 5 ? data.data.comments.length: 5); i++) {
                   
                    let ul_li = document.createElement("li");
                    ul_li.innerHTML = dealwith_pinglun(static_url+data.data.comments[i].author.avatar, 
                    data.data.comments[i].author._id, data.data.comments[i].author.name, time(data.data.comments[i].create_time), data.data.comments[i].praise_sum, data.data.comments[i].body);
                    UL.appendChild(ul_li);
                }
            }
        
        
        });
    }
    return f();
}());


    document.querySelector(".li-dd-user-ico").onclick=function(){
        window.location.href="selfCenter.html?="+this.dataset.au_id;
    };
    document.querySelector(".li-dd-username").onclick=function(){
        window.location.href="selfCenter.html?="+this.dataset.au_id;
    };
document.body.onscroll = (function () {
    var freq=0;
    function f(){
        if (UL.querySelectorAll("li").length < localStorage.comments_count && document.querySelector("#pin").getBoundingClientRect().top < document.documentElement.clientHeight) {
            myajax("GET", url + "/comment/list?article=" + localStorage.my_art_id + "&page=" + (freq += 1) + "&limit=5", function (data) {
                if (data.code == "SCUUESS") {
                    for (let i = 0; i < 5; i++) {
                        let ul_li = document.createElement("li");
                        ul_li.innerHTML = dealwith_pinglun(static_url+data.data.comments[i].author.avatar , data.data.comments[i].author._id, data.data.comments[i].author.name, time(data.data.comments[i].create_time), data.data.comments[i].praise_sum, data.data.comments[i].body);
                        UL.appendChild(ul_li);
                    }
                }
            });
        }
        document.querySelector(".li-dd-user-ico").onclick=function(){
            window.location.href="selfCenter.html?="+this.dataset.au_id;
        };
        document.querySelector(".li-dd-username").onclick=function(){
            window.location.href="selfCenter.html?="+this.dataset.au_id;
        };
    }
    return f;
}());
var btn = document.querySelector("#dianping-tijiao");
btn.onclick = function () {
    var text = document.querySelector("#dianpingkuang").value;
  //  var formdata = new FormData();
  //  formdata.append("token", localStorage.token);
  //  formdata.append("body", text);
  //  formdata.append("article", localStorage.my_art_id);
    if (text == "null") {
        return;
    } else {
            var pra="token="+localStorage.token+"&article="+localStorage.my_art_id+"&body="+text;
        myajax("POST", url + "/comment/add", function (data) {
            if (data.code == "SUCCESS") {
                localStorage.comments_count+=1;
                let li = document.createElement("li");
                li.innerHTML = dealwith_pinglun("../images/article.png", localStorage.id, localStorage.name, time(), "", text);
                UL.appendChild(li);

            } else if (data.code == "account_token_invalid") {
                alert("请重新登陆！");
                window.location.href = "dengluzhuce.html";
            }
        },pra);

    }
};
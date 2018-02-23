
var UL = document.querySelector("#art");



//获取加载中元素
var loading = document.getElementsByClassName('jiazai')[0];
myajax("GET", url + "/posts/list?page=1" + "&limit=3", function (data) {
    // alert(data);
    if (data.code == "SUCCESS") {
        //测试
        //end
        for (let i = 0; i < 3; i++) {
            var ul_li = document.createElement("li");
            ul_li.innerHTML = dealwith_li(static_url + data.data.articles[i].cover, static_url + data.data.articles[i].cover, data.data.articles[i].title, data.data.articles[i].abstract, static_url + data.data.articles[i].author.avatar, data.data.articles[i].author.name, time(data.data.articles[i].create_time), data.data.articles[i].praise_sum, data.data.articles[i].look_sum, data.data.articles[i].author._id, data.data.articles[i]._id);
            UL.appendChild(ul_li);
        }
        lazyload();
    }
});

   document.body.onscroll = (function () {
        var freq = 1;
        return _.throttle(function () {
                    lazyload();
                    if ((loading.getBoundingClientRect().top + loading.offsetHeight - 30 < document.documentElement
                            .clientHeight)) {
                        myajax("GET", url + "/posts/list?page=" + (freq += 1) + "&limit=3", function (data) {
                            if (data.code == "SUCCESS") {
                                localStorage.list = data;
                                for (let i = 0; i < 3; i++) {
                                    var ul_li = document.createElement("li");
                                    ul_li.innerHTML = dealwith_li(static_url + data.data.articles[i].cover,
                                        " ", data.data.articles[i].title, data.data.articles[i].abstract,
                                        static_url + data.data.articles[i].author.avatar, data.data
                                        .articles[i].author.name, time(data.data.articles[i].create_time),
                                        data.data.articles[i].praise_sum, data.data.articles[i].look_sum,
                                        data.data.articles[i].praise_sum, data.data.articles[i].look_sum,
                                        data.data.articles[i].author._id, data.data.articles[i]._id
                                    );
                                    UL.appendChild(ul_li);
                                }
                            }
                        });
                    }
                }, 250);
    }());
document.body.addEventListener("scroll",lazyload());
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
    } else if (e.target.classList.contains("touxiange")) {
        window.location.href = "selfCenter.html?id=" + e.target.dataset.au_id;
    } else if (e.target.classList.contains("biaoti")) {
        window.location.href = "wenzhangxiangqing.html?id=" + e.target.dataset.art_id;
    }

};
function header(){
    var str_header = `
        <header>
            <div class="header">
                <a href="index.html" class="logo">
                    <img src="images/image_logo.png" alt="">
                </a>
                <ul>
                    <li><a href="index.html">首页</a></li>
                    <li><a href="jujiao.html">行业聚焦</a></li>
                    <li><a href="zhinan.html">影音指南</a></li>
                    <li><a href="jishu.html">影音技术</a></li>
                    <li><a href="qicai.html">影音器材</a></li>
                    <li><a href="luntan.html">HD199论坛</a></li>
                </ul>
                <div class="search">
                    <div class="search-title">
                        <ul>
                            <li>标题</li>
                            <li>作者</li>
                            <li>内容</li>
                        </ul>
                        <img src="images/icon_arrow_drop_down.png" alt="">
                    </div>
                    <input type="text" class="search-container">
                    <button class="search-btn"></button>
                </div>
            </div> 
        </header>
    `
    $("body").prepend(str_header);
    console.log("顶部加载正常");
    
}
function footer(){
    var str_footer = `
    <footer>
        <div class="foot_1">
            <ul>
                <li><a href="">影音新时代网</a></li>
                <li>|</li>
                <li><a href="">站点地图</a></li>
                <li>|</li>
                <li><a href="">友情链接</a></li>
                <li>|</li>
                <li><a href="">联系我们</a></li>
            </ul>
            <div class="search">
                <div class="search-title">
                    <ul>
                        <li>标题</li>
                        <li>作者</li>
                        <li>内容</li>
                    </ul>
                    <img src="images/icon_arrow_drop_down.png" alt="">
                </div>
                <input type="text" class="search-container">
                <button class="search-btn"></button>
            </div>
        </div>
        <div class="foot_2">
            <span>Powered by 影音新时代网 © 2002-20015 家庭影院音响公众网络平台</span>
            <span>本站系统 by SupeSite © 2001-20013 Comsenz Inc.</span>
            <span>公安部备案： 61019002000037</span>
        </div>
    </footer>
    `
    $("body").append(str_footer);
    console.log("底部加载正常");
}
function header_active(){
    var header_active = document.location.href.split("/")[document.location.href.split("/").length-1];
    var header_a = $(".header>ul>li>a");
    for(i=0;i<header_a.length;i++){
        var x = header_a[i]
        // console.log(1);
        // console.log(header_a[i].href);
        // console.log(header_a[i].href.split("/"));
        // console.log(header_a[i].href.split("/")[header_a[i].href.split("/").length-1]);
        var href = header_a[i].href.split("/")[header_a[i].href.split("/").length-1];
        if(href == header_active){
            x.parentNode.className="active";
        }
    }
}


function carousel(data){    //定义轮播方法;
        var x=1;
        for(i=0;i<all.length;i++){
            $(".btn").append("<li data-id="+ i +"></li>")
        };
        var t = $(".w430 .btn li");
        $(".btn").css("left",($(".w430").width()-$(".btn").width())/2);
        $(".w430>ul>li").mouseover(function(){
            var a = $(this).attr("data-id");
            $(".w430>img").attr("src",data[a].img);
            $(".w430>.mask>span:first-child").html(data[a].title);
            $(".w430>.mask>span:last-child").html(data[a].container);
            $(t).attr("class","");
            $(this).attr("class","active");
            a++;
            if(a == (all.length+1)){
                a = 1
            }
            x = a;
        })
        $(".upper").click(function(){
            x--;
            if(x <= 1){
                x = t.length+1;
            }
            var a = x;
            $(".w430>img").attr("src",data[a-2].img);
            $(".w430>.mask>span:first-child").html(data[a-2].title);
            $(".w430>.mask>span:last-child").html(data[a-2].container);
            $(t).attr("class","");
            $(t[a-2]).attr("class","active");
        })
        $(".next").click(function(){
            // console.log("x="+x);
            if(x==t.length+1){
                x=1;
            }
            var a = x;
            $(".w430>img").attr("src",data[a-1].img);
            $(".w430>.mask>span:first-child").html(data[a-1].title);
            $(".w430>.mask>span:last-child").html(data[a-1].container);
            $(t).attr("class","");
            $(t[a-1]).attr("class","active");
            x++;
        })
        if(x==(data.length+1)){
            x=1;
        }
        $(".w430>img").attr("src",data[x-1].img);
        $(".w430>.mask>span:first-child").html(data[x-1].title);
        $(".w430>.mask>span:last-child").html(data[x-1].container);
        $(t).attr("class","");
        $(t[x-1]).attr("class","active");
        x++;

    var timer=setInterval(function (){
        if(x==(data.length+1)){
            x=1;
        }
        $(".w430>img").attr("src",data[x-1].img);
        $(".w430>.mask>span:first-child").html(data[x-1].title);
        $(".w430>.mask>span:last-child").html(data[x-1].container);
        $(t).attr("class","");
        $(t[x-1]).attr("class","active");
        x++;
        console.log("第"+ (x-1) + "张图");
    },3000); 
    $(".w430").mouseover(function(){
        clearInterval(timer);
    }).mouseout(function(){
        timer = setInterval(function abc(){
        if(x==(data.length+1)){
            x=1;
        }
        $(".w430>img").attr("src",data[x-1].img);
        $(".w430>.mask>span:first-child").html(data[x-1].title);
        $(".w430>.mask>span:last-child").html(data[x-1].container);
        $(t).attr("class","");
        $(t[x-1]).attr("class","active");
        x++;
        
    },3000);
    })
}

//咨询导航动态生成

function generate(data){
    for(i=0;i<data.length;i++){
        var str = `<li data-id=`+ (i+1) +`>`+ data[i] +`</li>`
        $(".main_3 .consultation_left .title_header ul").append(str);
    }
    $(".main_3 .consultation_left .title_header ul li")[0].className = "active";
}

// 咨询导航切换
$(".main_3 .consultation_left .title_header ul").on('mouseover','li',function(){
    $(this).parent().children().removeClass("active");
    $(this).addClass("active");
    var a = $(this).attr("data-id");
    var b = $(".main_3 .consultation_left .consultation_title ul");
    for(i=0;i<b.length;i++){
        if(b[i].dataset.id == a){
            console.log(b[i]);
            $(b[i]).parent().children().removeClass("active");
            $(b[i]).addClass("active");
        }
    }
})
//搜索


/**
 * @param  {} x 包裹搜索 ul li的元素
 * @param  {} y 搜索ul下的第一个li元素
 */
function search(x,y){  
    $(x).click(function(){
        var a = $(y).html();
        var b = $(this).html();
        $(y).html(b);
        $(this).html(a);
    })
}

$(document).ready(function(){  
    header();
    footer();
    var x_header = $("header .search-title li");
    var y_header = x_header[0];
    search(x_header,y_header);
    var x_footer = $("footer .search-title li");
    var y_footer = x_footer[0];
    search(x_footer,y_footer);
}); 
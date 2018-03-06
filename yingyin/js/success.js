var detail_title = $("main>.main>.main_1>.vote>.detail ul li .detail_title");
var vote_number = $("main>.main>.main_1>.vote>.detail ul li .vote_number");

function width_dynamic(x){
    var w_all = [];
    for(i=0;i<x.length;i++){
        w_all.push($(x[i]).width());
    }
    var w = 0;
    for(i=0;i<w_all.length;i++){
        if(w_all[i] > w){
            w = w_all[i];
        }
    }
    for(i=0;i<x.length;i++){
        $(x[i]).width(w);
    }
}
//投票进度条
var progress_bar_data = [
    {width:294,color:"#F9BE04"},
    {width:240,color:"#272727"},
    {width:171,color:"#206698"},
    {width:120,color:"#6073FF"},
    {width:60,color:"#54CD75"},
    {width:0,color:"#fff"}
]
var progress_bar_all_div = $("main>.main>.main_1>.vote>.detail ul li .progress_bar");
for(i=0;i<progress_bar_all_div.length;i++){
    $(progress_bar_all_div[i]).width(progress_bar_data[i].width);
    $(progress_bar_all_div[i]).css("background",progress_bar_data[i].color);
}

$(document).ready(function(){
    width_dynamic(detail_title);
    width_dynamic(vote_number);
    $(".header ul li")[0].className="active";
})
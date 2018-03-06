function abc(x){
        $(x).click(function(){
            $(this).parent().parent().parent().find("input").removeAttr("checked");
            $(this).parent().find("input").attr("checked","checked");
            $(this).parent().parent().parent().find("img").attr("src","images/icon_radio_button_unchecked.png");
            $(this).attr("src","images/icon_radio_button_checked.png");
        })
}
//获取选中input
function aaa(){
    var x = $("main>.main>.main_1>.vote>.detail ul li input");
    for(i=0;i<x.length;i++){
        if($(x[i]).attr("checked") == "checked"){
        console.log($(x[i]).parent().find("span").html());
        }
    } 
}

$(document).ready(function(){  
    $(".header ul li")[0].className="active";
   abc($("main>.main>.main_1>.vote>.detail ul li img"));
}); 
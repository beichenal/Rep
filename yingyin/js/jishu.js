var all=[            
    {img:"images/5.jpg",title:"",container:"出奇“质”胜，明基激光超投电视获专业媒体“最佳 "},
    {img:"images/2.jpg",title:"",container:"123"},
    {img:"images/3.jpg",title:"",container:"456"},
    {img:"images/4.jpg",title:"",container:"789"}
    ];
var data = ["发烧音响","影院音频","投影世界","大屏时代","数码影音","智能声学","喋喋不休","基础园地"];
$(document).ready(function(){  
    header_active();
    carousel(all);
    generate(data);
}); 
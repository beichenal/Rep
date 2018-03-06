var all=[            
    {img:"images/5.jpg",title:"",container:"简约、随性，随时随地享受音乐 | 德国Ultrasone极"},
    {img:"images/2.jpg",title:"",container:"123"},
    {img:"images/3.jpg",title:"",container:"456"},
    {img:"images/4.jpg",title:"",container:"789"}
    ];
var data = ["碟机播放器","解码器功效","音箱低音炮","投影机电视","智能中控器","线材与机柜","耳机与数码","声学材料类"];
$(document).ready(function(){  
    header_active();
    carousel(all);
    generate(data);
}); 
var all=[            
    {img:"images/5.jpg",title:"",container:"达尼HELICON 800 MK2，绿城兰园私人HIFI音…"},
    {img:"images/2.jpg",title:"",container:"123"},
    {img:"images/3.jpg",title:"",container:"456"},
    {img:"images/4.jpg",title:"",container:"789"}
    ];
var data = ["HiFi音响","家庭影院","背景音乐","移动影音","商业影音","音乐电影"];
$(document).ready(function(){ 
    header_active();
    carousel(all);
    generate(data);
}); 
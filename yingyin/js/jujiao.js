var all=[            
    {img:"images/5.jpg",title:"",container:"视觉系的音质新宠 德国金榜客厅音响精品推荐"},
    {img:"images/2.jpg",title:"",container:"123"},
    {img:"images/3.jpg",title:"",container:"456"},
    {img:"images/4.jpg",title:"",container:"789"}
    ];
var data = ["技术热点","行业新闻","厂商动态","影音名牌","厂商名片","优惠促销"];
$(document).ready(function(){
    header_active();
    carousel(all);
    generate(data);
}); 
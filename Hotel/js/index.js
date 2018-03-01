$(document).ready(function () {


    $("#city").click(function () {
        $("#select-city").toggleClass('hidden');

    })
    $("#date").click(function () {
        $("#date-tab").toggleClass("hidden");
    })

    //ajax请求
    var data = {
        "code": "success",
        "data": {
            "hot": [{
                    "cityName": "北京",
                    "cityPinYin": "beijing",
                    "cityFirstLetter": "b"
                },
                {
                    "cityName": "上海",
                    "cityPinYin": "shanghai",
                    "cityFirstLetter": "s"
                },
                {
                    "cityName": "无锡",
                    "cityPinYin": "wuxi",
                    "cityFirstLetter": "w"
                },
                {
                    "cityName": "南京",
                    "cityPinYin": "nanjing",
                    "cityFirstLetter": "n"
                },
                {
                    "cityName": "厦门",
                    "cityPinYin": "shamen",
                    "cityFirstLetter": "s"
                },
                {
                    "cityName": "杭州",
                    "cityPinYin": "hangzhou",
                    "cityFirstLetter": "h"
                },
                {
                    "cityName": "广州",
                    "cityPinYin": "guangzhou",
                    "cityFirstLetter": "g"
                },
                {
                    "cityName": "黄石",
                    "cityPinYin": "huangshi",
                    "cityFirstLetter": "h"
                },
                {
                    "cityName": "郑州",
                    "cityPinYin": "zhengzhou",
                    "cityFirstLetter": "z"
                },
                {
                    "cityName": "成都",
                    "cityPinYin": "chengdu",
                    "cityFirstLetter": "c"
                },
                {
                    "cityName": "重庆",
                    "cityPinYin": "zhongqing",
                    "cityFirstLetter": "z"
                },
                {
                    "cityName": "昆明",
                    "cityPinYin": "kunming",
                    "cityFirstLetter": "k"
                },
                {
                    "cityName": "深圳",
                    "cityPinYin": "shenzhen",
                    "cityFirstLetter": "s"
                },
                {
                    "cityName": "西安",
                    "cityPinYin": "xian",
                    "cityFirstLetter": "x"
                },
                {
                    "cityName": "宝鸡",
                    "cityPinYin": "baoji",
                    "cityFirstLetter": "b"
                },
                {
                    "cityName": "三亚",
                    "cityPinYin": "sanya",
                    "cityFirstLetter": "s"
                }
            ],
            "cityList": {
                "a": [{
                        "cityName": "阿拉善盟",
                        "cityPinYin": "alashanmeng",
                        "cityFirstLetter": "a"
                    },
                    {
                        "cityName": "鞍山",
                        "cityPinYin": "anshan",
                        "cityFirstLetter": "a"
                    },
                    {
                        "cityName": "安庆",
                        "cityPinYin": "anqing",
                        "cityFirstLetter": "a"
                    },
                    {
                        "cityName": "安阳",
                        "cityPinYin": "anyang",
                        "cityFirstLetter": "a"
                    },
                    {
                        "cityName": "阿坝藏族羌族自治州",
                        "cityPinYin": "abacangzuqiangzuzizhizhou",
                        "cityFirstLetter": "a"
                    },
                    {
                        "cityName": "安顺",
                        "cityPinYin": "anshun",
                        "cityFirstLetter": "a"
                    },
                    {
                        "cityName": "阿勒泰地区",
                        "cityPinYin": "aletaidiqu",
                        "cityFirstLetter": "a"
                    },
                    {
                        "cityName": "阿里地区",
                        "cityPinYin": "alidiqu",
                        "cityFirstLetter": "a"
                    },
                    {
                        "cityName": "安康",
                        "cityPinYin": "ankang",
                        "cityFirstLetter": "a"
                    },
                    {
                        "cityName": "阿克苏地区",
                        "cityPinYin": "akesudiqu",
                        "cityFirstLetter": "a"
                    },
                    {
                        "cityName": "澳门特别行政区",
                        "cityPinYin": "aomentebiehangzhengqu",
                        "cityFirstLetter": "a"
                    }
                ],
                "b": [{
                        "cityName": "北京",
                        "cityPinYin": "beijing",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "保定",
                        "cityPinYin": "baoding",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "包头",
                        "cityPinYin": "baotou",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "巴彦淖尔",
                        "cityPinYin": "bayannaoer",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "白城",
                        "cityPinYin": "baicheng",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "本溪",
                        "cityPinYin": "benxi",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "白山",
                        "cityPinYin": "baishan",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "蚌埠",
                        "cityPinYin": "bangbu",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "亳州",
                        "cityPinYin": "bozhou",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "滨州",
                        "cityPinYin": "binzhou",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "北海",
                        "cityPinYin": "beihai",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "百色",
                        "cityPinYin": "baise",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "保山",
                        "cityPinYin": "baoshan",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "毕节",
                        "cityPinYin": "bijie",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "宝鸡",
                        "cityPinYin": "baoji",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "博尔塔拉蒙古自治州",
                        "cityPinYin": "boertalamengguzizhizhou",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "巴中",
                        "cityPinYin": "bazhong",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "白银",
                        "cityPinYin": "baiyin",
                        "cityFirstLetter": "b"
                    },
                    {
                        "cityName": "巴音郭楞蒙古自治州",
                        "cityPinYin": "bayinguolengmengguzizhizhou",
                        "cityFirstLetter": "b"
                    }
                ],
                "c": [{
                        "cityName": "承德",
                        "cityPinYin": "chengde",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "沧州",
                        "cityPinYin": "cangzhou",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "长治",
                        "cityPinYin": "changzhi",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "赤峰",
                        "cityPinYin": "chifeng",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "长春",
                        "cityPinYin": "changchun",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "常州",
                        "cityPinYin": "changzhou",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "滁州",
                        "cityPinYin": "chuzhou",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "池州",
                        "cityPinYin": "chizhou",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "郴州",
                        "cityPinYin": "chenzhou",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "潮州",
                        "cityPinYin": "chaozhou",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "成都",
                        "cityPinYin": "chengdu",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "长沙",
                        "cityPinYin": "changsha",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "崇左",
                        "cityPinYin": "chongzuo",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "常德",
                        "cityPinYin": "changde",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "楚雄彝族自治州",
                        "cityPinYin": "chuxiongyizuzizhizhou",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "昌都",
                        "cityPinYin": "changdu",
                        "cityFirstLetter": "c"
                    },
                    {
                        "cityName": "昌吉回族自治州",
                        "cityPinYin": "changjihuizuzizhizhou",
                        "cityFirstLetter": "c"
                    }
                ],
                "d": [{
                        "cityName": "大同",
                        "cityPinYin": "datong",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "大连",
                        "cityPinYin": "dalian",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "丹东",
                        "cityPinYin": "dandong",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "大庆",
                        "cityPinYin": "daqing",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "大兴安岭地区",
                        "cityPinYin": "daxinganlingdiqu",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "东营",
                        "cityPinYin": "dongying",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "德州",
                        "cityPinYin": "dezhou",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "儋州",
                        "cityPinYin": "danzhou",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "德宏傣族景颇族自治州",
                        "cityPinYin": "dehongdaizujingpozuzizhizhou",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "德阳",
                        "cityPinYin": "deyang",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "达州",
                        "cityPinYin": "dazhou",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "迪庆藏族自治州",
                        "cityPinYin": "diqingcangzuzizhizhou",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "东莞",
                        "cityPinYin": "dongguan",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "定西",
                        "cityPinYin": "dingxi",
                        "cityFirstLetter": "d"
                    },
                    {
                        "cityName": "大理白族自治州",
                        "cityPinYin": "dalibaizuzizhizhou",
                        "cityFirstLetter": "d"
                    }
                ],
                "e": [{
                        "cityName": "鄂尔多斯",
                        "cityPinYin": "eerduosi",
                        "cityFirstLetter": "e"
                    },
                    {
                        "cityName": "鄂州",
                        "cityPinYin": "ezhou",
                        "cityFirstLetter": "e"
                    },
                    {
                        "cityName": "恩施土家族苗族自治州",
                        "cityPinYin": "enshitujiazumiaozuzizhizhou",
                        "cityFirstLetter": "e"
                    }
                ],
                "f": [{
                        "cityName": "抚顺",
                        "cityPinYin": "fushun",
                        "cityFirstLetter": "f"
                    },
                    {
                        "cityName": "阜新",
                        "cityPinYin": "fuxin",
                        "cityFirstLetter": "f"
                    },
                    {
                        "cityName": "阜阳",
                        "cityPinYin": "fuyang",
                        "cityFirstLetter": "f"
                    },
                    {
                        "cityName": "福州",
                        "cityPinYin": "fuzhou",
                        "cityFirstLetter": "f"
                    },
                    {
                        "cityName": "抚州",
                        "cityPinYin": "fuzhou",
                        "cityFirstLetter": "f"
                    },
                    {
                        "cityName": "佛山",
                        "cityPinYin": "foshan",
                        "cityFirstLetter": "f"
                    },
                    {
                        "cityName": "防城港",
                        "cityPinYin": "fangchenggang",
                        "cityFirstLetter": "f"
                    }
                ],
                "g": [{
                        "cityName": "赣州",
                        "cityPinYin": "ganzhou",
                        "cityFirstLetter": "g"
                    },
                    {
                        "cityName": "广州",
                        "cityPinYin": "guangzhou",
                        "cityFirstLetter": "g"
                    },
                    {
                        "cityName": "桂林",
                        "cityPinYin": "guilin",
                        "cityFirstLetter": "g"
                    },
                    {
                        "cityName": "贵港",
                        "cityPinYin": "guigang",
                        "cityFirstLetter": "g"
                    },
                    {
                        "cityName": "广安",
                        "cityPinYin": "guangan",
                        "cityFirstLetter": "g"
                    },
                    {
                        "cityName": "甘孜藏族自治州",
                        "cityPinYin": "ganzicangzuzizhizhou",
                        "cityFirstLetter": "g"
                    },
                    {
                        "cityName": "固原",
                        "cityPinYin": "guyuan",
                        "cityFirstLetter": "g"
                    },
                    {
                        "cityName": "广元",
                        "cityPinYin": "guangyuan",
                        "cityFirstLetter": "g"
                    },
                    {
                        "cityName": "贵阳",
                        "cityPinYin": "guiyang",
                        "cityFirstLetter": "g"
                    },
                    {
                        "cityName": "甘南藏族自治州",
                        "cityPinYin": "gannancangzuzizhizhou",
                        "cityFirstLetter": "g"
                    },
                    {
                        "cityName": "果洛藏族自治州",
                        "cityPinYin": "guoluocangzuzizhizhou",
                        "cityFirstLetter": "g"
                    }
                ],
                "h": [{
                        "cityName": "邯郸",
                        "cityPinYin": "handan",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "衡水",
                        "cityPinYin": "hengshui",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "呼和浩特",
                        "cityPinYin": "huhehaote",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "呼伦贝尔",
                        "cityPinYin": "hulunbeier",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "葫芦岛",
                        "cityPinYin": "huludao",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "鹤岗",
                        "cityPinYin": "hegang",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "哈尔滨",
                        "cityPinYin": "haerbin",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "黑河",
                        "cityPinYin": "heihe",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "合肥",
                        "cityPinYin": "hefei",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "淮北",
                        "cityPinYin": "huaibei",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "淮安",
                        "cityPinYin": "huaian",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "杭州",
                        "cityPinYin": "hangzhou",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "湖州",
                        "cityPinYin": "huzhou",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "淮南",
                        "cityPinYin": "huainan",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "黄山",
                        "cityPinYin": "huangshan",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "菏泽",
                        "cityPinYin": "heze",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "河源",
                        "cityPinYin": "heyuan",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "黄石",
                        "cityPinYin": "huangshi",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "惠州",
                        "cityPinYin": "huizhou",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "衡阳",
                        "cityPinYin": "hengyang",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "鹤壁",
                        "cityPinYin": "hebi",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "海口",
                        "cityPinYin": "haikou",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "黄冈",
                        "cityPinYin": "huanggang",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "怀化",
                        "cityPinYin": "huaihua",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "海东",
                        "cityPinYin": "haidong",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "红河哈尼族彝族自治州",
                        "cityPinYin": "honghehanizuyizuzizhizhou",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "哈密",
                        "cityPinYin": "hami",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "黄南藏族自治州",
                        "cityPinYin": "huangnancangzuzizhizhou",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "贺州",
                        "cityPinYin": "hezhou",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "河池",
                        "cityPinYin": "hechi",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "汉中",
                        "cityPinYin": "hanzhong",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "和田地区",
                        "cityPinYin": "hetiandiqu",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "海北藏族自治州",
                        "cityPinYin": "haibeicangzuzizhizhou",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "海西蒙古族藏族自治州",
                        "cityPinYin": "haiximengguzucangzuzizhizhou",
                        "cityFirstLetter": "h"
                    },
                    {
                        "cityName": "海南藏族自治州",
                        "cityPinYin": "hainancangzuzizhizhou",
                        "cityFirstLetter": "h"
                    }
                ],
                "j": [{
                        "cityName": "晋城",
                        "cityPinYin": "jincheng",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "晋中",
                        "cityPinYin": "jinzhong",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "锦州",
                        "cityPinYin": "jinzhou",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "吉林",
                        "cityPinYin": "jilin",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "鸡西",
                        "cityPinYin": "jixi",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "金华",
                        "cityPinYin": "jinhua",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "佳木斯",
                        "cityPinYin": "jiamusi",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "嘉兴",
                        "cityPinYin": "jiaxing",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "吉安",
                        "cityPinYin": "jian",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "焦作",
                        "cityPinYin": "jiaozuo",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "景德镇",
                        "cityPinYin": "jingdezhen",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "济南",
                        "cityPinYin": "jinan",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "九江",
                        "cityPinYin": "jiujiang",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "济宁",
                        "cityPinYin": "jining",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "荆门",
                        "cityPinYin": "jingmen",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "揭阳",
                        "cityPinYin": "jieyang",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "荆州",
                        "cityPinYin": "jingzhou",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "江门",
                        "cityPinYin": "jiangmen",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "金昌",
                        "cityPinYin": "jinchang",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "嘉峪关",
                        "cityPinYin": "jiayuguan",
                        "cityFirstLetter": "j"
                    },
                    {
                        "cityName": "酒泉",
                        "cityPinYin": "jiuquan",
                        "cityFirstLetter": "j"
                    }
                ],
                "k": [{
                        "cityName": "开封",
                        "cityPinYin": "kaifeng",
                        "cityFirstLetter": "k"
                    },
                    {
                        "cityName": "昆明",
                        "cityPinYin": "kunming",
                        "cityFirstLetter": "k"
                    },
                    {
                        "cityName": "克孜勒苏柯尔克孜自治州",
                        "cityPinYin": "kezilesukeerkezizizhizhou",
                        "cityFirstLetter": "k"
                    },
                    {
                        "cityName": "喀什地区",
                        "cityPinYin": "kashidiqu",
                        "cityFirstLetter": "k"
                    },
                    {
                        "cityName": "克拉玛依",
                        "cityPinYin": "kelamayi",
                        "cityFirstLetter": "k"
                    }
                ],
                "l": [{
                        "cityName": "廊坊",
                        "cityPinYin": "langfang",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "临汾",
                        "cityPinYin": "linfen",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "吕梁",
                        "cityPinYin": "lvliang",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "辽阳",
                        "cityPinYin": "liaoyang",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "连云港",
                        "cityPinYin": "lianyungang",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "辽源",
                        "cityPinYin": "liaoyuan",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "六安",
                        "cityPinYin": "liuan",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "丽水",
                        "cityPinYin": "lishui",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "聊城",
                        "cityPinYin": "liaocheng",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "洛阳",
                        "cityPinYin": "luoyang",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "莱芜",
                        "cityPinYin": "laiwu",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "龙岩",
                        "cityPinYin": "longyan",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "娄底",
                        "cityPinYin": "loudi",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "临沂",
                        "cityPinYin": "linyi",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "来宾",
                        "cityPinYin": "laibin",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "漯河",
                        "cityPinYin": "luohe",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "泸州",
                        "cityPinYin": "luzhou",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "凉山彝族自治州",
                        "cityPinYin": "liangshanyizuzizhizhou",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "丽江",
                        "cityPinYin": "lijiang",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "乐山",
                        "cityPinYin": "leshan",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "兰州",
                        "cityPinYin": "lanzhou",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "柳州",
                        "cityPinYin": "liuzhou",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "临夏回族自治州",
                        "cityPinYin": "linxiahuizuzizhizhou",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "林芝",
                        "cityPinYin": "linzhi",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "陇南",
                        "cityPinYin": "longnan",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "六盘水",
                        "cityPinYin": "liupanshui",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "临沧",
                        "cityPinYin": "lincang",
                        "cityFirstLetter": "l"
                    },
                    {
                        "cityName": "拉萨",
                        "cityPinYin": "lasa",
                        "cityFirstLetter": "l"
                    }
                ],
                "m": [{
                        "cityName": "牡丹江",
                        "cityPinYin": "mudanjiang",
                        "cityFirstLetter": "m"
                    },
                    {
                        "cityName": "马鞍山",
                        "cityPinYin": "maanshan",
                        "cityFirstLetter": "m"
                    },
                    {
                        "cityName": "茂名",
                        "cityPinYin": "maoming",
                        "cityFirstLetter": "m"
                    },
                    {
                        "cityName": "绵阳",
                        "cityPinYin": "mianyang",
                        "cityFirstLetter": "m"
                    },
                    {
                        "cityName": "梅州",
                        "cityPinYin": "meizhou",
                        "cityFirstLetter": "m"
                    },
                    {
                        "cityName": "眉山",
                        "cityPinYin": "meishan",
                        "cityFirstLetter": "m"
                    }
                ],
                "n": [{
                        "cityName": "宁波",
                        "cityPinYin": "ningbo",
                        "cityFirstLetter": "n"
                    },
                    {
                        "cityName": "南京",
                        "cityPinYin": "nanjing",
                        "cityFirstLetter": "n"
                    },
                    {
                        "cityName": "南通",
                        "cityPinYin": "nantong",
                        "cityFirstLetter": "n"
                    },
                    {
                        "cityName": "南昌",
                        "cityPinYin": "nanchang",
                        "cityFirstLetter": "n"
                    },
                    {
                        "cityName": "南平",
                        "cityPinYin": "nanping",
                        "cityFirstLetter": "n"
                    },
                    {
                        "cityName": "南阳",
                        "cityPinYin": "nanyang",
                        "cityFirstLetter": "n"
                    },
                    {
                        "cityName": "宁德",
                        "cityPinYin": "ningde",
                        "cityFirstLetter": "n"
                    },
                    {
                        "cityName": "内江",
                        "cityPinYin": "neijiang",
                        "cityFirstLetter": "n"
                    },
                    {
                        "cityName": "南充",
                        "cityPinYin": "nanchong",
                        "cityFirstLetter": "n"
                    },
                    {
                        "cityName": "南宁",
                        "cityPinYin": "nanning",
                        "cityFirstLetter": "n"
                    },
                    {
                        "cityName": "怒江傈僳族自治州",
                        "cityPinYin": "nujianglisuzuzizhizhou",
                        "cityFirstLetter": "n"
                    },
                    {
                        "cityName": "那曲地区",
                        "cityPinYin": "naqudiqu",
                        "cityFirstLetter": "n"
                    }
                ],
                "p": [{
                        "cityName": "盘锦",
                        "cityPinYin": "panjin",
                        "cityFirstLetter": "p"
                    },
                    {
                        "cityName": "萍乡",
                        "cityPinYin": "pingxiang",
                        "cityFirstLetter": "p"
                    },
                    {
                        "cityName": "莆田",
                        "cityPinYin": "putian",
                        "cityFirstLetter": "p"
                    },
                    {
                        "cityName": "平顶山",
                        "cityPinYin": "pingdingshan",
                        "cityFirstLetter": "p"
                    },
                    {
                        "cityName": "濮阳",
                        "cityPinYin": "puyang",
                        "cityFirstLetter": "p"
                    },
                    {
                        "cityName": "平凉",
                        "cityPinYin": "pingliang",
                        "cityFirstLetter": "p"
                    },
                    {
                        "cityName": "攀枝花",
                        "cityPinYin": "panzhihua",
                        "cityFirstLetter": "p"
                    },
                    {
                        "cityName": "普洱",
                        "cityPinYin": "puer",
                        "cityFirstLetter": "p"
                    }
                ],
                "q": [{
                        "cityName": "秦皇岛",
                        "cityPinYin": "qinhuangdao",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "七台河",
                        "cityPinYin": "qitaihe",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "齐齐哈尔",
                        "cityPinYin": "qiqihaer",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "泉州",
                        "cityPinYin": "quanzhou",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "衢州",
                        "cityPinYin": "quzhou",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "青岛",
                        "cityPinYin": "qingdao",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "清远",
                        "cityPinYin": "qingyuan",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "黔东南苗族侗族自治州",
                        "cityPinYin": "qiandongnanmiaozudongzuzizhizhou",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "黔南布依族苗族自治州",
                        "cityPinYin": "qiannanbuyizumiaozuzizhizhou",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "钦州",
                        "cityPinYin": "qinzhou",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "黔西南布依族苗族自治州",
                        "cityPinYin": "qianxinanbuyizumiaozuzizhizhou",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "曲靖",
                        "cityPinYin": "qujing",
                        "cityFirstLetter": "q"
                    },
                    {
                        "cityName": "庆阳",
                        "cityPinYin": "qingyang",
                        "cityFirstLetter": "q"
                    }
                ],
                "r": [{
                        "cityName": "日照",
                        "cityPinYin": "rizhao",
                        "cityFirstLetter": "r"
                    },
                    {
                        "cityName": "日喀则",
                        "cityPinYin": "rikaze",
                        "cityFirstLetter": "r"
                    }
                ],
                "s": [{
                        "cityName": "石家庄",
                        "cityPinYin": "shijiazhuang",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "四平",
                        "cityPinYin": "siping",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "朔州",
                        "cityPinYin": "shuozhou",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "沈阳",
                        "cityPinYin": "shenyang",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "上海",
                        "cityPinYin": "shanghai",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "苏州",
                        "cityPinYin": "suzhou",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "松原",
                        "cityPinYin": "songyuan",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "双鸭山",
                        "cityPinYin": "shuangyashan",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "绥化",
                        "cityPinYin": "suihua",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "厦门",
                        "cityPinYin": "shamen",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "宿迁",
                        "cityPinYin": "suqian",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "上饶",
                        "cityPinYin": "shangrao",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "绍兴",
                        "cityPinYin": "shaoxing",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "宿州",
                        "cityPinYin": "suzhou",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "三明",
                        "cityPinYin": "sanming",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "十堰",
                        "cityPinYin": "shiyan",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "邵阳",
                        "cityPinYin": "shaoyang",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "商丘",
                        "cityPinYin": "shangqiu",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "随州",
                        "cityPinYin": "suizhou",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "三门峡",
                        "cityPinYin": "sanmenxia",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "汕头",
                        "cityPinYin": "shantou",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "韶关",
                        "cityPinYin": "shaoguan",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "深圳",
                        "cityPinYin": "shenzhen",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "山南",
                        "cityPinYin": "shannan",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "汕尾",
                        "cityPinYin": "shanwei",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "三沙",
                        "cityPinYin": "sansha",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "三亚",
                        "cityPinYin": "sanya",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "遂宁",
                        "cityPinYin": "suining",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "商洛",
                        "cityPinYin": "shangluo",
                        "cityFirstLetter": "s"
                    },
                    {
                        "cityName": "石嘴山",
                        "cityPinYin": "shizuishan",
                        "cityFirstLetter": "s"
                    }
                ],
                "t": [{
                        "cityName": "天津",
                        "cityPinYin": "tianjin",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "唐山",
                        "cityPinYin": "tangshan",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "铁岭",
                        "cityPinYin": "tieling",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "太原",
                        "cityPinYin": "taiyuan",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "通化",
                        "cityPinYin": "tonghua",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "通辽",
                        "cityPinYin": "tongliao",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "泰州",
                        "cityPinYin": "taizhou",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "台州",
                        "cityPinYin": "taizhou",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "铜陵",
                        "cityPinYin": "tongling",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "泰安",
                        "cityPinYin": "taian",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "铜川",
                        "cityPinYin": "tongchuan",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "铜仁",
                        "cityPinYin": "tongren",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "台湾省",
                        "cityPinYin": "taiwansheng",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "天水",
                        "cityPinYin": "tianshui",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "吐鲁番",
                        "cityPinYin": "tulufan",
                        "cityFirstLetter": "t"
                    },
                    {
                        "cityName": "塔城地区",
                        "cityPinYin": "tachengdiqu",
                        "cityFirstLetter": "t"
                    }
                ],
                "w": [{
                        "cityName": "乌兰察布",
                        "cityPinYin": "wulanchabu",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "乌海",
                        "cityPinYin": "wuhai",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "无锡",
                        "cityPinYin": "wuxi",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "温州",
                        "cityPinYin": "wenzhou",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "芜湖",
                        "cityPinYin": "wuhu",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "威海",
                        "cityPinYin": "weihai",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "潍坊",
                        "cityPinYin": "weifang",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "武汉",
                        "cityPinYin": "wuhan",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "梧州",
                        "cityPinYin": "wuzhou",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "文山壮族苗族自治州",
                        "cityPinYin": "wenshanzhuangzumiaozuzizhizhou",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "武威",
                        "cityPinYin": "wuwei",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "乌鲁木齐",
                        "cityPinYin": "wulumuqi",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "渭南",
                        "cityPinYin": "weinan",
                        "cityFirstLetter": "w"
                    },
                    {
                        "cityName": "吴忠",
                        "cityPinYin": "wuzhong",
                        "cityFirstLetter": "w"
                    }
                ],
                "x": [{
                        "cityName": "邢台",
                        "cityPinYin": "xingtai",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "忻州",
                        "cityPinYin": "xinzhou",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "锡林郭勒盟",
                        "cityPinYin": "xilinguolemeng",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "兴安盟",
                        "cityPinYin": "xinganmeng",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "徐州",
                        "cityPinYin": "xuzhou",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "宣城",
                        "cityPinYin": "xuancheng",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "许昌",
                        "cityPinYin": "xuchang",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "信阳",
                        "cityPinYin": "xinyang",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "咸宁",
                        "cityPinYin": "xianning",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "湘潭",
                        "cityPinYin": "xiangtan",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "新余",
                        "cityPinYin": "xinyu",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "孝感",
                        "cityPinYin": "xiaogan",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "新乡",
                        "cityPinYin": "xinxiang",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "湘西土家族苗族自治州",
                        "cityPinYin": "xiangxitujiazumiaozuzizhizhou",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "襄阳",
                        "cityPinYin": "xiangyang",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "西安",
                        "cityPinYin": "xian",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "香港特别行政区",
                        "cityPinYin": "xianggangtebiehangzhengqu",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "西双版纳傣族自治州",
                        "cityPinYin": "xishuangbannadaizuzizhizhou",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "咸阳",
                        "cityPinYin": "xianyang",
                        "cityFirstLetter": "x"
                    },
                    {
                        "cityName": "西宁",
                        "cityPinYin": "xining",
                        "cityFirstLetter": "x"
                    }
                ],
                "y": [{
                        "cityName": "阳泉",
                        "cityPinYin": "yangquan",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "运城",
                        "cityPinYin": "yuncheng",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "营口",
                        "cityPinYin": "yingkou",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "扬州",
                        "cityPinYin": "yangzhou",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "延边朝鲜族自治州",
                        "cityPinYin": "yanbianzhaoxianzuzizhizhou",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "伊春",
                        "cityPinYin": "yichun",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "盐城",
                        "cityPinYin": "yancheng",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "鹰潭",
                        "cityPinYin": "yingtan",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "烟台",
                        "cityPinYin": "yantai",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "宜春",
                        "cityPinYin": "yichun",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "云浮",
                        "cityPinYin": "yunfu",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "益阳",
                        "cityPinYin": "yiyang",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "阳江",
                        "cityPinYin": "yangjiang",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "宜昌",
                        "cityPinYin": "yichang",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "雅安",
                        "cityPinYin": "yaan",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "玉林",
                        "cityPinYin": "yulin",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "岳阳",
                        "cityPinYin": "yueyang",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "永州",
                        "cityPinYin": "yongzhou",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "延安",
                        "cityPinYin": "yanan",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "榆林",
                        "cityPinYin": "yulin",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "玉树藏族自治州",
                        "cityPinYin": "yushucangzuzizhizhou",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "银川",
                        "cityPinYin": "yinchuan",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "宜宾",
                        "cityPinYin": "yibin",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "玉溪",
                        "cityPinYin": "yuxi",
                        "cityFirstLetter": "y"
                    },
                    {
                        "cityName": "伊犁哈萨克自治州",
                        "cityPinYin": "yilihasakezizhizhou",
                        "cityFirstLetter": "y"
                    }
                ],
                "z": [{
                        "cityName": "张家口",
                        "cityPinYin": "zhangjiakou",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "朝阳",
                        "cityPinYin": "zhaoyang",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "舟山",
                        "cityPinYin": "zhoushan",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "镇江",
                        "cityPinYin": "zhenjiang",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "漳州",
                        "cityPinYin": "zhangzhou",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "张家界",
                        "cityPinYin": "zhangjiajie",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "珠海",
                        "cityPinYin": "zhuhai",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "枣庄",
                        "cityPinYin": "zaozhuang",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "淄博",
                        "cityPinYin": "zibo",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "郑州",
                        "cityPinYin": "zhengzhou",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "周口",
                        "cityPinYin": "zhoukou",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "驻马店",
                        "cityPinYin": "zhumadian",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "肇庆",
                        "cityPinYin": "zhaoqing",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "遵义",
                        "cityPinYin": "zunyi",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "株洲",
                        "cityPinYin": "zhuzhou",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "重庆",
                        "cityPinYin": "zhongqing",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "湛江",
                        "cityPinYin": "zhanjiang",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "中山",
                        "cityPinYin": "zhongshan",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "昭通",
                        "cityPinYin": "zhaotong",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "自贡",
                        "cityPinYin": "zigong",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "张掖",
                        "cityPinYin": "zhangye",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "资阳",
                        "cityPinYin": "ziyang",
                        "cityFirstLetter": "z"
                    },
                    {
                        "cityName": "中卫",
                        "cityPinYin": "zhongwei",
                        "cityFirstLetter": "z"
                    }
                ]
            }
        }
    };

    var li = "";
    var city = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "w", "x", "y", "z"];
    for (let i = 0; i < data.data.hot.length; i++) {
        li += "<li>" + data.data.hot[i].cityName + "</li>"
    }
    $("#home #remeng").append(li);

    li = ""
    for (let i = 0; i <= 5; i++) {
        var obj = data.data.cityList[city[i]];
        let count = data.data.cityList[city[i]].length;
        for (let j = 0; j < count; j++) {
            li += "<li title='" + obj[j].cityName + "'>" + obj[j].cityName + "</li>";
        }
    }
    $("#profile #remeng").append(li);
    li = "";
    for (let i = 6; i <= 9; i++) {
        var obj = data.data.cityList[city[i]];
        let count = data.data.cityList[city[i]].length;
        for (let j = 0; j < count; j++) {
            li += "<li title='" + obj[j].cityName + "'>" + obj[j].cityName + "</li>";
        }
    }
    $("#GHJK #remeng").append(li);
    li = "";
    for (let i = 10; i <= 14; i++) {
        var obj = data.data.cityList[city[i]];
        let count = data.data.cityList[city[i]].length;
        for (let j = 0; j < count; j++) {
            li += "<li title='" + obj[j].cityName + "'>" + obj[j].cityName + "</li>";
        }
    }
    $("#LMNPQ #remeng").append(li);
    li = "";
    for (let i = 15; i <= 18; i++) {
        var obj = data.data.cityList[city[i]];
        let count = data.data.cityList[city[i]].length;
        for (let j = 0; j < count; j++) {
            li += "<li title='" + obj[j].cityName + "'>" + obj[j].cityName + "</li>";
        }
    }
    $("#RSTW #remeng").append(li);
    li = "";
    for (let i = 19; i <= 21; i++) {
        var obj = data.data.cityList[city[i]];
        let count = data.data.cityList[city[i]].length;
        for (let j = 0; j < count; j++) {
            li += "<li title='" + obj[j].cityName + "'>" + obj[j].cityName + "</li>";
        }
    }
    $("#XYZ #remeng").append(li);


    console.log("fretrb");
    $("#select-city .tab-content li").click(function(){
        $("#city").text($(this).text())
        $("#select-city").toggleClass('hidden');
    })
})
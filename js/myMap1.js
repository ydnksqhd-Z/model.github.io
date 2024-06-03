//配置地图
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var geoCoordMap = {
    雅酷特克塔雷克国家公园: [132.486909,71.74329],
            塔河:	[124.70128,52.342418],
            黑河:	[127.539799,50.252378],
            松嫩平原:	[123.647154,47.214941],
            盘锦:	[122.062426,41.130883],
            长岛:	[120.744735,37.950818],
            北戴河:	[119.515389,39.853857],
            微山湖:	[117.282645,34.689589],
            黄河三角洲:	[119.04043,37.787876],
            大别山:	[116.414472,31.404752],
            鄱阳湖:	[116.684921,29.139641],
            库苏古尔湖:	[98.55202,52.341517],
            赤峰达里诺尔湖:	[116.670532,43.410356],
            北京密云水库:	[116.920432,40.523288],
            天津北大港:	[117.401714,38.72681],
            荣成:	[122.627326,37.207658],
            本查干湖:  [99.17194,45.57528],
            鄂尔多斯:	[109.781979,39.621153],
            榆林:	[109.736731,38.294054],
            三门峡:	[111.205668,34.775954],
            洞庭湖:	[113.02153,29.126336],
	        新乡:	[113.93216,35.315766],
            鄱阳湖:	[116.684921,29.139641],
            哈尔乌苏湖:	[91.741947,45.891393],
            和静巴音布鲁克草原:	[84.140746,43.033796],
            青海湖:	[100.202119,36.880899],
            三江平原湿地:	[132.583397,47.694986],
            齐齐哈尔扎龙国家级自然保护区:	[124.247733,47.202773],
            兴凯湖:	[132.33596,45.371982],
            特尔金白湖:	[99.67806,48.16139],
            青海湖:	[100.202119,36.880899],
            吉尔卡湖:	[85.38694,19.77083],
            阿尔泰塔万博格多国家公园:	[88.7175,48.47139],
            伊塞克湖:	[77.28278,42.39444],
            庞坝湖:	[76.085848,35.854668],
            奇特万国家森林公园:	[80.345226,30.409698],
            凯奥拉德奥国家公园:	[77.52167,27.15944],
            昆坦库拉姆鸟类保护区:	[76.306615,9.674207],
  };
  var convertData1 = function(geoCoordMap) {
    var res = [];
    for (var key in geoCoordMap) {
        res.push({
            name: key,
            value: geoCoordMap[key]
        });
    }
    return res;
};

// 获取转换后的数据
var pointData = convertData1(geoCoordMap);

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  var color = ["#fff", "#fff", "#fff"]; //航线的颜色
  var series = [];
  //初始化航线
  //东线数据
    var Data1 = [
    [{ name: "雅酷特克塔雷克国家公园" }, { name: "塔河"}],
    [{ name: "雅酷特克塔雷克国家公园" }, { name: "黑河"}],
    [{ name: "塔河" }, { name: "松嫩平原"}],
    [{ name: "黑河" }, { name: "松嫩平原"}],
    [{ name: "松嫩平原" }, { name: "北戴河"}],
    [{ name: "松嫩平原" }, { name: "盘锦"}],
    [{ name: "盘锦" }, { name: "北戴河"}],
    [{ name: "盘锦" }, { name: "长岛"}],
    [{ name: "北戴河" }, { name: "黄河三角洲"}],
    [{ name: "黄河三角洲" }, { name: "微山湖"}],
    [{ name: "长岛" }, { name: "微山湖"}],
    [{ name: "微山湖" }, { name: "大别山"}],
    [{ name: "大别山" }, { name: "鄱阳湖"}]];
  //配置东线  
  [
    ["雅酷特克塔雷克国家公园", Data1],
  ].forEach(function(item, i) {
    series.push(
      {
        name: "东线",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: "red",
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: "东线",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: "red",
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: false,
            position: "right",
            formatter: "{b}"
          }
        },
        itemStyle: {
          normal: {
            color: color[i]
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data:pointData
      }
    );
  });
  //配置中线
  //中线数据
 var Data2=[
  [{ name: "和静巴音布鲁克草原" }, { name: "青海湖"}],
  [{ name: "和静巴音布鲁克草原" }, { name: "哈尔乌苏湖"}],
  [{ name: "哈尔乌苏湖" }, { name: "本查干湖"}],
  [{ name: "本查干湖" }, { name: "鄂尔多斯"}],
  [{ name: "鄂尔多斯" }, { name: "榆林"}],
  [{ name: "榆林" }, { name: "三门峡"}],
  [{ name: "三门峡" }, { name: "洞庭湖"}],
  [{ name: "鄂尔多斯" }, { name: "新乡"}],
  [{ name: "新乡" }, { name: "鄱阳湖"}],
  [{ name: "库苏古尔湖" }, { name: "新乡"}],
  [{ name: "库苏古尔湖" }, { name: "赤峰达里诺尔湖"}],
  [{ name: "赤峰达里诺尔湖" }, { name: "北京密云水库"}],
  [{ name: "北京密云水库" }, { name: "天津北大港"}],
  [{ name: "天津北大港" }, { name: "黄河三角洲"}],
  [{ name: "黄河三角洲" }, { name: "荣成"}],
  [{ name: "黄河三角洲" }, { name: "齐齐哈尔扎龙国家级自然保护区"}],
  [{name:"黄河三角洲"},{name:"三江平原湿地"}],
  [{name:"三江平原湿地"},{name:"兴凯湖"}]];
  [
    ["和静巴音布鲁克草原", Data2],
  ].forEach(function(item, i) {
    series.push(
      {
        name: "中线",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "yellow", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: "yellow",
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: "中线",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: "yellow",
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
    );
  });
  //配置西线
  //西线数据
  var Data3=[
    [{name:"特尔金白湖"},{name:"青海湖"}],
    [{name:"青海湖"},{name:"吉尔卡湖"}],
    [{name:"青海湖"},{name:"奇特万国家森林公园"}],
    [{name:"阿尔泰塔万博格多国家公园"},{name:"吉尔卡湖"}],
    [{name:"阿尔泰塔万博格多国家公园"},{name:"奇特万国家森林公园"}],
    [{name:"伊塞克湖"},{name:"庞坝湖"}],
    [{name:"庞坝湖"},{name:"奇特万国家森林公园"}],
    [{name:"奇特万国家森林公园"},{name:"凯奥拉德奥国家公园"}],
    [{name:"奇特万国家森林公园"},{name:"吉尔卡湖"}],
    [{name:"吉尔卡湖"},{name:"昆坦库拉姆鸟类保护区"}]];
  [
    ["特尔金白湖", Data3],
  ].forEach(function(item, i) {
    series.push(
      {
        name: "西线",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "blue", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: "blue",
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: "西线",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: "blue",
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
    );
  });
  //
  var option = {
    title: {
      text: '中国候鸟迁徙路线',
      left: 'center',
      top: 20,
      textStyle: {
      color: 'black'
      }
  },
    legend: {
      data: ['东线', '中线', '西线'],
      textStyle:{
          color:'white'
      }
  },
    tooltip: {
      show:true,
      trigger: "item",
      formatter: function(params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return  params.data.name;
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            "->" +
            params.data.toName 
          );
        } else {
          return params.name;
        }
      }
    },
    geo: {
      map: "world",
      center:[100,40],
      zoom:5,
      nameMap:{
        'Afghanistan': '阿富汗',
'Angola': '安哥拉',
'Albania': '阿尔巴尼亚',
'United Arab Emirates': '阿联酋',
'Argentina': '阿根廷',
'Armenia': '亚美尼亚',
'Australia': '澳大利亚',
'Austria': '奥地利',
'Azerbaijan': '阿塞拜疆',
'Burundi': '布隆迪',
'Belgium': '比利时',
'Benin': '贝宁',
'Burkina Faso': '布基纳法索',
'Bangladesh': '孟加拉',
'Bulgaria': '保加利亚',
'Belarus': '白俄罗斯',
'Belize': '伯利兹',
'Bermuda': '百慕大',
'Bolivia': '玻利维亚',
'Brazil': '巴西',
'Brunei': '文莱',
'Bhutan': '不丹',
'Botswana': '博茨瓦纳',
'Canada': '加拿大',
'Switzerland': '瑞士',
'Chile': '智利',
'China': '中国',
'Cameroon': '喀麦隆',
'Colombia': '哥伦比亚',
'Costa Rica': '哥斯达黎加',
'Cuba': '古巴',
'Cyprus': '塞浦路斯',
'Germany': '德国',
'Djibouti': '吉布提',
'Denmark': '丹麦',
'Algeria': '阿尔及利亚',
'Ecuador': '厄瓜多尔',
'Egypt': '埃及',
'Eritrea': '厄立特里亚',
'Spain': '西班牙',
'Estonia': '爱沙尼亚',
'Ethiopia': '埃塞俄比亚',
'Finland': '芬兰',
'Fiji': '斐济',
'France': '法国',
'Gabon': '加蓬',
'United Kingdom': '英国',
'Georgia': '格鲁吉亚',
'Ghana': '加纳',
'Guinea': '几内亚',
'Gambia': '冈比亚',
'Greece': '希腊',
'Greenland': '格陵兰',
'Guatemala': '危地马拉',
'Guyana': '圭亚那',
'Honduras': '洪都拉斯',
'Croatia': '克罗地亚',
'Haiti': '海地',
'Hungary': '匈牙利',
'Indonesia': '印度尼西亚',
'India': '印度',
'Ireland': '爱尔兰',
'Iran': '伊朗',
'Iraq': '伊拉克',
'Iceland': '冰岛',
'Israel': '以色列',
'Italy': '意大利',
'Jamaica': '牙买加',
'Jordan': '约旦',
'Japan': '日本',
'Kazakhstan': '哈萨克斯坦',
'Kenya': '肯尼亚',
'Kyrgyzstan': '吉尔吉斯斯坦',
'Cambodia': '柬埔寨',
'Korea': '韩国',
'Kuwait': '科威特',
'Lebanon': '黎巴嫩',
'Liberia': '利比里亚',
'Libya': '利比亚',
'Sri Lanka': '斯里兰卡',
'Lesotho': '莱索托',
'Lithuania': '立陶宛',
'Luxembourg': '卢森堡',
'Latvia': '拉脱维亚',
'Morocco': '摩洛哥',
'Moldova': '摩尔多瓦',
'Madagascar': '马达加斯加',
'Mexico': '墨西哥',
'Macedonia': '马其顿',
'Mali': '马里',
'Myanmar': '缅甸',
'Montenegro': '黑山',
'Mongolia': '蒙古',
'Mozambique': '莫桑比克',
'Mauritania': '毛里塔尼亚',
'Malawi': '马拉维',
'Malaysia': '马来西亚',
'Namibia': '纳米比亚',
'New Caledonia': '新喀里多尼亚',
'Niger': '尼日尔',
'Nigeria': '尼日利亚',
'Nicaragua': '尼加拉瓜',
'Netherlands': '荷兰',
'Norway': '挪威',
'Nepal': '尼泊尔',
'New Zealand': '新西兰',
'Oman': '阿曼',
'Pakistan': '巴基斯坦',
'Panama': '巴拿马',
'Peru': '秘鲁',
'Philippines': '菲律宾',
'Papua New Guinea': '巴布亚新几内亚',
'Poland': '波兰',
'Puerto Rico': '波多黎各',
'Portugal': '葡萄牙',
'Paraguay': '巴拉圭',
'Qatar': '卡塔尔',
'Romania': '罗马尼亚',
'Russia': '俄罗斯',
'Rwanda': '卢旺达',
'Saudi Arabia': '沙特阿拉伯',
'Sudan': '苏丹',
'Senegal': '塞内加尔',
'Sierra Leone': '塞拉利昂',
'El Salvador': '萨尔瓦多',
'Somalia': '索马里',
'Suriname': '苏里南',
'Slovakia': '斯洛伐克',
'Slovenia': '斯洛文尼亚',
'Sweden': '瑞典',
'Swaziland': '斯威士兰',
'Syria': '叙利亚',
'Chad': '乍得',
'Togo': '多哥',
'Thailand': '泰国',
'Tajikistan': '塔吉克斯坦',
'Turkmenistan': '土库曼斯坦',
'Trinidad and Tobago': '特立尼达和多巴哥',
'Tunisia': '突尼斯',
'Turkey': '土耳其',
'Uganda': '乌干达',
'Ukraine': '乌克兰',
'Uruguay': '乌拉圭',
'United States': '美国',
'Uzbekistan': '乌兹别克斯坦',
'Venezuela': '委内瑞拉',
'Vietnam': '越南',
'Vanuatu': '瓦努阿图',
'Yemen': '也门',
'South Africa': '南非',
'Zambia': '赞比亚',
'Zimbabwe': '津巴布韦',
'Liechtenstein':'列支敦士登',
'Serbia':'塞尔维亚',
"Aland": "奥兰群岛",
"Andorra": "安道尔",
"American Samoa": "美属萨摩亚",
"Antigua and Barb.": "安提瓜和巴布达",
"Bahrain": "巴林",
"Bahamas": "巴哈马",
"Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
"Barbados": "巴巴多斯",
"Central African Rep.": "中非",
"Dem. Rep. Congo": "刚果民主共和国",
"Congo": "刚果",
"Comoros": "科摩罗",
"Cape Verde": "佛得角",
"Curaçao": "库拉索",
"Cayman Is.": "开曼群岛",
"Czech Rep.": "捷克",
"Dominica": "多米尼克",
"Falkland Is.": "福克兰群岛",
"Faeroe Is.": "法罗群岛",
"Micronesia": "密克罗尼西亚联邦",
"Guinea-Bissau": "几内亚比绍",
"Eq. Guinea": "赤道几内亚",
"Grenada": "格林纳达",
"Guam": "关岛",
"Isle of Man": "马恩岛",
"Br. Indian Ocean Ter.": "英属印度洋领地",
"Jersey": "泽西岛",
"Kiribati": "基里巴斯",
"Lao PDR": "老挝",
"Saint Lucia": "圣卢西亚",
"Malta": "马耳他",
"N. Mariana Is.": "北马里亚纳群岛",
"Montserrat": "蒙特塞拉特岛",
"Mauritius": "毛里求斯",
"Niue": "纽埃岛",
"Palau": "帕劳",
"Dem. Rep. Korea":"韩国",
"Palestine": "巴勒斯坦",
"Fr. Polynesia": "法属波利尼西亚",
"S. Sudan": "南苏丹",
"Singapore": "新加坡",
"Saint Helena":"圣赫勒拿",
"Solomon Is.": "所罗门群岛",
"St. Pierre and Miquelon": "圣皮埃尔和密克隆群岛",
"São Tomé and Principe": "圣多美和普林西比",
"Seychelles": "塞舌尔",
"Turks and Caicos Is.": "特克斯和凯科斯群岛",
"Timor-Leste": "东帝汶",
"Tonga": "汤加",
"Tanzania": "坦桑尼亚",
"St. Vin. and Gren.": "圣文森特和格林纳丁斯",
"U.S. Virgin Is.": "美属维尔京群岛",
"Samoa": "萨摩亚",
"W. Sahara":"西撒哈拉",
"Fr. S. Antarctic Lands":"马提尼克岛",
"Côte d'Ivoire":"科特迪瓦",
"N. Cyprus":"东塞浦路斯",
"Dominican Rep.": "多米尼加",
"Heard I. and McDonald Is.":"赫德岛和麦克唐纳群岛",
"Siachen Glacier":"锡亚琴冰川",
"S. Geo. and S. Sandw. Is.":"南乔治亚岛与南桑威奇群岛"
},
      label: {
       normal: {//省份名称显示
       show: true,
       fontSize: "10",
       color: "white"
  },
        emphasis: {//高亮显示
       show: true
     } 
     },
      roam: false,
      //   放大我们的地图
      itemStyle: {
        normal: {
          areaColor: "rgba(43, 196, 243, 0.42)",
          borderColor: "rgba(43, 196, 243, 1)",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
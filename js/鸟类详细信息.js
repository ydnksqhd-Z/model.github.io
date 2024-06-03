// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
 
  var Data=[
    {
      "name":'青藏',
      "num":51
    },
    {
      "name":"甘肃",
      "num":1
    },
    {
      "name":"四川",
      "num":248
    }
  ]

var option = {
            tooltip: {},
            xAxis: {
              axisLabel: {
                color: 'white' // Change X-axis label color to white
            },
                type: 'category',
                data: Data.map(item => item.name)
            },
            yAxis: {
              axisLabel: {
                color: 'white' // Change X-axis label color to white
            },
            },
            series: [{
                type: 'bar',
                barWidth: "60%",
                showBackground: true,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.5, color: '#188df0' },
                  { offset: 1, color: '#188df0' }
                  ])
                },
                emphasis: {
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#2378f7' },
                    { offset: 0.7, color: '#2378f7' },
                    { offset: 1, color: '#83bff6' }
                    ])
                  }
                },
                data: Data.map(item => item.num)
            }]
        };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
  var dataAll = [
    { data: [
      {
        "name":'青藏',
        "num":51
      },
      {
        "name":"甘肃",
        "num":1
      },
      {
        "name":"四川",
        "num":248
      }
    ] },
    { data: [
      {
        "name":'新疆',
        "num":2
      },
      {
        "name":"辽宁",
        "num":15
      },
      {
        "name":"吉林",
        "num":28
      },
      {
        "name":"黑龙江",
        "num":22
      },
      
      {
        "name":"内蒙古",
        "num":186
      }
    ] },
    {
      data:[
        { "name":'安徽',
"num":15},
{ "name":'北京',
"num":14},
{ "name":'河北',
"num":14},
{ "name":'黑龙江',
"num":74},
{ "name":'吉林',
"num":34},
{ "name":'江苏',
"num":196},
{ "name":'辽宁',
"num":70},
{ "name":'内蒙古',
"num":53},
{ "name":'山东',
"num":167},
{ "name":'山西',
"num":1},
{ "name":'上海',
"num":10},
{ "name":'天津',
"num":1},
      ]
    },
    {
        data:[
            { "name":'安徽',
"num":13},
{ "name":'福建',
"num":832},
{ "name":'广东',
"num":2739},
{ "name":'广西',
"num":21},
{ "name":'海南',
"num":222},
{ "name":'湖北',
"num":2},
{ "name":'湖南',
"num":3},
{ "name":'江苏',
"num":449},
{ "name":'江西',
"num":35},
{ "name":'辽宁',
"num":58},
{ "name":'山东',
"num":30},
{ "name":'上海',
"num":1388},
{ "name":'台湾',
"num":54},
{ "name":'天津',
"num":3},
{ "name":'香港',
"num":135},
{ "name":'云南',
"num":1},
{ "name":'浙江',
"num":436},
        ]
    },
    {
        data:[
            { "name":'北京',
"num":58},
{ "name":'天津',
"num":18},
{ "name":'新疆',
"num":71},
        ]
    }
  ];
  $(".bar h2 ").on("click", "a", function() {
    Data=dataAll[$(this).index()].data;
    option = {
      tooltip: {},
      xAxis: {
          type: 'category',
          data: Data.map(item => item.name)
      },
      yAxis: {},
      series: [{
          type: 'bar',
          barWidth: "60%",
          data: Data.map(item => item.num)
      }]
  };
    myChart.setOption(option);
  });
})();
// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));
 // Organize data by year
 var Data= [
  {
      "chart_num": 1,
      "chart_month": 4.0,
      "chart_year": 2019.0
  },
  {
      "chart_num": 4,
      "chart_month": 5.0,
      "chart_year": 2019.0
  },
  {
      "chart_num": 2,
      "chart_month": 6.0,
      "chart_year": 2019.0
  },
  {
      "chart_num": 5,
      "chart_month": 4.0,
      "chart_year": 2020.0
  },
  {
      "chart_num": 6,
      "chart_month": 5.0,
      "chart_year": 2020.0
  },
  {
      "chart_num": 10,
      "chart_month": 6.0,
      "chart_year": 2020.0
  },
  {
      "chart_num": 1,
      "chart_month": 1.0,
      "chart_year": 2021.0
  },
  {
      "chart_num": 2,
      "chart_month": 2.0,
      "chart_year": 2021.0
  },
  {
      "chart_num": 7,
      "chart_month": 4.0,
      "chart_year": 2021.0
  },
  {
      "chart_num": 37,
      "chart_month": 5.0,
      "chart_year": 2021.0
  },
  {
      "chart_num": 10,
      "chart_month": 6.0,
      "chart_year": 2021.0
  },
  {
      "chart_num": 3,
      "chart_month": 7.0,
      "chart_year": 2021.0
  },
  {
      "chart_num": 1,
      "chart_month": 8.0,
      "chart_year": 2021.0
  },
  {
      "chart_num": 1,
      "chart_month": 9.0,
      "chart_year": 2021.0
  },
  {
      "chart_num": 2,
      "chart_month": 10.0,
      "chart_year": 2021.0
  },
  {
      "chart_num": 1,
      "chart_month": 11.0,
      "chart_year": 2021.0
  },
  {
      "chart_num": 2,
      "chart_month": 1.0,
      "chart_year": 2022.0
  },
  {
      "chart_num": 1,
      "chart_month": 2.0,
      "chart_year": 2022.0
  },
  {
      "chart_num": 3,
      "chart_month": 4.0,
      "chart_year": 2022.0
  },
  {
      "chart_num": 26,
      "chart_month": 5.0,
      "chart_year": 2022.0
  },
  {
      "chart_num": 12,
      "chart_month": 6.0,
      "chart_year": 2022.0
  },
  {
      "chart_num": 2,
      "chart_month": 7.0,
      "chart_year": 2022.0
  },
  {
      "chart_num": 3,
      "chart_month": 8.0,
      "chart_year": 2022.0
  },
  {
      "chart_num": 1,
      "chart_month": 10.0,
      "chart_year": 2022.0
  },
  {
      "chart_num": 1,
      "chart_month": 1.0,
      "chart_year": 2023.0
  },
  {
      "chart_num": 1,
      "chart_month": 2.0,
      "chart_year": 2023.0
  },
  {
      "chart_num": 2,
      "chart_month": 3.0,
      "chart_year": 2023.0
  },
  {
      "chart_num": 21,
      "chart_month": 4.0,
      "chart_year": 2023.0
  },
  {
      "chart_num": 83,
      "chart_month": 5.0,
      "chart_year": 2023.0
  },
  {
      "chart_num": 13,
      "chart_month": 6.0,
      "chart_year": 2023.0
  },
  {
      "chart_num": 1,
      "chart_month": 7.0,
      "chart_year": 2023.0
  },
  {
      "chart_num": 1,
      "chart_month": 8.0,
      "chart_year": 2023.0
  },
  {
      "chart_num": 2,
      "chart_month": 9.0,
      "chart_year": 2023.0
  },
  {
      "chart_num": 25,
      "chart_month": 11.0,
      "chart_year": 2023.0
  },
  {
      "chart_num": 7,
      "chart_month": 12.0,
      "chart_year": 2023.0
  }

]
const dataByYear = {};
Data.forEach(entry => {
const year = entry.chart_year;
if (!dataByYear[year]) {
  dataByYear[year] = [];
}
dataByYear[year].push(entry);
});
// Generate series data for each year
const series = [];
for (const year in dataByYear) {
const yearData = dataByYear[year];
const seriesData = [];
yearData.forEach(entry => {
  seriesData.push({
      name: entry.chart_num,
      value: [entry.chart_month-1, entry.chart_num]
  });
});
series.push({
  name: year,
  type: 'line',
  data: seriesData,
  smooth:true
});
}
// ECharts code
var option = {
  grid: {
    left: "5%",
    top: "25px",
    right: "5%",
    bottom: "4%",
    containLabel: true
  },
xAxis: {
  axisLabel: {
    color: 'white' // Change X-axis label color to white
},
  type: 'category',
  data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
},
yAxis: {
  axisLabel: {
    color: 'white' // Change X-axis label color to white
},
  type: 'value'
},
tooltip: {
  trigger: 'axis',
  axisPointer: {
      type: 'cross',
      label: {
          backgroundColor: '#6a7985'
      }
  },
  formatter: function (params) {
      let tooltip = '';
      params.forEach(param => {
        tooltip += `<span style="color: white;">${param.marker}${param.seriesName}: ${param.value[1]}</span><br/>`;
    });
      return tooltip;
  }
},
legend: {
  textStyle: {
    color: 'white' // Change X-axis label color to white
},
  data: Object.keys(dataByYear)
},
series: series
};
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);
  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
  var dataAll = [
    { data: [
      {
          "chart_num": 1,
          "chart_month": 4.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 4,
          "chart_month": 5.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 2,
          "chart_month": 6.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 5,
          "chart_month": 4.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 6,
          "chart_month": 5.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 10,
          "chart_month": 6.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 1,
          "chart_month": 1.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 2,
          "chart_month": 2.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 7,
          "chart_month": 4.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 37,
          "chart_month": 5.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 10,
          "chart_month": 6.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 3,
          "chart_month": 7.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 1,
          "chart_month": 8.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 1,
          "chart_month": 9.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 2,
          "chart_month": 10.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 1,
          "chart_month": 11.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 2,
          "chart_month": 1.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 1,
          "chart_month": 2.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 3,
          "chart_month": 4.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 26,
          "chart_month": 5.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 12,
          "chart_month": 6.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 2,
          "chart_month": 7.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 3,
          "chart_month": 8.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 1,
          "chart_month": 10.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 1,
          "chart_month": 1.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 1,
          "chart_month": 2.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 2,
          "chart_month": 3.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 21,
          "chart_month": 4.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 83,
          "chart_month": 5.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 13,
          "chart_month": 6.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 1,
          "chart_month": 7.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 1,
          "chart_month": 8.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 2,
          "chart_month": 9.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 25,
          "chart_month": 11.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 7,
          "chart_month": 12.0,
          "chart_year": 2023.0
      }
  ]

},
    { data: [
      {
          "chart_num": 1,
          "chart_month": 1.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 4,
          "chart_month": 2.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 6,
          "chart_month": 11.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 4,
          "chart_month": 12.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 4,
          "chart_month": 1.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 1,
          "chart_month": 5.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 2,
          "chart_month": 9.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 5,
          "chart_month": 10.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 11,
          "chart_month": 11.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 6,
          "chart_month": 12.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 9,
          "chart_month": 1.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 2,
          "chart_month": 2.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 3,
          "chart_month": 3.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 4,
          "chart_month": 7.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 2,
          "chart_month": 8.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 2,
          "chart_month": 9.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 1,
          "chart_month": 10.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 12,
          "chart_month": 11.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 2,
          "chart_month": 12.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 9,
          "chart_month": 1.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 23,
          "chart_month": 2.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 3,
          "chart_month": 3.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 1,
          "chart_month": 6.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 4,
          "chart_month": 8.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 7,
          "chart_month": 9.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 2,
          "chart_month": 10.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 7,
          "chart_month": 12.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 10,
          "chart_month": 1.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 16,
          "chart_month": 2.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 14,
          "chart_month": 3.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 15,
          "chart_month": 4.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 7,
          "chart_month": 5.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 1,
          "chart_month": 6.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 8,
          "chart_month": 7.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 2,
          "chart_month": 8.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 5,
          "chart_month": 9.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 9,
          "chart_month": 10.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 6,
          "chart_month": 11.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 23,
          "chart_month": 12.0,
          "chart_year": 2023.0
      }
  ] },
  {
    data: [
      {
          "chart_num": 7,
          "chart_month": 1.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 8,
          "chart_month": 2.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 1,
          "chart_month": 3.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 1,
          "chart_month": 5.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 3,
          "chart_month": 7.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 3,
          "chart_month": 8.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 1,
          "chart_month": 10.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 2,
          "chart_month": 11.0,
          "chart_year": 2019.0
      },
      {
          "chart_num": 3,
          "chart_month": 1.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 2,
          "chart_month": 3.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 1,
          "chart_month": 4.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 1,
          "chart_month": 5.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 1,
          "chart_month": 6.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 6,
          "chart_month": 7.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 4,
          "chart_month": 8.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 1,
          "chart_month": 9.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 6,
          "chart_month": 10.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 8,
          "chart_month": 11.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 5,
          "chart_month": 12.0,
          "chart_year": 2020.0
      },
      {
          "chart_num": 17,
          "chart_month": 1.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 7,
          "chart_month": 2.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 13,
          "chart_month": 3.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 2,
          "chart_month": 4.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 1,
          "chart_month": 5.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 10,
          "chart_month": 6.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 6,
          "chart_month": 7.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 1,
          "chart_month": 8.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 2,
          "chart_month": 9.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 6,
          "chart_month": 10.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 1,
          "chart_month": 11.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 21,
          "chart_month": 12.0,
          "chart_year": 2021.0
      },
      {
          "chart_num": 35,
          "chart_month": 1.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 24,
          "chart_month": 2.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 6,
          "chart_month": 3.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 1,
          "chart_month": 6.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 11,
          "chart_month": 8.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 5,
          "chart_month": 10.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 8,
          "chart_month": 11.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 10,
          "chart_month": 12.0,
          "chart_year": 2022.0
      },
      {
          "chart_num": 56,
          "chart_month": 1.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 47,
          "chart_month": 2.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 39,
          "chart_month": 3.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 7,
          "chart_month": 4.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 9,
          "chart_month": 5.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 10,
          "chart_month": 6.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 11,
          "chart_month": 7.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 33,
          "chart_month": 8.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 18,
          "chart_month": 9.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 18,
          "chart_month": 10.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 89,
          "chart_month": 11.0,
          "chart_year": 2023.0
      },
      {
          "chart_num": 61,
          "chart_month": 12.0,
          "chart_year": 2023.0
      }
  ]
  },
  {
        data: [
            {
                "chart_num": 41,
                "chart_month": 1.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 10,
                "chart_month": 2.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 18,
                "chart_month": 3.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 24,
                "chart_month": 4.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 6,
                "chart_month": 5.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 2,
                "chart_month": 6.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 1,
                "chart_month": 7.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 3,
                "chart_month": 8.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 12,
                "chart_month": 9.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 18,
                "chart_month": 10.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 25,
                "chart_month": 11.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 16,
                "chart_month": 12.0,
                "chart_year": 2019.0
            },
            {
                "chart_num": 99,
                "chart_month": 1.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 13,
                "chart_month": 2.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 44,
                "chart_month": 3.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 65,
                "chart_month": 4.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 27,
                "chart_month": 5.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 6,
                "chart_month": 6.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 3,
                "chart_month": 7.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 8,
                "chart_month": 8.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 18,
                "chart_month": 9.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 42,
                "chart_month": 10.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 68,
                "chart_month": 11.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 58,
                "chart_month": 12.0,
                "chart_year": 2020.0
            },
            {
                "chart_num": 195,
                "chart_month": 1.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 142,
                "chart_month": 2.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 126,
                "chart_month": 3.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 185,
                "chart_month": 4.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 134,
                "chart_month": 5.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 18,
                "chart_month": 6.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 9,
                "chart_month": 7.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 5,
                "chart_month": 8.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 33,
                "chart_month": 9.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 81,
                "chart_month": 10.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 156,
                "chart_month": 11.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 212,
                "chart_month": 12.0,
                "chart_year": 2021.0
            },
            {
                "chart_num": 439,
                "chart_month": 1.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 174,
                "chart_month": 2.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 88,
                "chart_month": 3.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 71,
                "chart_month": 4.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 48,
                "chart_month": 5.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 18,
                "chart_month": 6.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 9,
                "chart_month": 7.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 24,
                "chart_month": 8.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 33,
                "chart_month": 9.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 155,
                "chart_month": 10.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 233,
                "chart_month": 11.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 202,
                "chart_month": 12.0,
                "chart_year": 2022.0
            },
            {
                "chart_num": 509,
                "chart_month": 1.0,
                "chart_year": 2023.0
            },
            {
                "chart_num": 293,
                "chart_month": 2.0,
                "chart_year": 2023.0
            },
            {
                "chart_num": 274,
                "chart_month": 3.0,
                "chart_year": 2023.0
            },
            {
                "chart_num": 394,
                "chart_month": 4.0,
                "chart_year": 2023.0
            },
            {
                "chart_num": 199,
                "chart_month": 5.0,
                "chart_year": 2023.0
            },
            {
                "chart_num": 36,
                "chart_month": 6.0,
                "chart_year": 2023.0
            },
            {
                "chart_num": 12,
                "chart_month": 7.0,
                "chart_year": 2023.0
            },
            {
                "chart_num": 57,
                "chart_month": 8.0,
                "chart_year": 2023.0
            },
            {
                "chart_num": 89,
                "chart_month": 9.0,
                "chart_year": 2023.0
            },
            {
                "chart_num": 258,
                "chart_month": 10.0,
                "chart_year": 2023.0
            },
            {
                "chart_num": 362,
                "chart_month": 11.0,
                "chart_year": 2023.0
            },
            {
                "chart_num": 527,
                "chart_month": 12.0,
                "chart_year": 2023.0
            }
        ]
  },
  {
    data: [
        {
            "chart_num": 1,
            "chart_month": 7.0,
            "chart_year": 2019.0
        },
        {
            "chart_num": 2,
            "chart_month": 8.0,
            "chart_year": 2019.0
        },
        {
            "chart_num": 1,
            "chart_month": 10.0,
            "chart_year": 2019.0
        },
        {
            "chart_num": 2,
            "chart_month": 1.0,
            "chart_year": 2020.0
        },
        {
            "chart_num": 1,
            "chart_month": 11.0,
            "chart_year": 2020.0
        },
        {
            "chart_num": 1,
            "chart_month": 3.0,
            "chart_year": 2021.0
        },
        {
            "chart_num": 1,
            "chart_month": 4.0,
            "chart_year": 2021.0
        },
        {
            "chart_num": 3,
            "chart_month": 5.0,
            "chart_year": 2021.0
        },
        {
            "chart_num": 2,
            "chart_month": 6.0,
            "chart_year": 2021.0
        },
        {
            "chart_num": 59,
            "chart_month": 7.0,
            "chart_year": 2021.0
        },
        {
            "chart_num": 1,
            "chart_month": 8.0,
            "chart_year": 2021.0
        },
        {
            "chart_num": 1,
            "chart_month": 9.0,
            "chart_year": 2021.0
        },
        {
            "chart_num": 1,
            "chart_month": 12.0,
            "chart_year": 2021.0
        },
        {
            "chart_num": 1,
            "chart_month": 1.0,
            "chart_year": 2022.0
        },
        {
            "chart_num": 4,
            "chart_month": 7.0,
            "chart_year": 2022.0
        },
        {
            "chart_num": 2,
            "chart_month": 3.0,
            "chart_year": 2023.0
        },
        {
            "chart_num": 14,
            "chart_month": 4.0,
            "chart_year": 2023.0
        },
        {
            "chart_num": 1,
            "chart_month": 5.0,
            "chart_year": 2023.0
        },
        {
            "chart_num": 13,
            "chart_month": 6.0,
            "chart_year": 2023.0
        },
        {
            "chart_num": 18,
            "chart_month": 7.0,
            "chart_year": 2023.0
        },
        {
            "chart_num": 15,
            "chart_month": 9.0,
            "chart_year": 2023.0
        },
        {
            "chart_num": 1,
            "chart_month": 10.0,
            "chart_year": 2023.0
        },
        {
            "chart_num": 2,
            "chart_month": 11.0,
            "chart_year": 2023.0
        }
    ]
}
  ];

  $(".bar h2 ").on("click", "a", function() {
    Data = dataAll[$(this).index()].data;
    const dataByYear = {};
Data.forEach(entry => {
const year = entry.chart_year;
if (!dataByYear[year]) {
  dataByYear[year] = [];
}
dataByYear[year].push(entry);
});
// Generate series data for each year
const series = [];
for (const year in dataByYear) {
const yearData = dataByYear[year];
const seriesData = [];
yearData.forEach(entry => {
  seriesData.push({
      name: entry.chart_num,
      value: [entry.chart_month-1, entry.chart_num]
  });
});
series.push({
  name: year,
  type: 'line',
  data: seriesData,
  smooth:true
});
}
// ECharts code
var option = {
  grid: {
    left: "5%",
    top: "25px",
    right: "5%",
    bottom: "4%",
    containLabel: true
  },
xAxis: {
  axisLabel: {
    color: 'white' // Change X-axis label color to white
},
  type: 'category',
  data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
},
yAxis: {
  axisLabel: {
    color: 'white' // Change X-axis label color to white
},
  type: 'value'
},
tooltip: {
  trigger: 'axis',
  axisPointer: {
      type: 'cross',
      label: {
          backgroundColor: '#6a7985'
      }
  },
  formatter: function (params) {
      let tooltip = '';
      params.forEach(param => {
        tooltip += `<span style="color: white;">${param.marker}${param.seriesName}: ${param.value[1]}</span><br/>`;
    });
      return tooltip;
  }
},
legend: {
  textStyle: {
    color: 'white' // Change X-axis label color to white
},
  data: Object.keys(dataByYear)
},
series: series
};
    myChart.setOption(option);
  });
})();

// 饼形图定制
// 折线图定制
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

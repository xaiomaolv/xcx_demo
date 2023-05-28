// components/gauage/gauage.js
import * as echarts from "../echarts/echarts"
/** echarts渐变色 */
const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: '#F5D683', // 0% 处的颜色
  },
  {
    offset: 0.5,
    color: '#D5965B', // 100% 处的颜色
  },
  {
    offset: 1,
    color: '#B65C4D', // 100% 处的颜色
  },
])

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);

  var option = {
    //你的代码
    series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '75%'],
        min: 0,
        max: 5,
        splitNumber: 41, //仪表盘刻度的分割段数
        min: 0, //最小的数据值
        max: 5, //最大的数据值
        // 仪表盘轴线相关配置
        axisLine: {
          // 仪表背景颜色，这是是渐变
          lineStyle: {
            width: 60,
            color: [
              [1, color]
            ],
          },
        },
        // 分割线样式
        splitLine: {
          // 分割线
          show: true,
          length: 90, //分隔线线长
          distance: -90,
          lineStyle: {
            width: 6,
            color: '#ffffff',
          },
        },
        // 刻度标签
        axisLabel: {
          // 刻度文字 如数字
          show: false,

        },
        // 刻度样式
        axisTick: {
          // 刻度，不展示
          show: false,
        },
        pointer: {
          // 指针
          show: false,
        },
      },
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '75%'],
        radius: '50%',
        min: 0,
        max: 5,
        // 进度条
        progress: {
          show: false,
        },
        // 刻度基础条
        axisLine: {
          lineStyle: {
            width: 1,
            color: [
              [1, '#e8e8e8']
            ],
          },
        },
        // 刻度
        axisTick: {
          show: false,
        },
        // 刻度标签
        axisLabel: {
          show: false,
        },
        // 分割线
        splitLine: {
          show: false,
        },
        title: {
          show: false,
        },
        // 指针
        pointer: {
          icon: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABaCAYAAAC1xQZWAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPbSURBVHgBrZi/TxRBFMff2+MQSIBVopCIYa8w4RITzgJjSEy0sLAwERsafxbY+xfIv2CLDWJlAyRIbIxio0YbC02uuzNqQgNBjBL02OHN3s0yOzuzsz/4NrezN/PZNzPvvm/2ACxarrnusue6tn6OrUP3n7LX3Vf2CoP8Usn1WZdn69dl64DIagDM1s0OIoQHKWSdGhLIYTho62eNiDTIHDZm62SNCGiNkEHx7QeGLl8nWy4lgtbOnqyJ656envwgnkPiuoVYyw2St54xlj8ilEBoyafUIOo4lhtEWx8OZsi83KAjm1pksfOCXo6PeGnuWUEtTQS+s+9mBgH6sUH7fqmWHcSc2CAHWZ6I4oOSFtwIou2e0NzzMoPo+a6GPpYdhJqns4wR8aLIDU3zlbFYakG8KIJBJoPTgmRDU2UyOC2oXRT1Mhmco++MxohMD8kckalYmrbfWFmpWGaIKCGDTcVSv0YJINN3MVCSeSX1iYFaKY4xOoOLT01jaKp0BhcHaQwtNkjjVZqImDUiZDhhBekMTRUVy+NWkNbQUjxMMzX7rlEuJa9RgqGpihlcBJRkaKpUg4uAkgxNlWpwEVCSfahSDc6JfompI1IdIndE6glO3X7rq4KQeoKLRpTyBUbXN7pGGUDMBEpjaKrkMSGolSEaIdngDqeWwtBUyQYXghDQg4ySDS4EsRxTY9E3AxFRdpBcdeXtT52MYURS1S0UkVx1j3aN8iSjkBgbgPIko5BIyvbUciSjkEjKNihFdTVJJGUnIpY7IrHgAQgLrJFISrH9mZMxjKiTlIUjEkkZgFgBkBiLPKH2kTWggEoMK06RZBTiSekUScYQRH/mOXmcURUv306WMm1S8D8cHsEa8fLdJf+RIlTuHwDvzgMYmpyCoQtTwb2d+hdoLD6BHyvPYyB+psQX1eE3dH1Z3Ow7fQYuLixBL33qtPvzO3y4dxP+0mcohM+xqSVBuHo7D+JRhxzKbkfO6tEbM4kQGVahqYdTozNl5BBRuT0LaXVickpu8oRk26I1UD0HaSU2QcihuJpQVHyxGeBb0d78+C712J3618MGg28UEa6I9tan9KDGs/nw2icG8ou16nCD7165fxAuLb2y7hzPpddXJ8N2YCMBEdhD/vn/9y94T8m2KyebBsL7HM4KHl+rbzRR3FitnlogJ7gr2qPTM1C5NRvu5Bat3yZNvbE4Tw/cCe7R4Oa/3b3z083t7RDEX2jKe8eWQfq5JIlDqIJc4dF02lGtjo/M0cH9kYWzTutyX0C0IC7u4y2EOQSfXvDaLy88Akredd93nl6vb6yrYw4AQSAq23e0av4AAAAASUVORK5CYII=',
          length: 100,
          width: 20,
          //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移
          offsetCenter: [0, '0%'],
          itemStyle: {
            color: '#B81728'
          }
        },
        detail: {
          show: false,
          // fontSize: 30,
          offsetCenter: [0, '-35%'],
          valueAnimation: true,
          textStyle: {
            fontSize: 3,
            color: '#333333',
          },
          formatter: function (value) {
            return Math.round(value * 100) + '';
          },
        },
        title: {
          offsetCenter: [0, '30%'],
          fontSize: 28,
          fontWeight: 'bolder'
        },
        data: [{
          value: 11,
          name: 'A-4'
        }, ],
      },
    ]
  };

  chart.setOption(option);

  return chart;
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
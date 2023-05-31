// components/gauage/gauage.js
import * as echarts from "../../../../components/echarts/echarts"
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);

  var option = {
    series: [{
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      center: ['50%', '75%'],
      radius: '50%',
      min: 0,
      max: 5,
      splitNumber: 8,
      // 轴线
      axisLine: {
        // show: false,
        lineStyle: {
          width: 1,
          color: [
            [0, '#EEEEEE'],
            [1, '#EEEEEE']
          ]
        }
      },
      // 指针
      pointer: {
        show:true,
        icon: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABaCAYAAAC1xQZWAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPbSURBVHgBrZi/TxRBFMff2+MQSIBVopCIYa8w4RITzgJjSEy0sLAwERsafxbY+xfIv2CLDWJlAyRIbIxio0YbC02uuzNqQgNBjBL02OHN3s0yOzuzsz/4NrezN/PZNzPvvm/2ACxarrnusue6tn6OrUP3n7LX3Vf2CoP8Usn1WZdn69dl64DIagDM1s0OIoQHKWSdGhLIYTho62eNiDTIHDZm62SNCGiNkEHx7QeGLl8nWy4lgtbOnqyJ656envwgnkPiuoVYyw2St54xlj8ilEBoyafUIOo4lhtEWx8OZsi83KAjm1pksfOCXo6PeGnuWUEtTQS+s+9mBgH6sUH7fqmWHcSc2CAHWZ6I4oOSFtwIou2e0NzzMoPo+a6GPpYdhJqns4wR8aLIDU3zlbFYakG8KIJBJoPTgmRDU2UyOC2oXRT1Mhmco++MxohMD8kckalYmrbfWFmpWGaIKCGDTcVSv0YJINN3MVCSeSX1iYFaKY4xOoOLT01jaKp0BhcHaQwtNkjjVZqImDUiZDhhBekMTRUVy+NWkNbQUjxMMzX7rlEuJa9RgqGpihlcBJRkaKpUg4uAkgxNlWpwEVCSfahSDc6JfompI1IdIndE6glO3X7rq4KQeoKLRpTyBUbXN7pGGUDMBEpjaKrkMSGolSEaIdngDqeWwtBUyQYXghDQg4ySDS4EsRxTY9E3AxFRdpBcdeXtT52MYURS1S0UkVx1j3aN8iSjkBgbgPIko5BIyvbUciSjkEjKNihFdTVJJGUnIpY7IrHgAQgLrJFISrH9mZMxjKiTlIUjEkkZgFgBkBiLPKH2kTWggEoMK06RZBTiSekUScYQRH/mOXmcURUv306WMm1S8D8cHsEa8fLdJf+RIlTuHwDvzgMYmpyCoQtTwb2d+hdoLD6BHyvPYyB+psQX1eE3dH1Z3Ow7fQYuLixBL33qtPvzO3y4dxP+0mcohM+xqSVBuHo7D+JRhxzKbkfO6tEbM4kQGVahqYdTozNl5BBRuT0LaXVickpu8oRk26I1UD0HaSU2QcihuJpQVHyxGeBb0d78+C712J3618MGg28UEa6I9tan9KDGs/nw2icG8ou16nCD7165fxAuLb2y7hzPpddXJ8N2YCMBEdhD/vn/9y94T8m2KyebBsL7HM4KHl+rbzRR3FitnlogJ7gr2qPTM1C5NRvu5Bat3yZNvbE4Tw/cCe7R4Oa/3b3z083t7RDEX2jKe8eWQfq5JIlDqIJc4dF02lGtjo/M0cH9kYWzTutyX0C0IC7u4y2EOQSfXvDaLy88Akredd93nl6vb6yrYw4AQSAq23e0av4AAAAASUVORK5CYII=',
        length: 40,
        width: 10,
        offsetCenter: [0, '10%'],
        itemStyle: {
          color: '#B81728'
        }
      },
      // 刻度
      axisTick: {
        distance: -24, // 轴线和刻度线的距离
        length: 16,
        lineStyle: {
          width: 2,
          color: {
            type: 'linear',
            x: 1,
            y: 0.8,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: '#ECCB73', // 0% 处的颜色
            },
            {
                offset: 0.5,
                color: '#D5965B', // 100% 处的颜色
            },
            {
                offset: 1,
                color: '#B65C4D', // 100% 处的颜色
            },
            ],
            global: false // 缺省为 false
          }
        }
      },
      // 分割线
      splitLine: {
        show: false,
        length: 0,
        lineStyle: {
          color: 'transparent',
          width: 5
        }
      },
      // 刻度标签
      axisLabel: {
        color: '#464646',
        fontSize: 20,
        distance: -60,
        rotate: 'tangential',
        formatter: function (value) {
          return ''
        }
      },
      title: {
        offsetCenter: [0, '40%'],
        fontSize: 14,
        fontWeight: 'bolder'
      },
      // 中间显示的数字
      detail: {
        show: false,
        fontSize: 30,
        offsetCenter: [0, '-35%'],
        valueAnimation: true,
        formatter: function (value) {
          return Math.round(value * 100) + '';
        },
        color: 'inherit'
      },
      data: [{
        value: 11,
        name: 'A-4'
      }]
    }]
  }
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
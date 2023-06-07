// pages/gauage/gauage.js
import * as echarts from "../components/echarts/echarts"

function initChart(canvas, width, height, dpr) {
  console.log(width, 'width');
  console.log(height, 'height');
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  });
  canvas.setChart(chart);
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
  var option = {
    series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        radius: '100%',
        splitNumber: '41',
        axisLine: {
          // 仪表背景颜色，这是是渐变
          lineStyle: {
            width: 50,
            color: [
              [1, color]
            ],
          },
        },
        axisLabel: {
          // 刻度文字 如数字
          show: true,
          fontSize: 14,
          lineHeight: 20,
          color: '#999999',
          distance: 35,
          formatter(value) {
            if (value === 0 || value === 100) {
              return `\n\n${value}${value ? '%' : ''}`
            }
          },
        },
        axisTick: {
          // 刻度，不展示
          show: false,
        },
        pointer: {
          // 指针
          show: false,
        },
        splitLine: {
          // 分割线
          show: true,
          length: 90,
          distance: -90,
          lineStyle: {
            width: 6,
            color: '#ffffff',
          },
        },
        anchor: {
          // 指针下那个圈
          show: false,
        },
      },
      {
        name: '内圈',
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 5,
        radius: '72%',
        // 进度条
        progress: {
          show: false,
        },
        // 刻度基础条
        axisLine: {
          lineStyle: {
            width: 5,
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
          offsetCenter: [0, '40%'],
          fontSize: 34,
          fontWeight: 'bolder'
        },
        pointer: {
          // 指针
          length: '56%',
          width:10,
          itemStyle: {
              color: '#B81728',
          },
      },
      anchor: {
          // 指针下那个圈
          show: true,
          showAbove: true,
          size: 20,
          itemStyle: {
              borderWidth: 8,
              borderColor: '#B81728',
          },
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
          value: 2,
          name: 'A-4'
        }]
      },
    ]
  }
  chart.setOption(option);
  chart.resize({
    width: 400,
    height: 400
  })
  return chart;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
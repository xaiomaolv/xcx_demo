// pages/demo/demo.js
import * as echarts from "../../components/echarts/echarts"
import * as liquidFill from '../../components/echarts/echarts-liquidfill.min';
import WxCountUp from '../../plugins/wx-countup/WxCountUp.js'
var chart1 = null
var chart2 = null

function setOption(num) {
  const color = '#B81728'
  const option = {
    series: [{
      type: 'liquidFill',
      name: '', // 系列名称，用于tooltip的显示，legend 的图例筛选

      amplitude: 0, // 水平的静态波形
      waveAnimation: 0, //考虑性能，建议将该值设置false

      radius: '100%', // 水球图的半径
      center: ['50%', '50%'], // 水球图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
      // 水填充图的形状 circle 默认圆形  rect 圆角矩形  triangle 三角形
      // diamond 菱形  pin 水滴状 arrow 箭头状  还可以是svg的path
      shape: 'circle',
      phase: 0, // 波的相位弧度 不设置  默认自动
      direction: 'right', // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
      animationDuration: 1000, // 动画时间
      animationDurationUpdate: 1000,
      outline: {
        show: true,
        borderDistance: 0, // 边框线与图表的距离 数字
        itemStyle: {
          opacity: 1, // 边框的透明度   默认为 1
          borderWidth: 1, // 边框的宽度
          shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
          shadowColor: '#FFFFFF', // 边框的阴影颜色,
          borderColor: '#FAFAFA' // 边框颜色
        }
      },
      // 图形样式
      itemStyle: {
        color: color, // 水球显示的颜色
        opacity: 1, // 波浪的透明度
        shadowBlur: 10 // 波浪的阴影范围
      },
      backgroundStyle: {
        color: color, // 水球未到的背景颜色
        opacity: 0.5
      },
      // 图形的高亮样式
      emphasis: {
        itemStyle: {
          opacity: 0.8 // 鼠标经过波浪颜色的透明度
        }
      },
      // 图形上的文本标签
      label: {
        // fontSize: 12,
        fontSize: 0,
        fontWeight: 400,
        formatter: "", // 显示在水球图中间的文字，可以是字符串，可以是占位符，也可以是一个函数。
        color: '#B81728', // 默认背景下的文字颜色
        insideColor: '#B81728', // 水波背景下的文字颜色
        fontsize: 40 //字体大小
      },
      data: [(100 - num) / 100] // 系列中的数据内容数组
    }]
  }
  return option
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 100,
    endNumber: 10,
    ec_left: {
      lazyLoad: true
    },ec_right: {
      lazyLoad: true
    },
    initCCount: 60,
    initCCountRight: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.ecComponent = this.selectComponent('#charts_left');
    this.ecComponents = this.selectComponent('#charts_right');
    this.initCharts(this.data.initCCount);
    this.initChartRight(this.data.initCCountRight);
    this.start()
  },
  start() {
    this.countUp = new WxCountUp('number', this.data.endNumber, {
      startVal: 100 // 初始值
    }, this);
    this.countUp.start(() => console.log('Complete!'));
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
  initCharts: function (num) {
    this.ecComponent.init((canvas, width, height, dpr) => {
      console.log(canvas, width, height);
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      // let data = [value, value, value, ];
      let value = 10
      chart.setOption(setOption(value));
      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  },
  initChartRight: function (num) {
    this.ecComponents.init((canvas, width, height, dpr) => {
      console.log(canvas, width, height);
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      // let data = [value, value, value, ];
      let value = 10
      chart.setOption(setOption(value));
      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  }
})
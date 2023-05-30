// pages/demo/demo.js
import * as echarts from "../../components/echarts/echarts"
import * as liquidFill from '../../components/echarts/echarts-liquidfill.min';
import WxCountUp from '../../plugins/wx-countup/WxCountUp.js'

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
          borderWidth: 1.5, // 边框的宽度
          shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
          shadowColor: '#FAFAFA', // 边框的阴影颜色,
          borderColor: '#FAFAFA' // 边框颜色
        }
      },
      // 图形样式
      itemStyle: {
        color: color, // 水球显示的颜色
        opacity: 1, // 波浪的透明度
        shadowBlur: 5 // 波浪的阴影范围
      },
      backgroundStyle: {
        color: '#FFFFFF', // 水球未到的背景颜色
        opacity: 1
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
    // 星星列表
    stars: [{
        bgImg: "/img/home/star_no.png",
        bgfImg: "/img/home/star.png",
      },
      {
        bgImg: "/img/home/star_no.png",
        bgfImg: "/img/home/star.png",
      },
      {
        bgImg: "/img/home/star_no.png",
        bgfImg: "/img/home/star.png",
      },
      {
        bgImg: "/img/home/star_no.png",
        bgfImg: "/img/home/star.png",
      },
      {
        bgImg: "/img/home/star_no.png",
        bgfImg: "/img/home/star.png",
      },
    ],
    // 要展示的评分
    remark_num: 3.7,
    // 整颗星的个数
    int: "",
    // 非整颗星的百分比
    percent: "",
    number: 100,
    endNumber: 10,
    ec_left: {
      lazyLoad: true
    },
    ec_right: {
      lazyLoad: true
    },
    initCCount: 60,
    initCCountRight: 10,
    union: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACWCAYAAAC7MJjkAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA9ISURBVHgB7Z1PbBTXHcd/Xi/kH0g+FAQnbyW7BzjEjkJPMV5uwTmQSDY52ianohCD1FShRMKWSonaSIlDRE8B+5gaCecQO7esQ26JYHOAQ43UyckW9OAIGwTYTn/fYSYs6/fezOzOzM6f30ca1p5ZE9r5+Pfnvbfz2khomF9//bXj8ePHJf6yZ3Nzs6O9vb0T5/j7knOADueoZ6X24J9bKRQKFv89v/DfU8X3xWKx2tbWtkI5pY0EX0C6jY2N8vr6eomF6eejh54KGCUQ1eLXn1jeSp6EFTk1QEYWEQIe4a/L/NpDyQGCVvhY4ChbyaqsImcNEPLhw4cjHKGO0BMZOygdVPiY3rZtG0S1KCPkXs46IcuUfir0RNTZtEfU3MrJjUyZnqTsEUpPhAwCxJxlSSfSGk1zJyekZCHPUkhR8s7SEv28eJvuLC/T/5aWaW11le7y613+Hqyt3qO1e6tbfu6lnTvopR076cUdeN1hv+7eu4d+x0epu8s+V+ruppCo8DG9ffv2KUoRuZHz0aNHI/wCKUvUIBDx1o2qLeNNfr27vKQULywgcKmr25Z1X2+P/bpr715qAouPibRImnk5m5Fy7d49+uHa97aQOCBnq9nFkXV/b68t634+GpTVohRImlk5G03fELIy/w39+N33HB1vUNKBqP0DrzcqqsX16Ci6fEogmZPzwYMHJR77u0wBpYSIV76YSoWQOlxRywOHKSBTSWycMiUnp/Axfhknn903ouTcv6/Q3MxMpLVj3CD1/7GvjwaODgaJpiss56eQlBJCJuRkKTFg/gn5jJbW4qItZWVunrIOoujQsZEgklos6KEkRNHUyxkkWt7lhubiuY9SnbobJaikLOd4q6NoauUMUlsifU9/9nkuIqUXASWtsKCjrYqiqZTT6cQhZsn0vqzWlM2CAf6Bo0M09M6on7e3rKNPnZxOGv/U631I3RfPnbdnawQ1aJyOnzltd/letCLNp0pOjpifcMQ8aXoPouXMpSmOmDMk+OMNjqKDHEURUT34lAfuT1FMpEJOZ8X5t+SxplKiZeMgir5//pyf+fwqR9C34qhDEy+n0/hAzJLpfTOXLtPMF5dJaI6hY6N+atFYhpsSLacfMZHGPz79YS6Hh6ICNejxMx94dfSRC5pYOf2IicH0f54+I2k8ApDmxy9MtlTQRMrpR0yMWU5/dkGGiCIEDRK6+QMH+0xvi0zQxMnpR0ypL+PFRx0aiaCJklPETC6tEDQxcjrDRehqSrr3iJitxYegVUfQUD5YV6CEwDM/xulIEbP1+LgHPc59DIVEyMkR8yz/tr2puy5iJgeve4H7iPtJIdDytO41Vy5iJhOvFF8oFEaKxeI0NUFL5XQaINSZyrWYX/P8+PTkBRKSych7J2jg7SHd5RWuP3ubaZBaltbRADmduVJMDLCLmMlmiseZDTNz9noI56l7DdEyOdfX17Uf18WKdcz8CMnn4w/O2PdLQ6mZ+rMlad35LLmykMRc+V9G35EpyRSBlUxnP5/ULrnj1H6okcXKsUdO1Jn05CEHSrAWU8RMFyjBrhiaVk7tVxtJ77HLyXWmNp1jvlwWCacTNK9zX2rvXUcj6T1WObnOxFjmiOoa6hYs5BDSC4b9DPXnSefJfr6JVc7Nzc1PdNfQAMkKo3SDJ+zho9c68KHEIOk9NjmdsF5SXUNKsBZvk5B+MLRkSO8lboZPkk9ikRNNkPOQ1i0gDVy5JDNAWcKU3rlzH/MbPWOR09QEoTuXdJ4tPNK77+YocjmdoaMR1bUfrl2Tp3BkFKR3w+zRSY6eJfIgcjmdqKlkSqYnM8305Ofaa36iZ6RymqImIqYMtmcbDM4bMuOIV/SMVE5T1JyRJigX4D6jBlXB0dPYuUcmp0RNAeA+G4aWhk2de2RyctQs665J1MwXlXltau8wjXtGmdaVKV2iZv7A/dbVnhj31P1cJHI6c+gl1TWJmvlkYe4b3aUO3Zx7JHJyHTGsOo9xL4ma+cQ07ulsybOF0OV0piqVn6Q0/PYIOQB7O2koqxqj0OXUNUKYa5XZoHyD+68bVsLOzfXnokjrmpReJSHfQMyFr9UBytlS/NlzFCLO2GZZdW1hXlK6QPZeohq2pPZQ5TSl9JvX5eGuwpPGyDBj9EyvEqqcPGZ1hJT/IEnpwlN0qZ3pr/0mVDk5LJdV5yWlC7UYUns0kdPZf1I5TyopXagFq5U0qb3D8cgmNDk3NzfLqvOykYBQD8SEoCpqPQpNTm6G+lXnb12XelPYisGLsvtFaHJyvancwOpWVeQUtnJL0yTzeOfLv31NIeCMb5ZU16z/LJIg1KNL60zJXSHftJwoYJ1HGSr/AboxLSHfwIufNc8qcJuipuR0nkqs3WTg7rKsQBL0/FcTPZuOnNjBlzy2lr4pzZBgQBc53bqzSAFxHpV9VdcAuWAFysK8rEIS9NzRr+213Qokp1MLXCXZwVcIAeu2timyJ3N8y+m16wWQHXyFIBg+FVHCH75qTj/1JVYe4XHZIqYQBJ2gaIqMkTNIfSk7+AqNcF+/fK5DK6fUl0Ic3Fleos7uri3ntZFT6kshLnTZtq2tbWvkRH3J1hqfYYP6cvzEmHzMV4iU3+SU+lJoBZ4NkdSXQhIpSn0pJJXC5uam5xaD91fX6MWdO0gQ4qTw/PPPI2r28mHp3rRr7x56//w54/7aghA29gzR9u3bqxsbG4f4S+MyImwAf/zMae0GnIIQJr9NX77wwgsWS4oIOmn6gfLAYfrH1CXavXcvCUKzICur4HFOa8vcOgt6kuvQU+TxF569MEkHDvaRIESFcuGH1KFCXASKnC5ShwqtxrhkTupQIWp271E7UywWLV/rOaUOFaKiobRej9ShQtj8vrtbd2kFfwT69KXUoUKYvKj3w/Yr8EeDg9Sh/XwIgo6SYpEx4BLyF7w2/Ll1P3Wo7j8uCGDfK9rVmRX80dQTP7zqUJFTMKHr1Nvb2xtL6/XU1KFbKHHBK3WnoAJedGqCFw8jhSMnQB1Kuuj5h24ShHpK+k7d4mGk4N26Cf4LlR18Z5ekdmEr+3rV9Sb3MT+5X4cmJ6f2BdX5AwdfI0Gox6sZAqHJWSgUKqrzUncKKvb39irP13oUmpxojMgZ2a8FYkrdKdSiE5NZcTyyCXsfoq9U51/tk9QuPKV/4HXlea43nykNw97BraI6X5aZIqEGQ0qffeZ7CpFt27bNqs4jte9/pZcEAWLqViKxPxWqIezIiZqzoromqV0AupTOVLBMrvZE6Putc92grDuR2qVrFwzN0HT9idDlfO6556ZU5yGmrFLKNwhQflM6CF1OU2qXAfl8Y+jSv6pP6SB0OQH/hyZU5xHSpTHKJ1j1rkvp7MuU6nwkcjohekV1rf/w6yTkj8NHB3WXLC4FlaM8kcgJeEBeuVIedYd8SjNf4H4bxrondBcik5OnobAQWR09ByR65onBYyPaa6pGyCUyOZ3GaFp1beDokETPnOARNadUjZBLZHKCjY0N5UNpMaxk+m0SsoNH1Jww/WykcmKFPNeeyuiJ3ybDamghAzQTNUGkcgIewxrXXRsee5eE7DL8nv7+ekVNELmczueLlJ27jHtmF0RMw6OJPKMmiFxOwL8l46Tp3I//VZ4MkjVe2rnTfuqLBstP1ASxyInOXTfuibnWQXm2UqYY4iZIN4eOHsRP1ASxyAmccU9Lde0NHlqS9J4NUKphqFADZoPGySexyYnoyYc2REp6Tz9I53iAm45CoWB8fNGW91OMOLMBkt4zCrpzXTpnporF4iwFIFY5gdMcWaprSO8Dbw+RkD5w7wxjmr6boFpil9MrvaPLk6nNdIH7NXjMmPUm/DZBtcQuJzCld9SdeHy31J/pAGLa90u//eQkN8NT1ACe+15GBQ8pdDx+/Bg7vZZU17EJ7MS7YyQkG2xUYXjUJdJ5r/tgrqC0JHIC/IOdRycq/+EYkhgeO0FCchnh+2MQc4XFPNSomKBlcgJnalM7vIAiWzY/SCboDQzjmVhT0VCdWUtL5QSoRzjFazs5/J8ggiYLr3uC++k89bopWlZz1vPw4cOr/Jv2pu76zKXLNPPFZRJaiw8xZ3kW6C0KgcTI6TRI3/KX2gc3iqCtxUcWa6oBqqflad3FaZDwG2fp3iMpvnX4FPNQWGKCxEROlwcPHpTa29sRQUu690gEjZcAYloUIomTE/gR9Idr1+ji387T2uoqCdGAhRyYL/d4hGUkYoJEygn8CHp3aZkmTozRnaUlEsIFMz9/Pn/Oay+pyMQEiZUT+BX04t/P083rN0gIB0yAQEzDlCSIVEyQaDmBH0GB1KHh4LPpjFxMkHg5gSPoVTIMMwFrcZE+Pv2hpPkGQBr/05kPTM/PdKmG3ZXrSIWcLo8ePcKsg3E1CBokRNG5L2dI8AemibHkzSONA6wwOkkxkSo5Ac8kjfNv7Vmv92FV07/OfSRR1ECAaIm58lNhTEkGIXVyAp5JKvOMEgrMktd73SgqQ05PwRDRwNFBGhga8hMtsRflqOmBW1GRSjmBU4dC0LLXe9HRQ9LK3DzlHYxZDr93wo+UoMJSjkbd+OhIrZwuftM8yLOkSN34ZKThA2i1rGDJW9xpvJ7Uywn8Dje55ElSREqk8AAPTavwcap2m79WkQk5XZwoim6+w8/7IenXMzP043ffZ6pxClhTuiQiWtaSKTkBomihUICkw0F+DlF0Yf6bVM80IXUPvjPiq/uuo6W1pY7MyekSpKOvBdEUw1BpERUivnrwNSofPhwkSrpg17SJVnTifsisnC48cD/CL2iYShSQtXur9uqnWzeq9pGE1I+xyX29PfZxoK+vESGBxcdEox/ZjYvMy+nSjKQuiKrW7UW6db3Kr7d5uvQ2C3yPogK14649ezg69lBnd5ctZJMPnLAoBVK65EZOF0dS1KNlCgHM52OAH6Le50gLae/z94i69qv99VaBIZ774AgM70BCfP87/no3H51dXWE++STR6VtH7uR0qWmcjpDP7j5l2LuZ8P++2bRJ6ZJbOV2cD9bhU5+hRdMWU8FektggN46VQ1GSezlrcQbzy5QuUSFgNStC1iJyakBE3djYKPNNL/O3/eSxljRmMHuzgJRdLBarWRKyFpHTJ5B1fX29x5H1ZRaiRPEIi72cIONPHNWrfFSyKmM9ImcTuMKyLIiy9iuf68QrPWmyao96VujpQ8ws5/iF5be4UbNTNTcyVl5EVPF/6VU33JcH86UAAAAASUVORK5CYII='
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var _this = this;
    var int = Math.floor(_this.data.remark_num); // 向下取整-得到整颗星的个数
    var percents = (_this.data.remark_num - int) * 100; // 非整颗星的百分比
    let  percent = percents +'%'
    console.log(int,'int');
    console.log(percent +'%','percent');
    _this.setData({
      int: int,
      percent: percent,
    })
    this.ecComponent = this.selectComponent('#charts_left');
    console.log(this.ecComponent, 'ccccc');
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
      chart.clear(); //清空ECharts
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
      chart.clear(); //清空ECharts
      chart.setOption(setOption(value));
      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  }
})
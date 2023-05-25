// pages/scan/scanResult/scanResult.js
import lottie from 'lottie-miniprogram'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showResult: true,
    wineInfo: {
      w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
      w_img: 'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=f25a8958-3c37-4719-9071-136f24c7bd7f',
      rate: [{
        origin: '你喜欢的风格',
        desc: '本周最高评分意大利红酒',
        rate: '4.0',
        num: 6586,
        price: 85555
      }],
      w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅葡萄酒',
      w_flag: 'https://img1.baidu.com/it/u=708777537,1411350085&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=498',
      w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
      w_eng: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
      price: 85555
    },
    rate: [
      "天然葡萄酒",
      "风格奖得主",
      "风格",
      "婚宴佳品"
    ],
    identifying: 0, //识别，0正在识别，1 识别成功 2 识别失败
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    this.setData({
      imgInfo: JSON.parse(options.imgInfo)
    })
    setTimeout(() => {
      this.setData({
        identifying: 1
      })

      setTimeout(() => {
        this.setData({
          identifying: 2
        })
      }, 1000)
    }, 3000)

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
    this.init()
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
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  //授权获取手机号
  getPhoneNumber: function (e) { //这个事件同样需要拿到e
    console.log(e, 'eeeeee');
    var that = this
    var ency = e.detail.encryptedData;
    var iv = e.detail.iv;
    var errMsg = e.detail.errMsg
    if (iv == null || ency == null) {
      wx.showToast({
        title: "授权失败,请重新授权！",
        icon: 'none',
      })
      return false
    }
    //把获取手机号需要的参数取到，然后存到头部data里面
    // that.setData({
    //   ency: ency,
    //   iv: iv,
    //   errMsg: errMsg
    // })
  },
  // 关闭弹窗
  onClose() {
    console.log("dddddd");
    wx.navigateTo({
      url: '../../../pages/scan/scan',
    })
  },
  // 查看更多
  seeMore() {
    wx.navigateTo({
      url: '../../../pages/detail/detail',
    })
  },
  init() {
    if (this.inited) {
      return
    }
    wx.createSelectorQuery().selectAll('#lottie_demo').node(res => {
      console.log(res, 'ressss');
      const canvas = res[0].node
      const context = canvas.getContext('2d')
      canvas.width = 160
      canvas.height = 240
      lottie.setup(canvas)
      this.ani = lottie.loadAnimation({
        loop: true,
        autoplay: true,
        animationData: require('../../../json/data'),
        rendererSettings: {
          context,
        },
      })
      this.inited = true
    }).exec()
    // this.ani.pause()  //结束动画
  },

  // quan(t) {
  //   var o = t || {},
  //     e = function () {
  //       return Math.random()
  //     },
  //     r = o.canvas || document.createElement("canvas"),
  //     n = r.width,
  //     a = r.height;
  //   null === r.parentNode && (r.setAttribute("style", "position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;"), n = r.width = window.innerWidth, a = r.height = window.innerHeight, document.body.appendChild(r));
  //   var i = r.getContext("2d");
  //   i.shadowColor = o.shadowColor || "#fff",
  //     i.shadowBlur = o.blur || 4;
  //   var l = i.createLinearGradient(0, 0, n, a);
  //   l.addColorStop(0, o.colorStart || "#2AE"),
  //     l.addColorStop(1, o.colorStop || "#17B");
  //   for (var h = o.bubbles || Math.floor(.02 * (n + a)), d = [], c = 0; c < h; c++) d.push({
  //     f: (o.bubbleFunc ||
  //       function () {
  //         return "hsla(0, 0%, 100%, " + .1 * e() + ")"
  //       }).call(),
  //     x: e() * n,
  //     y: e() * a,
  //     r: 4 + e() * n / 50,
  //     a: e() * Math.PI,
  //     v: .5 + .5 * e()
  //   }); !
  //     function t() {
  //       if (null === r.parentNode) return cancelAnimationFrame(t); !1 !== o.animate && requestAnimationFrame(t),
  //         i.globalCompositeOperation = "source-over",
  //         i.fillStyle = l,
  //         i.fillRect(0, 0, n, a),
  //         i.globalCompositeOperation = o.compose || "lighter",
  //         d.forEach(function (t) {
  //           i.beginPath(),
  //             i.arc(t.x, t.y, t.r, 0, 2 * Math.PI),
  //             i.fillStyle = t.f,
  //             i.fill(),
  //             t.x += Math.cos(t.a) * t.v,
  //             t.y += Math.sin(t.a) * t.v,
  //             t.x - t.r > n && (t.x = -t.r),
  //             t.x + t.r < 0 && (t.x = n + t.r),
  //             t.y - t.r > a && (t.y = -t.r),
  //             t.y + t.r < 0 && (t.y = a + t.r)
  //         })
  //     }()
  //   }
})
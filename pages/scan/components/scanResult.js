// pages/scan/components/scanResult.js
import lottie from 'lottie-miniprogram'
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgInfo: {
      type: Object,
      value: ''
    },
    cameraImg: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    showResult: false,
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
      "婚宴佳品"
    ],
    identifying: 0, //识别，0正在识别，1 识别成功 2 识别失败
    baseBg: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showScanResult: function () {
      this.setData({
        showResult: true
      })
    },
    hideScanResult: function () {
      this.setData({
        showResult: false,
        cameraImg:''
      })
    },
    // 关闭弹窗
    onClose() {
      this.setData({
        showResult: false,
        cameraImg:''
      })
      this.triggerEvent('cancel')
    },
    //授权获取手机号
    getPhoneNumber: function (e) {
      // console.log(e, 'eeeeee');
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
      } else {
        
      }
      //把获取手机号需要的参数取到，然后存到头部data里面
      // that.setData({
      //   ency: ency,
      //   iv: iv,
      //   errMsg: errMsg
      // })
    },
    init() {
      if (this.inited) {
        return
      }
      wx.createSelectorQuery().selectAll('#lottie_demo').node(res => {
        // console.log(res, 'ressss');
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
    // 再次识别
    tryAgain() {
      this.setData({
        identifying: 1
      })
      // this.init()
    }
  }
})
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
      "婚宴佳品"
    ],
    identifying: 2, //识别，0正在识别，1 识别成功 2 识别失败
    imgInfo:{}, //扫描结果
    baseBg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options);
    this.setData({
      imgInfo: JSON.parse(options.imgInfo)
    })
    console.log(this.data.imgInfo,'this.data.imgInfo');
    let img = this.data.imgInfo.tempFilePaths
    this.getBase64(img)
    // setTimeout(() => {
      this.setData({
        identifying: 0
      })
      if (this.data.identifying == 0) {
        this.init()
      }
      setTimeout(() => {
        this.setData({
          identifying: 2
        })
      }, 5000)
    // }, 5000)

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
    // this.init()
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
  // 图片转base64
  getBase64(img){
    console.log(img,'vvvv');
    wx.getFileSystemManager().readFile({
      filePath: img, //选择图片返回的相对路径
      encoding: 'base64', //编码格式
      success: res => { //成功的回调
        this.setData({
          baseBg:res.data
        })
        // console.log('data:image/png;base64,' + res.data)
      }
    })
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
      wx.redirectTo({
        url: '../../../pages/detail/index/index',
      })
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
    wx.redirectTo({
      url: '../../../pages/scan/scan',
    })
  },
  // 查看更多
  seeMore() {
    wx.redirectTo({
      url: '../../../pages/detail/index/index',
    })
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
})
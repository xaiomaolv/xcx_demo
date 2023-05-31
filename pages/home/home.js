const lottie = require('../../utils/lottie');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist: [{
        rate: 2.1,
        price: 1000,
        img: '/img/home/bg1.png'
      },
      // {
      //   rate: '',
      //   price: '',
      //   img: 'http://zuohaotu.com/Download/052510084945_1bg2.png?_gl=1*wzwjvp*_ga*ODY2MTY4MTcxLjE2ODQ5ODA0NTc.*_ga_ZN9652QSEY*MTY4NDk4MDQ1Ny4xLjEuMTY4NDk4MDUyOS4wLjAuMA..'
      // },
      // {
      //   rate: 4.1,
      //   price: 1000,
      //   img: 'http://zuohaotu.com/Download/052510084945_2bg3.png?_gl=1*wzwjvp*_ga*ODY2MTY4MTcxLjE2ODQ5ODA0NTc.*_ga_ZN9652QSEY*MTY4NDk4MDQ1Ny4xLjEuMTY4NDk4MDUyOS4wLjAuMA..'
      // },
      // {
      //   rate: '',
      //   price: 1000,
      //   img: 'http://zuohaotu.com/Download/052510084945_3bg4.png?_gl=1*wzwjvp*_ga*ODY2MTY4MTcxLjE2ODQ5ODA0NTc.*_ga_ZN9652QSEY*MTY4NDk4MDQ1Ny4xLjEuMTY4NDk4MDUyOS4wLjAuMA..'
      // },
      // {
      //   rate:'',
      //   price:'',
      //   img:'http://zuohaotu.com/Download/052510084945_4bg5.png?_gl=1*586e7z*_ga*ODY2MTY4MTcxLjE2ODQ5ODA0NTc.*_ga_ZN9652QSEY*MTY4NDk4MDQ1Ny4xLjEuMTY4NDk4MDUyOS4wLjAuMA..'
      // },
    ],
    randomImage: '',// 随机图片
    showAgree: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取图片列表
    // this.setData({
    //   imglist: wx.getStorageSync('imageList')
    // });
    // 随机选择一张图片
    let randomIndex = Math.floor(Math.random() * this.data.imglist.length);
    console.log(randomIndex,'randomIndex');
    this.setData({
      randomImage: this.data.imglist[randomIndex]
    });
    // console.log(this.data.randomImage,'randomIndex');
    // lottie.jsonAnimation('#lottie_demo',)
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
    let that = this
    that.agreement = that.selectComponent(".agreement");
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

  },
  // 跳转识别酒款
  toScan(){
    wx.navigateTo({
      url: '../scan/scan',
    })
  },
  // 协议查看
  seeAgreement(e) {
    let that = this
    that.agreement.showlog()
    this.setData({
      showAgree: true
    })
  },
  // 确认阅读
  handConfirm() {
    this.setData({
      showAgree: false
    })
  },
  // 关闭
  handCancel() {
    this.setData({
      showAgree: false
    })
  },
})
// pages/scan/videoView/videoView.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    srcVideo:'https://api.vivino.cc/app-api/appapi/general/api/getScanStudyVideo',
    // 导航栏高度
    navHeight: app.globalData.navHeight,
    // 导航栏距离顶部距离
    navTop: app.globalData.navTop,
    // 胶囊的高度
    navObj: app.globalData.navObj,
    // 胶囊宽度+距右距离
    navObjWid: app.globalData.navObjWid,
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
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 返回
  handleBackClick(){
    wx.redirectTo({
      url: '../scan',
    })
  }
})
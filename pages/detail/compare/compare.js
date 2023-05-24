// pages/detail/compare/compare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageurl1: "../../img/sort-tip_05.png",
    daindex1: 0,
    imageurl2: "../../img/sort-tip_05.png",
    daindex2: 0
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

  },
  /*  tab   */
  choosesort1: function (e) {
    if (this.data.daindex1 == 0) {
      this.setData({
        imageurl1: "../../img/sort-tip_03.png",
        daindex1: 1
      })
    } else {
      this.setData({
        imageurl1: "../../img/sort-tip_05.png",
        daindex1: 0
      })
    }

  },
  choosesort2: function (e) {
    if (this.data.daindex2 == 0) {
      this.setData({
        imageurl2: "../../img/sort-tip_03.png",
        daindex2: 1
      })
    } else {
      this.setData({
        imageurl2: "../../img/sort-tip_05.png",
        daindex2: 0
      })
    }
  }
})
// Page({  data: {    imageList: [], // 图片列表    randomImage: '' // 随机图片  },  onLoad: function () {    // 获取图片列表    this.setData({      imageList: wx.getStorageSync('imageList')    });    // 随机选择一张图片    let randomIndex = Math.floor(Math.random() * this.data.imageList.length);    this.setData({      randomImage: this.data.imageList[randomIndex]    });  }})
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0, // 页面滚动距离
    stickyHeight: 0, // 吸顶元素的高度
    isSticky: false // 是否吸顶
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
// 获取需要吸顶元素的高度
wx.createSelectorQuery().select('.recommend').boundingClientRect((rect) => {
  this.setData({
    // 这个top是节点的上边界坐标
    stickyHeight: rect.top
  })
  console.log(rect.top)
  console.log(this.data.stickyHeight)
}).exec()

  },
  onPageScroll: function (e) {
    console.log(e)
    // 监听页面滚动事件
    this.setData({
      scrollTop: e.scrollTop
    })
    if (this.data.scrollTop >= this.data.stickyHeight) {
      // 当滚动距离大于等于吸顶元素的高度时，设置为吸顶状态
      this.setData({
        isSticky: true
      })
    } else {
      // 当滚动距离小于吸顶元素的高度时，取消吸顶状态
      this.setData({
        isSticky: false
      })
    }
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
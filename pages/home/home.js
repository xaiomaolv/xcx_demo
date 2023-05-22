// pages/home/home.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 导航栏高度
    navHeight: app.globalData.navHeight,
    // 导航栏距离顶部距离
    navTop: app.globalData.navTop,
    // 胶囊的高度
    navObj: app.globalData.navObj,
    // 胶囊宽度+距右距离
    navObjWid: app.globalData.navObjWid,
    sShowCamera: false,
    width: 10,
    height: 10,
    src: "",
    image: "",
    skipphotoStatus: "0", // 1跳过 0没有跳过
    isShowImage: false,
    dataArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // mock数据
    dataLength: null,
    divsion: 4 ,// 三条数据一个swiper-item
    current:"",
    isFirst:false, //是否是第一次进入
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
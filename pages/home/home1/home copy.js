// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,         //页面高度 rpx
    ratio: 0,          //rpx,px转化比
    xId: 1,           //x轴选中项
    yId: 1,           //y轴滚动位置
    heightArray: [],
    list: [{
        id: 1,
        title: "前端",
        photo: [
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg"        ],
      },
      {
        id: 2,
        title: "后端",
        photo: [
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg"
        ],
      },
      {
        id: 3,
        title: "小程序",
        photo: [
          "https://www.tpxhm.com/static/uploads/note/20190103/7c754f8e3362d0fa5a4f6be71818b35e.jpg",
          "https://www.tpxhm.com/static/uploads/note/20190103/7c754f8e3362d0fa5a4f6be71818b35e.jpg",
          "https://www.tpxhm.com/static/uploads/note/20190103/7c754f8e3362d0fa5a4f6be71818b35e.jpg",
          "https://www.tpxhm.com/static/uploads/note/20190103/7c754f8e3362d0fa5a4f6be71818b35e.jpg",
          "https://www.tpxhm.com/static/uploads/note/20190103/7c754f8e3362d0fa5a4f6be71818b35e.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg"
        ],
      },
      {
        id: 4,
        title: "PHP",
        photo: [
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
        ],
      },
      {
        id: 5,
        title: "JAVA",
        photo: [
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
        ],
      },
      {
        id: 6,
        title: "GO",
        photo: [
          "https://www.tpxhm.com/static/uploads/note/20190103/7c754f8e3362d0fa5a4f6be71818b35e.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
          "https://www.tpxhm.com/static/tpl/index/foundation/images/bgtx.jpg",
        ],
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
 //1. 获取页面高度
 wx.getSystemInfo({
  success: function (res) {
    let width = res.windowWidth
    let ratio = 750 / width
    let height = ratio * res.windowHeight
   
    that.setData({
      height: height, //单位rpx
      ratio: ratio
    })
  }
})
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
    let that = this,
    heightArray = [];
  //1.获取滚动元素距离顶部位置-y
  setTimeout(function () {
    let query = wx.createSelectorQuery() //创建节点查询器
    query.selectAll('.column').boundingClientRect(function (rect) {
      rect.forEach(function (value) {
        heightArray.push((value.top - (170 / that.data.ratio)))
      })
      that.setData({
        heightArray
      })
    }).exec()
  }, 1000) //此处最好用延时，否则获取的结果有可能是null，也有可能值不准确。 
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
  //切换tab导航栏
  changeTab: function (e) {
    let that = this
    let id = e.currentTarget.dataset.id
    that.setData({
      xId:id,
      yId:id,
    })
  },
 
  //监听滚动 切换tab
  scrollFloor: function (e) {
    var that = this
    var scrollTop = e.detail.scrollTop //滚动条距离顶部
    var heightArray = that.data.heightArray //滚动项距离顶部
    var id = null
    //计算比较得出下标
    for (let i = 0; i <= heightArray.length; i++) {
      if (scrollTop >= heightArray[i] - 90 && scrollTop < heightArray[i + 1]) {
        id = that.data.list[i].id
      }
    }
    that.setData({
      xId: id
    })
  },
  // 拿到三级分类滑动时的当前索引
 scrollList(e){
  // 距离顶部高度
  let height = 80
  // 遍历三级分类
  this.initProduct.forEach((item,index) => {
      if(this.scrollTemp){ // 防止点击快速定位栏最后几项会重复调用scrollList的index赋值
      if(this.scrollViewHeight == item.top-height){
          this.scrollTemp = false
        }
        }else{
          if (e.detail.scrollTop >= item.top-height 
          && e.detail.scrollTop <= item.bottom-height) {
            this.currentIndex = index
          }
        }
      })
    },

})
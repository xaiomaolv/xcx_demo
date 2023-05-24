// pages/down/down.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist: [{
        rate: 2.1,
        price: 1000,
        img: 'https://pic.aigexing.net/uploads/7/1253/2862058340/93209845123/476260524.jpg'
      },
      {
        rate: '',
        price: '',
        img: 'https://pic.aigexing.net/uploads/8/1253/2536336073/92605875135/41199282.jpg'
      },
      {
        rate: 4.1,
        price: 1000,
        img: 'https://pic.aigexing.net/uploads/7/1253/2862058340/93209845123/476260524.jpg'
      },
      {
        rate: '',
        price: 1000,
        img: 'https://pic.aigexing.net/uploads/8/1253/2536336073/92605875135/41199282.jpg'
      },
      // {
      //   rate:'',
      //   price:'',
      //   img:'https://pic.aigexing.net/uploads/7/1253/2862058340/93209845123/476260524.jpg'
      // },
    ],
    randomImage: '' // 随机图片
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
    console.log(this.data.randomImage,'randomIndex');
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
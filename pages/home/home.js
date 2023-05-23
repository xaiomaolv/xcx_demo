// pages/home/home.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    img_height:20,
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
    divsion: 4, // 三条数据一个swiper-item
    current: "",
    isFirst: true, //是否是第一次进入
    imglist:[
      {
        rate:2.1,
        price:1000,
        img:'https://pic.aigexing.net/uploads/7/1253/2862058340/93209845123/476260524.jpg'
      },
      {
        rate:3.1,
        price:1000,
        img:'https://pic.aigexing.net/uploads/8/1253/2536336073/92605875135/41199282.jpg'
      },
      {
        rate:4.1,
        price:1000,
        img:'https://pic.aigexing.net/uploads/7/1253/2862058340/93209845123/476260524.jpg'
      },
      {
        rate:5.1,
        price:1000,
        img:'https://pic.aigexing.net/uploads/8/1253/2536336073/92605875135/41199282.jpg'
      },
      {
        rate:2.1,
        price:1000,
        img:'https://pic.aigexing.net/uploads/7/1253/2862058340/93209845123/476260524.jpg'
      },
    ]
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
    let that = this
    setTimeout(() => {
      let that = this
    new Promise(resolve => {
      let query = wx.createSelectorQuery().in(that);
      query.select('#cemeraHeight').boundingClientRect();
      query.select('#takephoto').boundingClientRect();
      query.exec(function (res) {
        resolve(res);
      });
    }).then(res => {
      const windowHeight = wx.getSystemInfoSync().windowHeight;
      let heightArray = [],
        topArray = [];
      res.forEach(rect => {
        console.log(rect,'rrrrr');
        // heightArray.push(Math.floor(rect.top));
        topArray.push(rect.height)
      });
      that.setData({
        // heightArray,
        topArray,
        photoHeight:topArray[0]-topArray[1]
      });
      console.log(that.data.photoHeight,'99999999');
    });
      // let query = wx.createSelectorQuery();
      // const windowHeight = wx.getSystemInfoSync().windowHeight;
      // const windowWidth = wx.getSystemInfoSync().windowWidth;
      // console.log(windowHeight, 'windowHeight'); 
      // let navTop = that.data.navTop
      // let hh = windowHeight-navTop
      // console.log(hh,'hhh');
      // let h = 100 / 1080 * hh; //vh
      // let w =  100 / 1920 * windowWidth;
      // console.log(h,'hhhh');
      // console.log(w,'wwww');
      // that.setData({
      //   h:h,
      //   hh:hh
      // })
      // query.select('#takephoto').boundingClientRect(rect => {
      //   let height = rect.height;
      //   console.log(height, 'takephoto');
      //   that.setData({
      //     height:height
      //   })
      // }).exec();
    }, 300)

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.queryPhoto()
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
  //获取节点信息
  queryPhoto(e) {
    let that = this
    new Promise(resolve => {
      let query = wx.createSelectorQuery().in(that);
      query.select('#takephoto').boundingClientRect();
      query.exec(function (res) {
        resolve(res);
      });
    }).then(res => {
      const windowHeight = wx.getSystemInfoSync().windowHeight;
      let heightArray = [],
        topArray = [];
      res.forEach(rect => {
        console.log(rect, 'rrrrr');
        // heightArray.push(Math.floor(rect.top));
        // topArray.push(rect.height)
      });
      that.setData({
        // scrollHeight: windowHeight,
        // heightArray,
        // topArray,
      });
    });
  },
})
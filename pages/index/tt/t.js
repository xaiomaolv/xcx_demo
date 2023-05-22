// pages/index/tt/t.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: '',
    activeIndex: 0,
    title: [{
      name: "详情",
      opt: 'product',
      type: 0
    }, {
      name: "评价",
      opt: 'store',
      type: 1
    }, {
      name: "攻略",
      opt: 'store',
      type: 2
    }, {
      name: "推荐",
      opt: 'info',
      type: 3
    }],
    isHidden: true,
    scrollLock: false, //滑动枷锁
    isScroll: '',
  },
  //获取锚点的节点信息
  slideAnchor(e) {
    let that = this
    new Promise(resolve => {
      let query = wx.createSelectorQuery().in(that);
      query.select('#product').boundingClientRect();
      query.select('#store').boundingClientRect();
      query.select('#info').boundingClientRect();
      query.exec(function (res) {
        resolve(res);
      });
    }).then(res => {
      console.log(res,'ressss');
      const windowHeight = wx.getSystemInfoSync().windowHeight;
      let heightArray = [],
        topArray = [];
      res.forEach(rect => {
        console.log(rect,'3456');
        heightArray.push(Math.floor(rect.top));
        topArray.push(rect.height)
      });
      that.setData({
        scrollHeight: windowHeight,
        heightArray,
        topArray,
        scrollLock: true,
        isScroll: true, //在富文本未解析之前，先禁止界面滑动
      });
    });
  },

  //点击锚点跳转
  jumpTo: function (e) {
    let that = this
    console.log(e, 'jump');
    let target = e.detail.item.opt;
    let activeIndex = e.detail.item.type;
    let {
      topArray,
      scrollHeight,
      isHidden
    } = that.data;
    let numHeight = 0;
    //计算当前锚点是否能根据tab的点击至顶部
    console.log(topArray, 'topArray');
    for (var i = activeIndex; i < topArray.length; i++) {
      numHeight += topArray[i]
    }
    isHidden = target == 'product' ? false : isHidden;
    that.setData({
      toView: target,
      activeIndex,
      isHidden,
      scrollLock: numHeight >= scrollHeight ? true : false //如果界面出现锚点位置过低的情况防止tab的active回弹
    })
  },

  //scroll-view滚动监听事件
  toScroll: function (e) {
    let that = this
    const {
      heightArray,
      scrollLock,
      toView
    } = that.data;
    let scrollTop = e.detail.scrollTop;
    let isHidden = scrollTop > 20 ? true : false; //控制tab显示与隐藏
    if (that.data.isHidden != isHidden) {
      that.setData({
        isHidden,
        toView: '',
        activeIndex: 0,
      })
    }
    //锚点高度足够时，姐买你滑动到相应的位置，tab的active发生相应的改变
    if (scrollLock) {
      let len = heightArray.length;
      let lastIndex = len - 1;
      let activeIndex = 0;
      for (let i = 0; i < len; i++) {
        if (scrollTop >= 0 && scrollTop < heightArray[0]) {
          activeIndex = 0;
        } else if (scrollTop >= heightArray[i] && scrollTop < heightArray[i + 1]) {
          activeIndex = i;
        } else if (scrollTop >= heightArray[lastIndex]) {
          activeIndex = lastIndex;
        }
      }
      that.setData({
        activeIndex
      })
    }
  },

  //停止滚动，防止锚点位置过低，界面滚动时无效的情况
  endScroll(e) {
    this.setData({
      scrollLock: true
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.slideAnchor();
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
    that.navTabs = that.selectComponent(".navtabs");
    // this.slideAnchor();
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
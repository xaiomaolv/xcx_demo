var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formDatas: {
      scroll_top_left: 0,
      scroll_top_right: 0
    },
    status_idx: 0,
    bankuai_height: {},
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
    var that = this;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    //获取当前屏幕高度减去头部高度
    var header = wx.createSelectorQuery();
    header.select('#header').boundingClientRect();
    header.exec(function (res) {
      var headerHeight = res[0].height;
      var productMainHeight = windowHeight - headerHeight;
      that.setData({
        productMainHeight,
        headerHeight
      })
    })
    //延迟加载框架，防止获取节点错误
    setTimeout(function () {
      // 循环每个板块的内容高度
      //10表示当前板块长度
      var query = wx.createSelectorQuery();
      for (var i = 0; i < 10; i++) {
        query.select('#NAC' + i).boundingClientRect();
      }
      //初始化参数
      var bankuai_height = that.data.bankuai_height;
      //监听滚动所使用数据
      bankuai_height.h = [];
      bankuai_height.idx = [];
      //用于点击事件使用数据
      bankuai_height.hup = [];
      bankuai_height.idxup = [];
      query.exec((res) => {
        for (var i = 0; i < res.length; i++) {
          bankuai_height.h[i] = res[i].top - that.data.headerHeight;
          bankuai_height.idx[i] = i;
          bankuai_height.hup[i] = res[i].top - that.data.headerHeight;
        }
        bankuai_height.h = bankuai_height.h.reverse();
        bankuai_height.idx = bankuai_height.idx.reverse();
        that.setData({
          bankuai_height: bankuai_height,
          ready: false,
        })
      });
    }, 300)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var that = this;
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

  //类别
  on_k_v: function (event) {
    var that = this;
    var idx = event.currentTarget.dataset.idx;
    var bankuai_height = that.data.bankuai_height;
    that.setData({
      "formDatas.scroll_top_left": bankuai_height.hup[idx],
    })
  },


  //监听滚动
  enTop(e) {
    var that = this;
    var top_tome = e.detail.scrollTop;
    var bankuai_height = that.data.bankuai_height;
    //如果数据太大，可以把下面的注释打开，这样就不是每次滑动都执行
    // if (that.setInter) {
    //   clearInterval(that.setInter);
    // }
    // that.setInter = setInterval(
    //   function () {
    for (var i = 0; i < bankuai_height.h.length; i++) {
      if (top_tome >= bankuai_height.h[i] - 15) {
        //判断当前所滑动的正比
        //10表示当前板块长度
        var right_idx = 10 - i;
        var scroll_top_right = 0;
        //永远停留在列表四板块
        if (right_idx > 4) {
          scroll_top_right = (right_idx - 4) * 75;
        }
        that.setData({
          status_idx: bankuai_height.idx[i],
          "formDatas.scroll_top_right": scroll_top_right
        })
        break;
      }
    }
    //   clearInterval(that.setInter);
    // }, 200);
  }
})

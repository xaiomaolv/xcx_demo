// components/topNav/topNav.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示左侧按钮
    isShow: {
      type: Boolean,
      value: true
    },
    // 是否显示左侧返回按钮
    isBack: {
      type: Boolean,
      value: true
    },
    // 返回层级 默认为1
    pageNum: {
      type: Number,
      value: 1
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    capsule: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //返回层级 默认为1
    back(e) {
      wx.navigateBack({
        delta: e.currentTarget.dataset.num
      })
    },
    //跳转到首页
    toIndex() {
      wx.switchTab({
        url: '/pages/index/index'
      })
    }

  },
  lifetimes: {
    //判断是否有上一级页面，如果有显示返回按钮（isBack参数）否则不显示
    attached: function () {
      this.setData({
        isBack: getCurrentPages().length === 1 ? false : true
      })
    }
  },
  ready() {
    //获取机型状态栏信息
    const {
      statusBarHeight,
      navBarHeight
    } = app.globalData
    console.log(app.globalData)
    this.setData({
      statusBarHeight,
      navBarHeight,
      left: app.globalData.windowWidth - app.globalData.capsule.right, //胶囊距右边距离
      capsule: app.globalData.capsule
    })
  },

})
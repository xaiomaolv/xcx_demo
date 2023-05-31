// components/topNav/topNav.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示导航栏
    isShowNav:{
      type: Boolean,
      value: false
    },
    // 是否显示左侧按钮
    isShow: {
      type: Boolean,
      value: true
    },
    // 是否显示左侧返回按钮
    isWhite: {
      type: Boolean,
      value: true
    },
    // 是否显示左侧返回按钮
    isHome: {
      type: Boolean,
      value: false
    },
    // 返回层级 默认为1
    pageNum: {
      type: Number,
      value: 1
    },
    backgroundColor: {
      type: String,
      value: '#ffffff'
    },
    titleColor: {
      type: String,
      value: ''
    },
    navTitle: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    capsule: {},
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
        url: '/pages/home/home'
      })
    },
    handleBackClick() {
      this.triggerEvent('handleBackClick')
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
    // console.log(app.globalData)
    this.setData({
      statusBarHeight,
      navBarHeight,
      left: app.globalData.windowWidth - app.globalData.capsule.right, //胶囊距右边距离
      capsule: app.globalData.capsule
    })
  },

})
// app.js
import {
  initPage,
  onPageLoad
} from './utils/page'
import request from './utils/request'
import util from './utils/util'
App({
  onLaunch() {
    // 重构Page对象
    initPage(this)
    // 自定义头部
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        // 导航高度
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,
          // 胶囊按钮与右侧的距离=windowWidth-right+胶囊宽度
          navObjWid = res.windowWidth - menuButtonObject.right + menuButtonObject.width,
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;
        this.globalData.navHeight = navHeight; //导航栏总体高度
        this.globalData.navTop = navTop; //胶囊距离顶部距离
        this.globalData.navObj = menuButtonObject.height; //胶囊高度
        this.globalData.navObjWid = navObjWid; //胶囊宽度（包括右边距离)
        this.globalData.windowWidth = res.windowWidth;
        this.globalData.windowHeight = res.windowHeight;
        // 1111111111
        this.globalData.statusBarHeight = res.statusBarHeight
        this.globalData.navBarHeight = 44 + res.statusBarHeight
        this.globalData.capsule = wx.getMenuButtonBoundingClientRect() //获取胶囊宽高及位置
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  //  挂载全局request，使用app.request 替代wx.request
  ...request,
  // 挂载全局工具类
  ...util,
  // api: [...api],
  setToken(token) {
    wx.setStorageSync('token', token)
  },
  getToken() {
    return wx.getStorageSync('token')
  },
  setCode(code) {
    wx.setStorageSync('code', code)
  },
  getCode() {
    return wx.getStorageSync('code')
  },
  setUserInfo(userInfo){
    wx.setStorageSync('userInfo', userInfo)
  },
  getUserInfo(){
    return wx.getStorageSync('userInfo')
  },
  // 引入`towxml3.0`解析方法
  towxml: require('/towxml/index'),
  //声明一个数据请求方法
  getText: (url, callback) => {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        if (typeof callback === 'function') {
          callback(res);
        };
      }
    });
  },
  globalData: {
    capsule: '',
    isLogin: false, // 是否授权登录
    isFirst: false, // 是否第一次使用
  }
})
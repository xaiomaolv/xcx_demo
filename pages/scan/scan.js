// pages/scan/scan.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    img_height: 20,
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
          console.log(rect, 'rrrrr');
          // heightArray.push(Math.floor(rect.top));
          topArray.push(rect.height)
        });
        that.setData({
          heightArray,
          topArray,
          photoHeight: topArray[0] - topArray[1]
        });
        console.log(that.data.photoHeight, '99999999');
      });
    }, 300)

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.queryPhoto()
    // 相机授权
    this.authTakePhoto()
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
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 相机授权
  authTakePhoto() {
    var that = this
    wx.authorize({
      scope: 'scope.camera',
      success: function (res) {
        that.setData({
          isShowCamera: true,
        })
      },
      fail: function (res) {
        console.log("" + res);
        wx.showModal({
          title: '请求授权您的摄像头',
          content: '如需正常使用此小程序功能，请您按确定并在设置页面授权用户信息',
          confirmText: '确定',
          success: res => {
            if (res.confirm) {
              wx.openSetting({
                success: function (res) {
                  console.log('成功');
                  console.log(res);
                  if (res.authSetting['scope.camera']) { //设置允许获取摄像头
                    console.log('设置允许获取摄像头')
                    wx.showToast({
                      title: '授权成功',
                      icon: 'success',
                      duration: 1000
                    })
                    that.setData({
                      isShowCamera: true,
                    })

                  } else { //不允许
                    wx.showToast({
                      title: '授权失败',
                      icon: 'none',
                      duration: 1000
                    })
                    wx.redirectTo({
                      url: 'addCarInfo/addCarInfo',
                    })
                  }
                }
              })
            } else { //取消
              wx.showToast({
                title: '授权失败',
                icon: 'none',
                duration: 1000
              })
            }
          }
        })

      }
    })
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
  /**
   * 拍照
   */
  takePhotoAction: function () {
    var that = this
    // 相机授权
    that.authTakePhoto()
    wx.navigateTo({
      url: '../../pages/scan/scanResult/scanResult',
    })
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high', //高质量
      success: (res) => {
        // this.loadTempImagePath(res.tempImagePath);
        console.log(res, 'takePhotoAction');
      },
    })
  },
  // 图库选择
  chooseImg() {
    wx.chooseImage({
      count: 1,
      sourceType: ['album'], //只打开相册
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log(res, 'chooseImage');
        let imgInfo = {
          tempFilePaths: res.tempFilePaths
        }
        // wx.navigateTo({
        //   url: '/pages/scan/scanResult/scanResult',
        // })
        wx.navigateTo({
          url: '../../pages/scan/scanResult/scanResult?imgInfo=' + JSON.stringify(imgInfo)
        })
        // wx.uploadFile({
        //   url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'user': 'test'
        //   },
        //   success: function (res) {
        //     var data = res.data
        //     //do something
        //   }
        // })
      }
    })
  },
  // 查看教程
  seeTutorial() {
    wx.navigateTo({
      url: './videoView/videoView',
    })
    console.log('教程');
  },
  // 跳转详情
  toDetail(e) {
    let item = e.currentTarget.dataset.item
    console.log(item, 'item');
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
})
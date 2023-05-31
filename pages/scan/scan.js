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
    ],
    isShowCamera: false, //相机授权
    startY: 0, // 下滑删除开始坐标
    delIndex: -1, // 当前滑动的元素下标位置
    index: -1,
    Ystart: 0,
    isAnimation: false,
    aniMation: {},
    slideTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.ctx = wx.createCameraContext();//初始化 创建 camera 上下文 CameraContext 对象。
    this.ctx_A = wx.createCanvasContext("myCanvas"); //画布
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
    this.queryPhoto()
    var that = this
    wx.authorize({
      scope: 'scope.camera',
      success: function (res) {
        that.setData({
          isShowCamera: true,
        })
      },
      fail: function (res) {
        // console.log("" + res);
        wx.showModal({
          title: '请求授权您的摄像头',
          content: '如需正常使用此小程序功能，请您按确定并在设置页面授权用户信息',
          confirmText: '确定',
          success: res => {
            if (res.confirm) {
              wx.openSetting({
                success: function (res) {
                  // console.log('成功');
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
                    that.setData({
                      isShowCamera: false,
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
              that.setData({
                isShowCamera: false,
              })
            }
          }
        })

      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 
  // 相机授权
  authTakePhoto() {
    
  },
  //获取节点信息
  queryPhoto(e) {
    let that = this
    setTimeout(() => {
      let that = this
      new Promise(resolve => {
        let query = wx.createSelectorQuery().in(that);
        query.select('#cemeraHeight').boundingClientRect();
        query.select('#takephoto').boundingClientRect();
        query.select('#delBox').boundingClientRect();
        query.exec(function (res) {
          resolve(res);
        });
      }).then(res => {
        // console.log(res, '234567');
        const windowHeight = wx.getSystemInfoSync().windowHeight;
        let heightArray = [],
          bottomArray = [],
          topArray = [];
        res.forEach(rect => {
          // console.log(rect, 'rrrrr');
          heightArray.push(Math.floor(rect.top));
          bottomArray.push(Math.floor(rect.bottom));
          topArray.push(rect.height)
        });
        that.setData({
          heightArray,
          topArray,
          photoHeight: topArray[0] - topArray[1],
          slideTop: bottomArray[2] - heightArray[2]
        });
        // console.log(that.data.photoHeight, '99999999');
      });
    }, 300)
  },
  /**
   * 图片截取
   * 自定义计算位置  截取自己需要的那一部分图片
   */
  generate(imgSrc) {
    wx.createSelectorQuery()
      .select("#cover_image")
      .boundingClientRect((rect) => {
        this.ctx_A.drawImage( imgSrc, 0, 0,
          wx.getSystemInfoSync().windowWidth,
          wx.getSystemInfoSync().windowHeight * 0.75
        );
        this.ctx_A.draw(true, () => {
          wx.canvasToTempFilePath({
            //调用方法，开始截取
            x: rect.left,
            y: rect.top - wx.getSystemInfoSync().windowHeight * 0.066,
            width: rect.width,
            height: rect.height,
            destWidth: rect.width,
            destHeight: rect.height,
            canvasId: "myCanvas",
            quality: 1,
            success: (res) => {
              // this.getUrl(res.tempFilePath, 5);
              let imgInfo = {
                tempFilePaths: res.tempFilePath
              }
              // console.log(res,'ressssss');
              wx.navigateTo({
                url: '../../pages/scan/scanResult/scanResult?imgInfo=' + JSON.stringify(imgInfo)
              })
            },
          });
        });
      })
      .exec();
  },
  /**
   * 拍照
   */
  takePhotoAction: function () {
    var that = this
    // 相机授权
    // that.authTakePhoto()
    if (that.data.isShowCamera == true) {
      // wx.navigateTo({
      //   url: '../../pages/scan/scanResult/scanResult',
      // })
      this.ctx.takePhoto({
        quality: 'high', //高质量
        success: (res) => {
          this.generate(res.tempImagePath);
          // console.log(res, 'takePhotoAction');
        },
      })
    }
  },
  // 图库选择
  chooseImg() {
    wx.chooseImage({
      count: 1,
      sourceType: ['album'], //只打开相册
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        // console.log(res, 'chooseImage');
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
    // console.log('教程');
  },
  // 跳转详情
  toDetail(e) {
    let item = e.currentTarget.dataset.item
    // console.log(item, 'item');
    wx.navigateTo({
      url: '../detail/index/index',
    })
  },
  // 返回
  handleBackClick() {
    wx.reLaunch({
      url: '../home/home',
    })
  },
  // 创建一个上滑的动画 基于px单位
  createAnimationPY(changeY, index) {
    let imglist = this.data.imglist;
    if (imglist.length != 0) {
      let ani = wx.createAnimation({
        delay: 0,
        timingFunction: 'linear',
        duration: 45
      }).translateY(changeY).step().export()
      // imglist[this.data.delIndex].aniMation = ani
      imglist[index].aniMation = ani
      this.setData({
        imglist,
        isAnimation: true
      })
    }
  },
  // //获取节点信息
  // queryDel(e) {
  //   let that = this
  //   new Promise(resolve => {
  //     let query = wx.createSelectorQuery().in(that);
  //     query.select('#delBox').boundingClientRect();
  //     query.exec(function (res) {
  //       resolve(res);
  //     });
  //   }).then(res => {
  //     const windowHeight = wx.getSystemInfoSync().windowHeight;
  //     let heightArray = [],
  //       topArray = [];
  //     res.forEach(rect => {
  //       console.log(rect, 'delBox');

  //       // heightArray.push(Math.floor(rect.top));
  //       // topArray.push(rect.height)
  //     });
  //     that.setData({
  //       // scrollHeight: windowHeight,
  //       // heightArray,
  //       // topArray,
  //     });
  //   });
  // },
  //手指触摸动作开始 记录起点y坐标
  touchstart(e) {
    // console.log(e,'eeee');
    let index = e.currentTarget.dataset.index
    if (this.data.isAnimation) {
      this.createAnimationPY(0, index)
    }
    this.setData({
      delIndex: e.currentTarget.dataset.index,
      Ystart: e.changedTouches[0].pageY
    });
  },
  touchmove(e) {
    let index = e.currentTarget.dataset.index
    //  从下往上的移动距离 = 触摸初始位置y坐标 - 当前位置的y坐标
    let move = this.data.Ystart - e.changedTouches[0].pageY;
    // 当从下往上位移大于move的时候 调用方法创建动画
    if (move > 0) {
      this.createAnimationPY(-move, index)
    } else {
      // 当从下往上滑动的时候将让卡片复位
      this.createAnimationPY(0, index)
    }
  },
  touchend(e) {
    let index = e.currentTarget.dataset.index
    //  从下往上的移动距离 = 触摸初始位置y坐标 - 当前位置的y坐标
    let move = this.data.Ystart - e.changedTouches[0].pageY;
    // console.log(move, 'end-move');
    // console.log(this.data.slideTop, 'this.data.slideTop');
    // 当位移大于图片高度时候删除
    if (move > this.data.slideTop) {
      this.createAnimationPY(-move, index)
      let imglist = this.data.imglist
      imglist.splice(this.data.delIndex, 1);
      // console.log('删除第：' + this.data.delIndex + 1);
      this.setData({
        imglist: imglist
      })
      console.log(this.data.imglist, 'imglist');
    } else {
      // 复位
      this.createAnimationPY(0, index)
    }
  },
})
// index.js
const app = getApp();
Page({
  data: {
    // 导航栏高度
    navHeight: app.globalData.navHeight,
    // 导航栏距离顶部距离
    navTop: app.globalData.navTop,
    // 胶囊的高度
    navObj: app.globalData.navObj,
    // 胶囊宽度+距右距离
    navObjWid: app.globalData.navObjWid,
    // ————————吸顶tab————————//
    toView: '',
    activeIndex: 0,
    title: [{
      name: "详情",
      opt: 'blurbCard',
      type: 0
    }, {
      name: "评价",
      opt: 'evaluateCard',
      type: 1
    }, {
      name: "攻略",
      opt: 'tasteCard',
      type: 2
    }, {
      name: "推荐",
      opt: 'likeCard',
      type: 3
    }],
    isHidden: false,
    scrollLock: false, //滑动枷锁
    isScroll: '',
    // ————————————//
    wineInfo: {
      w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
      w_img: 'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=f25a8958-3c37-4719-9071-136f24c7bd7f',
      rate: [{
        origin: '你喜欢的风格',
        desc: '本周最高评分意大利红酒',
        rate: '4.0',
        num: 6586,
        price: 85555
      }],
      w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅葡萄酒',
      w_flag: 'https://img1.baidu.com/it/u=708777537,1411350085&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=498',
      w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
      w_eng: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
      price: 85555
    },
    // 推荐年份
    recomeYear: [{
        year: '2021',
        name: '最高评分',
        num: '4.0'
      },
      {
        year: '2021',
        name: '最优价格',
        num: '￥1244'
      },
      {
        year: '2021',
        name: '最受欢迎',
        num: '12222条评价'
      }
    ],
    // 简介
    blurbCurrent: '0',
    blurbHight: ['亮点', '标签'],
    blurbList: [{
        icon: '/img/mate/4.png',
        name: '排名全球第一'
      },
      {
        icon: '/img/mate/5.png',
        name: '排名全球第一'
      },
      {
        icon: '/img/mate/6.png',
        name: '排名全球第一'
      },
      {
        icon: '/img/mate/7.png',
        name: '排名全球第一'
      },
      {
        icon: '/img/mate/8.png',
        name: '排名全球第一'
      }
    ],
    // 口味特征

    flavourList: [{
        flavourValue: 70,
        left: '清淡',
        right: '醇厚'
      },
      {
        flavourValue: 50,
        left: '干',
        right: '甜'
      },
      {
        flavourValue: 10,
        left: '柔和',
        right: '酸度'
      },
      {
        flavourValue: 30,
        left: '顺滑',
        right: '单宁'
      },
    ],
    // 我的日志
    logList: {
      photo: [{
          num: '拍照识别过4次此款酒',
          icon: '/img/mate/8.png'
        },
        {
          num: '视频识别过4次此款酒',
          icon: '/img/mate/7.png'
        },
      ],
      history: [{
        name: '武大',
        date: '2012-09-12',
        rate: '4.0',
        year: 2020,
        desc: '非常不错，非常不错，非常不错，非常不错，非常不错，非常不错，',
        head: '/img/mate/12.png'
      }]
    },
    // 评价
    evaluateHight: ['参考酒评', '最新', '朋友'],
    wineLists: [{
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: 'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=104e019e-cbbe-4b9b-9ab4-895933ff416f',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 300,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: 'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=f25a8958-3c37-4719-9071-136f24c7bd7f',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 800,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: 'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=104e019e-cbbe-4b9b-9ab4-895933ff416f',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 300,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: 'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=f25a8958-3c37-4719-9071-136f24c7bd7f',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 800,
      },
    ],
    // 评价
    evaluateCurrent: '0'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 设置导航栏为对应导航
    wx.setNavigationBarTitle({
      // title: (opts.navName != '' ? opts.navName : '') + '商铺列表'
      title: "酒款详情页"
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#B81728',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
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
    let that = this
    that.navTabs = that.selectComponent(".navtabs");
    that.slideAnchor();
    that.topCardHeight()
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
  // 返回
  handleBackClick() {
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: 1
      })
    } else {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  },
  // 回到首页
  handleHomeClick() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  // 简介按钮高亮切换
  handleClick(e) {
    this.setData({
      blurbCurrent: e.target.dataset.blurbid
    })
  },
  // 评价按钮高亮切换
  evaluateBtnClick(e) {
    this.setData({
      evaluateCurrent: e.target.dataset.evaluateid
    })
  },
  // 口味特征改变
  onDrag(e) {
    // this.setData({
    //   flavourValue: e.detail.value,
    // });
  },
  // tab滑
  //获取锚点的节点信息
  slideAnchor(e) {
    let that = this
    new Promise(resolve => {
      let query = wx.createSelectorQuery().in(that);
      query.select('#blurbCard').boundingClientRect();
      query.select('#evaluateCard').boundingClientRect();
      query.select('#tasteCard').boundingClientRect();
      query.select('#likeCard').boundingClientRect();
      // query.select('#topCard').boundingClientRect();
      query.exec(function (res) {
        resolve(res);
      });
    }).then(res => {
      const windowHeight = wx.getSystemInfoSync().windowHeight;
      let heightArray = [],
        topArray = [];
      res.forEach(rect => {
        heightArray.push(Math.floor(rect.top));
        topArray.push(rect.height)
      });
      that.setData({
        scrollHeight: windowHeight,
        heightArray,
        topArray,
        scrollLock: true,
        isScroll: true,
      });
    });
  },
  // 获取topcard的top
  topCardHeight() {
    let that = this
    const query = wx.createSelectorQuery()
    query.select('#topCard').boundingClientRect()
    query.exec(function (res) {
      console.log(res, '2345y');
      that.setData({
        topCardHeight: res[0].top
      })
    })
  },
  //点击锚点跳转
  jumpTo: function (e) {
    let that = this
    let target = e.detail.item.opt;
    let activeIndex = e.detail.item.type;
    let {
      topArray,
      scrollHeight,
      isHidden
    } = that.data;
    let numHeight = 0;
    //计算当前锚点是否能根据tab的点击至顶部
    console.log(topArray,'topArray');
    for (var i = activeIndex; i < topArray.length; i++) {
      numHeight += topArray[i]
    }
    isHidden = target == 'blurbCard' ? false : isHidden;
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
    console.log(scrollTop, 'scrollTop');
    let isHidden = scrollTop >= heightArray[0] ? true : false; //控制tab显示与隐藏
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
})
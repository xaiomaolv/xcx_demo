// pages/detail/index/index.js
import {
  detailInfo,
} from '../../../api/detail'
import lottie from 'lottie-miniprogram'
import WxCountUp from '../../../plugins/wx-countup/WxCountUp.js'
const app = getApp();
Page({
  data: {
    isShowNav: false, //是否显示顶部导航
    isShowBtn: true, //是否显示左侧按钮
    backgroundColor: '#B81728', //背景颜色
    navTitle: '酒款详情页', //标题
    isWhite: true, //是否白色胶囊
    titleColor: 'white', //字体颜色
    // 导航栏高度
    navHeight: app.globalData.navHeight,
    navBarHeight: app.globalData.navBarHeight,
    // 导航栏距离顶部距离
    navTop: app.globalData.navTop,
    // 胶囊的高度
    navObj: app.globalData.navObj,
    // 胶囊宽度+距右距离
    navObjWid: app.globalData.navObjWid,
    // ————————吸顶tab————————//
    toView: '',
    activeIndex: 0,
    // customStyle:{
    //   width:560rpx,margin:auto;width:560rpx;margin:auto;
    // },
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
    wineEditorNotes: [{
      editorNote: "\"这一款神奇的意大利混酿拥有98分的专业评分，并且所有年份拥有有超过10000个唯唯诺用户评价！\"\\\\n对意大利美丽的葡萄酒的独特赞颂!\\\\n在这款3号剧院葡萄酒中，力量、丰富程度和优雅全部汇聚在一款华美的葡萄酒中，融合了意大利三种最伟大的葡萄的优势--来自瓦坡里切拉的科维纳，普利亚的普里米蒂沃和西西里的黑珍珠，足以说明3号剧院就是一款独特的葡萄酒魔法。混合后的葡萄酒突出了每种葡萄的独特品质，创造出了独特的葡萄酒。这种混合突出了每一种葡萄的独特品质，结合起来创造出一种强烈、光滑、饱满的葡萄酒，充满了摩卡、黑巧克力、草药、葡萄干和无花果的味道。\\\\n当然也不要只听我们的一面之词，因为所有年份超过10000多个唯唯诺用户的精彩评分，加上Luca Maroni的98分，我们已经没法把它捧得更高了。\\\\n## 关于葡萄酒\\\\n蒂纳兹酒庄从意大利的三个不同的葡萄酒产区挑选了最好的葡萄，用于酿造这款非常独特的混酿葡萄酒。\\\\n科维纳（Corvina），以酿造世界著名的阿玛罗尼（Amarone）而闻名，赋予葡萄酒优雅的花香、樱桃果实和精致的酸度。来自普利亚的普里米蒂沃（Primitivo）带来了成熟李子的味道和令人兴奋的香料味。而这款酒的力量和成熟的深色水果香味要归功于西西里的黑珍珠（Nero d'Avola）。\\\\n美味且丰富的天鹅绒单宁使该酒具有摩卡、黑巧克力、香草、葡萄干和无花果的诱人气息。这是一种丰盛的喜悦，具有平衡和新鲜感，让你回味无穷。\\\\n为了酿造3号歌剧，手工采摘的葡萄被单独酿造，然后再仔细混合。在装瓶之前，该酒在橡木桶中度过了24至26个月。\\\\n蒂纳兹酒庄酿酒意图就是要做一个卓越的且无关任何年份的葡萄酒。因此，正如葡萄酒本身就是是葡萄的混合，3号剧院即是年份的混合，可以认为是一款无年份的葡萄酒。\\\\n## 关于酒厂\\\\n蒂纳兹酒庄是一个家族企业，由Gian Andrea Tinazzi与他的两个孩子Giorgio和Francesca携手共事。该公司是由Gian Andrea和他的父亲建立的。该公司在威尼托和普利亚地区酿造很多独特的葡萄酒，其中一些是由意大利各葡萄酒产区的葡萄混合而成。",
      editorNoteText: "<p>\"这一款神奇的意大利混酿拥有98分的专业评分，并且所有年份拥有有超过10000个唯唯诺用户评价！\"\\n对意大利美丽的葡萄酒的独特赞颂!\\n在这款3号剧院葡萄酒中，力量、丰富程度和优雅全部汇聚在一款华美的葡萄酒中，融合了意大利三种最伟大的葡萄的优势--来自瓦坡里切拉的科维纳，普利亚的普里米蒂沃和西西里的黑珍珠，足以说明3号剧院就是一款独特的葡萄酒魔法。混合后的葡萄酒突出了每种葡萄的独特品质，创造出了独特的葡萄酒。这种混合突出了每一种葡萄的独特品质，结合起来创造出一种强烈、光滑、饱满的葡萄酒，充满了摩卡、黑巧克力、草药、葡萄干和无花果的味道。\\n当然也不要只听我们的一面之词，因为所有年份超过10000多个唯唯诺用户的精彩评分，加上Luca Maroni的98分，我们已经没法把它捧得更高了。\\n## 关于葡萄酒\\n蒂纳兹酒庄从意大利的三个不同的葡萄酒产区挑选了最好的葡萄，用于酿造这款非常独特的混酿葡萄酒。\\n科维纳（Corvina），以酿造世界著名的阿玛罗尼（Amarone）而闻名，赋予葡萄酒优雅的花香、樱桃果实和精致的酸度。来自普利亚的普里米蒂沃（Primitivo）带来了成熟李子的味道和令人兴奋的香料味。而这款酒的力量和成熟的深色水果香味要归功于西西里的黑珍珠（Nero d'Avola）。\\n美味且丰富的天鹅绒单宁使该酒具有摩卡、黑巧克力、香草、葡萄干和无花果的诱人气息。这是一种丰盛的喜悦，具有平衡和新鲜感，让你回味无穷。\\n为了酿造3号歌剧，手工采摘的葡萄被单独酿造，然后再仔细混合。在装瓶之前，该酒在橡木桶中度过了24至26个月。\\n蒂纳兹酒庄酿酒意图就是要做一个卓越的且无关任何年份的葡萄酒。因此，正如葡萄酒本身就是是葡萄的混合，3号剧院即是年份的混合，可以认为是一款无年份的葡萄酒。\\n## 关于酒厂\\n蒂纳兹酒庄是一个家族企业，由Gian Andrea Tinazzi与他的两个孩子Giorgio和Francesca携手共事。该公司是由Gian Andrea和他的父亲建立的。该公司在威尼托和普利亚地区酿造很多独特的葡萄酒，其中一些是由意大利各葡萄酒产区的葡萄混合而成。</p>",
      editorName: "张德眉",
      editorAvatar: "/img/mate/4.png",
      editorTitle: "唯唯诺葡萄酒编辑",
    }],
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
      }, {
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
        w_img: '/img/mate/wine1.png',
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
        w_img: '/img/mate/wine.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 800,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine1.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里莫里',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 800,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 300,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine1.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 800,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里莫里',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 800,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine1.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 300,
      },

    ],
    // 评价
    evaluateCurrent: '0',
    rateCardHeight: 0,
    videoList: [{
        srcVideo: 'https://api.vivino.cc/app-api/appapi/general/api/getScanStudyVideo',
        num: 800
      },
      {
        srcVideo: 'https://api.vivino.cc/app-api/appapi/general/api/getScanStudyVideo',
        num: 400
      },
      {
        srcVideo: 'https://api.vivino.cc/app-api/appapi/general/api/getScanStudyVideo',
        num: 300
      },
    ],
    // 评分组件开始
    isStartRate: false,
    // 食物搭配
    foodList: [{
        logo: '/img/mate/13.png',
        name: '牛肉'
      },
      {
        logo: '/img/mate/14.png',
        name: '羊肉'
      },
      {
        logo: '/img/mate/15.png',
        name: '家禽'
      },
    ],
    // 醒酒时间
    soberList: [{
        flavourValue: 10,
        left: '30分钟',
        right: '500'
      },
      {
        flavourValue: 10,
        left: '40分钟',
        right: '2000'
      },
      {
        flavourValue: 10,
        left: '1小时',
        right: '50000'
      },
      {
        flavourValue: 10,
        left: '2小时',
        right: '3000'
      },
    ],
    // 推荐场合
    recommendList: [{
        isC: '1', // 0不推荐 1推荐
        name: '婚礼喜宴'
      },
      {
        isC: '1', // 0不推荐 1推荐
        name: '户外派对'
      },
      {
        isC: '0', // 0不推荐 1推荐
        name: '家庭聚会'
      },
      {
        isC: '0', // 0不推荐 1推荐
        name: '家庭聚会'
      },
    ],
    isShowBlurb: false, //展开收缩
    locationMap: {
      latitude: 44.7,
      longitude: 8.03
    },
    articleEdit: {}, //编者注
    isOpen: false,
    isFold: false, // 是否显示'展开' 默认不显示
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
    that.editCard()
    //获取锚点的节点信息
    that.slideAnchor();
    that.rateCardHeight()
    this.judgeWater()
    setTimeout(function () {
      that.editMarkdown()
    }, 100)

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
    that.showDownApp = that.selectComponent(".downApp");
    that.detailInfo()
    // that.init()
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
  detailInfo(){
    let params = {
      wineUUID:'139a3308-4617-11ec-8373-066b4187bf04'
    }
    detailInfo(params).then(res=>{
      console.log(res,'wineUUID=139a3308-4617-11ec-8373-066b4187bf04');
    })
  },
  // 编者注计算markdown高度
  editMarkdown() {
    let that = this
    let query = wx.createSelectorQuery();
    query.select('.content').boundingClientRect();
    query.exec(function (rect) {
      if (rect[0] === null) {
        return
      } else if (rect[0].height > 570) { // 自定义一个边界高度
        that.setData({
          isFold: true
        })
      }
    })
  },
  // 编者注点击展开或收起
  open() {
    this.setData({
      isOpen: this.data.isOpen ? false : true
    })
  },
  // 返回
  handleBackClick(e) {
    wx.navigateTo({
      url: '/pages/scan/scan',
    })
    // const pages = getCurrentPages();
    // if (pages.length >= 2) {
    //   wx.navigateBack({
    //     delta: 1
    //   })
    // } else {
    //   wx.switchTab({
    //     url: '/pages/scan/scan',
    //   })
    // }
  },
  editCard() {
    let cod = `偶然相遇相貌英俊的青年水手傩送，傩送在翠翠的心里留下了深刻的印象。同时，傩送的兄长天保也喜欢上了翠翠，并提前托媒人提了亲。天保告诉傩送一年前他就爱上了翠翠，而傩送告诉天保他两年前就爱上了翠翠，天保听了后也吃了一惊。然而此时，当地的团总以新磨坊为陪嫁，想把女儿许配给傩送。而傩送宁肯继承一条破船也要与翠翠成婚。
    兄弟俩没有按照当地风俗以决斗论胜负，而是采用公平而浪漫的唱山歌的方式表达感情，让翠翠自己从中选择。傩送是唱歌好手，天保自知唱不过弟弟，心灰意冷，断然驾船远行做生意。
    碧溪边只听过一夜傩送的歌声，后来，歌却再没有响起来。老船夫忍不住去问，本以为是老大唱的，却得知：唱歌人是傩送，老大讲出实情后便去做生意。几天后老船夫听说老大坐水船出了事，淹死了……
    码头的船总顺顺因为儿子天保的死对老船夫变得冷淡。船总顺顺不愿意翠翠再做傩送的媳妇。老船夫只好郁闷地回到家，翠翠问他，他也没说起什么。夜里下了大雨，夹杂着吓人的雷声。第二天翠翠起来发现船已被冲走，屋后的白塔也冲塌了，翠翠去找爷爷却发现老人已在雷声将息时死去了…… 老军人杨马兵热心地前来陪伴翠翠，也以渡船为生，等待着傩送的归来。
    `
    // app.getText('https://www.vvadd.com/wxml_demo/demo.txt?v=2', res => {
    // let obj = app.towxml(this.data.wineEditorNotes[0].editorNote, 'markdown', {
    let obj = app.towxml(cod, 'markdown', {
      theme: 'light', //主题 dark 黑色，light白色，不填默认是light
      base: "www.xxx.com",
      events: { //为元素绑定的事件方法
        tap: e => {
          if (e.currentTarget.dataset.data && e.currentTarget.dataset.data.attr && (e.currentTarget.dataset.data.attr.class == "h2w__p")) {

          }
          console.log('tap', e);
        },
        change: e => {
          console.log('todo', e);
        }
      }
    });
    //更新解析数据
    // console.log(obj, 'ddd');
    this.setData({
      articleEdit: obj,
    });
    // console.log(obj,'obj');
    //   });
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
      query.exec(function (res) {
        resolve(res);
      });
    }).then(res => {
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
        scrollHeight: windowHeight,
        heightArray,
        bottomArray,
        topArray,
        scrollLock: true,
        isScroll: true,
      });
    });
  },
  // 获取ratecard的top
  rateCardHeight() {
    let that = this
    const query = wx.createSelectorQuery()
    query.select('#rateCard').boundingClientRect()
    query.exec(function (res) {
      that.setData({
        rateCardHeight: res[0].top
      })
    })
  },

  // 判断评价水球开始滚动
  judgeWater() {
    // 监听页面是否滚动到myElement标签
    let isStartRate
    let observer = wx.createIntersectionObserver(this)
    observer.relativeToViewport().observe('#evaluateCard', (res) => {
      if (res.intersectionRatio > 0) {
        isStartRate = true; //控制水球动画
      } else {
        isStartRate = false
      }
      this.setData({
        isStartRate: isStartRate
      })
    })

  },
  //点击锚点跳转
  jumpTo: function (e) {
    console.log(e, 'eeeeeeeee');
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
    for (var i = activeIndex; i < topArray.length; i++) {
      numHeight += topArray[i]
    }
    // console.log(target,'target');
    // console.log(isHidden,'isHidden');
    isHidden = target === 'blurbCard' ? false : isHidden;
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
      toView,
      rateCardHeight
    } = that.data;
    let scrollTop = e.detail.scrollTop;
    // console.log(scrollTop, 'scrollTop');
    // console.log(heightArray, 'heightArray');
    // console.log(rateCardHeight, 'rateCardHeight');
    let isHidden = scrollTop >= heightArray[0] ? true : false; //控制tab显示与隐藏
    let isShowNav = scrollTop >= rateCardHeight ? true : false; //控制topnav显示与隐藏

    if (that.data.isShowNav != isShowNav) {
      that.setData({
        isShowNav
      })
    }
    if (that.data.isHidden != isHidden) {
      that.setData({
        isHidden,
        toView: '',
        activeIndex: 0,
      })
    }
    //锚点高度足够时，滑动到相应的位置，tab的active发生相应的改变
    // console.log(scrollLock,'scrollLock');
    if (scrollLock) {
      let len = heightArray.length;
      let lastIndex = len - 1;
      let activeIndex = 0;
      // console.log(lastIndex,'lastIndex');
      // console.log(scrollTop,'scrollTop');
      for (let i = 0; i < len; i++) {
        if (scrollTop >= 0 && scrollTop < heightArray[0]) {
          // console.log(i,1111);
          activeIndex = 0;
        } else if (scrollTop >= heightArray[i] && scrollTop < heightArray[i + 1]) {
          // console.log(i,'iiiiii');
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
  endScroll: function (e) {
    // console.log(e, 'end');
    this.setData({
      scrollLock: true
    });
  },

  init() {
    if (this.inited) {
      return
    }
    wx.createSelectorQuery().selectAll('#lottie_demo').node(res => {
      const canvas = res[0].node
      const context = canvas.getContext('2d')
      canvas.width = 200
      canvas.height = 300
      lottie.setup(canvas)
      this.ani = lottie.loadAnimation({
        loop: true,
        autoplay: true,
        animationData: require('../../json/data'),
        rendererSettings: {
          context,
        },
      })
      this.inited = true
    }).exec()
  },
  // 扫码
  toScan() {
    wx.redirectTo({
      url: '/pages/scan/scan',
    })
  },
  // 发布动态
  toDownApp() {
    wx.navigateTo({
      url: '/pages/detail/downApp/downApp',
    })
  },
  //展开收缩
  listToggle: function () {
    this.setData({
      isShowBlurb: !this.data.isShowBlurb
    })
  },
})
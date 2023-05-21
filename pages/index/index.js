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
      },
      {
        year: '',
        name: '查看全部',
        num: ''
      },
    ],
    // 简介
    blurbCurrent:'0',
    blurbHight:['亮点','标签'],
    blurbList: [
      {
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
   
    flavourList:[
      {
        flavourValue:70,
        left:'清淡',
        right:'醇厚'
      },
      {
        flavourValue:50,
        left:'干',
        right:'甜'
      },
      {
        flavourValue:10,
        left:'柔和',
        right:'酸度'
      },
      {
        flavourValue:30,
        left:'顺滑',
        right:'单宁'
      },
    ],
    // 我的日志
    logList:{
      photo:[
        {
          num:'拍照识别过4次此款酒',
          icon:'/img/mate/8.png'
        },
        {
          num:'视频识别过4次此款酒',
          icon:'/img/mate/7.png'
        },
      ],
      history:[
        {
          name:'武大',
          date:'2012-09-12',
          rate:'4.0',
          year:2020,
          desc:'非常不错，非常不错，非常不错，非常不错，非常不错，非常不错，',
          head:'/img/mate/12.png'
        }
      ]
    },
    // 评价
    evaluateHight:['参考酒评','最新','朋友'],
    wineLists:[
      {
        w_bg:'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img:'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=104e019e-cbbe-4b9b-9ab4-895933ff416f',
        rate:[
          {
            origin:'法国',
            desc:'本周最佳评价',
            rate:'4.0',
            num:300,
            price:2565555
          }
        ],
        w_name:'莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin:'法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate:'4.0',
        num:300,
      },
      {
        w_bg:'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img:'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=f25a8958-3c37-4719-9071-136f24c7bd7f',
        rate:[
          {
            origin:'法国',
            desc:'本周最佳评价',
            rate:'4.0',
            num:300,
            price:2565555
          }
        ],
        w_name:'莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin:'法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate:'4.0',
        num:800,
      },
      {
        w_bg:'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img:'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=104e019e-cbbe-4b9b-9ab4-895933ff416f',
        rate:[
          {
            origin:'法国',
            desc:'本周最佳评价',
            rate:'4.0',
            num:300,
            price:2565555
          }
        ],
        w_name:'莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin:'法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate:'4.0',
        num:300,
      },
      {
        w_bg:'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img:'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=f25a8958-3c37-4719-9071-136f24c7bd7f',
        rate:[
          {
            origin:'法国',
            desc:'本周最佳评价',
            rate:'4.0',
            num:300,
            price:2565555
          }
        ],
        w_name:'莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin:'法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate:'4.0',
        num:800,
      },
    ]
  },
  onShow(){
    console.log(this.data.blurbCurrent,'999');
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
  // 点击每一个按钮
  handleClick(e) {
    
    console.log(e.target.dataset.myid);
    this.setData({
      blurbCurrent: e.target.dataset.myid
    })
  },
  // 口味特征改变
  onDrag(e){
    // this.setData({
    //   flavourValue: e.detail.value,
    // });
  }
})
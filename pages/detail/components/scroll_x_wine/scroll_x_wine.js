const data = require("../../../../json/data");

// pages/detail/components/scroll_x_wine/scroll_x_wine.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    srcollList:{
      type: Array,
      value: data.wineLists
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
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
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

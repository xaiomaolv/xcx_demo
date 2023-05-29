// components/qqMap/qqMap.js
// 引入SDK核心类
var QQMapWX = require('../../libs/qqmap-wx-jssdk');
// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'BODBZ-OITKQ-LZS5Y-BD4UD-LJLJK-5YBXC' // 必填
});
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    location: {
      type: Object,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    markers:null,
    poi:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dd(){
      console.log(this.data.location,'location');
    }

  },
  lifetimes: {
    created(){
      console.log(this.data.location,'location');
    },
    //在组件在视图层布局完成后执行
    ready: function () {
      var _this = this;
      console.log(_this.data.location,'_this.data.location');
      qqmapsdk.reverseGeocoder({
        location: _this.data.location, //获取表单传入的位置坐标,不填默认当前位置,示例为string格式
        success: function (res) { //成功后的回调
          console.log(res);
          var res = res.result;
          var mks = [];
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.address,
            id: 0,
            latitude: res.location.lat,
            longitude: res.location.lng,
            iconPath: '/img/home/local.png', //图标路径
            width: 40,
            height: 40,
            // callout: { //在markers上展示地址名称，根据需求是否需要
            //   content: res.address,
            //   color: '#000',
            //   display: 'ALWAYS'
            // }
          });
          _this.setData({ //设置markers属性和地图位置poi，将结果在地图展示
            markers: mks,
            poi: {
              latitude: res.location.lat,
              longitude: res.location.lng
            }
          });
        },
        fail: function (error) {
          console.error(error);
        },
        complete: function (res) {
          console.log(res);
        }
      })
    }
  }
})
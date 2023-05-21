Page({
      data: {
        cates: [{
            id: null,
            name: '全部'
          },
          {
            id: 1,
            name: '分类1'
          },
          {
            id: 2,
            name: '分类2'
          },
          {
            id: 3,
            name: '分类3'
          },
          {
            id: 4,
            name: '分类4'
          },
          {
            id: 5,
            name: '分类5'
          },
          {
            id: 6,
            name: '分类6'
          },
          {
            id: 7,
            name: '分类7'
          },
          {
            id: 8,
            name: '分类8'
          }
        ],
        currentId: null,
        serviceList: [{
            id: 1,
            name: '1'
          },
          {
            id: 2,
            name: '2'
          },
          {
            id: 3,
            name: '3'
          },
          {
            id: 4,
            name: '4'
          },
          {
            id: 5,
            name: '5'
          },
          {
            id: 6,
            name: '6'
          },
          {
            id: 7,
            name: '7'
          },
          {
            id: 8,
            name: '8'
          }
        ],
        scrollId: null, //滑动id,切换tab效果
        animationStyle: '',
        isNeedFixed: false
      },
      /**
       * 生命周期函数--监听页面加载
       */
      onLoad(options) {
        let that = this;
        wx.getSystemInfo({
          success: function (res, rect) {
            that.setData({
              // 商品scroll高度 = 可使用窗口 - （顶部box的高度+margin20 -20(底部留白)）
              scrollViewHeight: parseInt(res.windowHeight - 220 - 20),
              scrollViewStyle: `height:${parseInt(res.windowHeight - 220-20)}px`
            })
          }
        })
      },
      cateChange(e) {
        let currentId = e.currentTarget.dataset.id;
        let scrollId = e.currentTarget.id;
        this.setData({
          currentId,
          scrollId
        })
      },
      // 加this.data.isNeedFixed条件防止频繁的setdata
      // 1 隐藏box1,box2会自动吸顶 box2置顶
      // 2 设置scroll-view高度+120, 设置顶部box高度为box2高度
      goodsViewScroll(e) {
        console.log(e.detail.scrollTop, this.data.isNeedFixed)
        if (e.detail.scrollTop >= 120) {
          console.log('可以动画调整位置了')
          this.setData({
            isNeedFixed: true,
              box1Style: `height:0px;`,
              boxStyle: `height:80px;`,
              scrollViewStyle: `height:${this.data.scrollViewHeight + 120}px`
          })
          }
          if(e.detail.scrollTop < 120 ) {
            console.log('需要保持原样')
            this.setData({
              isNeedFixed:false,
              box1Style:`height:110px;`,
              boxStyle:`height:200px;`,
              scrollViewStyle: `height:${this.data.scrollViewHeight}px`,
            },()=>{
              wx.pageScrollTo({
                scrollTop: 0,
              })
            })
          }
        },
        goodsViewScrollTop(e) {
          this.setData({
            isNeedFixed: false,
            box1Style: `height:110px;`,
            boxStyle: `height:200px;`,
            scrollViewStyle: `height:${this.data.scrollViewHeight}px`,
          })
        }
      })
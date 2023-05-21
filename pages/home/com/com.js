// pages/home/com/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sources: Array, //数据源
    isShow: { //是否显示（默认展示，不用可以删除）
      type: Boolean,
      default: true
    },
    isFixed: { //是否固定在顶部
      type: Boolean,
      default: false
    },
    isScroll: { //是否可以横向滚动  值false:每项宽度为(100/sources.length)%
      type: Boolean, //值true: 宽度自适应
      default: false
    },
    currentType: { //默认选项，不传为第一项
      type: Object,
      default: () => {
        {}
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeLeft: 0, //滚动条的X值
    type: "", //当前选项
    height: "44"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // clickType(item, index, isUpate) {
    //   this.data.type = item.type;
    //   setTimeout(() => {
    //     if (!isUpate) {
    //       this.$emit("clickItem", item, index);
    //     }
    //     this.$nextTick(() => {
    //       this.getActiveElementY();
    //     })
    //   }, 200)
    // },
    // // 获取当前选项和scroll-view的scrollLeft值计算得出滚动条位置
    // getActiveElementY(element = '.item.active') {
    //   let query = uni.createSelectorQuery().in(this);
    //   var promise1 = new Promise((resolve, reject) => {
    //     query.select(".scroll-view").fields({
    //       scrollOffset: true
    //     }, res => {
    //       if (res) {
    //         resolve(res.scrollLeft)
    //       }
    //       resolve(0)
    //     }).exec();
    //   })

    //   var promise2 = new Promise((resolve, reject) => {
    //     query.select(element).boundingClientRect(async res => {
    //       if (res) {
    //         resolve(res.left + (res.width / 2))
    //       }
    //       resolve(0)
    //     }).exec();
    //   })
    //   Promise.all([promise1, promise2].map(item => item.catch(error => ""))).then(res => {
    //     var left = 0
    //     res.map(item => {
    //       left += item
    //     })
    //     this.activeLeft = left;
    //   })

    // }
  },
  lifetimes: {
    // ready: function () {
    //   //赋默认值
    //   this.type = this.currentType ? this.currentType.type : this.sources.length ? this.sources[0].type : ""
    //   setTimeout(() => {
    //     this.$nextTick(() => {
    //       this.getActiveElementY();
    //     })
    //   }, 200)
    //   if (this.isFixed) {
    //     uni.createSelectorQuery().in(this)
    //       .select(".fixed") //目标节点
    //       .boundingClientRect((target) => {
    //         if (target.height) {
    //           this.height = target.height;
    //         }
    //       })
    //       .exec();
    //   }
    // }
  }
})
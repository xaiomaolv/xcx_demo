// components/navTabs/navTabs.js
const tools = require('../../utils/tools');
Component({
  properties: {
    list: {
      type: Array,
      value: []
    },
    customStyle: {
      type: String,
      value: ''
    },

    active: {
      type: Number,
      value: 0,
      observer(val) {
        this.change(val);
      }
    },
    scrollable: {
      type: Boolean,
      value: true
    }
  },
  data: {
    scrollLeft: 0,
    currentIndex: 0,
    lineOffsetLeft: 0,
    lineWidth: 20
  },
  lifetimes: {
    //在组件在视图层布局完成后执行
    ready: function () {
      let that = this;
      this.setData({
        currentIndex: this.data.active,
        scrollable: this.data.list.length <= 5 ? false : true
      }, function () {
        const currentIndex = that.data.currentIndex;
        Promise.all([
          tools.getAllRect(this, '.cl-tab'),
          tools.getRect(this, '.cl-tabs__line'),
        ]).then(([rects = [], lineRect]) => {
          const rect = rects[currentIndex];
          if (rect == null) {
            return;
          }
          let lineOffsetLeft = rects.slice(0, currentIndex).reduce((prev, curr) => prev + curr.width, 0);
          lineOffsetLeft += (rect.width - lineRect.width) / 2;
          that.setData({
            lineOffsetLeft
          });
        });
      });
    }
  },
  methods: {
    //切换组件
    swich: function (e) {
      const {
        data
      } = this;
      const currentIndex = e.currentTarget.dataset.index;
      const item = e.currentTarget.dataset.item;
      if (currentIndex === data.currentIndex) {
        return;
      }
      const shouldEmitChange = data.currentIndex !== null;
      this.setData({
        currentIndex
      });
      tools.nextTick(() => {
        this.resize(false);
        this.scrollIntoView();
        if (shouldEmitChange) {
          //绑定事件到change
          this.triggerEvent('change', {
            index: currentIndex,
            item: item
          })
        }
      });
    },
    change: function (index) {
      this.setData({
        currentIndex: index
      }, () => {
        this.resize(false);
        this.scrollIntoView();
      })
    },
    resize() {
      const {
        currentIndex
      } = this.data;
      Promise.all([
        tools.getAllRect(this, '.cl-tab'),
        tools.getRect(this, '.cl-tabs__line'),
      ]).then(([rects = [], lineRect]) => {
        const rect = rects[currentIndex];
        if (rect == null) {
          return;
        }
        let lineOffsetLeft = rects.slice(0, currentIndex).reduce((prev, curr) => prev + curr.width, 0);
        lineOffsetLeft += (rect.width - lineRect.width) / 2;
        this.setData({
          lineOffsetLeft
        });
      });
    },
    scrollIntoView() {
      const {
        currentIndex,
        scrollable
      } = this.data;
      if (!scrollable) {
        return;
      }
      Promise.all([
        tools.getAllRect(this, '.cl-tab'),
        tools.getRect(this, '.cl-tabs-nav'),
      ]).then(([tabRects, navRect]) => {

        const tabRect = tabRects[currentIndex];
        const offsetLeft = tabRects
          .slice(0, currentIndex)
          .reduce((prev, curr) => prev + curr.width, 0);
        this.setData({
          scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2,
        });
      });
    },
  }
})
// components/agreement/agreement.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showAgree: {
      type: Boolean,
      value: false
    },
    //modal的高度
    height: {
      type: String,
      value: '80%'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickMask() {
      // this.setData({show: false})
    },
    showlog: function () {
      this.setData({
        showAgree: true
      })
    },
    hide: function () {
      this.setData({
        showAgree: false,
      })
    },
    cancel() {
      this.hide()
      this.triggerEvent('cancel')
    },
   
    confirm() {
      this.hide()
      this.triggerEvent('confirm')
    }
  }
})

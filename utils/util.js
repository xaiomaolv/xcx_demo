/**
 * 登录
 */
const login = function () {
  return new Promise((resolve, reject) =>
    wx.login({
      success: resolve,
      fail: reject
    })
  )
}

/**
 * 获取用户信息
 */
const getUserInfo = function () {
  return new Promise((resolve, reject) =>
    wx.getUserInfo({
      success: resolve,
      fail: reject
    })
  )
}

/**
 * 图片转经过压缩的base64
 * 最大的宽高为1024
 * 调换用页面必须还有canvas 且id为canvas
 */
const img2Base64 = src => {
  return new Promise((resolve, reject) => {
    wx.getImageInfo({
      src: src,
      success(imgInfo) {
        // 计算高度计算方式，此高度只试用于身份证，其他场景需调节
        let {
          width,
          height
        } = imgInfo
        let scale = 1
        if (width > height) {
          scale = 1024 / width
          height = height * scale
          width = 1024
        } else {
          scale = 1024 / height
          width = width * scale
          height = 1024
        }

        // 获取画布
        const canvas = wx.createCanvasContext('canvas')
        canvas.drawImage(src, 0, 0, width, height)
        canvas.draw(false, () => {
          // 保存图片
          wx.canvasToTempFilePath({
            canvasId: 'canvas',
            width: width,
            height: height,
            destWidth: width,
            destHeight: height,
            fileType: 'jpg',
            quality: 0.6,
            success(file) {
              wx.getFileSystemManager().readFile({
                filePath: file.tempFilePath,
                encoding: 'base64',
                success: res => resolve(res.data),
                fail: reject
              })
            },
            complete: res => {
              getApp().log('canvasToTempFilePath complete', res)
            }
          })
        })
      }
    })
  })
}

// 保存文件
const saveFile = (fileName, data, encoding) => {
  const fm = wx.getFileSystemManager()
  return new Promise((resolve, reject) => {
    fm.writeFile({
      filePath: wx.env.USER_DATA_PATH + '/' +fileName,
      data,
      encoding,
      success: res => {
        res.filePath=wx.env.USER_DATA_PATH + '/' +fileName
        resolve(res)
        },
      fail: reject
    })
  })

}

const bindCardhowModal = function () {
  wx.showToast({
    title: '未登录',
    icon:'error'
  })
  setTimeout(function () {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }, 1000)
}

const log = function (msg, ...objs) {
  if (getApp().loggerEnable) {
    console.info(msg, ...objs)
  }
}

const info = function (msg, ...objs) {
  if (getApp().loggerEnable) {
    console.info(msg, ...objs)
  }
}
const warn = function (msg, ...objs) {
  if (getApp().loggerEnable) {
    console.info(msg, ...objs)
  }
}

const error = function (msg, ...objs) {
  if (getApp().loggerEnable) {
    console.info(msg, ...objs)
  }
}

export default { login, getUserInfo, img2Base64, saveFile,bindCardhowModal, log, info, warn, error }
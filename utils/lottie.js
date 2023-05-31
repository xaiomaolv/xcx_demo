import lottie from 'lottie-miniprogram'
/**
 * @function json动画方法
 * @param {*} id canvas的id选择器
 * @param {*} width canvas的宽
 * @param {*} height canvas的高
 * @param {*} context this指向的对象
 * @param {*} loop 是否循环播放
 * @param {*} autoplay 是否立即播放
 */
export function jsonAnimation ({
  context,
  id,
  width,
  height,
  path,
  loop = true,
  autoplay = true
}) {
  wx.createSelectorQuery()
    .in(context)
    .select(id)
    .node((res) => {
      const canvas = res.node
      const lottieContext = canvas.getContext('2d')
      const dpr = wxp.getSystemInfoSync().pixelRatio
      canvas.width = width * dpr
      canvas.height = height * dpr
      lottieContext.scale(dpr, dpr)
      lottie.setup(canvas)
      // context.lottieAnimation =
      lottie.loadAnimation({
        loop: loop,
        autoplay: autoplay,
        animationData: path,
        rendererSettings: {
          context: lottieContext
        }
      })
    })
    .exec()
}


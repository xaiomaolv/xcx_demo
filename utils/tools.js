const nextTick = cb => {
  if (wx.canIUse('nextTick')) {
    wx.nextTick(cb);
  } else {
    setTimeout(() => {
      cb();
    }, 1000 / 30);
  }
}
const getRect = (context, selector) => {
  return new Promise((resolve) => {
    wx.createSelectorQuery()
      .in(context)
      .select(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]));
  });
}

const getAllRect = (context, selector) => {
  return new Promise((resolve) => {
    wx.createSelectorQuery()
      .in(context)
      .selectAll(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]));
  });
}

module.exports = {
  nextTick,
  getRect,
  getAllRect
}
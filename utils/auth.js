const getToken = function () {
  return wx.getStorageSync('token')
}

const setToken = function (token) {
  return wx.setStorageSync('token', token)
}

const removeToken = function () {
  return wx.removeStorageSync('token')
}

const getRKey = function () {
  return wx.getStorageSync('RKey')
}

const setRKey = function (rKey) {
  return wx.setStorageSync('RKey', rKey)
}

const removeRKey = function () {
  return wx.removeStorageSync('RKey')
}

const setCode = function (code) {
  wx.setStorageSync('code', code)
}
const getCode = function () {
  return wx.getStorageSync('code')
}
const removeCode = function () {
  return wx.removeStorageSync('code')
}
export default {
  getToken,
  setToken,
  removeToken,
  getRKey,
  setRKey,
  removeRKey,
  setCode,
  getCode,
  removeCode
}
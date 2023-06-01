import { login } from 'util'

// 授权域名网络接口基础路径
export const baseUrl ='http://dev.vivino.cc/app-api/appapi'
// export const baseUrl ='https://api.vivino.cc/app-api/appapi'

// --------------------以下为网络请求-------------------------
/**
 * 通用请求
 * 使用data为 表单 提交
 * 使用params 为 json提交
 * @param {url , method, header, data, params, responseType, local, cancleAuth} query 
 */
const request = query => {
  let { url, method, header, data, params, responseType, local, cancleAuth } = query

  // const token = getApp().getToken() 
  const code = getApp().getCode() 


  // const formHeader = { 'content-type': 'application/x-www-form-urlencoded', 'X-Token': token }
  const formHeader = { 'content-type': 'application/x-www-form-urlencoded', 'wx-code': code ,'platform':'applet'}
  // const jsonHeader = { 'content-type': 'application/json', 'X-Token': token }
  const jsonHeader = { 'content-type': 'application/json','wx-code': code,'platform':'applet' }
  // wx.showLoading({
  //   title: getApp().T.common ? getApp().T.common.loading : '加载中...',
  //   mask: true
  // })

  // 微信不支持await Promise，先定义
  const req = () => {
    return new Promise((resolve, reject) => {
      getApp().log('request', query)
      wx.request({
        url: local ? url : baseUrl + url,
        method: method,
        header: params ? { ...formHeader, ...header } : { ...jsonHeader, ...header },
        data: params || data,
        responseType: responseType,
        success: res => {
          getApp().log('responce', res.data)
          resolve(res.data)
        },
        fail: err => reject(err),
        complete: () => wx.hideLoading()
      })
    })
  }
 
  // 权限验证
  if (!cancleAuth) {
    return new Promise((resolve, reject) => {
      getApp().login().then(loginRes => {
        header = {
          'wx-code': loginRes.code,
          ...header
        }
        req().then(res => resolve(res)).catch(err => reject(err))
      })
    })
  }
  return req()
}
// 不带权限 wx-code请求
const whiteRequest = query => {
  let { url, method, header, data, params, responseType, local } = query
  const formHeader = { 'content-type': 'application/x-www-form-urlencoded'}
  const jsonHeader = { 'content-type': 'application/json' }
  wx.showLoading({
    title: getApp().T.common ? getApp().T.common.loading : '加载中...',
    mask: true
  })

  // 微信不支持await Promise，先定义
  const req = () => {
    return new Promise((resolve, reject) => {
      getApp().log('request', query)
      wx.request({
        url: local ? url : baseUrl + url,
        method: method,
        header: params ? { ...formHeader, ...header } : { ...jsonHeader, ...header },
        data: params || data,
        responseType: responseType,
        success: res => {
          getApp().log('responce', res.data)
          resolve(res.data)
        },
        fail: err => reject(err),
        complete: () => wx.hideLoading()
      })
    })
  }
  return req()
}


export default { baseUrl, request,whiteRequest }
const request = getApp().request

export function detailInfo(params) {
  return request({
    url: '/detail/',
    method: 'get',
    data: params
  })
}
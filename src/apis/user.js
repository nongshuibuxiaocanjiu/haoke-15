import request from '@/utils/request'
import store from '@/store'
// 用户登录接口
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data
  })
}

// 获取用户自己的信息资料
export const getUser = () => {
  return request({
    method: 'GET',
    url: '/user',
    headers: {
      Authorization: store.state.user.token
      // authorization: window.localStorage.getItem('TOUTIAO_USER')
    }
  })
}

// 查看收藏列表
export const getCollectList = () => {
  return request({
    method: 'GET',
    url: '/user/favorites',
    headers: {
      Authorization: store.state.user.token
      // authorization: window.localStorage.getItem('TOUTIAO_USER')
    }
  })
}

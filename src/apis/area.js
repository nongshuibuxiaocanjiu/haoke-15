import request from '@/utils/request'
// import store from '@/store'

// 查询 房源数据
export const gethouses = () => {
  return request({
    method: 'GET',
    url: '/houses'
  })
}

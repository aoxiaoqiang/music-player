import jsonp from 'common/js/jsonp'
import { commonParams, options, jsonpApi } from './config'
import axios from 'axios'

// 获取推荐歌单
export function getRecommend() {
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(jsonpApi.getRecommend, data, options)
}

// 获取歌单数据
// API保护策略: referer host验证；IP限制；参数验签
export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, {
    g_tk: 5381,
    notice: 0,
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    categoryId: 10000000,
    needNewCode: 0,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

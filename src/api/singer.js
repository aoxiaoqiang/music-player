import jsonp from 'common/js/jsonp'
import { commonParams, options, jsonpApi } from './config'

// 获取推荐歌单
export function getSinger() {
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    format: 'jsonp',
    platform: 'yqq',
    needNewCode: 0
  })

  return jsonp(jsonpApi.getSinger, data, options)
}

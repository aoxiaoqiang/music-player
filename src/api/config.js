export const commonParams = {
  g_tk: 5381,
  uin: 0,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  needNewCode: 0
}

export const options = {
  param: 'jsonpCallback'
}

// jsonp方式调用的API
export const jsonpApi = {
  getRecommend: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', // (首页)推荐歌单
  getSinger: 'https://c.y.qq.com/v8/fcg-bin/v8.fcg' // 歌手列表
}

export const ERR_OK = 0

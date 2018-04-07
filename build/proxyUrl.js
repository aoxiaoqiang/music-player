const referers = {
  c: 'c.y.qq.com',
  u: 'u.y.qq.com'
}

module.exports = {
  '/api/getDiscList': {
    referer: `https://${referers.c}`,
    host: referers.c,
    url: `https://${referers.c}/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg`
  }
}

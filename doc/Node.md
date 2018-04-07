# vue-music音乐播放器

[百度网盘文件下载加速](https://blog.csdn.net/Fabulous1111/article/details/78534694)

1. 安装&基础设置

```json
{
  'eol-last': 0,
  'space-before-function-paren': 0
}
```

npm i babel-runtime stylus sytlus-loader babel-polyfill -D
npm i vue vue-router fastclick --save

npm install axios better-scroll --save
2. -
3. -
4. JSONP
`npm install jsonp`
jsonp(url, opts, fn)
[参考](https://github.com/webmodules/jsonp)

keep-alive

请求代理设置
```javascript
//  抓取qq音乐推荐歌单列表 后端代理 设置headers
var apiRoutes = express.Router()
apiRoutes.get('/getDiscList', function(req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})
```

better-scroll 渲染、宽高设置、数据重新计算(refresh)
<img @load="loadImage" />

图片懒加载 vue-lazyload

**踩坑指南**
坑: QQ添加reffer设置
[解决方式](https://blog.csdn.net/fabulous1111/article/details/78840353)

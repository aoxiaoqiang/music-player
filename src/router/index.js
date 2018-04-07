import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import Rank from 'components/rank/rank'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('common/image/default.png'),
  loading: require('common/image/default.png'),
  attempt: 1
})

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})

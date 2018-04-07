<template>
  <div class="recommend">
    <scroll-view ref="scroll" class="recommend-content" :data="discList">
      <div>
        <!-- 推荐歌单(Banner) -->
        <div class="slider-wrapper" v-if="recommends.length">
          <slider>
            <div v-for="(recommend, index) in recommends" :key="index">
              <a :href="recommend.linkUrl">
                <img class="needclick" @load="loadImage" :src="recommend.picUrl" :alt="recommend.id">
              </a>
            </div>
          </slider>
        </div>
        <!-- End 推荐歌单(Banner) -->

        <!-- 热门歌单推荐 -->
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discList" class="item" :key="item.key" @click="selectItem(item)">
              <div class="icon">
                <img v-lazy="item.imgurl" width="60" height="60" alt="">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
        <!-- End 热门歌单推荐 -->
      </div>

      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll-view>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import ScrollView from 'base/scroll-view/scroll-view'
import Loading from 'base/loading/loading'

import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'

export default {
  data() {
    return {
      recommends: [], // 推荐歌单
      discList: [] // 歌单列表
    }
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    selectItem() {},
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data)
          this.discList = res.data.list
        }
      })
    },
    loadImage() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    }
  },
  components: {
    Slider,
    ScrollView,
    Loading
  }
}
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
      z-index: 9;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>

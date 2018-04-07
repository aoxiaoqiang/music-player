<template>
  <h3>singer.vue</h3>
</template>

<script>
import {getSinger} from 'api/singer'
export default {
  created() {
    this._getSinger()
  },
  methods: {
    _getSinger() {
      getSinger().then(res => {
        console.log(res.data.list)
      })
    }
  }
}
</script>

<style>

</style>

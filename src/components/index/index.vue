<template>
  <div>
    <div class="picter">
      <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
    </div>
  </div>
</template>

<script>
  import {Swiper} from 'vux'

  const baseList = [{
    url: 'javascript:',
    img: '../../static/img/bg0.jpg',
    title: '1'
  }, {
    url: 'javascript:',
    img: '../../static/img/bg1.jpg',
    title: '2'
  }, {
    url: 'javascript:',
    img: '../../static/img/bg2.jpg',
    title: '3'
  }, {
    url: 'javascript:',
    img: '../../static/img/bg3.jpg', // 404
    title: '4'
  }]

  export default {
    name: "index",
    components: {
      Swiper
    },
    methods: {
      demo06_onIndexChange(index) {
        this.demo06_index = index
      }
    },
    data() {
      return {
        demo06_list: baseList,
        demo06_index: 0,
        swiperItemIndex: 1
      }
    }
  }
</script>

<style scoped>

</style>

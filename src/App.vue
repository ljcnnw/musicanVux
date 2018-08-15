<template>
  <div id="app">
    <HeaderTop></HeaderTop>
    <router-view></router-view>
    <FootBottom></FootBottom>
  </div>
</template>

<script>
  import HeaderTop from "./components/public/HeaderTop";
  import FootBottom from "./components/public/FootBottom";
  import index from "./components/index/index"

  export default {
    name: 'app',
    components: {
      HeaderTop,
      FootBottom,
      index
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style>

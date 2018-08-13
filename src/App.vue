<template>
  <div id="app">
    <HeaderTop></HeaderTop>
    <FootBottom></FootBottom>
  </div>
</template>

<script>
  import HeaderTop from "./components/public/HeaderTop";
  import FootBottom from "./components/public/FootBottom"

  export default {
    name: 'app',
    components: {
      HeaderTop,
      FootBottom
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style>

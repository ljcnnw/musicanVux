<template>
  <div>
    <tabbar id="foot">

      <tabbar-item selected link="/">
        <img slot="icon" src="../../../static/icon/index.svg">
        <span slot="label">
          首页
        </span>
      </tabbar-item>

      <tabbar-item show-dot>
        <img slot="icon" src="../../../static/icon/people.svg">
        <span slot="label">乐队</span>
      </tabbar-item>
      <tabbar-item link="/component/demo">
        <img slot="icon" src="../../../static/icon/yanchu.svg">
        <span slot="label">商演</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/userInfo">
        <img slot="icon" src="../../../static/icon/person.svg">
        <span slot="label">
          我的信息
        </span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'


  export default {
    name: "FootBottom",
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>
  #foot {
    position: fixed;
  }
</style>

<template>
  <div id="registInfo">

      <Divider ><h3 >用户注册</h3></Divider>

    <form>
      <Group label-width="5.5em" label-margin-right="2em" label-align="justify">
        <Divider><h4>必填信息</h4></Divider>
        <x-input type="text" title="用户名："></x-input>
        <x-input type="password" title="密码："></x-input>
        <x-input type="password" title="确认密码："></x-input>
        <x-input is-type="email" title="邮箱："></x-input>
        <x-input is-type="china-mobile" title="手机号："></x-input>
      </Group>
      <Group label-width="5.5em" label-margin-right="2em" label-align="justify">
        <Divider><h4>详细信息（选填）</h4></Divider>
        <x-input type="text" title="乐队名称："></x-input>
        <x-input type="text" title="音乐风格："></x-input>
        <x-input type="text" title="个性签名："></x-input>
        <x-input type="text" title="个人简介："></x-input>
      </Group>
      <Group>
        <XButton type="primary" @click.native="" action-type="button">注册</XButton>
      </Group>
    </form>
  </div>
</template>

<script>
  import {Divider, Group, Cell, XTextarea, XInput, XButton, Alert, AlertModule,Popup } from 'vux';

  export default {
    name: "RegistUser",
    components: {
      Divider,
      Group,
      Cell,
      XTextarea,
      XInput,
      XButton,
      Alert,
      AlertModule,
      Popup
    }
  }
</script>

<style scoped>
  #registInfo {
    margin-bottom: 70px;
  }
</style>

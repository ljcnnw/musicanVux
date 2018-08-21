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
        <cell is-link title="1111" @click.native="showMusica = true">
        </cell>
        <cell-box is-link >111</cell-box>
        <x-input type="text" title="乐队名称："></x-input>
        <x-input type="text" title="音乐风格："></x-input>
        <x-input type="text" title="个性签名："></x-input>
        <x-input type="text" title="个人简介："></x-input>
      </Group>
      <div v-transfer-dom>
        <Popup v-model="showMusica" position="bottom" max-height="50%">
          <popup-header left-text="取消"
                        right-text="确定" title="请选择你喜欢的音乐风格" show-bottom-border="false" @on-click-left="showMusica = false"
                        @on-click-right="showMusica = false"></popup-header>
          <group>
            <popup-radio></popup-radio>
          </group>
        </Popup>
      </div>
      <Group>
        <XButton type="primary" @click.native="" action-type="button">注册</XButton>
      </Group>
    </form>
  </div>
</template>

<script>
  import {Divider, Group, Cell, XTextarea, XInput, XButton, Alert, AlertModule,Popup,PopupRadio,PopupHeader,CellBox  } from 'vux';

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
      Popup,
      PopupRadio,
      PopupHeader,
      CellBox
    },
    data(){
      return{
        showMusica:false
      }
    }
  }
</script>

<style scoped>
  #registInfo {
    margin-bottom: 70px;
  }
</style>

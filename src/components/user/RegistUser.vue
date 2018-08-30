<template>
  <div id="registInfo">

    <Divider><h3>用户注册</h3></Divider>

    <form>
      <Group label-width="5.5em" label-margin-right="2em" label-align="justify">
        <Divider><h4>必填信息</h4></Divider>
        <x-input type="text" title="账号：" v-model="userInfo.userName"></x-input>
        <x-input type="password" title="密码：" v-model="userInfo.userPass"></x-input>
        <x-input type="password" title="确认密码："></x-input>
        <x-input type="text" title="昵称：" v-model="userInfo.userInfoName"></x-input>
        <x-input is-type="email" title="邮箱：" v-model="userInfo.userInfoEmail"></x-input>
      </Group>
      <Group>
        <Divider><h4>详细信息（选填）</h4></Divider>
        <cell title="头像："></cell>
        <cell>
          <img src="../../../static/img/bg0.jpg" style="width:95%;" slot="title"/>
          <input type="file" accept="image/*"/>
        </cell>
        <x-input is-type="china-mobile" title="手机号：" v-model="userInfo.userInfoTel"></x-input>
        <x-input type="text" title="乐队名称："></x-input>
        <cell is-link @click.native="showMusica = true" title="音乐风格：" v-model="userInfo.musicStyle">
          {{userInfo.musicStyle}}
        </cell>
        <x-input type="text" title="个性签名："></x-input>
        <x-input type="text" title="个人简介："></x-input>
        <x-address :raw-value="true" title="选择地址：" placeholder="请选择地址" :list="addressData" @on-shadow-change="test"
                   v-model="userInfo.userInfoAddress"></x-address>
      </Group>
      <div>
        <Popup v-model="showMusica" position="bottom" max-height="50%">
          <popup-header left-text="取消"
                        right-text="确定" title="请选择你喜欢的音乐风格" :show-bottom-border="false"
                        @on-click-left="showMusica = false"
                        @on-click-right="checkMusic()"></popup-header>
          <checklist ref="musica" :options="musicaList"></checklist>

        </Popup>
      </div>
      <Group>
        <XButton type="primary" @click.native="regist()" action-type="button">注册</XButton>
      </Group>
    </form>
  </div>
</template>

<script>
  import {
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
    CellBox,
    Radio,
    Checklist,
    XAddress,
    ChinaAddressV4Data
  } from 'vux';

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
      CellBox,
      Radio,
      Checklist,
      XAddress
    },
    data() {
      return {
        showMusica: false,
        musicaList: ['1', '2', '3'],
        addressData: ChinaAddressV4Data,


        userInfo: {
          userName: '',
          userPass: '',
          userInfoName: '',
          userInfoTel: '',
          userInfoEmail: '',
          userInfoSign: '',
          userInfoIntro: '',
          musicStyle: '请选择你喜欢的音乐风格',
          userInfoAddress: [],
          userInfoImg: ''
        }
      }
    },
    methods: {
      checkMusic() {
        let musica1 = this.$refs.musica.getFullValue();
        let ttt = '';
        musica1.forEach((item, index) => {
          if (index == 0) {
            ttt = ttt + item.value;
          } else {
            ttt = ttt + "," + item.value;
          }
        })
        this.userInfo.musicStyle = ttt;
        this.showMusica = false;
      },
      test(ids, names) {
        console.log(names)
      },
      regist() {
        this.$axios.post('http://localhost:8090/userInfo/regist', this.userInfo).then(
          function (data) {
            if (data.data.success == false) {
              AlertModule.show(
                {
                  title: '系统消息',
                  content: data.data.message
                }
              )
            } else {
              AlertModule.show(
                {
                  title: '系统消息',
                  content: '登录成功'
                }
              )

            }
          }
        )
      }


    }
  }
</script>

<style scoped>
  #registInfo {
    margin-bottom: 70px;
  }
</style>

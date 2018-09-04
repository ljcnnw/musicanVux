<template>
  <div id="registInfo">

    <Divider><h3>用户注册</h3></Divider>

    <form>
      <Group label-width="5.5em" label-margin-right="2em" label-align="justify">
        <Divider><h4>必填信息</h4></Divider>
        <x-input type="text" novalidate :icon-type="iconType" title="账号：" v-model="sysUser.userName"
                 @on-blur="checkUserName"></x-input>
        <x-input type="password" title="密码：" v-model="sysUser.userPass"></x-input>
        <x-input type="password" title="确认密码："></x-input>
        <x-input type="text" title="昵称：" v-model="sysUser.userInfo.userInfoName"></x-input>
        <x-input is-type="email" title="邮箱：" v-model="sysUser.userInfo.userInfoEmail"></x-input>
      </Group>
      <Group>
        <Divider><h4>详细信息（选填）</h4></Divider>
        <cell title="头像："></cell>
        <cell>
          <img src="../../../static/img/bg0.jpg" style="width:110px;height:105px;border-radius: 95%" slot="title"
               id="touxiangimg"/>
          <input type="file" accept="image/*" v-on:change="great(touxiangImg)"/>
        </cell>
        <x-input is-type="china-mobile" title="手机号：" v-model="sysUser.userInfo.userInfoTel"></x-input>
        <x-input type="text" title="乐队名称："></x-input>
        <cell is-link @click.native="showMusica = true" title="音乐风格：" v-model="sysUser.userInfo.musicStyle">
          {{sysUser.userInfo.musicStyle}}
        </cell>
        <x-input type="text" title="个性签名："></x-input>
        <x-input type="text" title="个人简介："></x-input>

        <x-address :raw-value="true" title="选择地址：" placeholder="请选择地址" :list="addressData" @on-shadow-change="test"
        ></x-address>
      </Group>
      <div>
        <VueCropper style="width:300px;height:300px" ref="cropper" :autoCrop="option.autoCrop"
                    :fixedBox="option.fixedBox" :img="option.imgUrl"
                    :outputSize="option.size"
                    :autoCropWidth="option.autoCropWidth"
                    :autoCropHeight="option.autoCropHeight"
        ></VueCropper>
      </div>

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

  import VueCropper from 'vue-cropper'


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
      XAddress,
      VueCropper
    },
    data() {
      return {
        option: {
          imgUrl: '../../../static/img/bg0.jpg',
          size: 0.5,
          autoCrop: true,
          fixedBox: true,
          autoCropWidth: 110,
          autoCropHeight: 110
        },

        showMusica: false,
        musicaList: ['1', '2', '3'],
        addressData: ChinaAddressV4Data,
        iconType: 'error',
        sysUser: {
          userName: '',
          userPass: '',
          userInfo: {
            userInfoName: '',
            userInfoTel: '',
            userInfoEmail: '',
            userInfoSign: '',
            userInfoIntro: '',
            musicStyle: '请选择你喜欢的音乐风格',
            address: [],
            userInfoImg: ''
          }

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
        this.sysUser.userInfo.musicStyle = ttt;
        this.showMusica = false;
      },
      test(ids, names) {
        this.sysUser.userInfo.address = names;
      },
      checkUserName(val) {
        console.log(val);
        if (val == '') {
          this.iconType = 'error';
          console.log(this.iconType);
        } else {
          this.iconType = 'success';
        }
      },
      regist() {
        this.$axios.post('http://localhost:8090/userInfo/regist', this.sysUser).then(
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
      },
      great(vul) {
        console.log("111" + this.touxiangImg);


      },
      postImg() {
        this.$axios.post()
      }


    }
  }

</script>

<style scoped>
  #registInfo {
    margin-bottom: 70px;
  }
</style>

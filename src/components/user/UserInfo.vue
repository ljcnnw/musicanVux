<template>
  <div>
    <Divider>登陆账号</Divider>
    <form id="loginForm" ref="loginForm">
      <Group>
        <XInput type="text" title="用户名：" placeholder="请输入用户名" v-model="loginData.userName"></XInput>
        <XInput type="text" title="密码：" placeholder="请输入密码" v-model="loginData.userPass"></XInput>
        <br/>
        <XButton type="primary" @click.native="login()" action-type="button">登陆</XButton>
        <XButton type="primary" action-type="button" @click.native="regist()">注册</XButton>

      </Group>
    </form>


  </div>
</template>

<script>
  import {Divider, Group, Cell, XTextarea, XInput, XButton, Alert, AlertModule} from 'vux';

  export default {
    name: "UserInfo",
    data() {
      return {
        user: {},
        loginData: {
          userName: '',
          userPass: ''
        },
        testData: ''
      }
    },
    created() {

    },
    components: {
      Divider,
      Group,
      Cell,
      XTextarea,
      XInput,
      XButton,
      Alert,
      AlertModule

    },
    methods: {
      login() {
        this.$axios.post('http://localhost:8090/user/login', this.loginData).then(
          function (data) {
            if (data.data.success == false) {
              AlertModule.show(
                {
                  title: '系统消息',
                  content:data.data.message
                }
              )
            } else {
              AlertModule.show(
                {
                  title: '系统消息',
                  content:'登录成功'
                }
              )

            }
          }
        )
      },
      regist(){
        this.$router.push('/registUser')
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <Divider>登陆账号</Divider>
    <form id="loginForm" ref="loginForm">
      <Group>
        <XInput type="text" title="用户名：" placeholder="请输入用户名" v-model="loginData.userName"></XInput>
        <XInput type="text" title="密码：" placeholder="请输入密码" v-model="loginData.userPass"></XInput>
        <br/>
        <XButton type="primary" @click.native="login()" action-type="button">登陆</XButton>
        <XButton type="primary" @click.native="" action-type="button">注册</XButton>
      </Group>
    </form>


  </div>
</template>

<script>
  import {Divider,Group,Cell,XTextarea,XInput,XButton} from 'vux';
  import qs from 'qs';
  export default {
    name: "UserInfo",
    data(){
      return{
        user:{},
        loginData:{
          userName:'',
          userPass:''
        },
        testData:''
      }
    },
    created() {

    },
    components:{
      Divider,
      Group,
      Cell,
      XTextarea,
      XInput,
      XButton
    },
    methods:{
      login(){
        this.$axios.post('http://localhost:8090/user/test2',this.loginData).then(
          function(){
            console.log(this.loginData);
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>

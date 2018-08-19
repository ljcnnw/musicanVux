<template>
  <div>
    <Divider>登陆账号</Divider>
    <form id="loginForm">
      <Group>
        <XInput type="text" title="用户名：" placeholder="请输入用户名" v-model="loginData.userName"></XInput>
        <XInput type="text" title="密码：" placeholder="请输入密码" v-model="loginData.userPass"></XInput>
        <XInput type="text" title="密码：" placeholder="请输入密码" v-model="testData"></XInput>
        <br/>
        <XButton type="primary" @click.native="login($event)" action-type="button">登陆</XButton>
        <XButton type="primary">注册</XButton>
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
      login(event){
        event.preventDefault();
        var lData = qs.stringify(this.loginData);
        var test = JSON.stringify(this.loginData);
        this.$axios({
          method: 'post',
          url: 'http://localhost:8090/user/test',
          data:{
            test
          }
        }).then(function () {
          console.log(lData);
          console.log(test);
        })
      }
    }
  }
</script>

<style scoped>

</style>

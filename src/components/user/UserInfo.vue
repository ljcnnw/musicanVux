<template>
  <div>
    <Divider>登陆账号</Divider>
    <form>
      <Group>
        <XInput type="text" title="用户名：" placeholder="请输入用户名" v-model="userName"></XInput>
        <XInput type="text" title="密码：" placeholder="请输入密码" v-model="userPass"></XInput>
        <br/>
        <XButton type="primary">登陆</XButton>
        <XButton type="primary">注册</XButton>
      </Group>
    </form>
    userInfo1111
    <h5 v-for="user in user">
      {{user.userName}},{{user.userPass}},{{user.createDate}}
    </h5>

  </div>
</template>

<script>
  import {Divider,Group,Cell,XTextarea,XInput,XButton} from 'vux'
  export default {
    name: "UserInfo",
    data(){
      return{
        user:{}
      }
    },
    created() {
      this.$axios({
        method: 'get',
        url: 'http://localhost:8090/user/findList'
      }).then(
        (data) => {
          this.user = data.data;
        }
      )
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

      }
    }
  }
</script>

<style scoped>

</style>

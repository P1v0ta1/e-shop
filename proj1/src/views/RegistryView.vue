<script setup>

import { reactive,ref } from 'vue';
import { showSuccessToast } from 'vant';

const form = reactive({
    username:'',
    password:'',
    Confrim_pwd:'',

     })

const usernameRules = ([
     {
        required:true,
        pattern:/^\w{3,16}$/,message:"用户名长度在3到16之间"
     }

])

const passwordRules = ([
     {
        required:true,
        pattern:/^\w{6,20}$/,message:"密码长度在6~20之间"
     }

])

//密码确认验证
const pwdconfRules = ([
    {
        required:true,
        pattern:/^\w{6,20}$/,message:"密码长度在6~20之间"
    },
    {
        validator: value => {
            if (value !== form.password){
                return "两次输入不一致"
            }
                return true
        }
    }
])

const onSubmit = () => {
    //console.log(form.username);
    //alert("success!");
    //console.log(form.password);
    showSuccessToast("Welcome " + form.username)
}


</script>


<template>
<!-- https://vant-ui.github.io/vant/#/zh-CN/form -->
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="form.username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="usernameRules"
    />
    <van-field
      v-model="form.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="passwordRules"
    />
    <van-field
      v-model="form.Confrim_pwd"
      type="password"
      name="确认密码"
      label="确认密码"
      placeholder="确认密码"
      :rules="pwdconfRules"
    />
  </van-cell-group>

  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>

</template>

<style lang="scss" scoped>


</style>
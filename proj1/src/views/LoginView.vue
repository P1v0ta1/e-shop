<script setup>  

import { showSuccessToast } from 'vant';
import { reactive,ref } from 'vue';

const form = reactive({
    username:'',
    password:'',

     })

const usernameRules = ref([
     {
        required:true,
        pattern:/^\w{3,16}$/,
        message:"用户名长度在3到16之间"
     }

])

const passwordRules = ref([
     {
        required:true,
        pattern:/^\w{6,20}$/,
        message:"密码长度在6~20之间"
     }

])


//提交效果     
const onSubmit = () => {
    //console.log(form.username);
    //alert("success!");
    //console.log(form.password);
    showSuccessToast("Welcome " + form.username)
}
</script>


<template>  

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
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
<van-toast />

</template>


<style lang="scss" scoped>



</style>
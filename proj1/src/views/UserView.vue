<script setup>

</script>

<template>
    <van-row class="user-info" align="center">
        <!-- AVATAR -->
        <van-image src="/src/assets/images/avatar_default.png"
        round
        width="100"
        height="100" 
        />
        
        <!-- 登录按钮 -->
         <RouterLink :to="{ name :'login'}">
            <span class="user-info-name">登录</span>
         </RouterLink>
         <span class="user-info-name">|</span>
         <!-- 注册按钮 -->
         <RouterLink :to="{ name :'registry'}">
            <span class="user-info-name">注册</span>
         </RouterLink>
    </van-row>

    <!--按钮列表-->
    <van-row class="user-link">
        <van-col span = "6"> 
            <van-icon name="pending-payment" size="40" />
            代付款
        </van-col>
        <van-col span = "6"> 
            <van-icon name="records-o" size="40" />
            待收货
        </van-col>
        <van-col span = "6"> 
            <van-icon name="tosend" size="40" />
            待评价
        </van-col>
        <van-col span = "6"> 
            <van-icon name="after-sale" size="40" />
            退款
        </van-col>
    </van-row>
</template>

<style lang="scss" scoped>

.user-info{
    padding: 15px;
    background: url(../assets/images/user_head_bg.png)no-repeat;

    .user-info-name{
    color: aliceblue;
    display: inline-block;
    font-size: 16px;
    padding: 0 5px;
  }
}

.user-link{
    :deep(.van-col){
        display: flex;
        font-size: 18px;
    }
}

</style>
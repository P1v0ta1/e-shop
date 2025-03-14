<script setup>

import { useAttrs } from 'vue';
import TabBar from './components/Tabbar.vue'
import { showToast } from 'vant';
import { useRouter } from 'vue-router';


const router = useRouter()

//按钮返回函数
const onClickLeft = () => {
    if(history.length > 1) {
      router.back();
    } else {
      router.push({ name:'home' });
    }
}

</script>

<template>
  <!-- 参考https://vant-ui.github.io/vant/#/zh-CN/nav-bar#fan-hui-shang-ji -->
<van-nav-bar
  :title="$route.meta.title"
  :left-arrow="$route.meta.isShowBack"
  @click-left="onClickLeft"
  fixed
  placeholder
/>

  <RouterView />
  <TabBar />
</template>

<style lang="scss" scoped>

</style>
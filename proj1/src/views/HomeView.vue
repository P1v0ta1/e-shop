<script setup>
import HomeGrid from '@/components/HomeGrid.vue';
import HomeNew from '@/components/HomeNew.vue';
import HomeProduct from '@/components/HomeProduct.vue';
import HomeSwiper from '@/components/HomeSwiper.vue';
import HomeTop from '@/components/HomeTop.vue';
import { showToast } from 'vant';
import {ref} from 'vue';

const search= ref('');

const onSearch = function(){
  showToast(search.value);
}

const onCancel=function(){
  showToast('cancel');
}
</script>

<template>
  <van-search
   v-model="search"
  show-action 
  placeholder="pupup"
  @search="onSearch"
  @cancel="onCancel"
  />

<div>{{ search }} </div>

<HomeSwiper />

  <HomeGrid />
  
  <VanToast />

  <HomeProduct />

  <HomeNew />

  <HomeTop />
</template>

<style lang="scss" scoped>

</style>

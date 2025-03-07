<script setup>
import HomeGrid from '@/components/HomeGrid.vue';
import HomeSwiper from '@/components/HomeSwiper.vue';
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
</template>

<style lang="scss" scoped>

</style>

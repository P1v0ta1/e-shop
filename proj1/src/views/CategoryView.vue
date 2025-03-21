<script setup>

import { ref } from 'vue';

const categoryList = ref([
{
    id: 1,
    name: "潮流女装",
    picture: "/",
    pid: 0,
  },
  {
    id: 2,
    name: "羽绒服",
    picture: "/images/category/clothes/jackets.png",
    pid: 1,
  },
  {
    id: 3,
    name: "毛呢大衣",
    picture: "/images/category/clothes/overcoat.jpg",
    pid: 1,
  },
  {
    id: 4,
    name: "连衣裙",
    picture: "/images/category/clothes/dress.png",
    pid: 1,
  },
  {
    id: 5,
    name: "食品",
    picture: "/",
    pid: 0,
  },
  {
    id: 6,
    name: "休闲零食",
    picture: "/images/category/foods/biscuit.jpg",
    pid: 5,
  },
  {
    id: 7,
    name: "生鲜果蔬",
    picture: "/images/category/foods/tomato.jpg",
    pid: 5,
  },
  {
    id: 8,
    name: "饮料汽水",
    picture: "/images/category/foods/drinks.jpg",
    pid: 5,
  },
  {
    id: 9,
    name: "四季茗茶",
    picture: "/images/category/foods/tea.jpg",
    pid: 5,
  },
  {
    id: 10,
    name: "粮油调味",
    picture: "/images/category/foods/oil.jpg",
    pid: 5,
  },
  {
    id: 11,
    name: "珠宝配饰",
    picture: "/",
    pid: 0,
  },
  {
    id: 12,
    name: "时尚饰品",
    picture: "/images/category/jewelry/ornaments.jpg",
    pid: 11,
  },
  {
    id: 13,
    name: "品质手表",
    picture: "/images/category/jewelry/watch.jpg",
    pid: 11,
  },
  {
    id: 14,
    name: "DIY饰品",
    picture: "/images/category/jewelry/diy.jpg",
    pid: 11,
  },
  {
    id: 15,
    name: "日用百货",
    picture: "/",
    pid: 0,
  },
  {
    id: 16,
    name: "居家日用",
    picture: "/images/category/store/towel.png",
    pid: 15,
  },
  {
    id: 17,
    name: "个人清洁",
    picture: "/images/category/store/paper.png",
    pid: 15,
  },
  {
    id: 18,
    name: "盆碗碟筷",
    picture: "/images/category/store/bowl.png",
    pid: 15,
  },
  {
    id: 19,
    name: "茶杯茶具",
    picture: "/images/category/store/cup.png",
    pid: 15,
  },
  {
    id: 20,
    name: "收纳整理",
    picture: "/images/category/store/box.png",
    pid: 15,
  },
  {
    id: 21,
    name: "手机数码",
    picture: "/",
    pid: 0,
  },
  {
    id: 22,
    name: "手机",
    picture: "/images/category/phone/phone.png",
    pid: 21,
  },
  {
    id: 23,
    name: "笔记本",
    picture: "/images/category/phone/computer.png",
    pid: 21,
  },
  {
    id: 24,
    name: "数码配件",
    picture: "/images/category/phone/headset.png",
    pid: 21,
  },
  {
    id: 25,
    name: "平板",
    picture: "/images/category/phone/flat.png",
    pid: 21,
  },
  {
    id: 26,
    name: "相机",
    picture: "/images/category/phone/camera.png",
    pid: 21,
  },
  {
    id: 27,
    name: "户外运动",
    picture: "/",
    pid: 0,
  },
  {
    id: 28,
    name: "运动鞋",
    picture: "/images/category/motion/shoes.jpg",
    pid: 27,
  },
  {
    id: 29,
    name: "球类运动",
    picture: "/images/category/motion/ball.png",
    pid: 27,
  },
  {
    id: 30,
    name: "垂钓用品",
    picture: "/images/category/motion/fishingrod.png",
    pid: 27,
  },
  {
    id: 31,
    name: "运动服",
    picture: "/images/category/motion/clothes.png",
    pid: 27,
  },
  {
    id: 32,
    name: "骑行装备",
    picture: "/images/category/motion/bicycle.png",
    pid: 27,
  },
  {
    id: 33,
    name: "电动车",
    picture: "/images/category/motion/vehicle.png",
    pid: 27,
  },
])

//转换数型结构
const convertToTree = (data) => {
    let treeData = [];   //用于储存最终的树形结构
    let map = {};        //存储每个节点及其子节点的信息，key为id，value为节点对象
    //遍历一维数据，建立节点映射
    //遍历输入的data数组中的每个对象（即每个分类）。
    //对于每个对象，创建一个新的对象，将原始对象的所有属性复制过来，同时添加一个空的children数组。
    //将这个新对象存储在map中，以这个对象的id作为键。
    for(const item of data){
        map[item.id] = { ...item,children: []}
    }

    //遍历映射表，将节点添加到父节点的children中
    for(const item of data){
        const node = map[item.id];
        //如果分类pid=0，即父节点,即该分类没有父节点，是一级分类，则将该节点对象直接添加到treeData数组中，作为根节点。
        if(item.pid === 0){
            treeData.push(node)
        }else{ //如果item.pid不等于0（即该分类有父节点），则在map中找到父节点对象，并将当前节点对象添加到父节点的children数组中。
        const parent = map [item.pid];
        parent.children.push(node);
      }
    }
    return treeData;
}

const menus = ref([]);

//执行转换
const loadCategoryList = () => {
    const treeData = convertToTree(categoryList.value);
    console.log(treeData);
    menus.value = treeData;
}

loadCategoryList();

</script>

<template>
    <div class="menu">
        <!-- 左侧菜单 (一级分类)-->
        <div class="left">
            <ul>
                <li v-for="(item, index) in menus" :key ="index">
                    <p class="text">{{ item.name }}</p>
                </li>
            </ul>
        </div>
        <!-- 右侧内容 (二级分类)-->
         <div class="right">
            <ul>
                <!-- 遍历一级分类 -->
                <li v-for="(item, index1) in menus" :key ="index1">
                    <!-- 一级分类名称 -->
                    <h4 class="title">{{ item.name }}</h4>
                    <ul class="item">
                        <!-- 从一级分类里边遍历二级分类 -->
                        <li v-for="(item,index2) in item.children":key ="index2">
                            <img :src="item.picture" :alt="item.name">
                            <span>{{ item.name }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
         </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
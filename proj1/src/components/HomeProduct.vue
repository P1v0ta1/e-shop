<template>  

        <div class="home-product">
            <ul>
                <li v-for="item in productlist" :key="item.id">
                    <img :src="item.pic_url"/>
                    <h4>{{ item.name }}</h4>
                </li>
            </ul>
        </div>

</template>


<script setup>  
        
    const productlist = [
        { id: 1, name:'推荐', pic_url: '/images/product1.png'},
        { id: 2, name:'热门', pic_url: '/images/product2.png'},
        { id: 3, name:'专享', pic_url: '/images/product3.png'},
        { id: 4, name:'折扣', pic_url: '/images/product4.png'},
     ];

</script>


<style lang="scss" scoped>  
.home-product{
    & > ul {
        display: flex ; //弹性布局
        justify-content: space-between;//水平方向俩端对齐
        flex-wrap: wrap;//允许元素自动换行
        li{
            margin-left: 2%;
            margin-right: 2%;
            width: 46%;
            position: relative; //相对位置
            img{
                width: 100%;
            }
            h4{
                position: absolute; //绝对位置
                font-size: 14px;
                left: 0;
                top: 0; //left , top用于坐标轴定位
                background-color: bisque;
                color: rgb(230, 79, 79);
                padding: 2px 4px; //内容与边框之间的间隔，第一位常表示Y轴，第二位x轴
                border-radius: 0 0 20% 0;
            }
        }
    }
}

</style>
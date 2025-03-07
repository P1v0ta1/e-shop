<script setup>  
    
const newlist =[
        { id : 1, name:'沙发',pic_url :'/images/new1.jpg',retail_price:3000,ori_pri:3599},
        { id : 2, name:'坤球',pic_url :'/images/new2.jpg',retail_price:125,ori_pri:225},
        { id : 3, name:'夹子',pic_url :'/images/new3.jpg',retail_price:15,ori_pri:45},
        { id : 4, name:'拖孩',pic_url :'/images/new4.jpg',retail_price:30,ori_pri:65.5},

];

</script>

<template>  

<div class="home-new">  
    <div class="title">
        <h3>每日上新</h3>
    </div>
    <ul>    
        <li v-for="item in newlist" :key="item.id">
            <img :src="item.pic_url"/>
            <p>{{ item.name }}</p>
            <p1><span>¥</span>{{ item.retail_price }}    <span style="color: rgb(100, 99, 99);font-size: 14px;">¥</span><p2>{{ item.ori_pri }}</p2></p1>
        </li>
    </ul>
</div>

</template>

<style lang="scss" scoped>  

.home-new{

    .title{
        height:50px;
        text-align: center;
        font-size: 20px;
        background-color: crimson;
        border-radius: 5%;
    h3{
        color: gold;
        width: 75%;
        border-top: 4px solid rgb(235, 231, 10);
        padding-top:  6px;
        margin: 0 auto;
    }
  }

  & > ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        pad: 1em 0 0;
        background-color: rgba(240, 66, 95, 0.644);
    li{
        margin-top: 2px;
        width: 49.5%;
        background-color: rgba(212, 212, 212, 0.719);

        img{
            border:3px solid rgba(0, 230, 247, 0.445);
            border-radius: 10% 10% 10% 10%;
            width: 100%;
        }

        p{  
            font-size: 20px;
            text-align: center;
            margin: 0.5em auto;
            font-family: Arial, Helvetica, sans-serif;
        }

        p1{
            text-align: center;
            margin: 0.5em auto;
            font-family: Arial, Helvetica, sans-serif;
            color: crimson;
            font-size: 25px;
        }

        p2{
            color: rgb(100, 99, 99);
            font-size: 20px;
            text-decoration: line-through;
        }

        span{    //钱币符号
            color: red;
            font-size: 16px;
            margin-right: 2px;
        }
    }
  }
}



</style>
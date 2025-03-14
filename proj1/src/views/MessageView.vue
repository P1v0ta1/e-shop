<script setup>

const messagelist = [
        {id: 1,
        icon:"/images/heishou.jpg" ,
        title:"神鹰哥",
        value:"3分钟前",
        label:"知不知道什么叫黑手",},
        {id: 2,
        icon:"/images/sunge.jpg" ,
        title:"孙笑川",
        value:"15分钟前",
        label:"你吼那么大声干什么辣",},
        {id: 3,
        icon:"/images/maomei.jpg" ,
        title:"Не переводите этоne",
        value:"1分钟前",
        label:"请为我们的队伍投票",},
        {id: 4,
        icon:"/images/heishou.jpg" ,
        title:"神鹰哥",
        value:"3分钟前",
        label:"知不知道什么叫黑手",},
        {id: 5,
        icon:"/images/heishou.jpg" ,
        title:"神鹰哥",
        value:"3分钟前",
        label:"知不知道什么叫黑手",},
];

</script>


<template>

   
    <van-cell-group>  
    <!--参考 https://vant-ui.github.io/vant/#/zh-CN/cell#ji-chu-yong-fa -->
        <van-cell v-for="item in messagelist":key="item.id"
        :icon="item.icon" 
        :title="item.title"
        :value="item.value"
        :label="item.label"
        center
        />
    </van-cell-group>
    
</template>

<style lang="scss" scoped>

:deep(.van-cell) {
    .van-cell__left-icon{
        width:40px;
        height: 40px;
        margin-right: 10px;
        .van-icon__image{
            width:100%;
            height: 100%;
        }
    }
}

</style>


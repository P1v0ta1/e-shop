<script setup>  


const toplist = [
    {id : 1,tag:'数码',title:'学习-办公-娱乐高性能平板',pic_url:'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg',desp:'高通cpu 16G内存 12寸',ori_pri:'2455.00',sale_pri:'1999.00',remains:'5'},
    {id : 2,tag:'儿童用具',title:'舒适温馨乌龟玩偶',pic_url:'/images/top2.jpg',desp:'毛绒玩偶',ori_pri:'55.00',sale_pri:'29.00',remains:'30'},
    {id : 3,tag:'家具',title:'100%桑蚕丝被',pic_url:'/images/top1.jpg',desp:'6A级桑蚕长丝',ori_pri:'455.00',sale_pri:'399.00',remains:'1'},
    {id : 4,tag:'防伪',title:'我爸得了MVP',pic_url:'images/mvp.jpg',desp:'你妈就是躺赢狗！',ori_pri:'9999.00',sale_pri:'2999.00',remains:'1'},
];

</script>



<template>  
    <div class="home-top">
        <h3>热卖推荐</h3>
        <div class ="content" >
            <van-card v-for="item in toplist":key="item.id"
                :num="item.remains"
                :tag="item.tag"
                :price="item.sale_pri"
                :desc="item.desp"
                :title="item.title"
                :thumb="item.pic_url"
                :origin-price="item.ori_pri"
                />
        </div>
    </div>

</template>


<style lang="scss" scoped>

.home-top{
    h3{
        font-size:20px ;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
        line-height: 30px;
        text-align: left;
        margin: .5em auto;
        background-color: rgb(172, 17, 42);
        color: rgb(243, 179, 17);
    }
    .content{
        :deep(.van-card){
            .van-card__title{
                font-size: 20px;
                line-height: 20px;
            }
        }
    }
}


</style>

                
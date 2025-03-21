<!-- (van-empty) https://vant-ui.github.io/vant/#/zh-CN/empty 参考 -->
             <!-- van-empty用于空状态时的占位 -->

<!-- (router-link)具体操作方法 https://blog.csdn.net/weixin_45667289/article/details/114526437 -->
    <!-- router-link方法指向某个/dir路径 -->
        <!-- 之后在index.js中配置相关path import () from '具体vue页面的路径'-->

<!-- (van-button) https://vant-ui.github.io/vant/#/zh-CN/button 参考-->

<!-- (van-swipe-cell) https://vant-ui.github.io/vant/#/zh-CN/swipe-cell 参考-->
            <!-- 可以左右滑动来展示操作按钮的单元格组件 -->

<!-- (van-checkbox) https://vant-ui.github.io/vant/#/zh-CN/checkbox 参考-->
                <!-- 多选框组件 -->

<!-- (van-image) https://vant-ui.github.io/vant/#/zh-CN/image 参考-->
                <!-- 图片组件 -->

<!-- (van-stepper) https://vant-ui.github.io/vant/#/zh-CN/stepper 参考-->
                <!-- 步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字 -->
<template>
    <div class="cart">
        <div class="container">
            <van-empty  
                description="购物车目前还没有商品"
                v-show="productList.length === 0"
            >
            <!-- 在 Vue.js 开发中，router-link 是一个非常重要的组件，它允许用户通过点击链接在具有路由功能的应用程序中进行导航 -->
                <router-link :to="{ name: 'category'}" > <!-- 指向index.js中配置的category路径 -->
                    <van-button>去购物</van-button>
                </router-link>
            </van-empty>
            <!-- 购物车列表 -->
            <div v-for="item in productList" :key="item.id" class="list">
                <van-swipe-cell>
                    <!-- 复选框 -->
                    <div class="checkbox">
                        <van-checkbox :name="item" v-model="item.check" />
                    </div>
                    <!-- 商品图片 -->
                    <div class="image">
                        <van-image width="50" height="50" :src="item.picture" />
                    </div>
                    <!-- 商品信息 -->
                    <div class="info">
                        <div>{{  item.name }}</div>
                        <div class="bottom">
                            <div class="price">
                                <span>¥</span>{{ item.price }}
                            </div>
                            <van-stepper
                                v-model="item.stock"
                                theme="round"
                                button-size="22"
                                disable-input 
                            />
                        </div>
                    </div>
                    <!-- 右滑删除按钮 -->
                    <template #right>
                        <van-button 
                         square text="删除"
                         type="danger" 
                         class="delete-button"
                         @click="onDelete(item.id)"
                         />
                    </template>
                </van-swipe-cell>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.delete-button {
    height: 100%;
}

.cart{
    margin: 0.3rem;
    padding: 0.05rem 0 3rem 0;
    .container{
        margin-top: 0.8rem;
        .list{
            position: relative;
            height: 5rem;
            box-shadow: 0 0 5px #ccc;
            border-radius: 10px;
            margin-bottom: 0.8rem;
        }
        //复选框
        .checkbox{
            position: absolute;
            top:50%;
            left: 0.2rem;
            transform: translate(0,-50%);
        }
        .image{
            position: absolute;
            top: 50%;
            left: 2rem;
            transform: translate(0,-50%);
        }
        .info{
            height: 5rem;
            display: flex;
            justify-content: space-around;
            padding: 0 1rem 0 6rem;
            align-items: center;
        }
        .bottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .price{
                color: red;
                font-size: 20px;
                line-height: 22px;
                height: 22px;
                margin-right: 0.5rem;
            }
        }
    }
}
</style>

<script setup>
import { ref } from 'vue';

const productList = ref([
    {
        id: 1,
        category_id: 1,
        description: '维生素ABC',
        name: '橘子',
        picture: '/images/product1.png',
        price: '100.00',
        stock: 20,
        check: true,
    },
    {
        id: 2,
        category_id: 1,
        description: '维生素ABC',
        name: '橘子',
        picture: '/images/product2.png',
        price: '200.00',
        stock: 30,
        check: false,
    },
    {
        id: 3,
        category_id: 1,
        description: '维生素ABC',
        name: '橘子',
        picture: '/images/product3.png',
        price: '300.00',
        stock: 40,
        check: false,
    },
    {
        id: 4,
        category_id: 1,
        description: '维生素ABC',
        name: '橘子',
        picture: '/images/product4.png',
        price: '400.00',
        stock: 60,
        check: false,
    }
]);

//右滑删除功能
const onDelete = (id) => {
    productList.value.forEach((item, index) => {   //foreach遍历回调item里面的所有value
        if(item.id === id){
            productList.value.splice(index, 1); //splice()用于删除 将对于index的值调整为1
        }
    })
}
</script>
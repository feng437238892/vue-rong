<template>
	<div class="index nav">
		  <head-top :title="msg"></head-top>
		  <ul>
			<li class="btns">首页</li>
			<li class="btns" @click="evt_to">菜单</li>
			<li class="btns" @click="evt_order">订单</li>
			<li class="btns">
			 <!-- <router-link to="/pages/fix/index?a=2222">定位</router-link> -->
			 <router-link :to="{name:'fix',params:{a:11222}}">定位</router-link>
		   </li>
			<li class="btns" @click="evt_user">用户</li>
			<li class="btns" @click="evt_reg('/pages/register/register?password=123456')">注册</li>

		</ul>
		 <div class="content">
		 	<h2>vuex</h2>
		 	 <p>{{$store.state.count}}</p>
		 	 <!-- <button @click="add()"></button> -->
		 	 <!-- <p>{{message}} 单价:<span style="color:blue">{{price}}</span></p> -->
		 	 <!-- <button @click="addOne()">add one</button> -->
		 	 <!-- <button @click="minusOne">minus one</button>    -->
		 </div>
		 <div class="product" @click="evt_product">商品详情</div>
		 <div class="product">demo
             <input placeholder="输入框" @input="evt_demo"></input>
             <h2>{{msg1}}</h2>
		 </div>

		 <div class="cart" @click="evt_cart('/pages/cart/cart')">购物车页面</div>
	</div>
</template>
<script>
	// import {mapActions} from ' vuex';
	import headTop from '@/components/head/head';
	export default{
		name:'index',
		data(){
			return{
               msg:'首页',
               message:'banana',
               price:15,
               msg1:''
			}
		},
		components:{
		   headTop	
		},
		methods:{
			evt_to(){
              this.$router.push('/pages/menu/menu?show=true')
			},
			evt_demo(e){
				// console.log(e,"2222")
				this.msg1 = e.target.value;
				if(this.msg1.length>5){
					// console.log()
				  this.$router.push('/pages/demo/demo?val='+this.msg1)
				}
				console.log(this.msg1.length)
              // 
			},
			evt_order(){
				this.$router.push({
					name:'order',
					params:{
						id:'123',
						is_show:true
					}
				})
			},
			evt_user:function(){
				var _this = this;
				_this.$router.push({
					path:'/pages/user/index',
					query:{
						userName:'Nicholas',
						job:'码农',
						age:27
					}
				})
			},
			evt_reg:function(link){
				this.$router.push(link)
			},
			evt_product:function(){
                this.$router.push({
                	path:'/pages/product/product',
                	query:{
                		type:'product',
                		product_id:'233'
                	}
                })
			},
			evt_cart:function(link){
				this.$router.push(link)
			}
			// ...mapActions([
			// 	'add'
			// ])
		},
		beforeCreate(){
           console.log('index','实例刚刚被创建')
        },
        created(){
           console.log('index','实例创建完毕')
        },
        mounted(){
        	console.log('index','模版挂在完毕')
        },
        beforeMoudt(){
            console.log('index','模版挂载之前')
        },
        beforeUpdate(){
        	console.log('index','数据更新之前')
        },
        updated(){
        	console.log('index','数据更新完毕')
        },
        beforeDestroy(){
          console.log('index','实例销毁之前')
        },
        destroyed(){
          console.log('index','实例销毁完毕')
        },
	}
</script>
<style scoped lang="less">
	  ul,li{
	  	list-style: none;
	  	margin: 0;
	  	padding: 0;
	  }
	  .index{
	  	width:10rem;
	  	ul{
	  		padding:10px 20px;
	  		display: flex;
	  		justify-content: space-between;
	  		li{
	  			font-size: 16px;
	  			font-weight: bold;
	  			color:#f00;
	  			margin-left:20px;
	  		}
	  		li:first-child{
	  			margin-left: 0;

	  		}
	  	}
	  	.content{
	  		text-align: center;
	  		font-size: 18px;
	  	}
	  	button{
	  		font-size: 18px;
	  		color:#333;
	  	}
	  	.product{
	  		font-size: 20px;
	  		color:#333;
	  		text-align: center;
	  	}
	  }
	  .cart{
	  	font-size:16px;
	  	text-align: center;
	  }
</style>

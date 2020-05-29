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
		 <div class="cart" @click="evt_login('/pages/login/login')">登录页面</div>


		<el-row>
		  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>

		<el-row>
		  <el-button>默认按钮</el-button>
		  <el-button type="primary">主要按钮</el-button>
		  <el-button type="success">成功按钮</el-button>
		  <el-button type="info">信息按钮</el-button>
		  <el-button type="warning">警告按钮</el-button>
		  <el-button type="danger">危险按钮</el-button>
		</el-row>
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
			beforeRouteEnter(to, from, next) {
			    console.log(this, 'beforeRouteEnter'); // undefined
			    console.log(to, '组件独享守卫beforeRouteEnter第一个参数');
			    console.log(from, '组件独享守卫beforeRouteEnter第二个参数');
			    console.log(next, '组件独享守卫beforeRouteEnter第三个参数');
			    next(vm => {
			      //因为当钩子执行前，组件实例还没被创建
			      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
			      console.log(vm);//当前组件的实例
			    });
			 },
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
			},
			evt_login:function(val){
				this.$router.push(val)
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

	  .el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #d3dce6;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	  }
</style>

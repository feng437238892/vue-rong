<template>
	<div class="menus">
		<head-top :title="title" goback="true"></head-top>
		<h2>菜单组件</h2>
		<p v-if="show">测试路由传参</p>
		<input type="text" v-model="firstipt" placeholder="请输入">
		<p>{{firstipt}}</p>
		<input type="text" @input="handleInput($event)" v-model="menuName">
		<div v-if="is_img">
			<img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" alt="">
		</div>
        <p>{{menuName}}</p>
        <h2>状态管理</h2>
        <div class="content">
        	<p>{{$store.state.data_list.message}}价格:<span>{{$store.state.data_list.price}}元</span></p>
            <button @click="addone()">改变</button>
            <!-- <button @click="modifyTxt()">操作数据</button>
            <p>{{value}}</p> -->
        </div>
        
	</div>
</template>
<script> 
	import headTop from '@/components/head/head'
	import {mapActions,mapGetters} from 'vuex'
	export default{
		name:'menus',
		data(){
			return{
				title:'菜单',
				show:false,
				msg:'默认值',
				firstipt:'原来',
				is_img:false,
				menuName:''
			}
		},
		components:{
		  headTop	
		},
		methods:{
           handleInput(e){
           	if(e.target.value!=''){
           		// this.is_img = !this.is_img
           		this.is_img = true
           	}
           	console.log(e.target.value,"12121")
           },
           modifyTxt(){
             // this.$store.dispatch('modifyTips',this.value)
           },
           ...mapActions([
              'addone'
           	])
		},
		computed:mapGetters([
          'data_list'
		]),
		mounted(){
			this.show = this.$route.query.show;
			// console.log(this.$route.query.show)
		}
	}
</script>
<style scoped lang="less">
	  h2{
	  	text-align: center;
	  }
	  p{
	  	text-align: center;
	  }
	  input{
	  	outline: none;
	  	font-size: 14px;
	  	color:#f00;
	  	padding:5px 10px;
	  	border:1px solid #eee;
	  	margin-left: 20px;
	  }
	  img{
	  	width:10rem;
	  	height:200px;
	  	margin-top: 20px;
	  }
	  .content{
	  	font-size: 18px;
	  	color:#333;
         span{
         	color:#f00;
         }
	  }
	  button{
	  	width:8rem;
	  	margin:10px auto;
	  	height:45px;
	  	background:#f78;
	  	display: block;
	  	border:none;
	  	font-size: 16px;
	  	color:#fff;
	  	outline: none
	  }
</style>
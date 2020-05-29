<template>
	<div class="demo">
		<head-top title="demo" goback="true"></head-top>
		<h2>demo组件</h2>
		<div>{{value}}</div>
		<div>
			 <input placeholder="输入框" @input="evt_product"></input>
             <h2>{{msg}}</h2>
		</div>
	</div>


	
</template>
<script>
	import headTop from '@/components/head/head'
	export default{
		name:'demo',
		data(){
			return{
              value:'',
              msg:''
			}
		},
		components:{
			headTop
		},
		methods:{
           evt_index(){
           	this.$router.push('/pages/index')
           },
           evt_product(e){
                this.msg = e.target.value;
				if(this.msg.length>5){
				  this.$router.push('/pages/product/product?val='+this.msg)
			  }
           }
		},
		mounted(){
			console.log(this.$route.query,"2222")
			this.value = this.$route.query.val;
		}
	}
</script>
<style scoped lang="less">
	
</style>
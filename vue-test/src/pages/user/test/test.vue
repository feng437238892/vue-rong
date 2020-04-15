<template>
	<div class="test">
		 <p>
		 	名字:<span>{{msg.name}}</span>
		 	<!-- 名字:<span>{{msg}}</span> -->
		 </p>
		  <p>
		 	年龄:<span>{{msg.age}}</span>
		 </p>
	</div>
</template>
<script>
	import But from '@/assets/js/eventBut'
	export default{
		name:'test',
		data(){
			return{
                msg:{
                	name:'默认值',
                	age:0

                }
			}
		},
		methods:{
		},
		mounted(){
			var _this = this;
			But.$on('getTest',function(data){
                _this.msg = data;
                console.log(_this.msg)
			})
		}
	}
</script>
<style scoped lang="less">
	 .test{
	 	text-align: center;
	 	font-size: 18px;
	 	margin-top: 20px;
	 	span{
	 		color:#f00;
	 	}
	 }
</style>
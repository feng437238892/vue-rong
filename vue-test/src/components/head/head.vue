<template>
	<div class="heads">
		<div class="head">
			 <span class="go_back" v-show="goback" @click="evt_go"></span>{{title}}
		</div>
		<div class="head_helper"></div>
	</div>
</template>
<script>
	export default{
		name:'heads',
		data(){
           return{

           }
		},
		props:['title','goback'],
        methods:{
          evt_go:function(){
          	this.$router.go(-1)
          }	
        },
        beforeCreate(){
           console.log('head','实例刚刚被创建')
        },
        created(){
           console.log('head','实例创建完毕')
        },
        mounted(){
        	console.log('head','模版挂在完毕')
        },
        beforeMoudt(){
            console.log('head','模版挂载之前')
        },
        beforeUpdate(){
        	console.log('head','数据更新之前')
        },
        updated(){
        	console.log('head','数据更新完毕')
        },
        beforeDestroy(){
          console.log('head','实例销毁之前')
        },
        destroyed(){
          console.log('head','实例销毁完毕')
        },

	}
</script>
<style type="text/css">
	
</style>
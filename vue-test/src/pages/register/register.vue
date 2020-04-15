<template>
	<div class="register">
		<head-top :title="msg" goback="true"></head-top>
		<div class="register-content">
		     <input type="text" :value="password">
		</div>
		<div class="content">
            <button @click="modifyTxt()">操作数据</button>
            <p>{{value}}</p>
            <p>{{getTxt}}</p>
            <button @click="increment()">名称</button>
        </div>
	</div>
</template>
<script>
	import headTop from '@/components/head/head'
	export default{
		name:'register',
		data(){
			return{
              msg:'注册',
              password:'f437238892',
              value:'这是修改后的值',
              // getTxt:''
              name:'Nicholas'
			}
		},
		components:{
			headTop
		},
		methods:{
            modifyTxt:function(){
            	this.$store.commit('modifyTips',this.value)
            },
            increment(){
                    this.$store.commit("updateUserInfo", 'nick')
            }        
		},
		computed:{
            getTxt(){
            	return this.$store.state.testTxt.tips
            },
		},
		mounted(){
			this.password = this.$route.query.password
			console.log(this.$route.query)
		}
	}
</script>
<style scoped lang="less">
     .register{
     	width:10rem;
       .register-content{
          margin:20px;
          input{
          	width:200px;
          	// height:20px;
          	padding: 5px 10px;
          	font-size: 16px;
          	border:1px solid #eee;

          }
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
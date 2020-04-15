<template>
	<div class="user">
		<head-top title="个人中心" goback="true"></head-top>
		<div class="user_content">
			<div class="usr_title">用户信息</div>
			<ul>
				<li>姓名:{{pagedata.userName}}</li>
				<li>工作:{{pagedata.job}}</li>
				<li>年龄:{{pagedata.age}}</li>
			</ul>
		</div>
		<div class="login1" @click="evt_showmodal('pappe')" >弹窗</div>
		<login v-if="showlogin" @showLogin="showLogin" :payapps="paymentapps" ></login>
    <coupon @getParent="getParent"></coupon> 
    <p v-if="pageDta">{{pageDta}}</p>  
    <test-top></test-top>  
    <div class="content">
      <h2>vuex</h2>
       <p>{{$store.state.count}}</p>
       <button @click="add()">+</button>
       <button @click="reduce()">-</button>
       <div class="show" @click="show()">显示</div>
       <div class="footer" v-if="showFooter">
         底部导航栏
       </div>
       <p>{{message}} 单价:<span style="color:blue">{{price}}</span></p> 
       <button @click="addone()"></button> 
       <!-- <button @click="add()"></button> -->
       <!-- <p>{{message}} 单价:<span style="color:blue">{{price}}</span></p> -->
       <!-- <button @click="addOne()">add one</button> -->
       <!-- <button @click="minusOne">minus one</button>    -->
     </div>	
	</div>
</template>
<script>
	import login from '@/pages/user/login/login'
  import coupon from '@/pages/user/coupon/coupon'
  import headTop from '@/components/head/head'
	import testTop from '@/pages/user/test/test'
  import {mapActions,mapGetters} from 'vuex'
	export default{
		name:'user',
		data(){
			return{
              pagedata:{},
              showlogin:false,
              paymentapps:{
              	balance:{
              		      description: "账户余额描述",
              			    display_name: "账户余额支付",
                        name: "余额支付"
              	},
              	cppay:{
              		    description: "信任付支付描述",
              		    display_name: "信任付 支付方式",
                      name: "信任付"
              	},
              	offline:{
              		    description: "线下支付描述",
        					    display_name: "线下支付",
        					    name: "线下支付"
              	}
              
              },
              pageDta:false,
              price:15,
              message:'banana'

			}
		},
		components:{
			headTop,
			login,
      coupon,
      testTop
		},
		methods:{
            evt_showmodal:function(pappe){
            	this.showlogin = true;
            },
            showLogin:function(msg){
            	this.showlogin = msg;
                console.log(msg,"---2-2-2")
            },
            getParent:function(data){
               this.pageDta = data;
               console.log(this.pageDta)
            },
            ...mapActions([
             'add','reduce','show'
              ])

		},
    computed:mapGetters([
          'showFooter'
    ]),
		// mounted(){
		// 	this.pagedata = this.$route.query;
		// 	console.log(this.pagedata,"pagedatapagedatapagedata")
		// },
    beforeCreate(){
           console.log('user','实例刚刚被创建')
    },
    created(){
       console.log('user','实例创建完毕')
    },
    mounted(){
      this.pagedata = this.$route.query;
      console.log('user','模版挂在完毕')
    },
    beforeMoudt(){
        console.log('user','模版挂载之前')
    },
    beforeUpdate(){
      console.log('user','数据更新之前')
    },
    updated(){
      console.log('user','数据更新完毕')
    },
    beforeDestroy(){
      console.log('user','实例销毁之前')
    },
    destroyed(){
      console.log('user','实例销毁完毕')
    },
	}
</script>
<style scoped lang="less">
     .user{
     	width:10rem;
     }
     .user_content{
     	padding:1rem;
     	.usr_title{
             font-size: 18px;
	    }
	    ul>li{
	    	font-size: 16px;
	    	color:#f00;
	    	margin:10px;
	    }
     }
     .login1{
     	width:8rem;
     	height:45px;
     	margin:0 auto;
     	font-size: 14px;
     	line-height: 45px;
     	background:#e3c;
     	color:#fff;
     	text-align: center;
     }
     .content{
        text-align: center;
        font-size: 18px;
      }
      button{
        font-size: 18px;
        color:#333;
      }
</style>
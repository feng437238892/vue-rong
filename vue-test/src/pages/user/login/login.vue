<template>
	<div class="login checkout_payapp quick-modal active" @click="evt_hidemodal">
		 <div class="modal-section">
		 	 <div class="modal-hd">
                <span>选择支付方式</span>
            </div>
            <div class="modal-bd">
                <div class="weui-panel">
                    <ul class="weui-panel__bd">
                    	<li v-for="(payapp,index) in payapps" :key="index">
                    		<div class="weui-cell">
                    			 <div class="weui-cell__bd">
                                    {{payapp.name}}
                                   
                                </div>
                    		</div>
                    		
                    	</li>
                    </ul>
                </div>
            </div>
		 </div> 	
	</div>
</template>
<script>
	export default{
		name:'login',
		data(){
			return{
              
			}
		},
		methods:{
			evt_hidemodal(){
				console.log('222')
				this.$emit('showLogin',this.showlogin = false)
			}
		},
		props:['payapps'],
		 beforeCreate(){
           console.log('login','实例刚刚被创建')
        },
        created(){
           console.log('login','实例创建完毕')
        },
        mounted(){
        	console.log('login','模版挂在完毕')
        },
        beforeMoudt(){
            console.log('login','模版挂载之前')
        },
        beforeUpdate(){
        	console.log('login','数据更新之前')
        },
        updated(){
        	console.log('login','数据更新完毕')
        },
        beforeDestroy(){
          console.log('login','实例销毁之前')
        },
        destroyed(){
          console.log('login','实例销毁完毕')
        },

	}
</script>
<style scoped>
	
</style>
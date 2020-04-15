<template>
	<div class="coupon">
		<div>优惠券</div>
		<div @click="sendLogin">向test传值</div>
		<div @click="sendParent">向父组件传值</div>
	</div>
	</div>
</template>
<script>
	import But from '@/assets/js/eventBut'
	export default{
		name:'coupon',
		data(){
			return{
                msg:{
                   name:'冯梦荣',
                   age:27
               },
               pageDta:'子元素向父元素传值'
			}
		},
		methods:{
			sendLogin(){
				But.$emit('getTest',this.msg)
			},
			sendParent(){
				this.$emit('getParent',this.pageDta)
			}
		}
	}
</script>
<style scoped lang="less">
	 .coupon{
	 	text-align: center;
	 	font-size: 18px;
	 	margin-top: 20px;
	 }
</style>
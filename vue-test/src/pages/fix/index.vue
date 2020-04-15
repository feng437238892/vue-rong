<template>
	<div class="fix">
		<head-top :title="title" goback="true"></head-top>
		<h2>我是定位页面</h2>
        <!-- <button @click="show1">show</button> -->
        <!-- <transition name="fade"> -->
        <!-- <transition name="fold"> -->
        <!-- <transition 
		    name="fade"
		    enter-class="fade-in-enter"
		    enter-active-class="fade-in-active"
		    leave-class="fade-out-enter"
		    leave-active-class="fade-out-active"
		  >
        	<p v-show="show">hello</p>
        </transition> -->
        <button v-on:click="show = !show">
		    Toggle
		  </button>
		  <transition name="fade">
		    <p v-if="show">hello</p>
		  </transition>
			</div>
		</template>
<script>
	import headTop from '@/components/head/head'
	export default{
		name:'fix',
		data(){
			return{
              title:'定位页面',
              show:true
			}
		},
		components:{
           headTop
		},
		methods:{
	        show1(){
              this.show = !this.show
	        }
		},
		mounted(){
			console.log(this.$route.params)
		}
	}
</script>
<style lang="less" scoped>
      .fix{
      	width:10rpx;
      }
	  h2{
	  	text-align: center;
	  	margin-top: 20px;
	  }
	  p{
	  	text-align: center;
	  	font-size: 24px;
	  	color:#f00;
	  }
	  button{
	  		font-size: 18px;
	  		color:#333;
	  	}
	  	// 接着为过渡类名添加规则
		// &.fade-enter-active, &.fade-leave-active{
		//   transition: all 0.5s ease     
		// }
		// &.fade-enter, &.fade-leave-active{
		//   opacity: 0 
		// }


		// .fold-enter-active {
		// 	  animation-name: fold-in;
		// 	  animation-duration: .5s;
		// 	}
		// .fold-leave-active {
		//   animation-name: fold-out;
		//   animation-duration: .5s;
		// }
		// @keyframes fold-in {
		//   0% {
		//     transform: translate3d(0, 100%, 0);
		//   }
		//   50% {
		//     transform: translate3d(0, 50%, 0);
		//   }
		//   100% {
		//     transform: translate3d(0, 0, 0);
		//   }
		// }
		// @keyframes fold-out {
		//   0% {
		//     transform: translate3d(0, 0, 0);
		//   }
		//   50% {
		//     transform: translate3d(0, 50%, 0);
		//   }
		//   100% {
		//     transform: translate3d(0, 100%, 0);
		//   }
		// }
		// &.fade-in-active, &.fade-out-active{
		//   transition: all 0.5s ease     
		// }
		// &.fade-in-enter, &.fade-out-active{
		//   opacity: 0 
		// }
		.fade-enter-active, .fade-leave-active {
		  transition: opacity .5s;
		}
		.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		  opacity: 0;
		}
</style>
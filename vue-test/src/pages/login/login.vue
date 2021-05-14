<template>
	<div class="login1">
		<h2>登录页面</h2>
		<input type="text" v-model="name"><br>
        <input type="password" v-model="psd"><br>
        <input type="button" value="登陆" @click="clickHandler">
	</div>
</template>
<script>
	export default{
		name:'login',
		data(){
			return{
				 name: "",
                 psd: "",
                 test:234
			}
		},
		methods:{
			 clickHandler() {
                var user = [{
                    name: this.name,
                    pass: this.psd
                }];
                // 登陆
                localStorage.setItem("user", JSON.stringify(user));
                // 数据存储王弼跳转博客页面
                // 编程时跳转
                //此时跳转值博客页面，但是该组件的auth属性值为true,
				//所以页面还在当前页面，需要在全局守卫中做判断
                this.$router.push({
                    name: "index"
                });
            }
		}
	}
</script>
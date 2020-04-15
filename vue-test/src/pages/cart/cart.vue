<template>
	<div class="cart">
		<head-top title="购物车" goback="true"></head-top>
		<h2>购物车页面</h2>
		<p @click="addd(obj)">{{obj.d}}</p>
        <p @click="adde(obj)"> {{obj.e}}</p>
        <p>{{student.name}}</p>
        <p>{{student.job}}</p>
        <p>{{student.age}}</p>
        <button @click="add()">增加</button>
        <div>
        	 {{info.msg}}
            name值：{{info.name}}
            价格:{{info.price}}
        </div>
        <button @click="del">删除</button>
	</div>
</template>
<script>
	import headTop from '@/components/head/head'
	export default{
		name:'cart',
		data(){
			return{
                obj:{

                },
                student:{
                	 name:'冯梦荣',
                	 job:'码农'
                },
                info:{
                	id:1,
                	price:15,
                	name:"套餐A"
                }
			}
		},
		components:{
			headTop
		},
		methods:{
            addd:function(item){
	            item.d = item.d+1
	            console.log('item--',item);
            },
            adde:function(item) {
                item.e = item.e + 1;
                console.log('item--',item);
            },
            add:function(){
            	// this.student.age = 27;
            	this.$set(this.student,'age',27)
            	// console.log(this.student)
            },
            del:function(){
                this.$delete(this.info,'price')
            }
		},
		mounted(){
			this.obj = {d: 0};
			this.$set(this.obj,'e',0)
	        // this.obj.e = 0;
	        console.log('after--', this.obj);
		}
	}
</script>
<style scoped>
	  .cart{
	  	width: 10rem;
	  	font-size: 16px;
	  	text-align: center;
	  }
	  button{
	  	font-size: 16px;
	  	color: #f00;
	  }
</style>
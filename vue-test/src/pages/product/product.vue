<template>
	<div class="product">
		<head-top goback="true" :title="title"></head-top> 
		<div class="name">
			城市:{{cityName}}
			<div @click="chang" style="margin-top: 20px;">改变</div>
			<h2>{{food.name}}</h2>
			<div @click="chang1" style="margin-top: 20px;">改变1</div>
			<h3>{{obj.job}}</h3>
			<div @click="chang2" style="margin-top: 20px;">改变2</div>
		</div>
		<h1 ref="h1Ele">这是H1</h1>
		<input type="text" ref="input1">
		<button @click="add()">添加</button>
		<input type="text" v-model="lastName" placeholder="姓">
        <input type="text" v-model="firstName" placeholder="名">
        <h2>拼接：{{fullName}}</h2>
        <span>{{threeOne}}</span> 
        <div>
        <input type="text" v-model="one" placeholder="-">
        <input type="text" v-model="two" placeholder="二">
        <div>结果:{{three}}</div>

        <input type="text" v-model="num" placeholder="数字">
        <input type="text" v-model="num1" placeholder="数字1">
        <p>{{fource}}</p>
        </div>
        <h2>new:{{names}}</h2>
        <h2>new1:{{names1}}</h2>
        <div @click="newO">点击海边</div>
         <div class="hello">
		    <div id="example">
		      <p>firstName值: {{firstName1}}</p>
		      <p>fullName值: {{fullName1}}</p>
		    </div>
		    <button @click="ClickCeshi">点击改变fullName的值</button>
		  </div>
	</div>
</template>
<script>
	import headTop from '@/components/head/head'
	export default{
		name:'product',
		data(){
			return{
                title:'商品详情',
                cityName:'shanghai',
                food:{
                	name:'冰激凌'
                },
                obj:{
                	job:'码农'
                },
                firstNum:1,
                secondNum:33,
                // firstName:'Foo',
                // lastName:'Bar'
                 firstName:'',
                 lastName:'',
                 one:'foo one',
                 two:'foo two',
                 num:'23',
                 num1:'24',
                 firstName1:'fgggg',
                 names:'Nicholas'
                 // three:"foo Bar"
			}
		},
		components:{
			headTop
		},
		methods:{
           chang(){
           	  this.cityName = '武汉'
           },
           chang1(){
           	this.food.name = "棒棒糖"
           },
           chang2(){
           	this.obj.job = "程序员"
           },
           add(){
           	this.$refs.input1.value="冯梦荣";
           	console.log(this.$refs.h1Ele.innerText)
           },
           ClickCeshi(){
           	this.fullName1 = "fullName的新值"
           },
           newO(){
           	this.names = '冯梦荣'
           }

		},
		mounted(){
			// console.log(this.$route.query)
		},
		watch:{
			cityName:{
				handler(newVal,oldVal){
                  // console.log(newVal,"newVal")
                  // console.log(oldVal,"oldVal")
				},
				immediate:true
			},
			//第一种方式：监听整个对象，每个属性值变化都会执行handler
			//注意属性值发生变化的时候，handler获取的newVal和oldVal是一样的
			food:{
				handler(newVal,oldVal){
					 // console.log(newVal,"newVal111")
      //                console.log(oldVal,"oldVal1111")
				},
				immediate:true,
				deep:true
			},
			//第二种方式:监听对象的某个属性，被监听的属性值发生变化就会执行函数
			//函数执行后，获取的newVal和oldVal是不同的
			'obj.job'(newVal,oldVal){
				    console.log(newVal,"newVal222")
                    console.log(oldVal,"oldVal222")
			}
			
		},
		computed:{
			 // fullName:function () {
    //             return this.lastName + '·' + this.firstName;
    //         }
			fullName:{
				 get(){
				 	return this.firstName + ''+this.lastName
				 	console.log("32323232")
				 },
				 set(val){
                    console.log(val,"fullName")
			        const names = val.split(' ');
			        console.log(names)
			        this.firstName = names[0];
			        this.lastName = names[1];
				 }
			},
            threeOne(){
            	return Number(this.firstNum) +Number(this.secondNum) 
            },
            three:{
			      get:function(){
			      	// console.log("122121")
			      	 var val = this.one+" "+this.two;
			      	  // console.log(val,"vallll")
			          return val;
			      },
			      set:function(newValue){
                      console.log(newValue,"threethree")
			          var names=newValue.split('');
			          this.firstName=names[0];
			          this.lastName=names[names.length-1]
			      }
			},
			fource(){
				return this.num+''+this.num1

			},
			fullName1:{
				get(){
                  console.log('调用了getter属性')
                  return '***' + this.firstName1 + '***'
				},
				set(newValue){
					console.log('调用了settter属性')
			        console.log(newValue)
			        this.firstName1 = newValue

				}
			},
			names1:{
				get(){
					return '测试-'+this.names;
				},
				set(newVal){
					this.names = newVal;
				}
			}
			// threeName:{
			// 	get:()=>{
			// 		return this.firstName+this.secondName
			// 	},
			// 	set:()=>{
			// 		this.firstName = val[0]
			// 		this.secondName = val[1]
			// 	}
			// }
		}
	}
</script>
<style scoped>
	.name{
		margin-top: 50px;
		font-size: 16px;
		text-align: center
	}
	button{
		display: block;
		background: #f00;
		color: #fff;
		font-size: 14px;
		padding: 10px;
		text-align: center;
		width: 7rem;
		border: none;
		margin: 10px auto;
		outline: none;
	}
	input{
		/* display: block; */

	}
</style>
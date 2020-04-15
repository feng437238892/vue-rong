<template>
	<div class="order">
		<head-top title="订单页面" goback="true"></head-top> 
		<div v-if="is_show" class="order_list">
			 <div class="title">{{pagedata.title}}</div>
			 <div v-for="(item,index) in subjects">
			 {{item.name}}
			</div>
		</div>
        <li v-for="item1 in arr" class="img_list">
        	 <p>{{item1.title}}</p>
        	 <img v-image-preview :src="item1.img" alt="">
        </li>
        <div style="margin-top: 300px;" class="preview">
		    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1483033257,4287748004&fm=27&gp=0.jpg" alt="" preview preview-text="描述">
		    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg"  alt="" preview="1" preview-text="描述文字">
		    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1060387669,1498970204&fm=27&gp=0.jpg"  alt="" preview="1" preview-text="描述文字">
		    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&fm=27&gp=0.jpg"  alt="" preview="2" preview-text="描述文字">
		</div>
	</div>
</template>
<script>
	import headTop from '@/components/head/head';
	export default{
		name:'order',
		data(){
			return{
				is_show:false,
				pagedata:{
                 title:'菜单列表'
				},
				subjects:[
                       {name:'章三',age:18},
                       {name:'李四',age:24},
                       {name:'往五',age:27}
				],
				arr:[
			         {img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg',title:'图片1'},
			         {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585808661991&di=6e4d093fec59259fb29a84c3e06847d6&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F21%2F09%2F01200000026352136359091694357.jpg',title:'图片2'},
			         {img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1060387669,1498970204&fm=27&gp=0.jpg',title:'图片2'}
			       ]
			}
		},
		methods:{
			
		},
		components:{
         headTop
		},
		mounted(){
          this.is_show = this.$route.params;
		},
		created(){
			// var _this = this;
			//     _this.is_show = _this.$route.params;
			// var _this = this;
			//     _this.axios({
			//       url:'/v2/movie/top250',
			//       method:'get'
			//     },function(res){
			//        console.log(res.data,"44444");
			//       _this.pagedata = res.data;
			//       _this.subjects = _this.pagedata.subjects;
			//        console.log(_this.subjects,"55555")
		 //        })

			// console.log(this.$route.params,"11111")
		}

	}
</script>
<style lang="less" scoped>
	.order_list{
		 text-align: center;
		 margin-top: 20px;
		 font-size:20px;
	}
	.img_list{
		padding:20px;
		img{
			width:100px;
			height:100px;
	   }
	}
	.preview{
		img{
			width:100%;
			height:200px;
		}
	}
	
</style>
<template>
	<view class="container">
		     <view class="marginTop1"></view>
			 <title-input :sign=true title="商品名称" placeholder="请输入商品全称"></title-input>
			 <view class="marginTop2"></view>
			 <title-input :sign=false title="副标题" placeholder="描述商品的特色、卖点、优惠等"></title-input>
			 <view class="marginTop1"></view>
			 <select-item :sign=true title="分类" placeholder="桶装水"></select-item>
	         <view class="marginTop2"></view>
	         <select-item :sign=true title="规格" placeholder="添加产品规格"></select-item>
			 <view class="marginTop1"></view>
			 <select-img-item :sign=true title="商品头像"></select-img-item>
			 <view class="marginTop2"></view>
			 <select-img-item :sign=true title="商品图片"></select-img-item>
			 <view class="marginTop2"></view>
			 <select-img-item :sign=false title="商品详情"></select-img-item>
			 <view class="marginTop1"></view>
			 <title-input :sign=true title="价格" placeholder="输入销售价格" tip="¥"></title-input>
			 <view class="marginTop2"></view>
			 <title-input :sign=false title="原价" placeholder="输入原销售价格" tip="¥"></title-input>
			 <view class="marginTop2"></view>
			 <title-input :sign=true title="成本价" placeholder="输入进货价格" tip="¥"></title-input>
			 <view class="marginTop2"></view>
			 <title-input :sign=true title="库存" placeholder="输入库存数量"></title-input>
			 
			  <view class="marginTop1"></view>
			 <select-item :sign=false title="促销" placeholder="添加促销活动"></select-item>
			  <view class="marginTop2"></view>
			 <select-item :sign=false title="服务" placeholder="2小时送货"></select-item>
			  <view class="marginTop2"></view>
			 <select-item :sign=false title="标签" placeholder="选择商品标签" @click="selectLabel"></select-item>
			 <view class="marginTop1"></view>
			 <select-item :sign=false title="上架店铺" @click="selectShop"></select-item>
			 <view class="add_info">
				 <view class="add">添加</view>
			 </view>
	</view>
</template>

<script>
	import titleInput from '../component/titleInput.vue';
	import selectItem from '../component/selectItem.vue';
	import selectImgItem from '../component/selectImgItem.vue';
	export default{
		components: {
		    titleInput,
			selectItem,
			selectImgItem
		},
		data(){
			return{
				rightIcon:'../../static/common/icon_right.png'
			}
		},
		methods:{
			selectShop(){
				uni.navigateTo({
					url: 'shopList'
				});
			},
			selectLabel(){
				uni.navigateTo({
					url: 'labelList'
				});
			}
		}
	}
	
</script>

<style lang="scss">
	.container{
		background: #f5f5f5;
		width: 100%;
		.marginTop1{
			margin-top: 20upx;
		}
		.marginTop2{
			margin-top: 1upx;
		}
		.add_info{
			display: flex;
			width: 100%;
			flex-direction: row;
			justify-content: center;
			background: #f5f5f5;
			padding-top: 60upx;
			padding-bottom: 60upx;
			.add{
				width:660upx;
				height:81upx;
				background:rgba(255,82,85,1);
				border-radius:3upx;
				font-size:36upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(255,255,255,1);
				line-height:81upx;
				text-align: center;
			}
			
		}
	}
</style>

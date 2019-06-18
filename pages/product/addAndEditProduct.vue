<template>
	<view class="container">
        <view class="name_info">
			<view class="sign">*</view>
			<view class="name">商品名称</view>
			<input type="text" value="" placeholder="请输入商品全称" class='name_input'/>
		</view>
		<view class="sub_name_info">
			<view class="sub_name">副标题</view>
			<input type="text" value="" placeholder="描述商品的特色、卖点、优惠等" class='sub_name_input'/>
		</view>
		<view class="category_info">
			<view class="category_info_front">
				<view class="sign">*</view>
				<view class="category_tile">分类</view>
				<view class="category_input">桶装水</view>
			</view>
			<image v-bind:src="rightIcon" class="right_icon"></image>
		</view>
		<view class="specifications_info">
			<view class="specifications_info_front">
				<view class="sign">*</view>
				<view class="specifications_tile">规格</view>
				<view class="specifications_input">添加产品规格</view>
			</view>
			<image v-bind:src="rightIcon" class="right_icon"></image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				rightIcon:'../../static/common/icon_right.png'
			}
		}
	}
	
</script>

<style lang="scss">
	.container{
		background: #f5f5f5;
		width: 100%;
		height: 100%;
		flex: 1;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		.name_info{
			width:100%;
			height:101upx;
			background: white;
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 20upx;
			.sign{
				font-size: 14upx;
				color: red;
				margin-left: 24upx;
			}
			.name{
				font-size:30upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:42upx;
				margin-left: 24upx;
			}
			.name_input{
				font-size:30upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(204,204,204,1);
				line-height:42upx;
				margin-left: 20upx;
			}
		}
		.sub_name_info{
			width:100%;
			height:94upx;
			background: white;
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 1upx;
			.sub_name{
				font-size:30upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:42upx;
				margin-left: 58upx;
			}
			.sub_name_input{
				width:451upx;
				height:28upx;
				font-size:30upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(204,204,204,1);
				line-height:42upx;
				margin-left: 20upx;
			}
		}
		.category_info{
			width:100%;
			height:83upx;
			background: white;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin-top: 20upx;
			.category_info_front{
				display: flex;
				flex-direction: row;
				align-items: center;
				.sign{
					font-size: 14upx;
					color: red;
					margin-left: 24upx;
				}
				.category_tile{
					font-size:30upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(51,51,51,1);
					line-height:42upx;
					margin-left: 24upx;
				}
				.category_input{
					font-size:30upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(204,204,204,1);
					line-height:42upx;
					margin-left: 20upx;
				}
			}
			.right_icon{
				width:18upx;
				height:30upx;
				margin-right: 24upx;
			}
			
		}
		.specifications_info{
			width:100%;
			height:83upx;
			background: white;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin-top: 1upx;
			.specifications_info_front{
				display: flex;
				flex-direction: row;
				align-items: center;
				.sign{
					font-size: 14upx;
					color: red;
					margin-left: 24upx;
				}
				.specifications_tile{
					font-size:30upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(51,51,51,1);
					line-height:42upx;
					margin-left: 24upx;
				}
				.specifications_input{
					font-size:30upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(204,204,204,1);
					line-height:42upx;
					margin-left: 20upx;
				}
			}
			.right_icon{
				width:18upx;
				height:30upx;
				margin-right: 24upx;
			}
			
		}
	}
</style>

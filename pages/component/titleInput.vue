<template>
	 <view class="name_info">
		<view v-if="sign==true" class="sign">*</view>
		<view v-else class="no_sign">*</view>
		<view class="name">{{title}}</view>
		<view class="tip">{{tip}}</view>
		<input type="text" value="" :placeholder="placeholder" class='name_input'/>
	</view>
</template>

<script>
	export default {
		props:{
			sign:{
			  type: Boolean,
			  default: false
		    },//标记
			title:String,
			placeholder:String ,
			tip:String,
		}
	}
</script>

<style lang="scss">
	.name_info{
		width:100%;
		height:101upx;
		background: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		.sign{
			font-size: 14upx;
			color: red;
			margin-left: 24upx;
		}
		.no_sign{
			font-size: 14upx;
			color: white;
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
		.tip{
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
			flex: 1
		}
	}
</style>

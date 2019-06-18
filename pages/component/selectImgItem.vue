<template>
	<view class="category_info">
		<view class="category_info_front">
			<view v-if="sign==true" class="sign">*</view>
			<view v-else class="no_sign">*</view>
			<view class="category_tile">{{title}}</view>
		</view>
		<view class="right_info">
			<image v-bind:src="defaltIcon" class="defalt_icon"></image>
			<image v-bind:src="rightIcon" class="right_icon"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			sign:{
			  type: Boolean,
			  default: false
		    },//标记
			title:String,
			placeholder:String 
		},
		data(){
			return{
				rightIcon:'../../static/common/icon_right.png',
				defaltIcon:'../../static/common/defalt_icon.png'
			}
		}
	}
</script>

<style lang="scss">
	.category_info{
		width:100%;
		height:150upx;
		background: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.category_info_front{
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
			.category_tile{
				font-size:30upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:42upx;
				margin-left: 24upx;
			}
			 
		}
		.right_info{
			display: flex;
			flex-direction: row;
			align-items: center;
			.right_icon{
				width:18upx;
				height:30upx;
				margin-right: 24upx;
			}
			.defalt_icon{
				width:101upx;
				height:101upx;
				margin-right:10upx
			}
		}
		
		
	}
</style>

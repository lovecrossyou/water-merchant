<template>
	<view class="category_info" @click="select">
		<view class="category_info_front">
			<view v-if="sign==true" class="sign">*</view>
			<view v-else class="no_sign">*</view>
			<view class="category_tile">{{title}}</view>
			<view class="category_input">{{placeholder}}</view>
		</view>
		<image v-bind:src="rightIcon" class="right_icon"></image>
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
			placeholder:String ,
			click:Function
		},
		data(){
			return{
				rightIcon:'../../static/common/icon_right.png'
			}
		},
		methods:{
			 select(){
				 this.$emit("click");
			 }
		}
	}
</script>

<style lang="scss">
	.category_info{
		width:100%;
		height:83upx;
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
</style>

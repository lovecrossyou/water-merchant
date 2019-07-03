<template>
	<view class="main">
		<view class="head-sep"></view>
		<view class="security-item" @click="turnToChangePayPassword">
			<view class="security-item-text">修改支付密码</view>
			<image 
			class="right-arrow-img"
			src="http://qnimage.xiteng.com/right_icon@2x.png"></image>
		</view>
		<view class="security-item" @click="turnToPswCheckcode">
			<view class="security-item-text">重置支付密码</view>
			<image 
			class="right-arrow-img"
			src="http://qnimage.xiteng.com/right_icon@2x.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			turnToChangePayPassword: function() {
				uni.navigateTo({
					url: "/pages/me/account/payPassword?isPswChange=" + 1,
				})
			},
			turnToPswCheckcode: function() {
				uni.navigateTo({
					url: "/pages/me/account/pswCheckcode"
				})
			},
		}
	}
	
	
</script>

<style scope>
	.main {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #eeeeee;
	}
	
	.head-sep {
		width: 100%;
		height: 20upx;
		background-color: #eeeeee;
		border-bottom: solid 1upx #E5E5E5;
	}
	
	.security-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 88upx;
		background-color: #ffffff;
		border-bottom: solid 1upx #E5E5E5;
	}
	
	.security-item-text {
		color: #333333;
		font-size: 30upx;
		margin-left: 30upx;
	}
	
	.right-arrow-img {
		width: 14upx;
		height: 24upx;
		margin-right: 24upx;
	}
</style>

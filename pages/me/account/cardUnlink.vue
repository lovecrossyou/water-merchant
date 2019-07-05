<template>
	<view class="main">
		<view class="head-sep"></view>
		<view class="item">
			<view class="card"></view>
			<view class="unlink-btn">解除绑定</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.main {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #eeeeee;
	}
	
	.head-sep {
		width: 100%;
		height: 30upx;
		background-color: #eeeeee;
	}
	
	.item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 110upx;
		background-color: #ffffff;
	}
	
	.card {
		color: #333333;
		font-size: 32upx;
		margin-left: 30upx;
	}
	
	.unlink-btn {
		height: 110upx;
		color: #F64A4A;
		font-size: 28upx;
		margin-right: 30upx;
	}
</style>

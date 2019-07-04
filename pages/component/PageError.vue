<template>
	<view class="main">
		<view class="error-attention-text">出错啦！</view>
		<view class="reload-btn" @click="reloadPageData">
			<view class="reload-btn-text">重新加载</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			reloadPageData: function() {
				this.$emit('reload');
			}
		}
	}
</script>

<style scoped>
	.main {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #eeeeee;
	}

	.error-attention-text {
		color: rgba(153, 153, 153, 1);
		font-size: 28upx;
	}

	.reload-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200upx;
		height: 60upx;
		background-color: #007AFF;
		margin-top: 20upx;
	}

	.reload-btn-text {
		color: #ffffff;
		font-size: 30upx;
		line-height: 60upx;
	}
</style>

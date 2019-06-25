<template>
	<view class="main">
		<view class="add-card-btn" @click="turnToAddCardDetail()">
			<view class="add-text">+ 添加银行卡</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		methods: {
			turnToAddCardDetail() {
				uni.navigateTo({
					url: './bankCardList',
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #333333;

		.add-card-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-left: 40upx;
			margin-right: 40upx;
			margin-top: 40upx;
			height: 190upx;
			border: 1upx solid rgba(229, 229, 229, 1);
			border-radius: 5px;
			
			.add-text {
				color: #D9D9D9;
				font-size: 34upx;
			}
		}
	}
</style>

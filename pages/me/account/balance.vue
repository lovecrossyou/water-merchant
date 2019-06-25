<template>
	<view class="main">
		<view class="header">
			<view class="label-img">
				<view class="img-text">¥</view>
			</view>
			<view class="label-text">资金余额</view>
			<view class="price-text">¥200.00</view>
		</view>
		<view class="action-btn">
			<view class="btn-text">提现</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.main {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #eeeeee;

		.header {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 260upx;
			background-color: #7C7D82;

			.label-img {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 58upx;
				height: 58upx;
				background-color: #ffffff;
				border-style: solid;
				border-radius: 29upx;
				border-color: #ffffff;
				border-width: 0upx;

				.img-text {
					color: #7C7D82;
					font-size: 38upx;
				}
			}

			.label-text {
				margin-top: 23upx;
				color: #ffffff;
				font-size: 26upx;
			}

			.price-text {
				color: #ffffff;
				font-size: 40upx;
			}
		}

		.action-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 80upx;
			margin-left: 30upx;
			margin-right: 30upx;
			height: 80upx;
			background-color: #ffffff;
			border-style: solid;
			border-color: #B1B1B1;
			border-radius: 8upx;
			border-width: 1upx;

			.btn-text {
				color: #999999;
				font-size: 36upx;
			}
		}
	}
</style>

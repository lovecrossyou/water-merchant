<template>
	<view class="item-back">
		<view class="item">
			<image class="bank-icon"></image>

			<view class="item-content">
				<view class="bank-name-type">
					<view class="bank-name">交通银行</view>
					<view class="card-type">储蓄卡</view>
				</view>
				<view class="card-No">*** **** **** 5646</view>
			</view>
		</view>

	</view>
</template>

<script>
</script>

<style scoped>
	.item-back {
		padding: 0upx 30upx 30upx 30upx;
	}

	.item {
		display: flex;
		flex-direction: row;
		height: 260upx;
		background-color: #3F63AC;
		border: solid 0upx #ffffff;
		border-radius: 14upx;
	}

	.bank-icon {
		width: 68upx;
		height: 68upx;
		margin-top: 42upx;
		margin-left: 35upx;
		background-color: #87CEEB;
		border: solid 0upx #ffffff;
		border-radius: 34upx;
	}

	.item-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 160upx;
		margin-top: 42upx;
		margin-left: 20upx;
	}

	.bank-name-type {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 68upx;
	}

	.bank-name {
		color: #ffffff;
		font-size: 32upx;
	}

	.card-type {
		color: #ffffff;
		font-size: 24upx;
	}

	.card-No {
		color: #ffffff;
		font-size: 40upx;
	}
</style>

<template>
	<view class="item-back">
		<view class="item" :style="{'background-color':bankCard.bgColor}">
			<image class="bank-icon" :src="bankCard.bankIcon"></image>

			<view class="item-content">
				<view class="bank-name-type">
					<view class="bank-name">{{bankCard.bankName}}</view>
					<view class="card-type">{{bankCard.bankCardType}}</view>
				</view>
				<view class="card-No">*** **** **** {{bankCard.lastBankCardNum}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			bankCard: {},
		}
	}
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

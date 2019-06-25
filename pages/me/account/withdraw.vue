<template>
	<view class="main">

		<view class="card-choose">
			<image class="bank-icon"></image>
			<view class="bank-name-No">交通银行(2445)</view>
			<image class="right-arrow"></image>
		</view>

		<view class="withdraw-amount">
			<view class="label-text">提现数额</view>
			<textarea class="amount-input" placeholder="请填写提现数额" @input="getComemnt" />
			</view>
		
		<view class="balance-attention">
			<view class="balance">余额100.14元</view>
			<view class="withdraw-all">全部提现</view>
		</view>
		
		<view class="action-btn">
			<view class="btn-text">提 现</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.main {
		width: 100%;
		height: 100%;
		background-color: #eeeeee;
		position: absolute;

		.card-choose {
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 100%;
			height: 120upx;
			margin-top: 30upx;
			background-color: #ffffff;
			// border-top: solid 1upx #DDDDDD;
			// border-bottom: solid 1upx #DDDDDD;

			.bank-icon {
				width: 80upx;
				height: 80upx;
				margin-left: 30upx;
				background-color: skyblue;
			}

			.bank-name-No {
				display: flex;
				flex: 1;
				margin-left: 20upx;
				color: #333333;
				font-size: 32upx;
			}

			.right-arrow {
				width: 18upx;
				height: 30upx;
				margin-right: 30upx;
				background-color: #CC2636;
			}
		}

		.withdraw-amount {
			display: flex;
			flex-direction: row;
			align-items: center;
			widows: 100%;
			height: 140upx;
			margin-top: 30upx;
			background-color: #ffffff;
			border-bottom: solid 1upx #DDDDDD;

			.label-text {
				margin-left: 30upx;
				color: #333333;
				font-size: 32upx;
			}

			.amount-input {
				display: flex; 
				flex: 1;
				height: 36upx;
				margin-left: 30upx;
				font-size: 30upx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(153, 153, 153, 1);
				line-height: 36upx;
			}
		}

		.balance-attention {
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 100%;
			height: 70upx;
			background-color: #ffffff;
			// border-bottom: solid 1upx #DDDDDD;

			.balance {
				margin-left: 30upx;
				color: #999999;
				font-size: 26upx;
			}

			.withdraw-all {
				color: #FF5255;
				font-size: 26upx;
			}
		}

		.action-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			margin: 80upx 30upx 0upx 30upx;
			background-color: #FF5255;
			border: solid 1upx #FF5255;
			border-radius: 3upx;

			.btn-text {
				color: #ffffff;
				font-size: 36upx;
			}
		}
	}
</style>

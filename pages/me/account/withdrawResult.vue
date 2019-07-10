<template>
	<view class="main">
		<view class="process">
			<image class="process-img"
			       src="http://qnimage.xiteng.com/withdraw_process@3x.png"></image>
			<view class="process-detail">
				<view class="process-detail-item">
					<view class="item-title">提交提现申请，等待处理</view>
					<view class="item-subtitle">{{createTime.substring(5,16)}}</view>
				</view>
				<view class="process-detail-item">
					<view class="item-title" :style="{color: '#999999'}">到账时间</view>
					<view class="item-subtitle">T+3</view>
				</view>
			</view>
		</view>
		
		<view class="withdraw-detail">
			<view class="detail-content">
				<view class="detail-text">提现金额：{{rmbMount}}元</view>
				<view class="detail-text">交易单号：{{orderNo}}</view>
				<view class="detail-text">交易时间：{{createTime}}</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				createTime: '',
				orderNo: '',
				rmbMount: '',
			}
		},
		onLoad: function(option) {
			this.createTime = option.createTime;
			this.orderNo = option.orderNo;
			this.rmbMount = option.rmbMount;
		}
	}
</script>

<style scoped>
	.main {
		width: 100%;
		height: 100%;
		background-color: #eeeeee;
		position: absolute;
	}

	.process {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 280upx;
		background-color: #ffffff;
		margin-top: 30upx;
		border-top: solid 1upx #dddddd;
		border-bottom: solid 1upx #dddddd;
	}
	
	.process-img {
		width: 45upx;
		height: 180upx;
		margin-left: 30upx;
	}
	
	.process-detail {
		display: flex;
		flex-direction: column;
		height: 280upx;
	}
	
	.process-detail-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 140upx;
		margin-left: 20upx;
	}
	
	.item-title {
		color: #ff5354;
		font-size: 32upx;
	}
	
	.item-subtitle {
		color: #999999;
		font-size: 26upx;
		margin-top: 5upx;
	}

	.withdraw-detail {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 250upx;
		background-color: #ffffff;
		margin-top: 30upx;
		border-top: solid 1upx #dddddd;
		border-bottom: solid 1upx #dddddd;
	}
	
	.detail-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 170upx;
		margin-left: 30upx;
	}

	.detail-text {
		color: #333333;
		font-size: 30upx;
	}
</style>

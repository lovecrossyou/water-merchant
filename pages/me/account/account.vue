<template>
	<view class="accountMain">
		<view class="accountWrapper">
			<view class="leftWrapper">
				<image class="left_icon" src="../../../static/account/account_rmb_icon.png"></image>
				<view class="left_text">资金余额</view>
				<view class="left_price">￥ {{rmbMount/100|decimals}}</view>
			</view>
			<view class="rightWrapper">
				<image class="right_icon" src="../../../static/account/account_xtb_icon.png"></image>
				<view class="right_text">喜币账户</view>
				<view class="right_price">
					<image class="xtbIcon" src="../../../static/account/xtb_icon.png"></image>
					<view class="xtbText">{{xtbMount+0}}</view>
				</view>
			</view>
		</view>
		<view class="waterticketSales" @click="gowaterticketSales">
			<image class="img" src="../../../static/account/me_icon_ticket.png"></image>
			<view class="text">水票销售</view>
			<image class="right_arrow" src="../../../static/common/icon_right.png"></image>
		</view>
		<view class="accountBill" @click="goaccountdetail">
			<image class="img" src="../../../static/account/account_detail.png"></image>
			<view class="text">账单明细</view>
			<image class="right_arrow" src="../../../static/common/icon_right.png"></image>
		</view>
		<view class="balance" @click="checkBankCardList()">
			<image class="img" src="../../../static/account/withdraw_icon.png"></image>
			<view class="text">提现</view>
			<image class="right_arrow" src="../../../static/common/icon_right.png"></image>
		</view>
		
		<view class="accountBill" @click="turnToBankCardList">
			<image class="img" src="../../../static/account/bankcard_icon.png"></image>
			<view class="text">银行卡</view>
			<image class="right_arrow" src="../../../static/common/icon_right.png"></image>
		</view>
		<view class="balance" @click="turnToPasswordSecurity">
			<image class="img" src="../../../static/account/paypassword_icon.png"></image>
			<view class="text">密码设置</view>
			<image class="right_arrow" src="../../../static/common/icon_right.png"></image>
		</view>
	</view>
</template>

<script>
	import api from "@/util/api.js"
	export default {
		data() {
			return {
				rmbMount: '',
				xtbMount: '',
			}
		},
		filters: {
			decimals: function(value) {
				return value.toFixed(2)
			}
		},
		methods: {
			gowaterticketSales() {
				uni.navigateTo({
					url: "waterticketSales"
				})
			},
			goaccountdetail(){
				uni.navigateTo({
					url: "accountdetail"
				})
			},
			getUserAccount() {
				api.getAccountInfo({}).then((result)=> {
					this.rmbMount = result.rmbMount;
					this.xtbMount = result.xtbMount;
					console.log("11111",this.xtbMount)
				})
			},
			checkBankCardList() {
				let that = this;
				api.getUserBankCardList({}).then((result) => {
					if (result.length > 0) {
						this.turnToWithdraw();
					} else {
						uni.showModal({
							title: '提示',
							content: '您还没有绑定银行卡，是否去绑定？',
							success: function(res) {
								if (res.confirm) {
									console.log('用户点击确定');
									that.turnToAddBankCardDetail();
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
				})
			},
			turnToWithdraw() {
				uni.navigateTo({
					url: "/pages/me/account/withdraw"
				})
			},
			turnToAddBankCardDetail() {
				uni.navigateTo({
					url: "/pages/me/account/bankCardList"
				})
			},
			turnToBankCardList: function() {
				uni.navigateTo({
					url: "/pages/me/account/bankCardList"
				})
			},
			turnToPasswordSecurity: function() {
				uni.navigateTo({
					url: "/pages/me/account/passwordSecurity"
				})
			}
		},
		onReady() {
			this.getUserAccount();
		}
	}
</script>

<style lang="less">
	.accountMain {
		width: 100%;
		height: 100%;
		position: fixed;
		background: #eeeeee;

		.accountWrapper {
			display: flex;
			align-items: center;
			width: 100%;
			height: 272upx;
			background: #7C7D82;
			text-align: center;

			.leftWrapper {
				width: 50%;

				.left_icon {
					width: 63upx;
					height: 63upx;
				}

				.left_text {
					font-size: 25upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 25upx;
					margin-top: 15upx;
				}

				.left_price {
					font-size: 42upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 42upx;
					margin-top: 10upx;
				}

			}

			.rightWrapper {
				width: 50%;

				.right_icon {
					width: 63upx;
					height: 63upx;
				}

				.right_text {
					font-size: 25upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 25upx;
					margin-top: 15upx;
				}

				.right_price {
					display: flex;
					margin-top: 10upx;
					justify-content: center;
					align-items: center;
					
					.xtbIcon{
						width: 31upx;
						height: 31upx
					}
					
					.xtbText{
						font-size: 42upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: #FFFFFF;
						line-height: 42upx;
					}
				}
			}
		}

		.waterticketSales {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 104upx;
			margin-top: 24upx;
			background: #FFFFFF;

			.img {
				width: 38upx;
				height: 32upx;
				margin-left: 31upx;
			}

			.text {
				display: flex;
				flex: 1;
				font-size: 33upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 33upx;
				margin-left: 24upx;
			}

			.right_arrow {
				width: 19upx;
				height: 31upx;
				margin-right: 23upx;
			}
		}

		.accountBill {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 104upx;
			margin-top: 24upx;
			background: #FFFFFF;

			.img {
				width: 38upx;
				height: 32upx;
				margin-left: 31upx;
			}

			.text {
				display: flex;
				flex: 1;
				font-size: 33upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 33upx;
				margin-left: 24upx;
			}

			.right_arrow {
				width: 19upx;
				height: 31upx;
				margin-right: 23upx;
			}
		}

		.balance {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 104upx;
			background: #FFFFFF;
			border-top: 1upx solid rgba(232, 232, 232, 1);

			.img {
				width: 38upx;
				height: 32upx;
				margin-left: 31upx;
			}

			.text {
				display: flex;
				flex: 1;
				font-size: 33upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 33upx;
				margin-left: 24upx;
			}

			.right_arrow {
				width: 19upx;
				height: 31upx;
				margin-right: 23upx;
			}
		}
	}
</style>

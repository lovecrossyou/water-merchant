<template>
	<view class="main">

		<view class="card-choose" @click="turnToBankCardList()">
			<image class="bank-icon" :src="firstCard.bankIcon"></image>
			<view class="bank-name-No">{{firstCard.bankName}}({{firstCard.lastBankCardNum}})</view>
			<image class="right-arrow"></image>
		</view>

		<view class="withdraw-amount">
			<view class="label-text">提现数额</view>
			<input class="amount-input" type="digit" placeholder="请填写提现数额" placeholder-style="color:#999999" v-model="withdrawParam.rmbMount" @blur="getWithdrawAmount">
		</view>

		<view class="balance-attention">
			<view class="balance">余额{{rmbMount}}元，</view>
			<view class="withdraw-all" @click="withdrawAll()">全部提现</view>
		</view>

		<view class="action-btn">
			<view class="btn-text" @click="withdrawDidClicked">提 现</view>
		</view>
		
		<Modal v-show="true"></Modal>
	</view>
</template>

<script>
	import api from "@/util/api.js"
	import Modal from "../components/Modal.vue"
	export default {
		components: {
			Modal,
		},
		data() {
			return {
				rmbMount: 0,
				showPswModal: false,
				firstCard: {
					bankName: '',
					bankIcon: '',
					lastBankCardNum: ''
				},
				withdrawParam: {
					rmbMount: '',
					payPassword: '',
				}
			}
		},
		methods: {
			getFistBankCard() {
				api.getUserBankCardList({}).then((result) => {
					this.firstCard = result[0];
				})
			},
			getRmbAmount() {
				api.getAccountInfo({}).then((result) => {
					this.rmbMount = result.rmbMount;
					console.log(this.rmbMount);
				})
			},
			turnToBankCardList() {
				uni.navigateTo({
					url: "./bankCardList"
				})
			},
			getWithdrawAmount: function(event) {
				if (event.target.value > this.rmbMount) {
					uni.showToast({
						icon: "none",
						title: "超过可提现余额"
					})
					this.withdrawParam.rmbMount = this.rmbMount;
					console.log(this.withdrawParam.rmbMount);
				} else {
					this.withdrawParam.rmbMount = event.target.value;
				}

			},
			withdrawAll() {
				if (this.rmbMount === 0) {
					uni.showToast({
						icon: "none",
						title: "无可提现余额"
					})
				}
				this.withdrawParam.rmbMount = this.rmbMount;
			},
			withdrawDidClicked:function () {
				console.log('11111');
				this.showPswModal = true;
			}
		},
		onReady() {
			this.getRmbAmount();
			this.getFistBankCard();
		}
	}
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

			.bank-icon {
				width: 80upx;
				height: 80upx;
				margin-left: 30upx;
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
				color: #333333;
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

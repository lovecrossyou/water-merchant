<template>
	<view class="main">

		<block v-if="pageLoadingDone==='loading'">
			<PageLoading></PageLoading>
		</block>

		<block v-else-if="pageLoadingDone==='error'">
			<PageError @reload="reload"></PageError>
		</block>

		<block v-else-if="pageLoadingDone==='done'">
			<view class="card-choose" @click="turnToBankCardList()">
				<image class="bank-icon" :src="firstCard.bankIcon"></image>
				<view class="bank-name-No">{{firstCard.bankName}}({{firstCard.lastBankCardNum}})</view>
				<image class="right-arrow" src="http://qnimage.xiteng.com/right_icon@2x.png"></image>
			</view>

			<view class="withdraw-amount">
				<view class="label-text">提现数额</view>
				<input class="amount-input" type="digit" placeholder="请填写提现数额" placeholder-style="color:#999999" v-model="rmbMount"
				 @blur="getWithdrawAmount">
			</view>

			<view class="balance-attention">
				<view class="balance">余额{{rmbBalance}}元，</view>
				<view class="withdraw-all" @click="withdrawAll()">全部提现</view>
			</view>

			<view class="action-btn-none" :class="actionAble?'action-btn-able':'action-btn-none'">
				<view class="btn-text" @click="checkHasPayPassword">下一步</view>
			</view>

			<passwordModal 
			:show="showPswModal" 
			:rmbBalance="rmbBalance"
			@close="closePasswordModal" 
			@passwordForget="turnToPswCheckcode"
			@withdraw="withdrawLaunch"></passwordModal>
		</block>
	</view>
</template>

<script>
	import api from "@/util/api.js"
	import PageLoading from "../../component/PageLoading.vue"
	import PageError from "../../component/PageError.vue"
	import passwordModal from "../components/passwordModal.vue"
	export default {
		components: {
			PageLoading,
			PageError,
			passwordModal,
		},
		data() {
			return {
				pageLoadingDone: 'loading',
				bankcardLoad: false,
				userAmountLoad: false,
				
				showPswModal: false,
				actionAble: false,
				
				rmbMount: '',
				rmbBalance: 0.00,
				firstCard: {
					bankName: '',
					bankIcon: '',
					lastBankCardNum: ''
				},
			}
		},
		methods: {
			reload: function() {
				this.pageLoadingDone = 'loading';
				this.getRmbAmount();
				this.getFistBankCard();
			},
			withdrawLaunch: function(password) {
				let params = {
					payPassword: password,
					rmbMount: this.rmbMount
				}
				this.closePasswordModal();
				console.log(params);
				return
				api.rmbWithdraw(params).then((result)=> {
					console.log(result);
					uni.showToast({
						icon: "none",
						title: "提现申请已成功提交"
					})
					uni.navigateTo({
						url: '/pages/me/account/withdrawResult'
					})
				}).catch((error)=> {
					
				})
			},
			getFistBankCard: function() {
				api.getUserBankCardList({}).then((result) => {
					this.firstCard = result[0];
					this.bankcardLoad = true
					this.pageLoadingDone = this.bankcardLoad && this.userAmountLoad ? "done" : "loading"
				}).catch((error) => {
					this.pageLoadingDone = 'error';
				})
			},
			getRmbAmount: function() {
				api.getAccountInfo({}).then((result) => {
					console.log(result);
					this.rmbBalance = parseFloat(result.rmbMount/100);
					console.log(this.rmbBalance);
					this.userAmountLoad = true;
					this.pageLoadingDone = this.bankcardLoad && this.userAmountLoad ? "done" : "loading"
					
				}).catch((error) => {
					this.pageLoadingDone = 'error';
				})
			},
			getWithdrawAmount: function(event) {
				if (event.target.value.length===0) {
					this.actionAble = false;
				} else {
					this.actionAble = true;
				}
				if (event.target.value > this.rmbBalance) {
					uni.showToast({
						icon: "none",
						title: "超过可提现余额"
					})
					this.rmbMount = this.rmbBalance;
					console.log(this.rmbMount);
				} else {
					this.rmbMount = event.target.value;
				}

			},
			withdrawAll: function() {
				if (this.rmbBalance===0 || this.rmbBalance==="0") {
					uni.showToast({
						icon: "none",
						title: "无可提现余额"
					})
				}
				this.rmbMount = this.rmbBalance;
			},
			showPasswordModal: function() {
				this.showPswModal = true;
			},
			closePasswordModal: function() {
				this.showPswModal = false;
			},
			checkHasPayPassword: function() {
				if (this.rmbMount.length===0) {
					uni.showToast({
						icon: "none",
						title: "请填写提现余额"
					})
					return;
				}  if (this.rmbMount==="0"||this.rmbMount===0) {
					uni.showToast({
						icon: "none",
						title: "提现余额必须大于0"
					})
					return;
				}
				let that = this;
				api.checkHasPayPassword({}).then((result) => {
					if (result) {
						this.showPasswordModal();
					} else {
						uni.showModal({
							title: '提示',
							content: '您还没有设置支付密码，是否去设置？',
							success: function(res) {
								if (res.confirm) {
									that.turnToPswFirstSet();
								} else if (res.cancel) {
								}
							}
						});
					}
				})
			},
			turnToBankCardList: function() {
				uni.navigateTo({
					url: "/pages/me/account/bankCardList"
				})
			},
			turnToPswCheckcode: function() {
				uni.navigateTo({
					url: "/pages/me/account/pswCheckcode"
				})
			},
			turnToPswFirstSet: function() {
				uni.navigateTo({
					url: '/pages/me/account/payPassword?isPswChange=' + 0 +'&isFirstSet' + 1,
				})
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

		.action-btn-none {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			margin: 80upx 30upx 0upx 30upx;
			// background-color: #FF5255;
			background-color: #999999;
			border: solid 0upx #FF5255;
			border-radius: 3upx;
		}
		
		.action-btn-able {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			margin: 80upx 30upx 0upx 30upx;
			background-color: #FF5255;
			// background-color: #999999;
			border: solid 0upx #FF5255;
			border-radius: 3upx;
		}
		
		.btn-text {
			color: #ffffff;
			font-size: 36upx;
		}
	}
</style>

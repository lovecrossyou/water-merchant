<template>
	<view v-if="show" class="password-modal-back">
		<view class="password-modal">
			<view class="head-attention">
				<view class="close-btn" @click="close">
					<image class="close-btn-img" 
					       src="http://qnimage.xiteng.com/btn_close@2x.png"></image>
				</view>
				<view class="attention-text-back">
					<view class="attention-text">请输入支付密码</view>
				</view>
			</view>

			<view class="amount-back">
				<view class="amout-label">提现</view>
				<view class="amount">¥{{rmbBalance}}</view>
			</view>

			<view class="password-input-back">
				<block v-for="(i,index) in passwordHolder" :key="index">
					<view class="password-item">
						<view class="password-hide-text" v-if="passwordStr.length>index">●</view>
					</view>
				</block>
			</view>
			<input type="number" class="password-input" maxlength="6" focus :cursor="passwordStr.length-1" v-model="passwordStr" @input="pswInput"/>


			<view class="passwordForget-btn">
				<view class="pswdForget-btn-text" @click="passwordForget">忘记密码？</view>
			</view>

			<view class="withdraw-btn" @click="withdrawApplication">
				<view class="withdraw-btn-text">提 现</view>
			</view>
		</view>

	</view>
</template>
<script>
	export default {
		props: {
			show: false,
			rmbBalance: 0,
		},
		data() {
			return {
				passwordHolder: '012345',
				passwordStr: '',
			}
		},
		methods: {
			close: function() {
				this.$emit('close');
			},
			pswInput: function(event) {
				console.log(event.target.value);
			},
			passwordForget: function() {
				// this.close();
				this.$emit('passwordForget');
			},
			withdrawApplication: function() {
				console.log(this.passwordStr);
				if (this.passwordStr.length !== 6) {
					uni.showToast({
						icon: "none",
						title: "请正确输入密码"
					})
					return;
				}
				this.$emit('withdraw', this.passwordStr);
				this.passwordStr = '';
			}
		}
	}
</script>

<style scoped>
	.password-modal-back {
		z-index: 10;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.password-modal {
		width: 540upx;
		height: 500upx;
		background-color: #ffffff;
		border: solid 0upx #ffffff;
		border-radius: 15upx;
	}

	.head-attention {
		display: flex;
		flex-direction: row;
		height: 80upx;
		background-color: #ffffff;
		border-top: solid 0upx #ffffff;
		border-bottom: solid 1upx #E5E5E5;
		border-top-left-radius: 15upx;
		border-top-right-radius: 15upx;
	}

	.close-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80upx;
		height: 80upx;
		margin-left: 15upx;
	}

	.close-btn-img {
		width: 23upx;
		height: 23upx;
	}

	.attention-text-back {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 350upx;
		height: 80upx;
	}

	.attention-text {
		color: #333333;
		font-size: 30upx;
		font-weight: bold;
	}

	.amount-back {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 540upx;
		height: 112upx;
		margin-top: 30upx;
	}

	.amout-label {
		color: #333333;
		font-size: 28upx;
	}

	.amount {
		color: #333333;
		font-size: 72upx;
		font-weight: bold;
	}

	.password-input {
		z-index: 10;
		width: 480upx;
		height: 80upx;
		margin-top: -80upx;
		margin-left: 30upx;
		color: rgba(255, 255, 255, 0);
	}

	.password-input-back {
		display: flex;
		flex-direction: row;
		width: 480upx;
		height: 80upx;
		margin-top: 30upx;
		margin-left: 30upx;
		border-left: solid 1upx #E5E5E5;
		border-top: solid 1upx #E5E5E5;
		border-bottom: solid 1upx #E5E5E5;
	}

	.password-item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80upx;
		height: 80upx;
		border-right: solid 1upx #E5E5E5;
	}

	.password-hide-text {
		color: #333333;
		font-size: 30upx;
	}

	.passwordForget-btn {
		display: flex;
		justify-content: flex-end;
		margin-top: 10upx;
		margin-right: 10upx;
	}

	.pswdForget-btn-text {
		line-height: 35upx;
		font-size: 28upx;
		color: #007AFF;
	}

	.withdraw-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 400upx;
		height: 80upx;
		margin-top: 13upx;
		margin-left: 70upx;
		background-color: #FF5255;
	}

	.withdraw-btn-text {
		color: #ffffff;
		font-size: 28upx;
	}
</style>

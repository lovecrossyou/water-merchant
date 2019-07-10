<template>
	<view class="main">
		<block v-if="pswChange&&!pswSet&&!pswConfirm">
			<view class="psw-back">
				<view class="attention-text">请输入支付密码</view>

				<view class="password-item-back">
					<block v-for="(i,index) in pswHolder" :key="index">
						<view class="password-item" @click="focusChangeInput">
							<view class="password-hide-text" v-if="oldPayPassword.length>index">●</view>
						</view>
					</block>
				</view>
				<input type="number" class="password-input" maxlength="6" focus :cursor="oldPayPassword.length-1" v-model="oldPayPassword" @input="setInput" />


				<view class="action-btn" @click="turnToPswSet">
					<view class="action-btn-text">下一步</view>
				</view>
			</view>
		</block>

		<block v-else-if="pswSet&&!pswChange&&!pswConfirm">
			<view class="psw-back">
				<view class="attention-text">请设置新的支付密码</view>

				<view class="password-item-back">
					<block v-for="(i,index) in pswHolder" :key="index">
						<view class="password-item" @click="focusSetInput">
							<view class="password-hide-text" v-if="pswSetStr.length>index">●</view>
						</view>
					</block>
				</view>
				<input type="number" class="password-input" maxlength="6" focus :cursor="pswSetStr.length-1" v-model="pswSetStr"
				 @input="setInput" />

				<view class="action-btn" @click="turnToPswConfirm">
					<view class="action-btn-text">下一步</view>
				</view>
			</view>
		</block>

		<block v-else-if="pswConfirm&&!pswChange&&!pswSet">
			<view class="psw-back">
				<view class="attention-text">请再次确认支付密码</view>

				<view class="password-item-back">
					<block v-for="(i,index) in pswHolder" :key="index">
						<view class="password-item" @click="focusConfirmInput">
							<view class="password-hide-text" v-if="pswConfirmStr.length>index">●</view>
						</view>
					</block>
				</view>
				<input type="number" class="password-input" maxlength="6" focus :curosr="pswConfirmStr.length-1" v-model="pswConfirmStr"
				 @input="setInput" />


				<view class="action-btn" @click="passwordComplete">
					<view class="action-btn-text">完 成</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import api from "@/util/api.js"
	export default {
		data() {
			return {
				isPswChange: 0,
				isFirstSet: 0,

				pswChange: false,
				pswSet: false,
				pswConfirm: false,

				pswHolder: '012345',

				pswOld: '',
				pswSetStr: '',
				pswConfirmStr: '',

				checkCode: '',
				oldPayPassword: '',
				payPassword: '',
				phoneNum: '',
			}
		},
		methods: {
			setInput: function(event) {
				console.log(event.target.value);
			},
			turnToPswSet: function() {
				this.pswChange = false;
				this.pswSet = true;
				this.pswConfirm = false;
			},
			turnToPswConfirm: function() {
				this.pswChange = false;
				this.pswSet = false;
				this.pswConfirm = true;
			},
			passwordComplete: function() {
				if (this.pswSetStr !== this.pswConfirmStr) {
					uni.showToast({
						icon: "none",
						title: "请确认两次输入密码一致"
					})
					return;
				}
				let params = {
					phoneNum: this.phoneNum,
					checkCode: this.checkCode,
					oldPayPassword: this.oldPayPassword,
					payPassword: this.pswConfirmStr,
				}
				console.log(params);
				// return;
				if (this.isFirstSet) {
					this.firstSetPayPassword(params);
				} else {
					if (this.isPswChange) {
						this.changePayPassword(params);
					} else {
						this.resetPayPassword(params);
					}
				}
			},
			firstSetPayPassword: function(params) {
				api.setPayPassword(params).then((result) => {
					console.log(result);
				})
			},
			changePayPassword: function(params) {
				api.changePayPassword(params).then((result) => {
					console.log(result);
				})
			},
			resetPayPassword: function(params) {
				api.resetPayPassword(params).then((result) => {
					console.log(result);
				})
			}
		},
		onLoad: function(option) {
			console.log(option);

			this.isPswChange = parseInt(option.isPswChange);
			this.isFirstSet = parseInt(option.isFirstSet);
			this.pswChange = this.isPswChange === 1 ? true : false;
			this.pswSet = this.isPswChange === 0 ? true : false;
			this.phoneNum = option.phoneNum===undefined ? '' : option.phoneNum;
			this.checkCode = option.checkCode===undefined ? '' : option.checkCode;
			console.log(this.isPswChange);
			console.log(this.pswChange + '/' + this.pswSet + '/' + this.pswConfirm);
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
		height: 100%;
		position: absolute;

		.psw-back {
			display: flex;
			flex: 1;
			flex-direction: column;
			align-items: center;
			width: 100%;
			height: 100%;
			background-color: #eeeeee;
			position: absolute;

			.attention-text {
				margin-top: 240upx;
				color: #333333;
				font-size: 30upx;
			}

			.password-input {
				z-index: 10;
				width: 600upx;
				height: 90upx;
				margin-top: -90upx;
				color: rgba(255, 255, 255, 0);
			}

			.password-item-back {
				display: flex;
				flex-direction: row;
				height: 90upx;
				color: rgba(255, 255, 255, 0);
				margin-top: 100upx;
				background-color: #ffffff;
				border-top: solid 1upx #E5E5E5;
				border-left: solid 1upx #E5E5E5;
				border-bottom: solid 1upx #E5E5E5;

				.password-item {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100upx;
					height: 90upx;
					border-right: solid 1upx #E5E5E5;

					.password-hide-text {
						color: #333333;
						font-size: 30upx;
					}
				}
			}

			.action-btn {
				display: flex;
				align-self: stretch;
				justify-content: center;
				align-items: center;
				height: 80upx;
				margin: 80upx 30upx 0upx 30upx;
				background-color: #FF5255;
				
				border: solid 1upx #FF5255;
				border-radius: 3upx;

				.action-btn-text {
					color: #ffffff;
					font-size: 36upx;
				}
			}
		}
	}
</style>

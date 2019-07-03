<template>
	<view class="main">
		<view class="head-sep"></view>
		
		<view class="input-back">
			<input type="number" class="phoneNum-checkcode-input" placeholder="请填写手机号" v-model="phoneNum"/>
		</view>
		
		<view class="input-back">
			<input type="number" class="phoneNum-checkcode-input" placeholder="请填写验证码" v-model="checkCode"/>
			<view class="checkcode-btn-back" @click="getPayPswCheckCode">
				<view class="checkcode-btn">
					<view class="checkcode-text">获取验证码</view>
				</view>
			</view>
		</view>
		
		<view class="action-btn" @click="turnToPayPassword">
			<view class="btn-text">下一步</view>
		</view>
	</view>
</template>

<script>
	import api from "@/util/api.js"
	export default {
		data() {
			return {
				phoneNum: '',
				checkCode: ''
			}
		},
		methods: {
			getPayPswCheckCode: function() {
				if (this.phoneNum.length===0) {
					uni.showToast({
						icon: "none",
						title: "手机号不能为空"
					})
				} else if (this.phoneNum.length>0&&this.phoneNum.length!=11) {
					uni.showToast({
						icon: "none",
						title: "请输入正确的手机号"
					})
				} else {
					api.getPayPswResetCheckCode({phoneNum: this.phoneNum}).then((result)=> {
						if (result.respMsg==="success") {
							uni.showToast({
								icon: "none",
								title: "验证码已发送到手机"
							})
						}
					})
				}
			},
			turnToPayPassword: function() {
				if (this.phoneNum.length===0) {
					uni.showToast({
						icon: "none",
						title: "手机号不能为空"
					})
					return;
				} else if (this.phoneNum.length>0&&this.phoneNum.length!=11) {
					uni.showToast({
						icon: "none",
						title: "请输入正确的手机号"
					})
					return;
				} else if (this.checkCode.length===0) {
					uni.showToast({
						icon: "none",
						title: "请输入正确的验证码"
					})
					return;
				}
				uni.navigateTo({
					url:'/pages/me/account/payPassword?isPswChange=' + 0 + '&phoneNum='+this.phoneNum + '&checkCode='+this.checkCode,
				})
			}
		}
	}
</script>

<style scoped>
	.main {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #eeeeee;
	}
	
	.head-sep {
		width: 100%;
		height: 20upx;
		background-color: #eeeeee;
		border-bottom: solid 1upx #E5E5E5;
	}
	
	.input-back {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100upx;
		background-color: #ffffff;
		border-bottom: #E5E5E5 1upx solid;
	}
	
	.phoneNum-checkcode-input {
		display: flex; 
		flex: 1;
		height: 100upx;
		margin-left: 30upx;
		font-size: 30upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: #333333;
		line-height: 36upx;
	}

	.checkcode-btn-back {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30upx 30upx 30upx 0upx;
		/*       上    右     下    左 */

	}

	.checkcode-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		border-left: 1upx solid #DDDDDD;
	}

	.checkcode-text {
		margin-left: 30upx;
		color: #FF5255;
		font-size: 30upx;
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
	}
	
	.btn-text {
		color: #ffffff;
		font-size: 36upx;
	}
	
</style>

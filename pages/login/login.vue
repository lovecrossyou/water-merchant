<template>
	<view class="loginMain">
		<view class="inputWrapper">
			<view class="phoneNumberWrapper">
				<view class="phoneNumberText">手机号</view>
				<input class="phoneNumberInput" v-model="phonenumber" type="number"/>
			</view>
			<view class="passwordWrapper">
				<view class="passwordText">密&#12288码</view>
				<input class="passwordInput" v-model="password" type="number" password=true/>
			</view>
		</view>
		<view class="forgetPassword">
			<view class="forgetPasswordText" @click="forgetpassword">忘记密码？</view>
		</view>
		<button class="loginBtn" @click="login">登录</button>
		<view class="loginAgreement">
			<view class="agreementLeft">登录即为同意</view>
			<view class="agreementRight">《汇贝软件许可及服务协议》</view>
		</view>
		<view class="openshop">
			<view class="openShopText">还不是汇贝商家 ？</view>
			<view class="openShopBtn">立即开店</view>
		</view>
	</view>
</template>

<script>
	import api from "@/util/api.js"
	export default{
		data(){
			return{
				phonenumber:'',
				password:''
			}
		},
		methods:{
			forgetpassword(){
				uni.navigateTo({
					url:"forgetPassword"
				})
			},
			async login(){
				var isphonenumber = /^1[3-9]+\d{9}$/;
				if(isphonenumber.test(this.phonenumber)){
					console.log("111111111111111")
					var logindata = await api.login({
						phoneNum:this.phonenumber,
						password:this.password
					})
				}
				else{
					uni.showToast({
						title:"请输入正确的手机号",
						duration:1000
					})
				}
			}
		}
		}
</script>

<style lang="less">
	.loginMain {
		width: 100%;
		height: 100%;
		background-color:#EEEEEE;
		position: fixed;

		.inputWrapper {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 177upx;
			margin-top: 39upx;
			background-color: rgba(255,255,255,1);
			

			.phoneNumberWrapper {
				display: flex;
				width: 100%;
				height: 88upx;
				border-bottom: 1upx solid rgba(232,232,232,1);

				.phoneNumberText {
					width: 150upx;
					height: 88upx;
					font-size: 30upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					line-height: 88upx;
					text-align: center;
				}

				.phoneNumberInput {
					display: flex;
					flex: 1;
					height: 88upx;
					font-size: 30upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					line-height: 88upx;
					padding-left: 30upx;
				}
			}
	
				.passwordWrapper{
					display: flex;
					width: 100%;
					height: 88upx;
					

					.passwordText {
						width: 150upx;
						height: 88upx;
						font-size: 30upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						line-height: 88upx;
						text-align: center;
					}

					.passwordInput {
						display: flex;
						flex: 1;
						height: 88upx;
						font-size: 30upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						line-height: 88upx;
						padding-left: 30upx;
					}
				}
		}
	
		.forgetPassword{
			display: flex;
			flex-direction: row-reverse;
			width: 100%;
		
			.forgetPasswordText{
				width:130upx;
				height:25upx;
				font-size:26upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:25upx;
				margin-top: 21upx;
				margin-right: 15upx;
			}
		}
	
		.loginBtn{
			width:92%;
			height:80upx;
			background:rgba(255,82,85,1);
			border-radius:6upx;
			font-size:36upx;
			font-family:PingFang-SC-Medium;
			font-weight:500;
			color:rgba(255,255,255,1);
			line-height:80upx;
			margin-top:80upx; 
		}
	
		.loginAgreement{
			display: flex;
			flex-direction: row;
			width: 100%;
			margin-top: 21upx;
			margin-left: 33upx;
			
			.agreementLeft{
				height:22upx;
				font-size:22upx;
				font-family:HiraginoSansGB-W3;
				font-weight:normal;
				color:#333333;
				line-height:22upx;
			}
			
			.agreementRight{
				height:22upx;
				font-size:22upx;
				font-family:HiraginoSansGB-W3;
				font-weight:normal;
				color:#FF5255;
				line-height:22upx;
			}
		}
	
		.openshop{
			width: 100%;
			position: fixed;
			bottom: 79upx;
			text-align: center;

			.openShopText{
				height:27upx;
				font-size:26upx;
				font-family:MicrosoftYaHei;
				font-weight:400;
				color:#777777;
			}
			
			.openShopBtn{
				width:146upx;
				height:48upx;
				display: inline-block;
				line-height:48upx;
				font-size:26upx;
				font-family:MicrosoftYaHei;
				font-weight:400;
				color:#FF5255;
				border:2upx solid rgba(255,82,85,1);
				border-radius:5upx 5upx 5upx 5upx;
				margin-top: 32upx;
			}
		}
	}
</style>

<template>
	<view class="loginMain">
		<view class="inputWrapper">
			<view class="phoneNumberWrapper">
				<view class="phoneNumberText">手机号</view>
				<input class="phoneNumberInput" />
			</view>
			<view class="passwordWrapper">
				<view class="passwordText">密&#12288码</view>
				<input class="passwordInput" />
			</view>
		</view>
		<view class="forgetPassword">
			<view class="forgetPasswordText">忘记密码？</view>
		</view>
		<button class="loginBtn">登录</button>
		<view class="loginAgreement">
			<view class="agreementLeft">登录即为同意</view>
			<view class="agreementRight">《汇贝软件许可及服务协议》</view>
		</view>
		<view class="openshop">
			<view class="openShopText">还不是汇贝商家?</view>
			<button class="openShopBtn">立即开店</button>
		</view>
	</view>
</template>

<script></script>

<style lang="less">
.loginMain {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background: #E8E8E8;

	.inputWrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 177upx;
		margin-top: 39upx;
		background:rgba(255,255,255,1);

		.phoneNumberWrapper {
			display: flex;
			width: 100%;
			height: 88upx;
			border-bottom: 1upx solid rgba(232,232,232,1);

			.phoneNumberText {
				width: 113upx;
				height: 30upx;
				margin: 30upx 0upx 30upx 37upx;
				box-sizing: border-box;
				font-size: 30upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 40upx;
			}

			.phoneNumberInput {
				display: flex;
				flex: 1;
				height: 30upx;
				margin: 26upx 0upx 30upx 37upx;
				box-sizing: border-box;
				font-size: 30upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 40upx;
			}
		}

		.passwordWrapper {
			display: flex;
			width: 100%;
			height: 88upx;
			

			.passwordText {
				width: 113upx;
				height: 28upx;
				margin: 30upx 0upx 30upx 37upx;
				box-sizing: border-box;
				font-size: 30upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 40upx;
			}

			.passwordInput {
				display: flex;
				flex: 1;
				height: 28upx;
				margin: 26upx 0upx 30upx 37upx;
				box-sizing: border-box;
				font-size: 30upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 40upx;
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
			line-height:30upx;
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
		line-height:30upx;
		margin-top:80upx; 
		padding-top: 23upx;
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
			line-height:34upx;
		}
		
		.agreementRight{
			height:22upx;
			font-size:22upx;
			font-family:HiraginoSansGB-W3;
			font-weight:normal;
			color:#FF5255;
			line-height:34upx;
		}
	}
	
	.openshop{
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		position: absolute;
		bottom: 79upx;
		
		.openShopText{
			width:223upx;
			height:27upx;
			font-size:26upx;
			font-family:MicrosoftYaHei;
			font-weight:400;
			color:#777777;
			line-height:60upx;
			text-align: center;
		}
		
		.openShopBtn{
			width:165upx;
			height:47upx;
			font-size:26upx;
			font-family:MicrosoftYaHei;
			font-weight:400;
			color:#FF5255;
			line-height:60upx;
			border:2upx solid rgba(255,82,85,1);
			border-radius:5upx 5upx 5upx 5upx;
			margin-top: 49upx;
		}
	}
}
</style>

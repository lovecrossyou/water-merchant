<template>
	<view class="forget_password_wrapper">
		<view class="change_password">
			<view class="change_password_item">
				<view class="change_password_name">手机号</view>
				<input type="number" placeholder="请输入手机号">
			</view>
			<view class="change_password_item">
				<view class="change_password_name">验证码</view>
				<input type="number" placeholder="请输入验证码">
				<view class="cut_off"></view>
				<view class="security_code">获取验证码</view>
			</view>
			<view class="change_password_item">
				<view class="change_password_name">新密码</view>
				<input type="password" placeholder="请输入新密码">
			</view>
			<view class="change_password_item">
				<view class="change_password_name">确认密码</view>
				<input type="password" placeholder="请再次输入新密码">
			</view>
		</view>
		<view class="affirm_wrapper">
			<view class="affirm_btn">确认</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.forget_password_wrapper{
		position: absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		font-size:30upx;
		background:#F5F5F5;
		.change_password{
			margin-top:20upx;
			background:#FFFFFF;
			.change_password_item{
				display: flex;
				align-items: center;
				padding-left:26upx;
				box-sizing: border-box;
				height:90upx;
				line-height:90upx;
				border-bottom:1upx solid #DEDEDE;
				.change_password_name{
					width:160upx;
					
				}
				input{
					flex:1;
				}
				.cut_off{
					width:2upx;
					height:48upx;
					background:#DEDEDE;
				}
				.security_code{
					padding-left:30upx;
					padding-right:26upx;
					color:#999999;
				}
			}
		}
		.affirm_wrapper{
			text-align: center;
			margin-top:102upx;
			.affirm_btn{
				display: inline-block;
				width:90%;
				height:82upx;
				line-height:82upx;
				text-align: center;
				background:rgba(255,82,84,1);
				border-radius:10upx;
				font-size:37upx;
				font-family:MicrosoftYaHei;
				font-weight:400;
				color:rgba(255,255,255,1);
				line-height:42px;
			}
			
		}
	}
</style>

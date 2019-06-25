<template>
	<view class="accountMain">
		<view class="accountWrapper">
			<view class="leftWrapper">
				<image class="left_icon" src="../../../static/account/icon.jpg"></image>
				<view class="left_text">资金余额</view>
				<view class="left_price">￥220.00</view>
			</view>
			<view class="rightWrapper">
				<image class="right_icon" src="../../../static/account/icon.jpg"></image>
				<view class="right_text">喜币账户</view>
				<view class="right_price">S110.00</view>
			</view>
		</view>
		<view class="waterticketSales" @click="gowaterticketSales">
			<image class="img" src="../../../static/account/icon.jpg"></image>
			<view class="text">水票销售</view>
			<image class="right_arrow" src="../../../static/common/icon_right.png"></image>
		</view>
		<view class="accountBill">
			<image class="img" src="../../../static/account/icon.jpg"></image>
			<view class="text">账单明细</view>
			<image class="right_arrow" src="../../../static/common/icon_right.png"></image>
		</view>
		<view class="balance">
			<image class="img" src="../../../static/account/icon.jpg"></image>
			<view class="text">提现</view>
			<image class="right_arrow" src="../../../static/common/icon_right.png"></image>
		</view>
	</view>
</template>

<script>
	export default{
		methods: {
			gowaterticketSales() {
				uni.navigateTo({
					url:"waterticketSales"
				})
			}
		},
	}
</script>

<style lang="less">
	.accountMain{
		width: 100%;
		height: 100%;
		position: fixed;
		background: #eeeeee;
		
		.accountWrapper{
			display: flex;
			align-items: center;
			width: 100%;
			height: 272upx;
			background: #7C7D82;
			text-align: center;
			
			.leftWrapper{
				width: 50%;
				
				.left_icon{
					width: 63upx;
					height: 63upx;
				}
				
				.left_text{
					font-size:25upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:#FFFFFF;
					line-height:25upx;
					margin-top: 15upx;
				}
				
				.left_price{
					font-size:42upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:#FFFFFF;
					line-height:42upx;
					margin-top: 10upx;
				}
				
			}
			
			.rightWrapper{
				width: 50%;
				
				.right_icon{
					width: 63upx;
					height: 63upx;
				}
				
				.right_text{
					font-size:25upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:#FFFFFF;
					line-height:25upx;
					margin-top: 15upx;
				}
				
				.right_price{
					font-size:42upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:#FFFFFF;
					line-height:42upx;
					margin-top: 10upx;
				}
			}
		}
		
		.waterticketSales{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 104upx;
			margin-top: 24upx;
			background: #FFFFFF;
			
			.img{
				width: 38upx;
				height: 32upx;
				margin-left: 31upx;
			}
			
			.text{
				display: flex;
				flex: 1;
				font-size:33upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:33upx;
				margin-left: 24upx;
			}
			
			.right_arrow{
				width: 19upx;
				height: 31upx;
				margin-right: 23upx;
			}
		}
		
		.accountBill{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 104upx;
			margin-top: 24upx;
			background: #FFFFFF;
			
			.img{
				width: 38upx;
				height: 32upx;
				margin-left: 31upx;
			}
			
			.text{
				display: flex;
				flex: 1;
				font-size:33upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:33upx;
				margin-left: 24upx;
			}
			
			.right_arrow{
				width: 19upx;
				height: 31upx;
				margin-right: 23upx;
			}
		}
		
		.balance{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 104upx;
			background: #FFFFFF;
			border-top: 1upx solid rgba(232,232,232,1);
			
			.img{
				width: 38upx;
				height: 32upx;
				margin-left: 31upx;
			}
			
			.text{
				display: flex;
				flex: 1;
				font-size:33upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:33upx;
				margin-left: 24upx;
			}
			
			.right_arrow{
				width: 19upx;
				height: 31upx;
				margin-right: 23upx;
			}
		}
	}
</style>

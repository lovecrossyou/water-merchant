<template>
	<view class="order_details_wrapper">
		<view class="header">
			<view class="order_number">
				<view class="mr6">订单编号：</view>
				<view>2017040541323</view>
			</view>
			<view class="order_number">
				<view class="mr6">下单时间：</view>
				<view>2017-04-05</view>
				<view>0:23:52</view>
			</view>
			<view class="order_number">
				<view class="mr6">订单编号：</view>
				<view class="order_state">代付款</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.ml6{
		margin-left:6upx;
	}
	.mr6{
		margin-left:6upx;
	}
	.order_details_wrapper{
		width:100%;
		
		.header{
			font-size:28upx;
			color:#777777;
			.order_number{
				display: flex;
				.order_state{
					color: #FF5255;
				}
			}
		}
	}
</style>


<template>
	<view class="accountDetailMain">
		<view class="switchTag">
			<view class="leftTag">收入明细</view>
			<view class="line"></view>
			<view class="rightTag">喜币明细</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isselected:true
			}
		}
	}
</script>

<style lang="scss">
	.accountDetailMain{
		width: 100%;
		height: 100%;
		position: fixed;
		background: #eeeeee;
		
		.switchTag{
			display: flex;
			align-items: center;
			width: 100%;
			height: 88upx;
			border-top: 1upx solid rgba(232, 232, 232, 1);
			background: white;
			
			.leftTag{
				width: 50%;
				font-size:32upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				text-align: center;
				line-height: 88upx;
			}
			
			.line{
				width: 1upx;
				height: 51upx;
				border-right: 1upx solid rgba(232, 232, 232, 1);
			}
			
			.rightTag{
				width: 50%;
				font-size:32upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				text-align: center;
				line-height: 88upx;
			}
		}
	}
</style>

<template>
	<view class="main">
		<block v-if="(item,index) in detaillist" :key="index">
			<view class="left">
				<view class="content">{{item.content}}</view>
				<view class="time">{{item.time}}</view>
			</view>
			<view class="right">
				<view class="price">
					<view class="recordType" v-if="item.recordType==='income'">+</view>
					<view class="recordType" v-else-if="item.recordType==='outcome'">-</view>
					<view class="recordType" v-else> </view>
					<view class="deltaMount">{{item.deltaMount}}</view>
				</view>
				<view class="ticketDeltaCount" v-if="item.ticketDeltaCount">{{item.ticketDeltaCount}}张</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props:{
			detaillist:[
				{content:"水票销售",time:"2017-5-17  19:58",recordType:'income',deltaMount:100,ticketDeltaCount:5},
				{content:"提现",time:"2017-5-17  19:58",recordType:'outcome',deltaMount:100}]
		}
	}
</script>

<style lang="scss">
	.main{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 117upx;
		border-bottom: 1upx solid #eeeeee;
		
		.left{
			padding-left: 29upx;
			
			.content{
				font-size:28upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:28upx;
			}
			
			.time{
				font-size:24upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(119,119,119,1);
				line-height:24upx;
				margin-top: 15upx;
			}
		}
		
		.right{
			padding-right: 32upx;
			
			.price{
				display: flex;
				
				.sign{
					font-size:28upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(51,51,51,1);
					line-height:28upx;
				}
				
				.deltaMount{
					font-size:34upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(51,51,51,1);
					line-height:34upx;
				}
			}
			
			.ticketDeltaCount{
				font-size:24px;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(119,119,119,1);
				line-height:24px;
				padding-top: 15upx;
			}
		}
	}
</style>

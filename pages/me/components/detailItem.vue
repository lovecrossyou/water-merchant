<template>
	<view class="main">
		<block v-for="(item,index) in detaillist" :key="index">
			<view class="detailItem">
				<view class="left">
					<view class="content">{{item.content}}</view>
					<view class="time">{{item.time}}</view>
				</view>
				<view class="right">
					<view class="price">
						<view class="recordType" v-if="item.recordType==='income'">+</view>
						<view class="recordType" v-else-if="item.recordType==='outcome'">-</view>
						<view class="recordType" v-else> </view>
						<view class="deltaMount">{{item.deltaMount/100|decimals}}</view>
					</view>
					<view class="ticketDeltaCount" v-if="item.ticketDeltaCount">{{item.ticketDeltaCount}}张</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		props:{
			detaillist:{
				type:Array
			}
		},
		filters: {
			decimals: function(value) {
				return value.toFixed(2)
			}
		}
	}
</script>

<style lang="scss">
	.main{
		width: 100%;
		height: 100%;
		position: absolute;
		background: #eeeeee;
		
		.detailItem{
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 117upx;
			border-bottom: 1upx solid #eeeeee;
			background: white;
			
			.left{
				padding-left: 30upx;
				
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
				padding-right: 30upx;
				
				.price{
					display: flex;
					
					.recordType{
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
					font-size:24upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(119,119,119,1);
					line-height:24upx;
					text-align: right;
					margin-top: 15upx;
				}
			}
		}
	}
</style>

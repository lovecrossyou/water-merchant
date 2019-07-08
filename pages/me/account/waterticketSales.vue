<template>
	<view class="waterticketSalesMain">
		<view class="salesWrapper">
			<image class="icon" src="../../../static/account/icon.jpg"></image>
			<view class="text">水票销售</view>
			<view class="price">￥{{sellWaterTicketMount}}</view>
			<view class="back_text">水票回收：¥{{unFreezeWaterTicketMount}}</view>
		</view>
		<block v-for="(item,index) in saleslist" :key="index">
			<view class="waterticketSalesItem">
				<view class="firstRow">
					<view class="firstRowText">{{item.name}}</view>
					<view class="firstRowText">{{item.price}}</view>
				</view>
				<view class="secondRow">
					<view class="secondRowText">{{item.time}}</view>
					<view class="secondRowText">{{item.number}}张</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
import api from '../../../util/api.js'
export default {
	data() {
		return {
			saleslist: [
				{ name: '水票销售', price: '+220.00', time: '2017-5-17  19:58', number: '10' },
				{ name: '水票回收', price: '-220.00', time: '2017-6-17  19:58', number: '10' }],
			sellWaterTicketMount:0,
			unFreezeWaterTicketMount:0
		};
	},
	methods: {
		async getwaterticketmount(){
			const res = await api.waterTicketRmbMount()
			this.sellWaterTicketMount = res.sellWaterTicketMount/100;
			this.unFreezeWaterTicketMount = res.unFreezeWaterTicketMount/100;
		},
		async getmerchantticketdetail(){
			let params = {
				recordType:'ticketRmbRecord'
			}
			api.merchantAccountDetail(params).then((result)=>{
				console.log(result)
			}).catch((error)=>{
				
			})
		}
	},
	onLoad() {
		this.getwaterticketmount();
		this.getmerchantticketdetail();
	}
};
</script>

<style lang="scss">
.waterticketSalesMain {
	width: 100%;
	height: 100%;
	position: fixed;
	background: #eeeeee;

	.salesWrapper {
		width: 100%;
		height: 300upx;
		background: #7c7d82;
		text-align: center;

		.icon {
			margin-top: 44upx;
			width: 58upx;
			height: 58upx;
		}

		.text {
			font-size: 24upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: #ffffff;
			line-height: 24upx;
			margin-top: 22upx;
		}

		.price {
			font-size: 40upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: #ffffff;
			line-height: 40upx;
			margin-top: 10upx;
		}

		.back_text {
			font-size: 24upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
			line-height: 24upx;
			opacity: 0.7;
			margin-top:40upx;
		}
	}
	
	.waterticketSalesItem{
		width: 100%;
		height: 117upx;
		background: #ffffff;
		border-bottom: 1upx solid rgba(232,232,232,1); 
		
		.firstRow{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding-left: 27upx;
			padding-right: 27upx;
			
			.firstRowText{
				font-size:28upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:76upx;
			}
		}
		
		.secondRow{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding-left: 27upx;
			padding-right: 27upx;
			
			.secondRowText{
				font-size:24upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(119,119,119,1);
				line-height:24upx;
			}
		}
	}
}
</style>

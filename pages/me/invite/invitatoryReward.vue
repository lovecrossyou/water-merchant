<template>
	<view class="invitatoryRewardMain">
		<view class="topWrapper">
			<view class="leftWrapper" @click="isOnclick">
				<image class="leftIcon" src="../../../static/account/icon.jpg"></image>
				<view class="leftText">钻石好友(15人)</view>
				<view class="leftNumber">1000.00元</view>
				<view class="select" v-if="isonclick"></view>
				<view class="noSelect" v-else></view>
			</view>
			<view class="rightWrapper" @click="isOnclick">
				<image class="rightIcon" src="../../../static/account/icon.jpg"></image>
				<view class="rightText">黄金好友(9人)</view>
				<view class="rightNumber">60.00元</view>
				<view class="select" v-if="!isonclick"></view>
				<view class="noSelect" v-else></view>
			</view>
		</view>
		<view class="totalReward">
			<view class="text">本月奖励</view>
			<view class="number">￥211.80</view>
		</view>
		<view class="invitatoryRewardList">
			<block v-for="(item,index) in list" :key="index">
				<view class="rewardItem">
					<view class="rewardItemLeftWrapper">
						<image class="userIcon" :src="item.usericon"></image>
						<view class="rewardWrapper">
							<view class="shopName">{{item.shopname}}</view>
							<view class="time">{{item.time}}</view>
						</view>
					</view>
					<view class="rewardItemRightWrapper">
						<view class="reward">+ ¥{{item.reward}}</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list1:[
					{usericon:'../../../static/account/icon.jpg',shopname:'朱理哲',time:'1分钟前',reward:'10.11'},
					{usericon:'../../../static/account/icon.jpg',shopname:'朱时茂',time:'1小时前',reward:'2.44'}
				],
				list2:[
					{usericon:'../../../static/account/icon.jpg',shopname:'诸葛亮',time:'1分钟前',reward:'10.00'},
					{usericon:'../../../static/account/icon.jpg',shopname:'朱元璋',time:'1天前',reward:'2.99'}
				],
				list:[],
				isonclick:true,
				showdrawer:false
			}
		},
		methods: {
			isOnclick() {
				this.isonclick=!this.isonclick;
				if(this.isonclick){
					this.list=this.list1;
				}
				else{
					this.list=this.list2;
				}
			}
		},
		onLoad() {
			this.list=this.list1;
		}
	}
</script>

<style lang="scss">
	.invitatoryRewardMain{
		width: 100%;
		
		.topWrapper{
			display: flex;
			width: 100%;
			height: 250upx;
			border-bottom: 19upx solid rgba(232,232,232,1);
			border-top: 2upx solid rgba(232,232,232,1);
			
			.leftWrapper{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 50%;
				height: 100%;
				
				
				.leftIcon{
					width: 42upx;
					height: 38upx;
					margin-top: 54upx;
				}
				
				.leftText{
					font-size:26upx;
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(51,51,51,1);
					line-height:26upx;
					margin-top: 19upx;
				}
				
				.leftNumber{
					font-size:32upx;
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(255,78,78,1);
					line-height:32upx;
					margin-top: 20upx;
				}
				
				.select{
					width: 1upx;
					height: 0upx;
					margin-top: 37upx;
					border-right: 23upx solid transparent;
					border-top: 0upx solid transparent;
					border-left: 23upx solid transparent;
					border-bottom: 24upx solid rgba(232,232,232,1);
				}
				
				.noSelect{
					width: 1upx;
					height: 24upx;
					margin-top: 37upx;
				}
			}
			
			.rightWrapper{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 50%;
				height: 100%;
				
				.rightIcon{
					width: 42upx;
					height: 38upx;
					margin-top: 54upx;
				}
				
				.rightText{
					font-size:26upx;
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(51,51,51,1);
					line-height:26upx;
					margin-top: 19upx;
				}
				
				.rightNumber{
					font-size:32upx;
					font-family:PingFangSC-Regular;
					font-weight:400;
					color:rgba(255,78,78,1);
					line-height:32upx;
					margin-top: 20upx;
				}
				
				.select{
					width: 1upx;
					height: 0upx;
					margin-top: 37upx;
					border-right: 23upx solid transparent;
					border-top: 0upx solid transparent;
					border-left: 23upx solid transparent;
					border-bottom: 24upx solid rgba(232,232,232,1);
				}
				
				.noSelect{
					width: 1upx;
					height: 24upx;
					margin-top: 37upx;
				}
			}
		}
		
		.totalReward{
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 80upx;
			border-bottom: 1upx solid rgba(232,232,232,1);
			
			.text{
				font-size:32upx;
				font-family:HiraginoSansGB-W3;
				font-weight:normal;
				color:rgba(51,51,51,1);
				line-height:32upx;
				margin-left: 30upx;
			}
			
			.number{
				font-size:30upx;
				font-family:HiraginoSansGB-W3;
				font-weight:normal;
				color:rgba(255,66,67,1);
				line-height:30upx;
				margin-right: 34upx;
			}
			
		}
		
		.invitatoryRewardList{
			width: 100%;
			
			.rewardItem{
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 140upx;
				border-bottom: 1upx solid rgba(232,232,232,1);	
					
				.rewardItemLeftWrapper{
					display: flex;
					
					.userIcon{
						width: 80upx;
						height: 80upx;
						margin-left: 38upx;
					}
					
					.rewardWrapper{
						margin-left: 28upx;
						padding-top: 10upx;
						
						.shopName{
							font-size:30upx;
							font-family:PingFangSC-Regular;
							font-weight:400;
							color:rgba(51,51,51,1);
							line-height:30upx;
						}
						
						.time{
							font-size:24upx;
							font-family:PingFangSC-Regular;
							font-weight:400;
							color:rgba(153,153,153,1);
							line-height:24upx;
							padding-top: 15upx;
						}
					}
				}
				
				.rewardItemRightWrapper{
					display: flex;
					padding-right: 24upx;
					
					.reward{
						font-size:32upx;
						font-family:PingFangSC-Regular;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:32upx;
					}
				}
			}
		}
	}
</style>

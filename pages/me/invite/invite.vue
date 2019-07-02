<template>
	<view class="inviteMain">
		<view class="myReward" @click="goInvitatoryReward">
			<view class="leftWrapper">
				<image class="rewardIcon" src="../../../static/invite/icon_reward.png"></image>
				<view class="rewardText">我的奖励：</view>
				<view class="rewardNumber">￥0</view>
			</view>
			<image class="rightArrow" src="../../../static/common/icon_right.png"></image>
		</view>
		<view class="inviteText">邀请的好友成功开店你即可获取邀请店铺的销售金额返利！赶快去邀请好友吧！</view>
		<image class="userIcon" src="../../../static/account/icon.jpg"></image>
		<view class="inviteNumber">你已成功邀请6人开店</view>
		<view class="invitatoryUser">
			<view class="invitatoryUserList" v-if="invitatoryuserlist.length>0">
				<block v-for="(item,index) in invitatoryuserlist" :key="index">
					<image class="userIconSmall" :src='item'></image>
				</block>
			</view>
			<view class="allUser" v-if="invitatoryuserlist.length>0" @click="goInvitatoryUser">查看全部＞</view>
			<view class="alertText" v-else>还没有好友开店，快去邀请吧～</view>
		</view>
		<view class="inviteBtn">
			<view class="inviteBtnText">邀请开店</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				// invitatoryuserlist:[]
				invitatoryuserlist:["../../../static/account/icon.jpg","../../../static/account/icon.jpg","../../../static/account/icon.jpg","../../../static/account/icon.jpg","../../../static/account/icon.jpg","../../../static/account/icon.jpg"]
			}
		},
		methods:{
			goInvitatoryReward(){
				uni.navigateTo({
					url: 'invitatoryReward'
				})
			},
			goInvitatoryUser(){
				uni.navigateTo({
					url: 'invitatoryUser'
				})
			}
		}
	}
</script>

<style lang="scss">
	.inviteMain{
		width: 100%;
		text-align: center;
		
		.myReward{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 132upx;
			background:rgba(255,255,255,1);
			border:1upx solid rgba(255,255,255,1);
			box-shadow:0upx 3upx 8upx 0upx rgba(160,160,160,0.75);
			border-radius:4upx;
			margin: 32upx 30upx 0upx 30upx;
			box-sizing: border-box; 
			
			.leftWrapper{
				display: flex;
				flex:1;
				align-items: center;
				width: 100%;
				
				.rewardIcon{
					width: 44upx;
					height: 44upx;
					margin-left: 30upx;
				}
				
				.rewardText{
					font-size:32upx;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(51,51,51,1);
					line-height:32upx;
					margin-left: 18upx;
				}
				
				.rewardNumber{
					font-size:30upx;
					font-family:PingFang-SC-Medium;
					font-weight:bold;
					color:rgba(255,82,85,1);
					line-height:30upx;
					margin-left: 16upx;
				}
			}
			
			.rightArrow{
				width: 18upx;
				height: 30upx;
				margin-right: 32upx;
			}
			
		}
		
		.inviteText{
			width: 100%;
			padding: 32upx 32upx 0upx 32upx;
			box-sizing: border-box;
			font-size:30upx;
			font-family:PingFang-SC-Medium;
			font-weight:500;
			color:rgba(51,51,51,1);
			line-height:30upx;
			text-align: left;
		}
		
		.userIcon{
			width: 88upx;
			height: 88upx;
			margin-top: 240upx;
		}
		
		.inviteNumber{
			font-size:30upx;
			font-family:PingFang-SC-Medium;
			font-weight:500;
			color:rgba(51,51,51,1);
			line-height:30upx;
			margin-top: 22upx;
		}
		
		.invitatoryUser{
			width: 100%;
			
			.invitatoryUserList{
				display: flex;
				margin-top: 32upx;
				justify-content: center;
				
				.userIconSmall{
					margin-left: 15upx;
					width: 66upx;
					height: 66upx;
				}
			}
			
			.allUser{
				font-size:26upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(255,82,85,1);
				line-height:26upx;
				margin-top: 52upx;
			}
			
			.alertText{
				font-size:26upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(189,189,189,1);
				line-height:48upx;
				margin-top: 56upx;
			}
		}
		
		.inviteBtn{
			position: absolute;
			bottom: 116upx;
			width: 90%;
			height:80upx;
			background:rgba(255,82,85,1);
			border-radius:4upx;
			margin-left: 5%;
			
				
			.inviteBtnText{
				font-size:32upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(255,255,255,1);
				line-height:80upx;	
			}		
		}
	}
</style>

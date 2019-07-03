<template>
	<view class="invitatoryUserMain">
		<view class="topWrapper">
			<view class="leftWrapper">
				<image class="leftIcon" src="../../../static/account/icon.jpg"></image>
				<view class="leftText">钻石好友</view>
				<view class="leftNumber">15个</view>
			</view>
			<view class="rightWrapper">
				<image class="rightIcon" src="../../../static/account/icon.jpg"></image>
				<view class="rightText">黄金好友</view>
				<view class="rightNumber">9个</view>
			</view>
		</view>
		<view class="invitatoryUserList">
			<block v-for="(item,index) in invitatoryuserlist" :key="index">
				<view class="userItem">
					<view class="leftWrapper">
						<image class="userIcon" :src="item.usericon"></image>
						<view class="userWrapper">
							<view class="userName">{{item.username}}</view>
							<view class="shopName">{{item.shopname}}</view>
						</view>
					</view>
					<view class="rightWrapper">
						<view class="shopNumber">{{item.shopnumber}}</view>
						<image class="rightArrow" src="../../../static/common/icon_right.png"></image>
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
				invitatoryuserlist:[
					{usericon:'../../../static/account/icon.jpg',username:'朱理哲',shopname:'腾讯',shopnumber:'10'},
					{usericon:'../../../static/account/icon.jpg',username:'朱时茂',shopname:'面馆',shopnumber:'2'}
				]
			}
		}
	}
</script>

<style lang="scss">
	.invitatoryUserMain{
		width: 100%;
		
		.topWrapper{
			display: flex;
			width: 100%;
			height: 250upx;
			border-bottom: 19upx solid rgba(232,232,232,1);
			
			.leftWrapper{
				width: 50%;
				height: 100%;
				text-align: center;
				
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
			}
			
			.rightWrapper{
				width: 50%;
				height: 100%;
				text-align: center;
				
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
			}
		}
		
		.invitatoryUserList{
			width: 100%;
			
			.userItem{
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				border-bottom: 1upx solid rgba(232,232,232,1);	
					
				.leftWrapper{
					display: flex;
					
					.userIcon{
						width: 80upx;
						height: 80upx;
					}
					
					.userWrapper{
						
						.userName{
							
						}
						
						.shopName{
							
						}
					}
				}
				
				.rightWrapper{
					display: flex;
					
					.shopNumber{
						
					}
					
					.rightArrow{
						width: 16upx;
						height: 30upx;
					}
				}
			}
		}
	}
</style>

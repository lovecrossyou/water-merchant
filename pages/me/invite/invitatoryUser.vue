<template>
	<view class="invitatoryUserMain">
		<view class="topWrapper">
			<view class="leftWrapper" @click="isOnclick">
				<image class="leftIcon" src="../../../static/account/icon.jpg"></image>
				<view class="leftText">钻石好友</view>
				<view class="leftNumber">15个</view>
				<view class="select" v-if="isonclick"></view>
				<view class="noSelect" v-else></view>
			</view>
			<view class="rightWrapper" @click="isOnclick">
				<image class="rightIcon" src="../../../static/account/icon.jpg"></image>
				<view class="rightText">黄金好友</view>
				<view class="rightNumber">9个</view>
				<view class="select" v-if="!isonclick"></view>
				<view class="noSelect" v-else></view>
			</view>
		</view>
		<view class="invitatoryUserList">
			<block v-for="(item,index) in list" :key="index">
				<view class="userItem">
					<view class="userItemLeftWrapper">
						<image class="userIcon" :src="item.usericon"></image>
						<view class="userWrapper">
							<view class="userName">{{item.username}}</view>
							<view class="shopName">{{item.shopname}}</view>
						</view>
					</view>
					<view class="userItemRightWrapper" v-if="isonclick">
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
				list1:[
					{usericon:'../../../static/account/icon.jpg',username:'朱理哲',shopname:'北京汇银丰网络信息有限公司',shopnumber:'10'},
					{usericon:'../../../static/account/icon.jpg',username:'朱时茂',shopname:'小米',shopnumber:'2'}
				],
				list2:[
					{usericon:'../../../static/account/icon.jpg',username:'诸葛亮',shopname:'腾讯游戏天美工作室群',shopnumber:'10'},
					{usericon:'../../../static/account/icon.jpg',username:'朱元璋',shopname:'腾讯',shopnumber:'2'}
				],
				list:[],
				isonclick:true
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
	.invitatoryUserMain{
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
		
		.invitatoryUserList{
			width: 100%;
			
			.userItem{
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 140upx;
				border-bottom: 1upx solid rgba(232,232,232,1);	
					
				.userItemLeftWrapper{
					display: flex;
					
					.userIcon{
						width: 80upx;
						height: 80upx;
						margin-left: 38upx;
					}
					
					.userWrapper{
						margin-left: 28upx;
						padding-top: 10upx;
						
						.userName{
							font-size:30upx;
							font-family:PingFangSC-Regular;
							font-weight:400;
							color:rgba(51,51,51,1);
							line-height:30upx;
						}
						
						.shopName{
							font-size:24upx;
							font-family:PingFangSC-Regular;
							font-weight:400;
							color:rgba(153,153,153,1);
							line-height:24upx;
							padding-top: 15upx;
						}
					}
				}
				
				.userItemRightWrapper{
					display: flex;
					padding-right: 24upx;
					
					.shopNumber{
						font-size:28upx;
						font-family:PingFangSC-Regular;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:28upx;
					}
					
					.rightArrow{
						width: 16upx;
						height: 30upx;
						padding-left: 8upx;
					}
				}
			}
		}
	}
</style>

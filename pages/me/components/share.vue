<template>
	<view class="main" @click="closeDrawer">
		<view class="share">
			<view class="shareWay">
				<view class="weiXin">
					<image class="weiXinIcon" src="../../../static/invite/btn_weixin.png"></image>
					<view class="weiXinText">微信好友</view>
				</view>
				<view class="weiXinCircle">
					<image class="weiXinCircleIcon" src="../../../static/invite/btn_weixin_circle.png"></image>
					<view class="weiXinCircleText">朋友圈</view>
				</view>
				<view class="qq">
					<image class="qqIcon" src="../../../static/invite/btn_qq.png"></image>
					<view class="qqText">QQ</view>
				</view>
				<view class="weiBo">
					<image class="weiBoIcon" src="../../../static/invite/btn_weibo.png"></image>
					<view class="weiBoText">微博</view>
				</view>
			</view>
			<view class="cancel" @click="closeDrawer">取消</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			showdrawer:false,
			sharetext:'11111111111111'
		},
		methods: {
			closeDrawer(){
				this.$emit('closedrawer',false);
			}
		},
	}
</script>

<style lang="scss">
	.main{
		width: 100%;
		height: 100%;
		position: fixed;
		background: rgba(0,0,0,0.4);
		z-index: 1;
		
		.share{
			position: fixed;
			bottom: 0upx;
			width: 100%;
			height: 328upx;
			background: rgba(232,232,232,1);
			
			.shareWay{
				display: flex;
				width: 100%;
				text-align: center;
				padding-top: 40upx;
				
				.weiXin{
					width: 25%;
					
					.weiXinIcon{
						width: 110upx;
						height: 110upx;
					}
					
					.weiXinText{
						font-size:24upx;
						font-family:PingFang-SC-Regular;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:24upx;
					}
					
				}
				
				.weiXinCircle{
					width: 25%;
					
					.weiXinCircleIcon{
						width: 110upx;
						height: 110upx;
					}
					
					.weiXinCircleText{
						font-size:24upx;
						font-family:PingFang-SC-Regular;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:24upx;
					}
					
				}
				
				.qq{
					width: 25%;
					
					.qqIcon{
						width: 110upx;
						height: 110upx;
					}
					
					.qqText{
						font-size:24upx;
						font-family:PingFang-SC-Regular;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:24upx;
					}
					
				}
				
				.weiBo{
					width: 25%;
					
					.weiBoIcon{
						width: 110upx;
						height: 110upx;
					}
					
					.weiBoText{
						font-size:24upx;
						font-family:PingFang-SC-Regular;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:24upx;
					}
					
				}
			}
			
			.cancel{
				position: fixed;
				bottom: 0upx;
				width: 100%;
				height: 96upx;
				background:rgba(255,255,255,1);
				font-size:32upx;
				font-family:PingFang-SC-Regular;
				font-weight:400;
				color:rgba(51,51,51,1);
				line-height:96upx;
				text-align: center;
			}
		}
	}
</style>

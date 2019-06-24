<template>
	<view class="main">
		<view class="tag-head">
			<view class="attention-text">商品标签</view>
		</view>

		<view class="tag-list">
			<block v-for="(tag,index) in tagArr" :key="index">
				<view class="tag-item" :style="{width:imgStyle.width+'px'}">
					<view class="tag-content" :style="{width:imgStyle.width+'px'}">
						<view class="tag-btn">
							<view class="tag-text">{{tag}}</view>
						</view>
					</view>

				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagArr: ["推荐", "热卖", "特价", "新品"],
				tagStyle: {
					width: '375upx',
					height: '80upx',
				}
			}
		},
		methods: {
			getTagStyle() {
				let that = this;
				uni.getSystemInfo({
					success: function(rect) {
						console.log(rect.windowWidth);
						let windouW = rect.windowWidth;
						let width = windouW / 2;
						that.tagStyle = {
							width: width,
							height: 80
						}
						console.log(that.tagStyle);
					}
				})
			},
		},
		onReady() {
			this.getTagStyle();
		}
	}
</script>

<style lang="scss">
	.main {
		.tag-head {
			display: flex;
			align-items: flex-end;
			height: 80upx;
			background-color: #eeeeee;

			.attention-text {
				margin-left: 24upx;
				margin-bottom: 17upx;
				font-size: 32upx;
				color: #333333;
			}
		}

		.tag-list {
			.tag-item {
				display: inline-block;
				width: 375upx;
				height: 80upx;

				.tag-content {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 375upx;
					height: 80upx;
					border-bottom: solid 1upx #eeeeee;
					border-left: solid 0.5upx #eeeeee;
					border-right: solid 0.5upx #eeeeee;

					.tag-btn {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 130upx;
						height: 45upx;
						border-style: solid;
						border-color: #FF5255;
						border-width: 1upx;

						.tag-text {
							font-size: 30upx;
							color: #333333;
						}
					}
				}



			}
		}
	}
</style>

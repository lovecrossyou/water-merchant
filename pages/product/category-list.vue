<template>
	<view>

		<view class="tag-list">
			<block v-for="(tag,index) in tagArr" :key="index">
				<view class="tag-item" @click="chooseTag()">
					<view class="item-text">{tag.name}</view>
				</view>
			</block>
		</view>

		<view class="category-list">
			<block v-for="(category,index) in cateArr" :key="index">
				<view class="category-item" :style="{width:imgStyle.width+'px',height:imgStyle.height+45+'px'}">
					<image class="cate-img" :style="{width:imgStyle.width+'px',height:imgStyle.height+'px'}" :src="category.image"></image>
					<view class="item-text" :style="{width:imgStyle.width+'px'}">{tag.name}</view>
				</view>
			</block>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagArr: [{
					name: "热门推荐"
				}, {
					name: "饮用水"
				}, {
					name: "酒水饮料"
				}, {
					name: "粮油副食"
				}, {
					name: "香烟茗茶"
				}],
				cateArr: [{
					image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568425437,867090213&fm=26&gp=0.jpg",
					name: "桶装水"
				}, {
					image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568425437,867090213&fm=26&gp=0.jpg",
					name: "瓶装水"
				}, {
					image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568425437,867090213&fm=26&gp=0.jpg",
					name: "鸡蛋"
				}, {
					image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568425437,867090213&fm=26&gp=0.jpg",
					name: "茗茶"
				}],
				imgStyle: {
					width: '155upx',
					height: '155upx'
				},
			}
		},
		methods: {
			chooseTag() {

			}
		},
		onReady() {
			let that = this;
			uni.getSystemInfo({
				success: function(rect) {
					console.log(rect.windowWidth);
					let windouW = rect.windowWidth;
					let width = (windouW - 160) / 2;
					that.imgStyle = {
						width: width,
						height: width + 45
					}
					console.log(that.imgStyle);
				}
			})
		},
	}
</script>

<style lang="scss">
	.main {
		flex-direction: row;

		.tag-list {
			height: 176upx;
			background-color: #f4f8fb;

			.tag-item {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 176upx;
				height: 100upx;
				background-color: white;

				.item-text {
					font-size: 30upx;
					color: #333333;
				}
			}
		}

		.category-list {
			background-color: #f4f8fb;

			.category-item {
				width: 155upx;
				height: 200upx;

				.cate-img {
					width: 155upx;
					height: 155upx;
				}

				.item-text {
					display: flex;
					justify-self: center;
					align-self: center;
					height: 45upx;
					font-size: 26upx;
					color: #777777;
				}
			}
		}
	}
</style>

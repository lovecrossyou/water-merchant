<template>
	<view class="main">

		<view class="tag-list">
			<block v-for="(tag,index) in tagArr" :key="index">
				<view class="tag-item" :class="(tagId==tag.tagId)?'tag-item-select':'tag-item'" @click="chooseTag(tag.tagId)">
					<view class="item-text">{{tag.name}}</view>
				</view>
			</block>
		</view>

		<view class="category-list">
			<block v-for="(category,index) in cateArr" :key="index">
				<view class="category-item" :style="{width:imgStyle.width+'px',height:imgStyle.height+45+'px'}">
					<image class="cate-img" :style="{width:imgStyle.width+'px',height:imgStyle.height+'px'}" :src="category.image"></image>
					<view class="item-text-back" :style="{width:imgStyle.width+'px'}">
						<view class="item-text">
							{{category.name}}
						</view>
					</view>
				</view>
			</block>
		</view>

	</view>
</template>

<script>
	import api from "@/util/api.js"
	export default {
		data() {
			return {
				tagId: 0,
				tagArr: [{
					name: "热门推荐",
					tagId: 0
				}, {
					name: "饮用水",
					tagId: 1
				}, {
					name: "酒水饮料",
					tagId: 2
				}, {
					name: "粮油副食",
					tagId: 3
				}, {
					name: "香烟茗茶",
					tagId: 4
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
			getImageStyle() {
				let that = this;
				uni.getSystemInfo({
					success: function(rect) {
						console.log(rect.windowWidth);
						let windouW = rect.windowWidth;
						let width = (windouW - 236 / 2) / 2;
						that.imgStyle = {
							width: width,
							height: width
						}
						console.log(that.imgStyle);
					}
				})
			},
			getTagList() {
				api.getTagList({}).then((result)=>{
					console.log(result);
				})
			},
			getCategoryList() {
				api.getCategory({}).then((result) => {
					console.log(result);
				})
			},
			chooseTag(tagId) {
				this.tagId = tagId;
			}
		},
		onReady() {
			this.getImageStyle();
			this.getCategoryList();
		},
	}
</script>

<style lang="scss">
	.main {
		display: flex;
		flex: 1;
		flex-direction: row;
		box-sizing: border-box;
		background-color: #eeeeee;

		.tag-list {
			width: 176upx;
			background-color: #eeeeee;

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

			.tag-item-select {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 176upx;
				height: 100upx;
				background-color: #eeeeee;

				.item-text {
					font-size: 30upx;
					color: #333333;
				}
			}
		}

		.category-list {
			box-sizing: border-box;
			background-color: #eeeeee;
			padding: 10upx;
			padding: 10upx;

			.category-item {
				display: inline-block;
				width: 155upx;
				height: 200upx;
				background-color: white;
				margin: 10upx 10upx 10upx 10upx;

				.cate-img {
					width: 155upx;
					height: 155upx;
					background-color: #777777;
				}

				.item-text-back {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 45upx;
					background-color: white;


					.item-text {
						font-size: 26upx;
						color: #777777;
					}
				}
			}
		}
	}
</style>

<template>
	<view class="item_wrapper">
		<view class="left_cont">
			<image :src="itemImg" mode="" class="item_img"></image>
			<view class="main_text">{{ mainText }}</view>
		</view>
		<view class="right_cont">
			<view class="text_hint">{{textHint}}</view>
			<image src="http://qnimage.xiteng.com/right_icon@2x.png" class="next_img"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {},
	props: {
		itemImg: String,
		mainText: String,
		textHint:String
	}
};
</script>

<style scoped>
.item_wrapper {
	width: 100%;
	height: 100upx;
	border-bottom: 1upx solid #DEDEDE;
	display: flex;
	flex-direction: row;
	justify-content:space-between ;
	align-items: center;
	padding: 0 24upx;
	box-sizing: border-box;
	background: #ffffff;
}
.left_cont,
.right_cont{
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.right_cont{
	justify-content: flex-end;
}
.item_img {
	width: 35upx;
	height: 35upx;
	margin-right: 23upx;
}
.main_text {
	color: #333333;
	font-size: 30upx;
	flex: 1;
}
.next_img {
	width: 17upx;
	height: 30upx;
}
.text_hint{
	color: #999999;
	font-size: 24upx;
	margin-right: 18upx;
}
</style>

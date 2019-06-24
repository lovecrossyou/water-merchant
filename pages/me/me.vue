<template>
	<view class="wrapper">
		<!-- 个人信息 -->
		<view class="personal_details_area">
			<image src="http://img0.imgtn.bdimg.com/it/u=919283540,3762083204&fm=11&gp=0.jpg" mode="aspectFill" class="user_heade_img"></image>
			<view class="center_info">
				<view class="user_name">李嘉诚</view>
				<view class="merchant_num">商户号：546100</view>
			</view>
			<image src="http://qnimage.xiteng.com/right_icon@2x.png" class="next_icon"></image>
		</view>
		
		<view class="margin_bottom" @click="goAccount">
			<optionItem itemImg="http://qnimage.xiteng.com/center_icon_%20refund@2x.png" mainText="钱包"></optionItem>
		</view>
		<view class="margin_bottom">
			<optionItem itemImg="http://qnimage.xiteng.com/center_icon_%20refund@2x.png" mainText="我的水票"></optionItem>
			<optionItem itemImg="http://qnimage.xiteng.com/center_icon_%20refund@2x.png" mainText="进货订单"></optionItem>
		</view>
		<view class="margin_bottom">
			<optionItem itemImg="http://qnimage.xiteng.com/center_icon_%20refund@2x.png" mainText="邀请开店" textHint="奖励：0元"></optionItem>
			<optionItem itemImg="http://qnimage.xiteng.com/center_icon_%20refund@2x.png" mainText="加V认证"></optionItem>
		</view>
		<optionItem itemImg="http://qnimage.xiteng.com/center_icon_%20refund@2x.png" mainText="设置"></optionItem>
		<!-- 客服热线 -->
		<view class="service_phone">客服热线：400-061-3229</view>
		
	</view>
</template>

<script>
	import optionItem from './components/optionItem.vue'
export default {
	data() {
		return {};
	},
	methods: {
		goAccount(){
			uni.navigateTo({
				url:"./account/account"
			})
		}
	},
	components:{
		optionItem
	}
};
</script>

<style scoped>
.wrapper {
	width: 100%;
	background-color: #F1F1F3;
	height: 1235upx;
}
.personal_details_area {
	width: 100%;
	height: 161upx;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 21upx 24upx;
	box-sizing: border-box;
	background-color: #fff;
	margin-bottom: 25upx;
}
.user_heade_img {
	width: 120upx;
	height: 120upx;
	border-radius: 5upx;
}
.center_info{
	margin-left: 22upx;
	flex: 1;
}
.user_name{
	color: #333333;
	font-size: 30upx;
}
.merchant_num{
	color: #777;
	font-size: 24upx;
	margin-top: 20upx;
}
.next_icon{
	width: 18upx;
	height: 30upx;
}
.margin_bottom{
	margin-bottom: 25upx;
}
.service_phone{
	width: 100%;
	color: #777777;
	font-size: 26upx;
	text-align: center;
	padding: 150upx 0;
	box-sizing: border-box;
	margin-top: 25upx;
}
</style>

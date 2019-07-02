<template>
	<view class="inviteMain">
		<view class="myReward">
			<image class="rewardIcon" src="../../../static/invite/icon_reward.png"></image>
			<view class="rewardText">我的奖励：</view>
			<view class="rewardNumber">￥ 0</view>
			<image class="rightArrow" src="../../../static/common/icon_right.png"></image>
		</view>
		<view class="inviteText">邀请的好友成功开店你即可获取邀请店铺的销售金额返利！赶快去邀请好友吧！</view>
		<image class="userIcon" src="../../../static/account/icon.jpg"></image>
		<view class="inviteNumber">你已成功邀请6人开店</view>
		<view>
			<view class="userIconList" v-if="usericonlist">
				<block v-for="(item,index) in usericonlist" :key="index">
					<image class="userIconSmall" :src='item'></image>
				</block>
				<view class="allUser">查看全部＞</view>
			</view>
			<view class="alertText" v-else>还没有好友开店，快去邀请吧～</view>
		</view>
		<button class="inviteBtn">邀请开店</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				usericonlist:["../../../static/account/icon.jpg","../../../static/account/icon.jpg","../../../static/account/icon.jpg","../../../static/account/icon.jpg","../../../static/account/icon.jpg","../../../static/account/icon.jpg"]
			}
		}
	}
</script>

<style lang="scss">
	.inviteMain{
		width: 100%;
		
		.myReward{
			display: flex;
			width: 100%;
			
		}
	}
</style>

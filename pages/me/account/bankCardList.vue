<template>
	<view class="main">
		<view class="top-sep"></view>

		<block v-if="bankCardArr.length===0">
			<view class="empty-page">
				<view class="add-card-btn" @click="turnToAddCardDetail()">
					<view class="add-text">+ 添加银行卡</view>
				</view>
			</view>
		</block>
		
		<block v-else>
			<view class="bank-card-list">
				<block v-for="(bankCard,index) in bankCardArr" :key="index">
					<bankCardItem :bankCard="bankCard"></bankCardItem>
				</block>
			</view>
			
			<view class="add-card-btn" @click="turnToAddCardDetail()">
				<view class="add-text">+ 添加银行卡</view>
			</view>
		</block>
		
	</view>

</template>

<script>
	import api from "@/util/api.js"
	import bankCardItem from '../components/bankCardItem.vue'
	export default {
		components: {
			bankCardItem
		},
		data() {
			return {
				arr: [{
					bankCardType: '储蓄卡',
					bankIcon: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568425437,867090213&fm=26&gp=0.jpg",
					bankName: "交通银行",
					bgColor: '#3F63AC',
					lastBankCardNum: '7971'
				}, {
					bankCardType: '储蓄卡',
					bankIcon: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568425437,867090213&fm=26&gp=0.jpg",
					bankName: "交通银行",
					bgColor: '#3F63AC',
					lastBankCardNum: '7971'
				}, {
					bankCardType: '储蓄卡',
					bankIcon: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568425437,867090213&fm=26&gp=0.jpg",
					bankName: "交通银行",
					bgColor: '#3F63AC',
					lastBankCardNum: '7971'
				}, {
					bankCardType: '储蓄卡',
					bankIcon: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568425437,867090213&fm=26&gp=0.jpg",
					bankName: "交通银行",
					bgColor: '#3F63AC',
					lastBankCardNum: '7971'
				}, {
					bankCardType: '储蓄卡',
					bankIcon: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568425437,867090213&fm=26&gp=0.jpg",
					bankName: "交通银行",
					bgColor: '#3F63AC',
					lastBankCardNum: '7971'
				}, {
					bankCardType: '储蓄卡',
					bankIcon: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568425437,867090213&fm=26&gp=0.jpg",
					bankName: "交通银行",
					bgColor: '#3F63AC',
					lastBankCardNum: '7971'
				}, {
					bankCardType: '储蓄卡',
					bankIcon: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568425437,867090213&fm=26&gp=0.jpg",
					bankName: "交通银行",
					bgColor: '#3F63AC',
					lastBankCardNum: '7971'
				}],
				bankCardArr: [],
			}
		},
		methods: {
			getBankCardList() {
				api.getUserBankCardList({}).then((result) => {
					this.bankCardArr = result;
				})
			},
			turnToAddCardDetail() {
				uni.navigateTo({
					url: './addCardDetail',
				})
			},
		},
		onReady() {
			this.getBankCardList();
		},
	}
</script>

<style scoped>
	.main {
		display: flex;
		flex: 1;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background-color: #333333;
	}

	.empty-page {
		display: flex;
		flex: 1;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background-color: #333333;
		position: absolute;
	}

	.top-sep {
		width: 100%;
		height: 30upx;
		background-color: #333333;
	}

	.bank-card-list {
		width: 100%;
		background-color: #333333;
	}

	.add-card-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 40upx 40upx 70upx 40upx;
		height: 120upx;
		border: 1upx solid rgba(229, 229, 229, 1);
		border-radius: 5px;
	}

	.add-text {
		color: #D9D9D9;
		font-size: 34upx;
	}
</style>

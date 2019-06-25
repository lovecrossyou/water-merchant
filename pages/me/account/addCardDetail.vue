<template>
	<view class="main">
		<view class="head-sep"></view>
		<block v-for="(item,index) in itemArr" :key="index">
			<addCardItem :item="item"></addCardItem>
		</block>
		<view class="action-btn">
			<view class="btn-text" @click="turnToWithdraw()">完 成</view>
		</view>
	</view>
</template>

<script>
	import addCardItem from '../components/addCardItem.vue'
	export default {
		components: {
			addCardItem
		},
		data() {
			return {
				itemArr: [{
					labelText: '持 卡 人：',
					holdText: '请填写持卡人姓名',
					isInput: true,
					isClick: false,
					arrowShow: false,
					vertifyCode: false,
				},{
					labelText: '卡    号：',
					holdText: '请填写银行卡卡号',
					isInput: true,
					isClick: false,
					arrowShow: false,
					vertifyCode: false,
				},{
					labelText: '银行名称：',
					holdText: '请选择银行',
					isInput: false,
					isClick: true,
					arrowShow: true,
					vertifyCode: false,
				},{
					labelText: '开户支行：',
					holdText: '请填写开户支行名称',
					isInput: true,
					isClick: false,
					arrowShow: false,
					vertifyCode: false,
				},{
					labelText: '手 机 号：',
					holdText: '请填写银行预留手机号',
					isInput: true,
					isClick: false,
					arrowShow: false,
					vertifyCode: false,
				},{
					labelText: '验 证 码：',
					holdText: '请填写验证码',
					isInput: true,
					isClick: false,
					arrowShow: false,
					vertifyCode: true,
				}]
			}
		},
		methods: {
			turnToWithdraw(){
				uni.navigateTo({
					url: './withdraw',
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #eeeeee;

		.head-sep {
			width: 100%;
			height: 30upx;
			background-color: #eeeeee;
			border-bottom: solid 1upx #DDDDDD;
		}

		.action-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			margin: 80upx 30upx 0upx 30upx;
			background-color: #FF5255;
			border: solid 1upx #FF5255;
			border-radius: 3upx;

			.btn-text {
				color: #ffffff;
				font-size: 36upx;
			}
		}
	}
</style>

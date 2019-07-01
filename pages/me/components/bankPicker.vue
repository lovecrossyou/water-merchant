<template>
	<view v-if="show" class="bank-picker-back">
		<view class="picker-action-area">
			<view class="picker-antion-item" @click="pickerClose">
				<view class="picker-action-item-text">取消</view>
			</view>
			<view class="picker-antion-item" @click="bankCertain">
				<view class="picker-action-item-text">确定</view>
			</view>
		</view>
		<picker-view class="bank-picker" :value="value" @change="valueChange">

			<picker-view-column>
				<view class="pickerItem" v-for="(bank,index) in bankList" :key="index">{{bank.bankName}}</view>
			</picker-view-column>
			<picker-view-column>
				<view class="pickerItem" v-for="(type,index) in typeList" :key="index">{{type}}</view>
			</picker-view-column>
		</picker-view>
	</view>
</template>

<script>
	export default {
		props: {
			show: false,
			pickerMarginTop: 0,
			bankList: [],
			typeList: [],
		},
		methods: {
			pickerOpen() {
				this.$emit("pickerOpen")
			},
			pickerClose() {
				this.$emit("pickerClose")
			},
			valueChange: function(e) {
				this.$emit("valueChange",e)
			},
			bankCertain() {
				this.$emit("bankCertain")
			}
		}
	}
</script>

<style scoped>
	.bank-picker-back {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 380upx;
		background-color: #ffffff;
	}

	.picker-action-area {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 80upx;
		/* background-color: #666666; */
	}

	.picker-antion-item {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10upx;
		width: 100upx;
		height: 80upx;
	}

	.picker-action-item-text {
		color: #007AFF;
		font-size: 30upx;
	}

	.bank-picker {
		width: 100%;
		height: 300upx;
		margin-bottom: 0upx;
	}

	.pickerItem {
		line-height: 68upx;
		height: 34upx;
		overflow: hidden;
		text-align: center;
	}
</style>

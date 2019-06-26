<template>
	<view class="main">
		<view class="top-sep"></view>
		<bankCardItem></bankCardItem>
		<bankCardItem></bankCardItem>
		<bankCardItem></bankCardItem>
		<bankCardItem></bankCardItem>
		<bankCardItem></bankCardItem>
		<bankCardItem></bankCardItem>
	</view>

</template>

<script>
	import api from "@/util/api.js"
	import bankCardItem from '../components/bankCardItem.vue'
	export default {
		components: {
			bankCardItem
		},
		methods: {
			getBankCardList() {
				
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
		background-color: #eeeeee;
		
		.top-sep {
			width: 100%;
			height: 30upx;
			background-color: #eeeeee;
		}
	}
</style>

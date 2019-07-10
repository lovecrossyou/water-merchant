<template>
	<view  class="price" :style="priceStyle">{{price.toFixed(2)}}</view>
</template>

<script>
	export default{
		props: {
			price: {
				type: Number,
				default: 0
			},
			priceStyle:{
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="less">
	.price{
		
		
	}
</style>

<template>
	<view class="container">
		<view class="title">商品标签</view>
		<view class="list">
			<block v-for="(item, index) in labelList" :key="index">
				<view class="item" @click="select(index)">
					<image v-if="selectIndex==index" v-bind:src="selectIcon" class="selectIcon"></image>
					<image v-else v-bind:src="unselectIcon" class="selectIcon"></image>
					<view class="label">{{item}}</view>
				</view>
			</block>		
		</view>
	</view>
</template>

<script>
	 const res = uni.getSystemInfoSync();
	export default{
		data(){
			return {
				labelList:["热卖","特价","热销","限时"],
				selectIcon:"../../static/common/order_btn_selected@2x.png",
				unselectIcon:"../../static/common/order_btn@2x.png",
				selectIndex:-1,
			}
		},
		methods: {
			select(index) {
				this.selectIndex = index;
			}
		},
	}
</script>

<style lang="scss">
	.container{
		background: #f5f5f5;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		.title{
			height: 81upx;
			font-size:32upx;
			font-family:HiraginoSansGB-W3;
			font-weight:normal;
			color:rgba(51,51,51,1);
			padding: 28upx
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			background: white;
			border-color: #c8c7cc;
			border-style: solid;
			border-width: 1upx;
			border-bottom-width: 0;
			border-right-width: 0;
			.item{
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				height: 81upx;
				width: 49.5%;
				background: white;
				border-color: #c8c7cc;
				border-style: solid;
				border-width: 1upx;
				border-top-width: 0;
				border-left-width: 0;
				.selectIcon{
					width:25upx;
					height:25upx;
					margin-right: 10upx;
				}
				.label{
					font-size:30upx;
					font-family:HiraginoSansGB-W3;
					font-weight:normal;
					color:rgba(85,85,85,1);
					border-color: #FF5255;
					border-style: solid;
					border-width: 1upx;
					padding-left: 20upx;
					padding-right: 20upx;
				}
			}
		}
	}
</style>

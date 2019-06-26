<template>
	<view class="container">
		<view class="title">规格类型</view>
		<view class="spe_style">
			<block v-for="(item, index) in styleList" :key="index">
				<view class="item" @click="selectStyIndex(index)">
					<image v-if="selectStyleIndex==index" v-bind:src="selectIcon" class="selectIcon"></image>
					<image v-else v-bind:src="unselectIcon" class="selectIcon"></image>
					<view class="label">{{item}}</view>
				</view>
			</block>		
		</view>
		<view class="title">规格</view>
		<view class="spe_style">
			<block v-for="(item, index) in specList" :key="index">
				<view class="item" @click="selectSpecIndex(index)">
					<image v-if="selectSpeIndex==index" v-bind:src="selectIcon" class="selectIcon"></image>
					<image v-else v-bind:src="unselectIcon" class="selectIcon"></image>
					<view class="label">{{item}}</view>
				</view>
			</block>		
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				styleList:["桶","瓶","箱",""],
				specList:["4L","4.5L","5L","18L","18.9L",""],
				selectIcon:"../../static/common/order_btn_selected@2x.png",
				unselectIcon:"../../static/common/order_btn@2x.png",
				selectStyleIndex:-1,
				selectSpeIndex:-1,
			}
		},
		methods: {
			selectStyIndex(index) {
				this.selectStyleIndex = index;
			},
			selectSpecIndex(index) {
				this.selectSpeIndex = index;
			},
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
			font-size:32upx;
			font-family:HiraginoSansGB-W3;
			font-weight:normal;
			color:rgba(51,51,51,1);
			padding: 28upx
		}
		.spe_style{
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
					width:130upx;
					height:45upx;
					font-size:30upx;
					font-family:HiraginoSansGB-W3;
					font-weight:normal;
					color:rgba(85,85,85,1);
					border-color: #FF5255;
					border-style: solid;
					border-width: 1upx;
					text-align: center 
				}
			}
		}
		.spe_content{
			
		}
	}
</style>

<template>
	<view class="accountDetailMain">
		<view class="switchTag">
			<view class="leftTag" @click="leftSelected">收入明细</view>
			<view class="line"></view>
			<view class="rightTag" @click="rightSelected">喜币明细</view>
		</view>
		<detailItem :detaillist='list'></detailItem>
	</view>
</template>

<script>
	import api from "@/util/api.js"
	import detailItem from  "../components/detailItem.vue"
	export default{
		components: {
			detailItem
		},
		data(){
			return{
				isselected:1,
				rmbdetail:[],
				xtbdetail:[],
				list:[]
			}
		},
		methods: {
			async getrmbAccountDetail() {
				let params={
					recordType:'rmb'
				}
				api.merchantAccountDetail(params).then((result)=>{
					this.rmbdetail = result;
				}).catch((e)=>{
					
				})
			},
			async getxtbAccountDetail() {
				let params={
					recordType:'xtb'
				}
				api.merchantAccountDetail(params).then((result)=>{
					this.xtbdetail = result;
				}).catch((e)=>{
					
				})
			},
			leftSelected(){
				this.isselected = 1;
				this.list = this.rmbdetail;
			},
			rightSelected(){
				this.isselected = 2;
				this.list = this.xtbdetail;
			}
		},
		onLoad() {
			this.getrmbAccountDetail();
			this.getxtbAccountDetail();
			this.list = this.rmbdetail;
		}
	}
</script>

<style lang="scss">
	.accountDetailMain{
		width: 100%;
		height: 100%;
		position: fixed;
		background: #eeeeee;
		
		.switchTag{
			display: flex;
			align-items: center;
			width: 100%;
			height: 88upx;
			border-top: 1upx solid rgba(232, 232, 232, 1);
			background: white;
			
			.leftTag{
				width: 50%;
				font-size:32upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				text-align: center;
				line-height: 88upx;
			}
			
			.lefttag{
				width: 50%;
				font-size:32upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				text-align: center;
				line-height: 88upx;
				border-bottom: 2upx solid #E81D26;
			}
			
			.line{
				width: 1upx;
				height: 51upx;
				border-right: 1upx solid rgba(232, 232, 232, 1);
			}
			
			.rightTag{
				width: 50%;
				font-size:32upx;
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
				text-align: center;
				line-height: 88upx;
			}
		}
	}
</style>

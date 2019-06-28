<template>
	<view class="item-back">
		<view class="left-label-text">{{labelText}}</view>

		<!-- <textarea v-if="isInput" class="input-area" :placeholder="holdText" @input="getComemnt" />

		<view v-if="isClick" class="click-area">
			<view class="hold-text">{{holdText}}</view>
		</view>
		
		<image v-if="arrowShow" class="right-arrow"></image>
		
		<view class="code-btn-back">
			<view v-if="vertifyCode" class="vertify-code-btn">
				<view class="vertify-code-text">获取验证码</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		props: {
			labelText: '',
			holdText: 'xxxxxx',
			isInput:false,
			isClick:false,
			arrowShow:false,
			vertifyCode:false,
			vertifyCodeText: '获取验证码',
			item: {}
		},
		methods: {
			getInputContent(event) {
				
			}
		}
	}
</script>

<style scoped>
	.item-back {
		display: flex;
		flex-direction: row;
		/* justify-content: space-between; */
		align-items: center;
		width: 100%;
		height: 100upx;
		box-sizing: border-box;
		background-color: #ffffff;
		border-bottom: solid 1upx #DDDDDD;
	}

	.left-label-text {
		margin-left: 40upx;
		color: #333333;
		font-size: 30upx;
	}

	.input-area {
		display: flex; 
		flex: 1;
		height: 36upx;
		margin-left: 30upx;
		font-size: 30upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		line-height: 36upx;
	}

	.click-area {
		display: flex;
		flex: 1;
		align-items: center;
		margin-left: 50upx;
		height: 100upx;
	}
	
	.hold-text {
		color: rgba(153,153,153,1);
		font-size: 30upx;;
	}

	.right-arrow {
		width: 18upx;
		height: 30upx;
		background-color: #CC2636;
	}
	
	.code-btn-back {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30upx 30upx 30upx 0upx;
		/*       上    右     下    左 */
		
	}
	
	.vertify-code-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		border-left: 1upx solid #DDDDDD;
	}
	
	.vertify-code-text {
		margin-left: 30upx;
		color: #FF5255;
		font-size: 30upx;
	}
</style>

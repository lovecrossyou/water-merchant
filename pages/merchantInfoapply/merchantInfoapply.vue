<template>
	<view class="apply_wrapper">
		<!-- 基本信息 -->
		<view class="basic_msg">

			<view style="width: 100%;padding:0 30upx;box-sizing: border-box;">
				<view class="input_cont">
					<view class="left_text">
						姓名
					</view>
					<input type="text" v-model="formData.name" placeholder="请输入姓名" />
				</view>

				<view class="input_cont">
					<view class="left_text">
						手机号
					</view>
					<input type="number" v-model="formData.phoneNum" placeholder="请输入手机号" />
				</view>

				<view class="input_cont">
					<view class="left_text">
						验证码
					</view>
					<view class="code-wrapper input_cont">
						<input type="number" v-model="formData.checkCode" placeholder="请输入验证码" />
						<view class="code-send" type="primary" @click="sendCheckCode">发送验证码</view>
					</view>
				</view>


				<view class="uploading_img_item" @click="upLoadImagePath" style="border: none;">
					<view class="left_title">手持身份证拍照</view>
					<image v-if="formData.idCardImageUrl.length!=0" :src="formData.idCardImageUrl" mode="" class="add_img"></image>
					<image v-else src="../../static/shop/addImg@2x.png" class="add_img"></image>
				</view>

			</view>
		</view>
		<button type="primary" class="submit_btn" @click="goNext">下一步</button>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import wzpPicker from "@/components/wzp-picker/wzpPicker.vue";
	import cityData from "@/common/city.data.js";
	import province from '@/common/province.js';
	import api from '@/util/api.js'
	import shopapi from "@/util/shop.js" 
	export default {
		computed: mapState(['shopInfo']),
		data() {
			return {
				formData: {
					"businessLicenseImageUrl": "",
					"checkCode": "979474",
					"idCardImageUrl": "",
					"merchantAttribute": "",
					"merchantName": "",
					"name": "朱理哲",
					"phoneNum": "18610824157"
				}
			};
		},
		onLoad(opt) {
			// this.categoryList();
		},
		methods: {
			async createUser(){
				const res = await shopapi.createUser(this.formData);
			},
			async sendCheckCode(){
				const res = await shopapi.checkcode(
				{
					phoneNum:this.formData.phoneNum
				});
			},
			goNext() {
				this.createUser();
				return;
				uni.navigateTo({
					url: "/pages/registration/registration"
				})
			}
		},
		onBackPress() {
			if (this.$refs.wzpPicker.pickerShow) {
				this.$refs.wzpPicker.closePicker();
				return true;
			}
		},
		components: {
			wzpPicker
		}
	};
</script>

<style scoped>
	.apply_wrapper {
		width: 100%;
		padding-bottom: 40upx;
		box-sizing: border-box;

	}

	.textarea-wrapper {
		border: 1px solid #E1E1E1;
		padding: 20upx;


	}

	textarea {
		width: 100%;
		height: 265upx;
		background: #FFFFFF;
		font-size: 24upx;
	}

	.time-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.title88 {
		width: 180upx;
		height: 88upx;
		line-height: 88upx;
		margin-right: 24upx;
		font-size: 28upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(85, 85, 85, 1);
	}

	.shop-addr {
		color: #999;
		font-size: 30upx;
		height: 88upx;
		line-height: 88upx;
		height: 88upx;
		margin-right: 38upx;
	}


	.username-wrapper,
	.phone-wrapper,
	.phone-wrapper {
		/* background: url('http://qnimage.xiteng.com/right_icon@2x.png') 100% center no-repeat; */
		background-size: 14upx 24upx;
		height: 88upx;
		display: flex;
		flex-direction: row;
		padding-left: 5upx;

	}


	.basic_msg_text {
		width: 100%;
		height: 60upx;
		background-color: #e6f1ff;
		padding-left: 30upx;
		box-sizing: border-box;
		line-height: 60upx;
		font-size: 24upx;
		color: #74b1ff;
	}

	.picker {
		width: 40%;
	}

	.m10 {
		margin-bottom: 20upx;

	}

	.input_cont {
		width: 100%;
		height: 95upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-top: 1upx solid #e0e0e0;
		padding: 0 10upx;
		box-sizing: border-box;
	}

	.code-wrapper {
		/* height: 95upx; */
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.code-send {
		border: 1upx solid #FF5255;
		border-radius: 5upx;
		font-size: 26upx;
		color: #FF5255;
		text-align: center;
		padding: 8upx 12upx;
		box-sizing: border-box;


	}

	.left_text {
		width: 120upx;
		text-align: left;
		color: #333333;
		font-size: 28upx;
		font-weight: bold;
		padding-right: 10upx;
		box-sizing: border-box;
	}

	.input_cont>input {
		flex: 1;
		font-size: 26upx;
	}

	.center_text {
		font-size: 26upx;
		color: #888888;
		flex: 1;
	}

	.next_icon {
		width: 14upx;
		height: 24upx;
	}

	.address_icon {
		width: 32upx;
		height: 40upx;
	}

	.input_cont:first-child {
		border: none;
	}

	.store_imgs {
		width: 100%;
		padding: 0 33upx;
		box-sizing: border-box;
	}

	.uploading_img_item {
		width: 100%;
		padding: 30upx 10upx;
		display: flex;
		flex-direction: row;
		border-top: 1upx solid #e0e0e0;
	}

	.left_title {
		color: #333333;
		font-size: 28upx;
		margin-top: 20upx;
		width: 215upx;
		font-weight: bold;
	}

	.add_img {
		width: 110upx;
		height: 110upx;
	}

	.right_explain {
		width: 327upx;
		margin-left: 28upx;
		color: #888888;
		font-size: 24upx;
	}

	.delivery_text {
		font-size: 28upx;
		color: #999999;
	}

	.submit_btn {
		width: 200upx;
		height: 62upx;
		background-color: #ff6b6b;
		border-radius: 30upx;
		text-align: center;
		line-height: 62upx;
		color: #fff;
		margin-top: 60upx;
	}
</style>

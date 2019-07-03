<template>
	<view class="apply_wrapper">
		<!-- 基本信息 -->
		<view class="basic_msg">
			<view style="width: 100%;padding:0 30upx;box-sizing: border-box;">
				<view class="input_cont">
					<view class="left_text">
						店铺名称
					</view>
					<input type="text" v-model="formData.shopName" placeholder="请输入店铺名称" />
				</view>
				<view class="input_cont" @click="searchAddress">
					<view class="left_text">所在地区</view>
					<view class="center_text">{{formData.createAddressModel.mappingAddress}}</view>
					<image src="../../static/shop/shouhuodizhi@2x.png" class="address_icon"></image>
				</view>

				<view class="input_cont">
					<view class="left_text">
						详细地址
					</view>
					<input type="text" v-model="formData.createAddressModel.appendAddress" placeholder="请输入详细地址" />
				</view>

				<view class="uploading_img_item" @click="upLoadImagePath" style="border: none;">
					<view class="left_title">店铺头像</view>
					<image v-if="shopInfo.image_path.length!=0" :src="shopInfo.image_path" mode="" class="add_img"></image>
					<image v-else src="../../static/shop/addImg@2x.png" class="add_img"></image>
					<!-- <view class="right_explain">一张真实的门店照可提升水站 形象</view> -->
				</view>

				<view class="uploading_img_item" @click="upLoadImagePath" style="border: none;">
					<view class="left_title">店铺图片</view>
					<image v-if="shopInfo.image_path.length!=0" :src="formData.shopIconUrl" mode="" class="add_img"></image>
					<image v-else src="../../static/shop/addImg@2x.png" mode="" class="add_img"></image>
				</view>


				<!-- 客服电话  -->
				<view class="input_cont ">
					<view class="left_text">
						客服电话
					</view>
					<input type="text" placeholder="请输入客服电话" />
				</view>


				<!-- 营业时间 -->
				<div class="username-wrapper">
					<div class="title88 left_text">开始营业时间</div>
					<picker mode="time" :value="startOpenTime" start="00:00" end="24:00" @change="startOpenTimeChange">
						<view class="shop-addr">{{startOpenTime}}</view>
					</picker>
				</div>
				<div class="username-wrapper">
					<div class="title88 left_text">结束营业时间</div>
					<picker mode="time" :value="endOpenTime" start="00:00" end="24:00" @change="endOpenTimeChange">
						<view class="shop-addr">{{endOpenTime}}</view>
					</picker>
				</div>

				<view class="input_cont">
					<view class="left_text">
						配送范围
					</view>
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="delivery_text">{{array[index]}}</view>
					</picker>
				</view>
				<view class="input_cont">
					<view class="left_text">
						快递费用
					</view>
					<input type="number" placeholder="0.00" />
				</view>

				<view class="input_cont">
					<view class="left_text">
						商家介绍
					</view>
				</view>
				<view class="textarea-wrapper">
					<textarea v-model="formData.presentation" placeholder="填写详细的商家介绍，提升销售业绩。" />
					</view>
				
			</view>
		</view>

		<wzp-picker ref="wzpPicker" :mode="mode" :pickerList="pickerList" :defaultIndex="defaultIndex" :equalModeId="equalModeId"
		 @onConfirm="onConfirm"></wzp-picker>
		<button type="primary" class="submit_btn" @click="shopUpdate">提交</button>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import wzpPicker from "../../components/wzp-picker/wzpPicker.vue";
	import cityData from "../../common/city.data.js";
	import province from '../../common/province.js';
	import api from '@/util/api.js'

	export default {
		computed: mapState(['shopInfo']),
		data() {
			return {
				array: ['1 公里', '2 公里', '3 公里', '4 公里', '5 公里'],
				startTime: '09:00',
				endTime: '21:00',
				pickerValue: "",
				mode: "1",
				pickerList: [],
				defaultIndex: [],
				addressDetail: '',
				time: '12:01',
				index: 0,
				startOpenTime:'9:00',
				endOpenTime:'18:00',
				formData: {
					"createAddressModel": {
						"adCode": "",
						"appendAddress": "",
						"cityCode": "",
						"cityName": "北京",
						"latitude": 0,
						"longtitude": 0,
						"mappingAddress": "",
						"pCode": "100000",
						"pName": "北京"
					},
				   "deliverDistance": 0,
				   "deliverTime": "",
				   "freight": "",
				   "presentation": "",
				   "serviceTel": [
						""
					],
				   "shopIconUrl": "",
				   "shopImageUrl": [
						""
				    ],
					"shopName": ""
				},
			};
		},
		onLoad(opt) {
			this.categoryList();
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			},
			upLoadBusinessLicence() {
				let that = this;
				uni.chooseImage({
					success: chooseImageRes => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						api.uploader(tempFilePaths[0], res => {
							that.shopInfo.business_license_image = res.image_path;
							if (that.shopInfo.license) {
								that.shopInfo.license.business_license_image = res.image_path;

							}

						})
					}
				});
			},
			upLoadServiceLicence() {
				let that = this;
				uni.chooseImage({
					success: chooseImageRes => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						api.uploader(tempFilePaths[0], res => {
							that.shopInfo.catering_service_license_image = res.image_path;
							if (that.shopInfo.license) {
								that.shopInfo.license.catering_service_license_image = res.image_path;
							}
						})
					}
				});
			},
			upLoadImagePath() {
				let that = this;
				uni.chooseImage({
					success: chooseImageRes => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						api.uploader(tempFilePaths[0], res => {
							that.shopInfo.image_path = res.image_path;
						})
					}
				});
			},

			// 更新水站 
			async shopUpdate() {
				
				console.log('formData ',this.formData)
				return;
				const params = this.shopInfo;
				let res;
				if (params.id) {
					res = await api.shopUpdate(params);
				} else {
					if (this.shopInfo.phone.length != 11) {
						uni.showToast({
							title: '请输入合法的手机号码',
							mask: false,
							duration: 1500
						});
						return;
					}
					if (this.shopInfo.category === '请选择') {
						uni.showToast({
							title: '请选择水站分类',
							mask: false,
							duration: 1500
						});
						return;
					}
					res = await api.createShop(params);
					if (res.status === 0) {
						uni.showToast({
							title: res.message,
							mask: false,
							duration: 1500
						});
						return;
					}
					uni.redirectTo({
						url: "/pages/shop/enterFlowPath?phone=" + params.phone
					})
				}
				if (res.status === 1) {
					uni.showToast({
						title: res.success,
						mask: false,
						duration: 1500
					});
				}
			},
			startOpenTimeChange: function(e) {
				this.startTime = e.target.value;
				this.shopInfo.startTime = e.target.value;
			},
			endOpenTimeChange: function(e) {
				this.endTime = e.target.value;
				this.shopInfo.endTime = e.target.value;
			},
			searchAddress() {
				uni.navigateTo({
					url: '/pages/address/searchAddress'
				})
			},
			// 双列联动初始化
			showCategoryPicker() {
				this.mode = 'two_linkage';
				this.defaultIndex = [0, 0];
				this.$refs.wzpPicker.showPicker();
			},

			onConfirm(e) {
				const pickerValue = this.pickerList[e[0]].label + "/" + this.pickerList[e[0]].children[e[1]].label;
				this.shopInfo.category = pickerValue;
			},
			async categoryList() {
				this.pickerList = [{
					label: 'xx',
					value: 'ooo'
				}];
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
	
	.textarea-wrapper{
				border:1px solid #E1E1E1;
				padding: 20upx;
			

	}
	
	textarea{
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

	.left_text {
		width: 215upx;
		text-align: left;
		color: #333333;
		font-size: 28upx;
		font-weight: bold;
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

<template>
	<view class="main">
		<view>
			<view class="head-sep"></view>

			<view class="item-back">
				<view class="left-label-text">持 卡 人：</view>
				<input type="text" class="input-area" placeholder="请填写持卡人姓名" placeholder-style="color:#999999" v-model="addCardParam.cardHolderName"/>
				<!-- <textarea class="input-area" placeholder="请填写持卡人姓名" @input="(e) => {addCardParam.cardHolderName=e.target.value}" /> -->
				</view>
			
			<view class="item-back">
				<view class="left-label-text">卡    号：</view>
				<input type="number" class="input-area" placeholder="请填写持卡人姓名" placeholder-style="color:#999999" v-model="addCardParam.bankCardNumber"/>
			</view>
			
			<view class="item-back">
				<view class="left-label-text">银行名称：</view>
				<view class="click-area">
					<view class="hold-text" :class="[bankNameType==='请选择银行'?'hold-text':'select-text']" @click="pickerOpen()">{{bankNameType}}</view>
				</view>
				<image class="right-arrow" 
				       src="http://qnimage.xiteng.com/right_icon@2x.png"></image>
			</view>
			
			<view class="item-back">
				<view class="left-label-text">开户支行：</view>
				<input type="text" class="input-area" placeholder="请填写持卡人姓名" placeholder-style="color:#999999" v-model="addCardParam.depositBank"/>
			</view>
			
			<view class="item-back">
				<view class="left-label-text">手 机 号：</view>
				<input type="number" class="input-area" placeholder="请填写持卡人姓名" placeholder-style="color:#999999" v-model="addCardParam.phoneNum"/>
			</view>
			
			<view class="item-back">
				<view class="left-label-text">验 证 码：</view>				
				<input type="number" class="input-area" placeholder="请填写持卡人姓名" placeholder-style="color:#999999" v-model="addCardParam.checkCode"/>
				<view class="checkcode-btn-back" @click="getAddCardCheckCode()">
					<view class="checkcode-btn">
						<view class="checkcode-text">获取验证码</view>
					</view>
				</view>
			</view>
			
			<view class="action-btn">
				<view class="btn-text" @click="checkAddCardParam()">完 成</view>
			</view>
		</view>
		
		<block v-if="showBankPiker">
			<view class="picker-modal" @click="pickerClose()">
				<bankPicker 
					:show="showBankPiker"
					:bankList="bankList"
					:typeList="typeList"
					@pickerOpen="pickerOpen" 
					@pickerClose="pickerClose" 
					@valueChange="valueChange"
					@bankCertain="bankCertain"></bankPicker>
			</view>
		</block>
		
	</view>
</template>

<script>
	import api from "@/util/api.js"
	import bankPicker from '../components/bankPicker.vue'
	export default {
		components: {
			bankPicker
		},
		data() {
			return {
				showBankPiker: false,
				bankList: [],
				typeList: ["储蓄卡", "信用卡"],
				indexArr: [0, 0],
				bankNameType: '请选择银行',
				addCardParam: {
					cardHolderName: '',
					bankCardNumber: '',
					bankKindId: 0,
					bankCardKind: '',
					depositBank: '',
					phoneNum: '',
					checkCode: '',
				},
			}
		},
		methods: {
			pickerClose() {
				this.showBankPiker=false;
				this.indexArr=[0, 0];
			},
			pickerOpen() {
				this.showBankPiker=true;
			},
			bankCertain() {
				let bankName = this.bankList[this.indexArr[0]].bankName;
				this.addCardParam.bankKindId = this.bankList[this.indexArr[0]].bankKindId;
				this.addCardParam.bankCardKind = this.typeList[this.indexArr[1]];
				this.bankNameType = bankName+'  '+this.addCardParam.bankCardKind;
				this.pickerClose();
			},
			valueChange(e) {
				const valIndex = e.detail.value
				this.indexArr = valIndex;
				console.log(this.indexArr);
			},
			getBankList() {
				api.getBankList({}).then((result)=> {
					this.bankList = result;
				})
			},
			getAddCardCheckCode() {
				api.getAddCardCheckCode({"phoneNum": this.addCardParam.phoneNum}).then((result)=>{
					console.log(result);
					if (result.respMsg==="successful") {
						uni.showToast({
							title: "验证码已成功发送到手机",
							icon: "none"
						})
					}
				}).catch((error)=> {
					console.log(error);
				})
			},
			addBankCardToBackground() {
				uni.showLoading({
					title: "正在提交..."
				})
				api.addBankCardToBackground(this.addCardParam).then((result)=>{
					console.log(result);
				}).catch((error)=> {
					uni.showToast({
						title:"添加银行卡失败",
						icon:"none"
					})
				})
			},
			checkAddCardParam() {
				if (this.addCardParam.cardHolderName==='') {
					uni.showToast({
						title:"持卡人姓名不能为空！",
						icon:"none"
					})
					return
				}
				if (this.addCardParam.bankCardNumber==='') {
					uni.showToast({
						title:"银行卡号不能为空！",
						icon:"none"
					})
					return
				}
				if (this.bankNameType==='') {
					uni.showToast({
						title:"请选择银行",
						icon:"none"
					})
					return
				}
				if (this.addCardParam.depositBank==='') {
					uni.showToast({
						title:"开户支行不能为空！",
						icon:"none"
					})
					return
				}
				if (this.addCardParam.phoneNum==='') {
					uni.showToast({
						title:"手机号不能为空！",
						icon:"none"
					})
					return
				}
				if (this.addCardParam.checkCode==='') {
					uni.showToast({
						title:"验证码不能为空！",
						icon:"none"
					})
					return
				}
				console.log(this.addCardParam);
				// return;
				this.addBankCardToBackground();
			},
		},
		onReady() {
			this.getBankList();
		}
	}
</script>

<style scoped="">
	.main {
		display: flex;
		flex: 1;
		flex-direction: column;
		/* justify-content: space-between; */
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #eeeeee;
	}
	
	.head-sep {
		width: 100%;
		height: 30upx;
		background-color: #eeeeee;
		border-bottom: solid 1upx #DDDDDD;
	}
	
	.item-back {
		display: flex;
		flex-direction: row;
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
		color: #333333;
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
	
	.select-text {
		color: #333333;
		font-size: 30upx;;
	}
	
	.right-arrow {
		width: 18upx;
		height: 30upx;
		margin-right: 30upx;
		background-color: #CC2636;
	}
	
	.checkcode-btn-back {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30upx 30upx 30upx 0upx;
		/*       上    右     下    左 */
		
	}
	
	.checkcode-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		border-left: 1upx solid #DDDDDD;
	}
	
	.checkcode-text {
		margin-left: 30upx;
		color: #FF5255;
		font-size: 30upx;
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
	}
	
	.btn-text {
		color: #ffffff;
		font-size: 36upx;
	}
	
	.picker-modal {
		z-index: 10;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
	}
</style>

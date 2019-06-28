<template>
	<view class="main">
		<view class="head-sep"></view>

		<view class="item-back">
			<view class="left-label-text">持 卡 人：</view>
			<!-- <textarea class="input-area" placeholder="请填写持卡人姓名" v-model="addCardParam.cardHolderName"/> -->
			<textarea class="input-area" placeholder="请填写持卡人姓名" @input="(e) => {addCardParam.cardHolderName=e.target.value}" />
			</view>
		
		<view class="item-back">
			<view class="left-label-text">卡    号：</view>
			<textarea class="input-area" placeholder="请填写银行卡卡号" @input="(e) => {addCardParam.bankCardNumber=e.target.value}"/>
		</view>
		
		<view class="item-back">
			<view class="left-label-text">银行名称：</view>
			<view class="click-area">
				<view class="hold-text">请选择银行</view>
			</view>
			<image class="right-arrow"></image>
		</view>
		
		<view class="item-back">
			<view class="left-label-text">开户支行：</view>
			<textarea class="input-area" placeholder="请填写开户支行名称" @input="(e) => {addCardParam.depositBank=e.target.value}"/>
		</view>
		
		<view class="item-back">
			<view class="left-label-text">手 机 号：</view>
			<textarea class="input-area" placeholder="请填写银行预留手机号" @input="(e) => {addCardParam.phoneNum=e.target.value}"/>
		</view>
		
		<view class="item-back">
			<view class="left-label-text">验 证 码：</view>
			<textarea class="input-area" placeholder="请填写验证码" @input="(e) => {addCardParam.checkCode=e.target.value}"/>
			<view class="checkcode-btn-back" @click="getAddCardCheckCode()">
				<view class="checkcode-btn">
					<view class="checkcode-text">获取验证码</view>
				</view>
			</view>
		</view>
		
		<view class="action-btn">
			<view class="btn-text" @click="checkAddCardParam()">完 成</view>
		</view>
		
		<vue-pickers :show="showBankPiker" 
		:columns="pikerColumn"
	    :defaultData="defaultData"
		:selectData="pickData"
		@cancel="close"
		@confirm="confirmFn"></vue-pickers>
	</view>
</template>

<script>
	import api from "@/util/api.js"
	import vuePickers from 'vue-pickers'
	export default {
		components: {
			vuePickers
		},
		data() {
			return {
				showBankPiker: false,
				pikerColumn: 1,
				defaultData: [{		
					text: 1999,
					value: 1999,		
				}],
				pikerData: {
					data1: [{		
					text: 1999,
					value: 1999,		
				},{		
					text: 1999,
					value: 1999,		
				}]
				},
				bankNameType: '',
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
			pikerClose(){
				this.showBankPiker=false;
			},
			getAddCardCheckCode() {
				api.getAddCardCheckCode({}).then((result)=>{
					
				})
			},
			checkAddCardParam() {
				if (this.addCardParam.cardHolderName==='') {
					return
				}
				if (this.addCardParam.bankCardNumber==='') {
					return
				}
				if (this.bankNameType==='') {
					return
				}
				if (this.addCardParam.depositBank==='') {
					return
				}
				if (this.addCardParam.phoneNum==='') {
					return
				}
				if (this.addCardParam.checkCode==='') {
					return
				}
				this.addBankCardToBackground();
			},
			addBankCardToBackground() {
				console.log(this.addCardParam);
				api.addBankCardToBackground(this.addCardParam).then((result)=>{
					
				})
			}
		}
	}
</script>

<style scoped="">
	.main {
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
		color: rgba(153, 153, 153, 1);
		line-height: 36upx;
		/* background-color: #FF5255; */
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
</style>

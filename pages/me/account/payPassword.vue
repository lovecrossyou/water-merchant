<template>
	<view class="main">
		<block v-if="pswChange&&!pswSet&&!pswConfirm">
			<view class="psw-back">
				<view class="attention-text">请输入提现密码</view>

				<input type="number" class="password-input" maxlength="6" :focus="true" v-model="pswSetStr"/>
				<view class="password-item-back">
					<block v-for="(i,index) in pswHolder" :key="index">
						<view class="password-item">
							<view class="password-hide-text" v-if="pswSetStr.length>index">*</view>
						</view>
					</block>
				</view>

				<view class="action-btn" @click="turnToPswConfirm">
					<view class="action-btn-text">下一步</view>
				</view>
			</view>
		</block>

		<block v-else-if="pswSet&&!pswChange&&!pswConfirm">
			<view class="psw-back">
				<view class="attention-text">请设置新的提现密码</view>

				<input type="number" class="password-input" maxlength="6" :focus="true" v-model="pswSetStr" />
				<view class="password-item-back">
					<block v-for="(i,index) in pswHolder" :key="index">
						<view class="password-item" @click="focusSetInput">
							<view class="password-hide-text" v-if="pswSetStr.length>index">*</view>
						</view>
					</block>
				</view>

				<view class="action-btn" @click="turnToPswConfirm">
					<view class="action-btn-text">下一步</view>
				</view>
			</view>
		</block>

		<block v-else-if="pswConfirm&&!pswChange&&!pswSet">
			<view class="psw-back">
				<view class="attention-text">请再次确认提现密码</view>

				<input type="number" class="password-input" maxlength="6" :focus="true" v-model="pswConfirmStr" />
				<view class="password-item-back">
					<block v-for="(i,index) in pswHolder" :key="index">
						<view class="password-item" @click="focusConfirmInput">
							<view class="password-hide-text" v-if="pswConfirmStr.length>index">*</view>
						</view>
					</block>
				</view>

				<view class="action-btn">
					<view class="action-btn-text">完 成</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			checkCode: "",
			oldPayPassword: "",
			payPassword: "",
			phoneNum: "",

		},
		data() {
			return {
				setInputFocus: false,
				confirmInputFocus: true,
				
				pswSet: false,
				pswChange: false,
				pswConfirm: false,
				
				pswHolder: '012345',
				
				pswOld: '',
				pswSetStr: '',
				pswConfirmStr: ''
			}
		},
		methods: {
			focusSetInput: function() {
				this.setInputFocus = true;
			},
			focusConfirmInput: function() {
				this.confirmInputFocus = true;
			},
			confirmInput: function(e) {
				console.log(e.target.value);
			},
			turnToPswConfirm: function() {
				this.pswConfirm = true;
			}
		},
		onLoad: function(option) {
			console.log(option);
			this.pswChange = option.pswChange;
			this.pswSet = option.pswSet;
			this.pswConfirm = option.pswConfirm;
			console.log(option.pswChange+'/'+!option.pswChange);
			console.log(option.pswSet+'/'+!option.pswSet);
			console.log(option.pswConfirm+'/'+!option.pswConfirm);
			console.log('change'+(this.pswChange&&!this.pswSet&&!this.pswConfirm));
			console.log('set'+(!this.pswChange&&this.pswSet&&!this.pswConfirm));
			console.log('confirm'+(!this.pswChange&&!this.pswSet&&this.pswConfirm));
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
		height: 100%;
		position: absolute;

		.psw-back {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			height: 100%;
			background-color: #eeeeee;
			position: absolute;

			.attention-text {
				margin-top: 240upx;
				color: #333333;
				font-size: 30upx;
			}

			.password-input {
				width: 600upx;
				height: 90upx;
				margin-top: 100upx;
				color: rgba(255, 255, 255, 0);
			}

			.password-item-back {
				z-index: 10;
				display: flex;
				flex-direction: row;
				height: 90upx;
				color: rgba(255, 255, 255, 0);
				margin-top: -90upx;
				background-color: #ffffff;
				border-top: solid 1upx #E5E5E5;
				border-left: solid 1upx #E5E5E5;
				border-bottom: solid 1upx #E5E5E5;

				.password-item {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100upx;
					height: 90upx;
					border-right: solid 1upx #E5E5E5;

					.password-hide-text {
						color: #333333;
						font-size: 30upx;
					}
				}
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

				.action-btn-text {
					color: #ffffff;
					font-size: 36upx;
				}
			}
		}
	}
</style>

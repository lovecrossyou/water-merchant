<template>
	<div class="search_address_page">
		<section>
			<div class="search_form">
				<input @input="onKeyInput" type="search" name="search" placeholder="请输入小区/写字楼/学校等" v-model="searchValue">
			</div>
			<ul class="address_list" v-if="searchData">
				<li v-for="(item, index) in searchData" :key="index" @click="choooedAddress(item)">
					<h4>{{item.name}}</h4>
					<p>{{item.address}}</p>
				</li>
			</ul>
			<div v-else class="empty_tips">
				<p>找不到地址？</p>
				<p>尝试输入小区、写字楼或学校名</p>
				<p>详细地址（如门牌号等）可稍后输入哦</p>
			</div>
		</section>
	</div>
</template>

<script>
	import api from '@/util/api.js'
	import {
		mapMutations,
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				searchValue: null, //输入的搜索内容
				searchData: [], //搜索的结果
			}
		},
		computed: mapState(['shopInfo']),
		props: [],
		methods: {
			async onKeyInput(event) {
				var that = this;
				that.searchData = await api.searchNearby({
					keywords: event.target.value
				})
			},
			//选择搜素结果
			choooedAddress(item) {
				this.$store.commit("shop/setAddr", item);
				this.shopInfo.address = item.name;
				this.shopInfo.latitude = item.latitude;
				this.shopInfo.longitude = item.longitude;

				uni.navigateBack();
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../static/style/mixin.scss";

	.search_address_page {
		position: absolute;
		width: 100%;
		height: 100%;
		padding-top: 20upx;
		box-sizing: border-box;

		p,
		span {
			font-family: Helvetica Neue, Tahoma, Arial;
		}
	}

	.search_form {
		display: flex;
		flex-direction: row;
		width: 100%;
		padding: 10upx;
		box-sizing: border-box;

		input {
			@include sc(26upx, #999);
			flex: 4;
			background-color: #f1f1f1;
			margin-right: 12upx;
			height: 80upx;
			border-radius: 10upx;
			padding: 0 20upx;
		}

		//         button{
		//             flex: 1;
		//             @include sc(26upx, #fff);
		//             background-color: $blue;
		//             border-radius: 6upx;
		// 			line-height: 80upx;
		//         }
	}

	.address_list {
		padding: 28upx;

		li {
			padding: 28upx 0;
			border-bottom: 1upx solid #f5f5f5;
			line-height: 40upx;

			h4 {
				@include sc(30upx, #555);
			}

			p {
				@include sc(26upx, #999);
			}
		}
	}

	.empty_tips {
		@include center;
		width: 100%;

		p {
			@include sc(26upx, #aaa);
			line-height: 28upx;
			text-align: center;

		}
	}
</style>

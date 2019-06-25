<template>
	<view class="container">
		<block v-for="(item, index) in shopList" :key="index">
			<view class="shop_item">
				<image v-bind:src="item.img" class="item_img"></image>
				<view class="item_info">
					<view class="name">{{item.shopName}}</view>
					<view class="info_address">
						<image v-bind:src="location" class="address_icon"></image>
						<view class="address">{{item.address}}</view>
					</view>
				</view>
			</view>
		</block>	
	</view>
</template>

<script>
	export default{
		data(){
			return{
				location:'../../static/common/icon_location.png',
				shopList:[
					{
						img:'http://img1.imgtn.bdimg.com/it/u=3628836046,3677033089&fm=26&gp=0.jpg',
						shopName:'恒大冰泉(恒大店)',
						address:'中关村大厦'
					},
					{
						img:'http://img1.imgtn.bdimg.com/it/u=3628836046,3677033089&fm=26&gp=0.jpg',
						shopName:'恒大冰泉(恒大店)',
						address:'中关村大厦'
					},
					{
						img:'http://img1.imgtn.bdimg.com/it/u=3628836046,3677033089&fm=26&gp=0.jpg',
						shopName:'恒大冰泉(恒大店)',
						address:'中关村大厦'
					},
				]
			}
		}
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
		.shop_item{
			display: flex;
			flex-direction: row;
			align-items: center;
			background: white;
			height: 200upx;
			margin-bottom: 1upx;
			.item_img{
				width:150upx;
				height:150upx;
				background:rgba(12,68,177,1);
				border-radius:7upx 7upx 7upx 7upx;
				margin-left: 23upx
			}
			.item_info{
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-left: 30upx;
				.name{
					font-size:34upx;
					font-family:MicrosoftYaHei;
					font-weight:400;
					color:rgba(51,51,51,1);
				}
				.info_address{
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-top: 20upx;
					.address_icon{
						width:25upx;
						height:30upx;
						border-radius:50%;
					}
					.address{
						font-size:28upx;
						font-family:MicrosoftYaHei;
						font-weight:400;
						color:rgba(119,119,119,1);
						margin-left: 7upx
					}
				}
				
			}
		}
	}
</style>

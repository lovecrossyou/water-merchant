import request from './request'
import Fly from 'flyio/dist/npm/wx'
import {
	baseURL
} from './request.js'
const uploadBaseUrl = "http://47.94.169.143:8004"
const searchBaseUrl = "http://47.94.169.143:8004"
const api = {

	requestCartClient: (params) => request.post("client/shop/cartClient", params),
	deliveryAddressList: (params) => request.post("client/deliveryAddress/list", params),
	deliveryAddressCreate: (params) => request.post("client/deliveryAddress/create", params),
	// searchNearby: (params) => request.get("client/common/searchAddress", params),
	deliveryAddressEdit: (params) => request.post("client/deliveryAddress/edit", params),
	shopOrderCreate: (params) => request.post("client/shopOrder/create", params),
	keplerPayConfirm: (params) => request.post("client/keplerPay/confirm", params),
	getDefaultAddress: (params) => request.post("client/deliveryAddress/getDefault", params),
	//支付成功后的结果查询
	queryResult: (params) => request.post("client/keplerPay/queryResult", params),

	getAddress: (params) => request.post("client/keplerPay/queryResult", params),
	getUser: (params) => request.post("client/keplerPay/queryResult", params),
	postAddAddress: (params) => request.post("client/keplerPay/queryResult", params),

	// 分类&标签
	getTagList: () => request.post("/merchant/productTagList"),
	getCategoryList: () => request.get("/merchant/categoryList"),
	categoryList: restaurant_id => request.get("/merchant/getcategory/"+restaurant_id),
	getCategory: ()=>request.get('/merchant/v2/restaurant/category'),
	addCategory: data => request.post("/merchant/addcategory", data, 'POST'),
	
	//银行卡相关
	getAddCardCheckCode: (params)=> request.post("/checkCode/addBankCard",params),
	addBankCardToBackground: (params)=> request.post("/bankCard/addBankCard", params),
	getBankList: ()=> request.post("/bankCard/getBankList"),
	getUserBankCardList: ()=> request.post("/bankCard/userBankCardList"),
	rmbWithdraw: (params)=> request.post("/account/withDraw", params),
	getAccountInfo: ()=> request.post("/account/merchantAccount"),
	getPayPswResetCheckCode: (params)=> request.post("/checkCode/changePassword",params),
	checkHasPayPassword: ()=> request.post("/payPassword/checkHasPayPassword"),
	setPayPassword: (params)=> request.post("/payPassword/setPayPassword",params),
	changePayPassword: (params)=> request.post("/payPassword/changePayPassword",params),
	resetPayPassword: (params)=> request.post("/payPassword/resetPayPassword",params),

	// 添加商品
	createProduct: data => request.post("/merchant/addfood", data, 'POST'),
	editProduct: data => request.post("/merchant/v2/updatefood", data, 'POST'),

	menu: data => request.get('/merchant/v2/menu', data),
	// 商品列表
	productList: data => request.get("/merchant/v2/foods", data),

	// 店铺信息
	shopInfo: restaurant_id => request.get("/merchant/restaurant/" + restaurant_id),

	// 更新店铺信息 
	shopUpdate: data => request.post("/merchant/updateshop", data, 'POST'),

	// 登录
	login: data => request.post("/merchant/login", data, 'POST'),

	// sendSms
	sendSms: data => request.post("sms/send", data, 'POST'),

	//注册推送 
	pushRegiste: data => request.post("/push/registe", data, 'POST'),

	// 订单列表
	orderList: data => request.get("/merchant/orders", data),

	address: addr_id => request.get('/v1/addresse/' + addr_id),

	// 删除商品 merchant/shop/productRemove "id": 1
	productRemove: data => request.post("/merchant/shop/productRemove", data, 'POST'),

	// 下架商品 merchant/shop/productStatusReverse "id": 1
	productStatusReverse: data => request.post("/merchant/shop/productStatusReverse", data, 'POST'),

	// 订单发货 merchant/shopOrder/confirmDeliver "orderNo": "1111111"
	confirmDeliver: data => request.post("/merchant/shop/confirmDeliver", data, 'POST'),

	// 创建店铺
	createShop: data => request.post("/merchant/createShop", data, 'POST'),

	// 店铺商品列表
	productList: data => request.post("/merchant/shopProductList", data, 'POST'),

	// 分销商品
	getDistributionList: data => request.post("/shop/shoppingcart/distribution/productType", data, 'POST'),

	//地址搜索
	searchNearby: data => request.get('/v1/pois?type=search&keyword=' + data.keywords),
	
	// 分销商品
	getProductDetail: data => request.post("/merchant/shopProductInfo", data, 'POST'),
	
	//上传
	uploader: (file, cb) => {
		uni.uploadFile({
			url: baseURL + '/v1/addimg/shop',
			filePath: file,
			name: 'file',
			success: (result) => {
				const data = JSON.parse(result.data);
				cb(data);
			}
		});
	}

}
export default api

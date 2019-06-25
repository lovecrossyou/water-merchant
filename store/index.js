import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product.js'
import employe from './modules/employe.js'
import shop from './modules/shop.js'
import api from '../util/api.js'

import servcie from "../service.js"


Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		product,
		employe,
		shop
	},
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: true,
		hasLogin: false,
		userName: "",
		shopId: 13,
		userInfo: null,
		shopInfo: {
			"name": "",
			"address": "",
			"addressDetail":"",
			"latitude": 39.92843,
			"longitude": 116.35073,
			"description": "",
			"phone": '',
			"promotion_info": "",
			"float_delivery_fee": '',
			"float_minimum_order_amount": '',
			"startTime": "09:00",
			"endTime": "21:00",
			"image_path": "",
			"business_license_image": "",
			"catering_service_license_image": "",
			"activities": [],
			"category": "请选择"
		},
		clientInfo: null
	},
	mutations: {
		login(state, userInfo) {
			state.userInfo = userInfo;
			state.shopId = userInfo.shopId;
			state.hasLogin = true;
		},
		logout(state) {
			state.userInfo = null;
			state.hasLogin = false;
		},
		setInfo(state, data) {
			state.userInfo = data;
		},
		setShopInfo(state, data) {
			state.shopInfo = data;
		},
		saveClientInfo(state, data) {
			state.clientInfo = data;
		}
	},
	actions: {
		async registePush({
			commit,
			state
		}, data) {
			const clientInfo = state.clientInfo;
			if (clientInfo) {
				await api.pushRegiste(clientInfo);
			}
		}
	}
})

export default store

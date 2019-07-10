import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product.js'
import employe from './modules/employe.js'
import shop from './modules/shop.js'
import distribution from './modules/distribution.js'
import replenishStock from './modules/replenishStock.js'
import order from './modules/order.js'
import api from '../util/api.js'
import shopapi from '../util/shop.js'

import servcie from "../service.js"
import {
	TOKEN_KEY
} from "../service"

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		product,
		employe,
		shop,
		distribution,
		replenishStock,
		order,
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
			"addressDetail": "",
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
		clientInfo: null,
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
		async checkLogin({
			commit,
			state
		}, cb) {
			let token = uni.getStorageSync(TOKEN_KEY);
			if (!token) {
				uni.reLaunch({
					url: "/pages/login/login"
				});
			} else {
				cb && cb();
			}
		},

		async fetchShopInfo({
			commit,
			state
		}) {
			const res = await shopapi.shopDetail();
			state.shopInfo = res;
		}
	}
})

export default store

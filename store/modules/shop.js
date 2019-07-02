import api from '@/util/api.js'
import shopapi from "@/util/shop.js"
const state = {
	selectAddress: {
		name: ''
	},
	orderList: [],
	orderListParams: {
		shopId: 29,
		orderStatus: "waiting_deal",
		page: "1",
		pageSize: "20"
	},
	currentOrder:null,
	status:{
		merchantStatus:''
	}
}

const mutations = {
	setAddr(state, data) {
		state.selectAddress = data;
	},
	setOrderList(state, data) {
		state.orderList = data;
	},
	setOrder(state, data) {
		state.currentOrder = data;
	},
	saveStatus(state, data) {
		state.status = data;
	}
}


const actions = {
	async fetchOrderList({
		state,
		commit
	}, data) {
		const res = await api.orderList(data);
		if(res instanceof Array){
			commit('setOrderList', res);
		}
	},
	async productRemove({
		state,
		commit,
		dispatch
	}, data) {
		const res = await api.productRemove(data);
		if (res.status === 'ok') {
			// dispatch('product/fetchProductList',null, { root: true });
			uni.showToast({
				title:"删除成功"
			})
		}
	},
	async shopStatus({
		state,
		commit,
		dispatch
	}){
		const res = await shopapi.status();
		commit('saveStatus',res);
	}
}


export default {
	namespaced: true,
	state,
	actions,
	mutations
}

import api from '../../util/api'

const state = {
	productList:[]
}

const getters = {
	
}

const actions = {
	async fetchOldproductList({commit}){
		const res = await api.oldproductList({})
		commit('setProductList',res)
	}
}

const mutations = {
	setProductList(state,data){
		console.log(11111111111111,data.productList)
		state.productList = data.productList
	}
}

export default {
	namespaced:true,
	state,
	getters,
	actions,
	mutations
}
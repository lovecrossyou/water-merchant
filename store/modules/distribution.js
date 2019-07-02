import api from '../../util/api'


export default {
	namespaced: true,
	state: {

		productList: []
	},
	getters: {

		todayCode(state) {
			let lotteryCode = state.orderDetail.lotteryCode;
			if (lotteryCode == null || lotteryCode == undefined) {
				lotteryCode = '-1,-1,-1';
			}
			return lotteryCode.split(',');

		},


	},
	mutations: {
		setProductList(state, payload) {
			let {
				productList

			} = payload;
			state.productList = productList;

		},

	},
	actions: {
		getProductDetail({
			commit
		}, shopProductId) {



			//commit('changeLoadingState');
			api.getProductDetail({
				shopProductId: shopProductId,

			}).then((res) => {


				//console.log(res)
				/* commit('setProductList', {
					productList: res.productList

				}); */
			})
		},
		getDistributionList({
			commit
		}, payload) {



			//commit('changeLoadingState');
			api.getDistributionList({
				categoryType: payload.categoryType, //排序种类，销量（saleMount）价格（price） ,
				sortType: payload.sortType //排序类型,升序（asc）降序（desc）
			}).then((res) => {


				//console.log(res)
				commit('setProductList', {
					productList: res.productList

				});
			})
		},


	}

}

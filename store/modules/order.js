import api from '../../util/api'


export default {
	namespaced: true,
	state: {

		orderList: []
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
		setOrderList(state, payload) {
			let {
				orderList

			} = payload;
			state.orderList = orderList;

		},

	},
	actions: {

		getOrderList({
			commit
		}, orderType) {



			//commit('changeLoadingState');
			api.getOrderList({
				orderType: orderType, 

			}).then((res) => {


				//console.log(res)
				commit('setOrderList', {
					orderList: res

				});
			})
		},



getOrderComment({
			commit
		}) {



			//commit('changeLoadingState');
			api.getOrderComment({orderType: ''}).then((res) => {


				console.log(res)
				/* commit('setOrderList', {
					orderList: res

				}); */
			})
		},
	}

}

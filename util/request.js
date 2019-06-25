import Fly from 'flyio/dist/npm/wx'
import service from "../service"
import {
	TOKEN_KEY
} from "../service"
const request = new Fly()
// export const baseURL = 'http://47.94.169.143:8004'
export const baseURL = 'http://huipay.com/huibeiwater'
// export const baseURL = 'http://47.94.169.143:8004'
// export const baseURL = 'http://192.168.199.101:8004' //家里
// export const baseURL = 'http://192.168.1.235:7001' //公司

// export const baseURL = 'https://api.kuaimayoupin.com'
request.config.baseURL = baseURL

const errorPrompt = (err) => {
	console.log('errorPrompt ', JSON.stringify(err));
	uni.showToast({
		title: err.message || 'fetch data error.',
		icon: 'none'
	})
}

request.interceptors.request.use((request) => {
	let token = uni.getStorageSync(TOKEN_KEY);
	if (!token) {
		token = {};
	}
	let body = Object.assign({}, request.body, {
		accessInfo: token
	})
	request.body = body;
	return request
})

request.interceptors.response.use((response, promise) => {
	uni.hideLoading()
	if (response.data.message) {
		errorPrompt(response.data);
		return Promise.resolve(null);
	}
	return promise.resolve(response.data)
}, (err, promise) => {
	uni.hideLoading()
	errorPrompt(err)
	return promise.reject(err)
})

export default request

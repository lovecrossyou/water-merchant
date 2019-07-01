import Fly from 'flyio/dist/npm/wx'
import service from "../service"
import {
	TOKEN_KEY
} from "../service"
const request = new Fly()
export const baseURL = 'http://huipay.com/huibeiwater'

request.config.baseURL = baseURL;

const errorPrompt = (err) => {
	console.log('errorPrompt ## ', err);
	if(err.status === 500){
		uni.showToast({
		title: err.response.data.message || 'fetch data error.',
		icon: 'none'
	})}
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

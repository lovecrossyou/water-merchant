import request from './request'
import Fly from 'flyio/dist/npm/wx'
import {baseURL} from './request.js'


const shop = { 
	status: () => request.post("/merchantAdmin/status", {}, 'POST'),
	create: data => request.post("/merchantAdmin/shopInfo", data, 'POST')
}

export default shop
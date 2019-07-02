import request from './request'
import Fly from 'flyio/dist/npm/wx'
import {baseURL} from './request.js'


const shop = { 
	status: () => request.post("/merchantAdmin/merchantStatus", {}, 'POST'),
	create: data => request.post("/merchantAdmin/shopInfo", data, 'POST'),
	checkcode:data=> request.post("/checkCode/merchantUser/register",data,'POST'),
	createUser:data=> request.post("/merchantAdmin/createUser",data,'POST'),
	
	changePassword:data=> request.post("/merchantUserMe/changePassword",data,'POST'),
	
	sendCheckCodeOfChangePassword:data=> request.post("/checkCode/changePassword",data,'POST'),
}

export default shop
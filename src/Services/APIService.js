import axios from 'axios';
import config from '../Config';

/*
Name : AXIOS Base 
Purpose : To configure interceptors and required defualt headers
*/

 export default axios.create({
	baseURL:config.APIHOST
});
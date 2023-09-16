import axios from "axios";
const ApiManager=axios.create({
    baseURL:'http://65.1.104.173:443',
    responseType:'json',
    withCredentials:true,
});
export default ApiManager;

export const baseURL="http://52.66.173.135:8000"
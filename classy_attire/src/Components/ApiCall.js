import axios from "axios";

const baseURL = "http://localhost:8080/"

function ApiCall(url,method,data){
    // console.log("test");
    return axios[method.toLowerCase()]
    (`${baseURL}${url}`, data);

}

export default ApiCall;
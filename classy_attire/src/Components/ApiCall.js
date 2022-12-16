// http://localhost:8080

import axios from "axios";

// export default function ApiCall(){
//     return axios.get(`http://localhost:8080/women`)
// };

const baseURL = "http://localhost:8080/"

function ApiCall(url,method,data){
    console.log("test");
    return axios[method.toLowerCase()]
    (`${baseURL}${url}`, data);

}


export default ApiCall;
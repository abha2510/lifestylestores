import ApiCall from "../ApiCall"


export default function handleClick(data){
    ApiCall("cart","post",data)
    .then((response) => {
      // let data=JSON.parse(localStorage.getItem("Selected"))||[]
      console.log(response.data)
      // localStorage.setItem("Selected",JSON.stringify(response.data))
    })
    .catch((e)=>console.log(e))
}
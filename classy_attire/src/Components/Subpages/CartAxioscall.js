import ApiCall from "../ApiCall"

export default function handleClick(data){
    ApiCall("cart","post",data)
    .then((response) => {
      console.log("response")
    })
}
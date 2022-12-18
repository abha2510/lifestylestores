import ApiCall from "../ApiCall"

export default function handleRemove(data){
    ApiCall("cart_remove","post",data)
    .then((response) => {
      console.log(response)
    })
}


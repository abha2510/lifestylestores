import ApiCall from "../ApiCall"

export default function handleRemove(data,id) {
    ApiCall("cart_remove","delete",data,id)
    .then((response) => {
      console.log(response.data.id)
    })
}
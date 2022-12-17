import ApiCall from "../ApiCall"


export default function handleClick(){
    ApiCall()
    .then((response) => {
      // let data=JSON.parse(localStorage.getItem("Selected"))||[]
      console.log(response.data)
      // localStorage.setItem("Selected",JSON.stringify(response.data))
    })
    .catch((e)=>console.log(e))
}
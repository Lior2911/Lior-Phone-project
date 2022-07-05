const WEBAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";

async function getFromApi() {
  try {
   return await fetch(WEBAPI)
    .then(response=>
    response.json()
    )
    .then(res=>
     res.forEach(element => {
      
      phoneCard.innerHTML += `<div class='d-flex  text-light card rounded bg-dark bg-opacity-50'>
      <div><img class='img-card col-md-4 col-sm-12' src='/pages/appImages/iphone.gif'</div>
      <div class='card-text'>
      <div>price :${element.price}</div>
      <div>isAvailable :${element.isAvailable}</div>
      <div>createdAt :${element.createdAt}</div>
      <div>color :${element.color}</div>
      <div>brand :${element.brand}</div>
      <div>ram :${element.ram}</div>
      </div>
 

      <div>`
      
     }))
  
  } catch(error) {
    alert("error")
  } finally {
  }
}
getFromApi()
const WEBAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const MY_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_B7JYHlbfR2P2nV5eK7z5oD59A3rhbF1jag&usqp=CAU";
  const loadingGif = "/pages/appImages/loadingGif.gif"
const phoneCard_ = document.getElementById("phoneCard");
async function getFromApi() {
  try {
    loadingGif.innerHTML = `${loadingGif}`
    return await fetch(WEBAPI)
      .then((response) => response.json())
      .then((res) =>
        res.forEach((element) => {
          phoneCard_.innerHTML += `<div class='col-xs-3 border-2 p-2 col-sm-4
           bg-secondery bg-opacity-50 mb-1 text-dark'>
      
     <img class="w-100 img-thumbnail"  src='${MY_IMG}'/>
  
      <div>price : ${element.price}</div>
      <div>isAvailable :${element.isAvailable}</div>
      <div>createdAt :${element.createdAt}</div>
      <div>color :${element.color}</div>
      <div>brand :${element.brand}</div>
      <div>ram :${element.ram}</div>
    
    
      </div>`;
        })
      );
  } catch (error) {
    alert("error");
  } finally {
    loadingGif.innerHTML = " "
  }
}
getFromApi();

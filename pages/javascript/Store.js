const WEBAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const MY_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_B7JYHlbfR2P2nV5eK7z5oD59A3rhbF1jag&usqp=CAU";
const loading = document.getElementById("loadingGif");

const phoneCard_ = document.getElementById("phoneCard");

getFromApi();
function deletePhone() {
 
}

async function getFromApi() {
  try {
    loading.innerHTML = "<img src='../appImages/loadingGif.gif' alt=''>";
    return await fetch(WEBAPI)
      .then((response) => response.json())
      .then((res) =>
        res.forEach((element) => {
          phoneCard_.innerHTML += `<div id='phone'class='col-xs-3 border-2 p-2 col-sm-4
           bg-secondery bg-opacity-50 mb-1 text-dark'>
      
     <img class="w-100 img-thumbnail"  src='${MY_IMG}'/>
  
      <div>price : ${element.price}</div>
      <div>isAvailable :${element.isAvailable}</div>
      <div>createdAt :${element.createdAt}</div>
      <div>color :${element.color}</div>
      <div>brand :${element.brand}</div>
      <div>ram :${element.ram}</div>
      <div><button id='deletePhoneBtn'  onclick="deletePhone()">delete</button></div>
    
    
      </div>`;
        })
      );
  } catch (error) {
    alert("somthing wrong,please try later");
  } finally {
    loading.innerHTML = " ";
  }
}


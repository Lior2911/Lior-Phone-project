const WEBAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const MY_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_B7JYHlbfR2P2nV5eK7z5oD59A3rhbF1jag&usqp=CAU";
const counter = 0;
async function getFromApi() {
  try {
    return await fetch(WEBAPI)
      .then((response) => response.json())
      .then((res) =>
        res.forEach((element) => {
          phoneCard.innerHTML += `<div class='col-sm-4 col-md-4 text-light border border-primary rounded bg-dark bg-opacity-25'>
         <div >
         <img class="img-card col-md-12 col-sm-12" src=' ${MY_IMG}'/>
         </div>
      <p>price :${element.price}<br>
      isAvailable :${element.isAvailable}<br
      createdAt :${element.createdAt}<br>
      color :${element.color}<br>
      brand :${element.brand}<br>
      ram :${element.ram}</p>
      
      <div>`;
        })
      );
  } catch (error) {
    alert("error");
  } finally {
  }
}
getFromApi();

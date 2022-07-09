const loadGif = document.getElementById("loadingImg")
async function getUserList() {
  let userAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
  loadGif.innerHTML = " <img src='../appImages/loadingGif.gif' alt=''>"
  try {
    return await fetch(userAPI).then(response => 
      response.json()
    )
  } catch (error) {
    alert("somthing wrong,please refresh or wait")
  } finally {
    loadGif.innerHTML = " "
  }
}

function printToTable() {
  let myTable = document.getElementById("userData")
  getUserList()
  .then((res)=>{
    res.forEach(element => {
      myTable.innerHTML += `
      <tr>
      <td class='border-dark border-2'>${element.age}</td>
      <td class='border-dark border-2'>${element.name.first}</td>
      <td class='border-dark border-2'>${element.name.last}</td>
      <td class='border-dark border-2'>${element.email}</td>
      <td class='border-dark border-2'>${element.phone}</td>
      </tr>
      `
      
      
    })
   
  })
}
printToTable()
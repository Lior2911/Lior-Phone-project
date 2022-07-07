async function getUserList() {
  let userAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
  try {
    return await fetch(userAPI).then(response => 
      response.json()
    )
  } catch (error) {
    alert("error")
  } finally {
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
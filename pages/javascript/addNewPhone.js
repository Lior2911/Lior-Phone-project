const WEBAPIUSER = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
async function postToAPI(){
  try{
    const data = {
      id : document.getElementById("idInput").value,
      createdAt : document.getElementById("createdAtInput").value,
      color : document.getElementById("phoneColorInput").value,
      ram :  document.getElementById("ramInput").value,
      brand : document.getElementById("brandInput").value

    }
    return await fetch(WEBAPIUSER,{
      method:"POST",
      body: JSON.stringify(data),
      headers : {
        'content-type':'application/json'
      }
    })
  }
  catch(error){
    alert(error)
  }
  finally{

  }
}


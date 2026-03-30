async function fetchData() {
  let res = await fetch("http://localhost:3000/student");
  try {
    if (!res.ok) {
      throw new Error("something want wrong");
    }
    let data = await res.json();
    // console.log(data)
    showdata(data);
  } catch (error) {
    console.log(error);
  }
}

function showdata(data) {
  let container = document.getElementsByClassName("container")[0];
  let item = document.createElement("div");
  item.innerHTML = data
    .map((std,index) => {
      return `
      <div class= 'card ${index}'>
    <h3>Id:${std.id}</h3>
    <h4>Name:${std.name}</h4>
    <img src='${std.img}' style='width:200px'><br>
    <button id='delbtn${std.id}'>Delete</button>
    <button id='editbtn${std.id}'>Edit</button>
    </div>
     `
     
    }).join("");
    
    

  container.appendChild(item);
  console.log(container)

  data.forEach((std) => {
    let delbtn = document.getElementById(`delbtn${std.id}`);
    let editbtn = document.getElementById(`editbtn${std.id}`);
    delbtn.onclick = () => {
      deletedata(std.id);
    };
    editbtn.onclick=()=>{
      editdata(std.id);
      console.log(std.id)
    }
  });
}

//delete

async function deletedata(id){
  let res=await fetch(`http://localhost:3000/student/${id}`,{"method":"Delete"})
  if(res.ok){
    alert("Delete Successfull")
  }
  else{
    alert("data not Deleted")
  }
}

async function editdata(id){
  let stdid=document.getElementById("id")
  let name=document.getElementById("name")
  let image=document.getElementById("image")
  let res=await fetch(`http://localhost:3000/student/${id}`)
  let data=await res.json();



  stdid.value=data.id
  name.value=data.name
  image.value=data.img
  
}

async function savedata(){
  let stdid=document.getElementById("id").value
  let name=document.getElementById("name").value
  let image=document.getElementById("image").value
  // console.log(name)
  // console.log(image)
  let obj={
    "name":name,
    "img":image
  }

  let stdmethod =stdid?"PUT":"POST"
  let url=stdid?`http://localhost:3000/student/${stdid}`:"http://localhost:3000/student"
  let res=await fetch(url,{
    "method":stdmethod,
    "header":{
      "content-type":"application/json"
    },
    "body":JSON.stringify(obj)

  }
)
if(res.ok){
  alert("Data Updated");
  
}
 
}

document.addEventListener("DOMContentLoaded", fetchData);

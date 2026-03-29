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
    .map((std) => {
      return `
    <p>Id:${std.id}</p>
    <p>Name:${std.name}</p>  
    <button id='delbtn${std.id}'>Delete</button>
    <button id='editbtn${std.id}'>Edit</button>
     `;
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
  console.log(name)
  console.log(image)
}

document.addEventListener("DOMContentLoaded", fetchData);

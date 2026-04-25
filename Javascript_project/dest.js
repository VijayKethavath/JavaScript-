const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});


let cardLength=document.getElementById("card-length") 
let cartdata=JSON.parse(localStorage.getItem("cart")) 
console.log(cartdata)
cardLength.textContent=cartdata.length;

/*********************************************/ 

async function getDestination(){
  try{
    let res=await fetch("http://localhost:3000/Destinations");
    let data=await res.json();
    // console.log(data);
    createDestinationCard(data);
  }catch(error){
    console.log(error);
  }
}
getDestination();

function createDestinationCard(data){
  let destination=document.getElementById("destination")
  data.forEach((obj)=>{
     let card = document.createElement("div");
    card.classList.add("destination-card");

    card.innerHTML = `
      <img src="${obj.image}" class="dest-img">

      <div class="dest-content">
        <p class="dest-country">${obj.country}</p>

        <h3 class="dest-title">${obj.place}</h3>

        <button class="dest-btn">${obj.button}</button>
      </div>
    `;

     card.onclick=function(){
      console.log(obj)
      localStorage.setItem("stories",obj.id)
      window.location.href="singlepage.html"
    }

    destination.appendChild(card);

  }
  )
}
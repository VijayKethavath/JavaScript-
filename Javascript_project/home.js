const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});


let cardLength=document.getElementById("card-length") 
let cartdata=JSON.parse(localStorage.getItem("cart")) 
console.log(cartdata)
cardLength.textContent=cartdata.length;
/******************************latest***************************************/

async function getData() {
  try {
    let res = await fetch("http://localhost:3000/latestStories");
    let data = await res.json();
    createStoryCard(data);
  } catch (error) {
    console.log(error);
  }
}
getData();

function createStoryCard(data) {
  const container = document.getElementById("stories-container");
  data.forEach((data) => {
    let div = document.createElement("div");

    div.innerHTML = `
    <img src="${data.image}" alt="${data.title}" class="card-img">

      <div class="card-content">
        <p class="meta">
          ${data.date} • ${data.readTime}
        </p>

        <h3 class="title">
          ${data.title}
        </h3>

        <button class="read-btn">READ STORY</button>
      </div>

      
    `;
    div.onclick = function () {
      console.log(data);
      localStorage.setItem("stories", data.id);
      window.location.href = "singlepage.html";
    };

    container.appendChild(div);

    // let img=document.createElement("img")
    // img.src=data.image;
    // div.appendChild(img)
  });
}

/******************************trips**************************************/


async function gettrips() {
  try {
    let res = await fetch("http://localhost:3000/latestTrips");
    let data = await res.json();
    // console.log(data);
    createTripsCard(data);
  } catch (error) {
    console.log(error);
  }
}
gettrips();

function createTripsCard(data) {
  let trip = document.getElementById("trip");
  data.forEach((obj) => {
    let card = document.createElement("div");
    card.classList.add("trip-card");

    card.innerHTML = `
  <img src="${obj.image}" class="trip-img">

  <div class="trip-content">
    <p class="trip-duration">${obj.duration.toUpperCase()}</p>

    <h3 class="trip-title">${obj.title}</h3>

    <div class="trip-footer">
      <button class="book-btn">BOOK NOW</button>

      <div class="price-box">
        <p class="price">FROM $${obj.price}</p>
        <span class="per">per person</span>
      </div>
    </div>
  </div>
`;
    card.onclick=function(){
      console.log(obj)
      localStorage.setItem("stories",obj.id)
      window.location.href="singlepage.html"
    }

    trip.appendChild(card);
  });
}

/****************************Destination***********************/ 

async function getDestination(){
  try{
    let res=await fetch("http://localhost:3000/featuredDestinations");
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
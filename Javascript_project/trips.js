const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});
/*************************************************************/

let cardLength=document.getElementById("card-length") 
let cartdata=JSON.parse(localStorage.getItem("cart")) 
// console.log(cartdata)
cardLength.textContent=cartdata.length;

/******************************trips**************************************/


async function gettrips() {
  try {
    let res = await fetch("http://localhost:3000/Trip");
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


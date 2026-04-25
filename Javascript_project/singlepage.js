let id = localStorage.getItem("stories");

if (id < 100) {
  getsingleStory();
} else if (id > 100 && id < 200) {
  getsingleTrip();
} else if (id > 200 && id < 300) {
  getsingleDestination();
} else if (id > 300 && id < 400) {
  getsingleBook();
} else if (id > 400 && id < 500){
  getsingleTrips();
}else{
   getsingleDestinations();
}

/**********************************************************************/

async function getsingleStory() {
  try {
    let res = await fetch(`http://localhost:3000/latestStories/${id}`);
    let data = await res.json();
    singleStory(data);
  } catch (error) {
    console.log(error);
  }
}

function singleStory(data) {
  let single = document.getElementById("single");
  let div = document.createElement("div");

  div.innerHTML = `
   
    <h1 class="title">${data.title}</h1>

    <p class="meta">
      ${data.date} • ${data.readTime}
    </p>

    <img src="${data.image}" class="main-img">

    <div class="description">
      ${data.description.map((p) => `<p>${p}</p>`).join("")}
    </div>
  `;
  single.appendChild(div);
  console.log(single);
}

/**********************************************************************/

async function getsingleTrip() {
  try {
    let res = await fetch(`http://localhost:3000/latestTrips/${id}`);
    let data = await res.json();
    singleTrip(data);
  } catch (error) {
    console.log(error);
  }
}

function singleTrip(trip) {
  let single = document.getElementById("single1");
  let div = document.createElement("div");

  div.classList.add("single-trip");

  div.innerHTML = `
  <h1 class="single-title">${trip.title}</h1>

  <div class="single-meta">
    <span class="meta-box">${trip.duration}</span>
    <span class="price-box">FROM ${trip.currency} $${trip.price.toLocaleString()}</span>
  </div>

  <img src="${trip.image}" class="single-img">

  <div class="single-desc">
    ${trip.description.map((p) => `<p>${p}</p>`).join("")}
  </div>

  <button class="book-btn">Add to cart</button>
 `;

  let btn = div.querySelector(".book-btn");
  btn.addEventListener("click", () => {
    getbutton(trip);
  });
  //  console.log(div)
  single.appendChild(div);
}

/***************************************************************************/

async function getsingleDestination() {
  try {
    let res = await fetch(`http://localhost:3000/featuredDestinations/${id}`);
    let data = await res.json();
    singleDestination(data);
  } catch (error) {
    console.log(error);
  }
}

function singleDestination(data) {
  let single = document.getElementById("single1");
  single.innerHTML = "";

  let div = document.createElement("div");
  div.classList.add("dst-container");
  // console.log(div)

  div.innerHTML = `
    <h1 class="dst-title">${data.place}</h1>

    <p class="dst-country">${data.country}</p>

    <img src="${data.image}" class="dst-img">

    <p class="dst-about">${data.about}</p>

    <div class="dst-desc">
      ${data.description.map((item) => `<p class="dst-text">${item}</p>`).join("")}
    </div>

    <h3 class="dst-must-title">Must Visit Places</h3>

    <ul class="dst-must-list">
      ${data.mustVisit.map((item) => `<li class="dst-must-item">${item}</li>`).join("")}
    </ul>

    <div class="dst-btn-container">
      <button class="dst-book-btn" onclick="window.location.href='trips.html' " >Discover More Trips</button>
    </div>
  `;

  single.appendChild(div);
}

/***************************************************************************/

async function getsingleBook() {
  try {
    let res = await fetch(`http://localhost:3000/books/${id}`);
    let data = await res.json();
    singleBook(data);
  } catch (error) {}
}

function singleBook(book) {
  let single = document.getElementById("single1");

  let div = document.createElement("div");
  div.classList.add("single-book");

  div.innerHTML = `
    
    <h1 class="sb-title">${book.title}</h1>

    <p class="sb-meta">
      By ${book.author} • ${book.publishedDate} • ${book.language}
    </p>

    <img src="${book.image}" class="sb-img">

    <p class="sb-price">
      Rs. ${book.price.toLocaleString()} ${book.currency}
    </p>

    <div class="sb-overview">
      <h3>Overview</h3>
      <p>${book.overview}</p>
    </div>

    <div class="sb-details">
      <h3>Details</h3>
      <ul>
        ${book.details.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>

    <button class="sb-btn">Add to cart</button>
   `;
    

   single.appendChild(div);

   let btn = div.querySelector(".sb-btn");
   btn.addEventListener("click", () => {
    getbutton(book);
   })
  }


/**********************************************************************/

async function getsingleTrips() {
  try {
    let res = await fetch(`http://localhost:3000/Trip/${id}`);
    let data = await res.json();
    singleTrips(data);
  } catch (error) {
    console.log(error);
  }
}

function singleTrips(trip) {
  let single = document.getElementById("single1");
  let div = document.createElement("div");

  div.classList.add("single-trip");

  div.innerHTML = `
  <h1 class="single-title">${trip.title}</h1>

  <div class="single-meta">
    <span class="meta-box">${trip.duration}</span>
    <span class="price-box">FROM ${trip.currency} $${trip.price.toLocaleString()}</span>
  </div>

  <img src="${trip.image}" class="single-img">

  <div class="single-desc">
    ${trip.description.map((p) => `<p>${p}</p>`).join("")}
  </div>

  <button class="book-btn">Add to cart</button>
`;

  single.appendChild(div);
   let btn = div.querySelector(".book-btn");
   btn.addEventListener("click", () => {
    getbutton(trip);
   })
}

/***************************************************************************/

async function getsingleDestinations() {
  try {
    let res = await fetch(`http://localhost:3000/Destinations/${id}`);
    let data = await res.json();
    singleDestinations(data);
  } catch (error) {
    console.log(error);
  }
}

function singleDestinations(data) {
  let single = document.getElementById("single1");
  single.innerHTML = "";

  let div = document.createElement("div");
  div.classList.add("dst-container");
  // console.log(div)

  div.innerHTML = `
    <h1 class="dst-title">${data.place}</h1>

    <p class="dst-country">${data.country}</p>

    <img src="${data.image}" class="dst-img">

    <p class="dst-about">${data.about}</p>

    <div class="dst-desc">
      ${data.description.map((item) => `<p class="dst-text">${item}</p>`).join("")}
    </div>

    <h3 class="dst-must-title">Must Visit Places</h3>

    <ul class="dst-must-list">
      ${data.mustVisit.map((item) => `<li class="dst-must-item">${item}</li>`).join("")}
    </ul>

    <div class="dst-btn-container">
      <button class="dst-book-btn" onclick="window.location.href='trips.html' " >Discover More Trips</button>
    </div>
  `;

  single.appendChild(div);
}

/***************************************************************************/


/***************************************************************************/

function getcartDetails() {
  let cartdata = localStorage.getItem("cart");
  // console.log(cartdata);
  if (cartdata == null) {
    return [];
  } else {
    return JSON.parse(cartdata);
  }
}
let cart = getcartDetails();
// console.log(cart);

function getbutton(data) {
  cart.push(data);
  // console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("The card was added successfully")
  count++
  cardLength.textContent=count;
}

let cardLength=document.getElementById("card-length")
let count=cart.length
cardLength.textContent=count;
console.log(cardLength)

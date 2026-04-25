let cart = JSON.parse(localStorage.getItem("cart"));
// console.log(cart);
// console.log(typeof cart);

let bg = document.getElementById("bg");
let total=0;

function displaycard() {
  bg.innerHTML = "";

  cart.forEach((data, index) => {
     
    // console.log(data);
    let div = document.createElement("div");
    div.classList.add("cart-items");
    div.innerHTML = `

    <img src="${data.image}" class="cart-img"/>
 
   <div class="cart-content">
    <h3>${data.title}</h3>
    <p class="price">Price: ₹${data.price}</p>
    <button onclick="deleteItem(${index})" class="delete-btn">Delete</button>
   </div>`;

      
    bg.appendChild(div);
    total+=Number(data.price);
   
   });
  
    let totaldiv=document.createElement("div")
    totaldiv.classList.add("total-box");

    totaldiv.innerHTML = `
  <div class="total-content">
    <h3>Total Price</h3>
    <h1>₹${total}</h1>
    <button class="buy-btn" onclick="proceedToBuy()">Proceed to Buy</button>
  </div> 
   `;

    bg.appendChild(totaldiv)
    
}

function deleteItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  total=0;
  displaycard();
}

displaycard();

function proceedToBuy() {
  if (cart.length === 0) {
    alert("Cart is empty!");
  } else {
    window.location.href="form.html"
  }
}

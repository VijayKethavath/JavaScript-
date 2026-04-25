const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

let cardLength=document.getElementById("card-length") 
let cartdata=JSON.parse(localStorage.getItem("cart")) 
// console.log(cartdata)
cardLength.textContent=cartdata.length;

/*****************************book img*********************/  

async function getBook() {
  try {
    let res=await fetch("http://localhost:3000/books")
    let data=await res.json();
    // console.log(data);
    createCardBook(data);
    
  } catch (error) {
    console.log(error)
  }
  
}
getBook()

function createCardBook(data) {
  let bk = document.getElementById("bk");

  data.forEach((book) => {

    let div = document.createElement("div");
    div.classList.add("bk-card");

    div.innerHTML = `
      <div class="bk-img-box">
      
        <img src="${book.image}" class="bk-img">
      </div>

      <p class="bk-type">BOOK</p>

      <h3 class="bk-title">${book.title}</h3>

      <div class="bk-line"></div>

      <p class="bk-price">
        Rs. ${book.price.toLocaleString()} ${book.currency}
      </p>
    `;

    div.onclick=function(){
      console.log(book)
      localStorage.setItem("stories",book.id)
      window.location.href="singlepage.html"
    }

   

    bk.appendChild(div);
  });
}
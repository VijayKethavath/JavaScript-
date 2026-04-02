

let ran = Math.floor(Math.random() * 10);
console.log(ran);

let mt = document.getElementById("mt");
let btnrt = document.getElementById("btnrt");

btnrt.onclick = () => {
   ran = Math.floor(Math.random() * 10);
  console.log(ran);
  input.value = "";
  mt.innerText = "";
  count=0;
};

let input = document.getElementById("input");
let btnck = document.getElementById("btnck");

let count = 0;
btnck.onclick = () => {

  // console.log(ran);
  // console.log(input.value);
  count++;
  if (input.value == "" || input.value > 10 || input.value<0) {
    mt.innerText = "Please choice a Number in between 1-10";
     mt.style.color = "#dc3545"
  } else {
    if (input.value > ran) {
      mt.innerText = "Too High!";
      mt.style.color = "#fd7e14"
    } else if (input.value < ran) {
      mt.innerText = "Too low!";
       mt.style.color = "#fd7e14";
    } else {
      mt.innerText = `Correct! 🎊 You Guessed it in ${count} attempts`;
      mt.style.color = "#28a745"
      
    }
  }
  input.value = ""
};

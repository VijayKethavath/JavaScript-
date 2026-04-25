let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".rstbtn");
console.log(boxes)

let turn = true;

let patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      box.style.color = "#22d3ee";
      turn = false;
    } else {
      box.innerText = "X";
      box.style.color = "#fb7185";
      turn = true;
    }
    box.disabled = true;
    count++;

    if (count>9 ) {
      let msg = document.getElementById("msg");
      msg.innerText = "It's a Draw 🤝";
      msg.style.color = "#333";
    } else {
      checkwin();
    }
  });
});

function checkwin() {
  for (let pattern of patterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos1 === pos3) {
        console.log(pattern);
        showWin(pos1);
         boxes[pattern[0]].classList.add("win");
        boxes[pattern[1]].classList.add("win");
        boxes[pattern[2]].classList.add("win");
      }
    }
  }
}

function showWin(winner) {
  let msg = document.getElementById("msg");
  msg.innerText = `Congratulations, Winner is ${winner} 🎉`;
  msg.style.color = "#333";
  boxdisable();
}
function boxdisable() {
  for (box of boxes) {
    box.disabled = true;
  }
}

rstbtn.addEventListener("click", () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
    let msg = document.getElementById("msg");
    msg.innerText = "";
    count = 0;
    box.classList.remove("win")
  }
});

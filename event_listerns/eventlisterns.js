//Event Listeners

//element.addEventListner("click", function()); - syntax

//click
// const btnTwoEL = document.querySelector(".btn-2");
// console.log(btnTwoEL);
// btnTwoEL.addEventListener("click", alertBtn);
// function alertBtn() {
//   alert("I LLL");
// }

// const btnThreeEL = document.querySelector(".btn-3");
// console.log(btnThreeEL);
// function changeBtn() {
//   btnThreeEL.style.color = "red";
// }
// btnThreeEL.addEventListener("click", changeBtn);

//Mouse Over

// const boxThreeEL = document.querySelector(".box-3");
// function changeBG() {
//   boxThreeEL.style.background = "none";
// }

// boxThreeEL.addEventListener("mouseover", changeBG);

//Reveal

const revealBtnEl = document.querySelector(".reveal-btn");
const hiddenTxtEl = document.querySelector(".hidden-text");

function revealText() {
  if (hiddenTxtEl.classList.contains("reveal-btn")) {
    hiddenTxtEl.classList.remove("reveal-btn");
  } else {
    hiddenTxtEl.classList.add("reveal-btn");
  }
}

revealBtnEl.addEventListener("click", revealText);

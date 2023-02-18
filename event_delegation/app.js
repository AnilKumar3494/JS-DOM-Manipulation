//Event Delegation
//It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector

// document.querySelector("#football").addEventListener("click", function (e) {
//   const target = e.target;
//   console.log("Football clicked");
//   target.style.background = "grey";
// });

// const golfEl = document.querySelector("#golf");
// golfEl.addEventListener("click", changeBg);

// function changeBg() {
//   console.log("Golf if clicked");
//   golfEl.style.background = "grey";
// }

//====Using Delegation===
//Using this saves lines of code, improves and saves memory

const containerEL = document.querySelector(".container");

containerEL.addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + "-" + "id is clicked");
  //adding style
  const targetEl = e.target;
  console.log(targetEl);
  targetEl.style.background = "grey";
  targetEl.style.color = "black";
});

//creating a new list item

const newGamesEl = document.createElement("li");
newGamesEl.setAttribute("class", "games");
newGamesEl.setAttribute("id", "cricket");
newGamesEl.innerText = "cricket";

containerEL.appendChild(newGamesEl);

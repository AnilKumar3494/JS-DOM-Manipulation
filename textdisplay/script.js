const buttonEl = document.getElementById("openbtn");
const msgContainerEl = document.querySelector(".msg-container");
const closeBtnEl = document.querySelector(".close");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", function () {
  msgContainerEl.style.display = "block";
  bodyEl.setAttribute("class", "active");
  bodyEl.toggleAttribute("class", "active");
});

closeBtnEl.addEventListener("click", function () {
  msgContainerEl.style.display = "none";
});

//Click Anywhere expect on container to close
window.addEventListener("click", function (e) {
  //   console.log(e.target);

  if (e.target === bodyEl) {
    msgContainerEl.style.display = "none";
  }
});

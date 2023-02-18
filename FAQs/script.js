const questionsEl = document.getElementsByClassName("questions");

const plusIcon = document.querySelector(".fa-circle-plus");
const minusIcon = document.querySelector(".fa-circle-minus");

// const answerEl = document.querySelectorAll(".answer");
// console.log(answerEl);

for (let i = 0; i < questionsEl.length; i++) {
  questionsEl[i].addEventListener("click", function (e) {
    this.classList.toggle("active");
  });
}

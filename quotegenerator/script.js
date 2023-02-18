const quotesArr = [
  {
    text: `"Be the change you want to see in the world."`,
    person: "Mahatma Gandhi",
  },
  {
    text: `"Not all those who wander are lost."`,
    person: "J.R.R. Tolkien",
  },
  {
    text: `"The only way to do great work is to love what you do."`,
    person: "Steve Jobs",
  },
  {
    text: `"The best way to predict the future is to invent it."`,
    person: "Alan Kay",
  },
  {
    text: `"If you want to achieve greatness, stop asking for permission."`,
    person: "Unknown",
  },
  {
    text: `"I have not failed. I've just found 10,000 ways that won't work."`,
    person: "Thomas Edison",
  },
  {
    text: `"Believe you can and you're halfway there.",
    person: "Theodore Roosevelt"`,
  },
  {
    text: `"The journey of a thousand miles begins with one step."`,
    person: "Lao Tzu",
  },
  {
    text: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person: "Winston Churchill",
  },
  {
    text: `"I can't change the direction of the wind, but I can adjust my sails to always reach my destination."`,
    person: "Jimmy Dean",
  },
  {
    text: `"In the end, we will remember not the words of our enemies, but the silence of our friends."`,
    person: "Martin Luther King Jr.",
  },
  {
    text: `"Happiness is not something ready made. It comes from your own actions."`,
    person: "Dalai Lama",
  },
  {
    text: `"All our dreams can come true, if we have the courage to pursue them."`,
    person: "Walt Disney",
  },
  {
    text: `"Do what you can, with what you have, where you are."`,
    person: "Theodore Roosevelt",
  },
  {
    text: `"The future belongs to those who believe in the beauty of their dreams."`,
    person: "Eleanor Roosevelt",
  },
];

const buttonEl = document.querySelector("button");
const quoteEl = document.querySelector(".quote");
const nameEl = document.querySelector(".name");

buttonEl.addEventListener("click", function () {
  let randomNum = Math.floor(Math.random() * quotesArr.length);
  console.log(randomNum);
  quoteEl.innerText = quotesArr[randomNum].text;
  nameEl.innerText = quotesArr[randomNum].person;
});

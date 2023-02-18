// ------Selectors------

// let mainHeadingEl = document.getElementById("main-heading");
// console.log(mainHeadingEl);

// let containerEl = document.getElementsByClassName("container");
// console.log(containerEl);

// let listItemsEl = document.getElementsByClassName("list-items");
// console.log(listItemsEl);

// let listItemsEl = document.getElementsByTagName("li");
// console.log(listItemsEl);

// let containerEl = document.querySelector("div");
// console.log(containerEl);

// let listItemsEls = document.querySelectorAll("li");
// console.log(listItemsEls);

// ------Selectors End------

//---------------------------NEXT------

//----Styling Elements----

// const mainContainerEl = document.querySelector("#main-heading");
// console.log(mainContainerEl);
// //--inline styling
// mainContainerEl.style.color = "red";

// const listItemsEL = document.querySelectorAll(".list-items");
// console.log(listItemsEL);
// //--Multiple inline styling
// for (let i = 0; i <= listItemsEL.length; i++) {
//   listItemsEL[i].style.fontSize = "2rem";
// }

//----Styling Elements End----

//---------------------------NEXT------

//----Creating Elements and Appending---

// const ulEL = document.querySelector("ul");
// const newLi = document.createElement("li"); //Just Creating and not adding new element to DOM
// ulEL.append(newLi); //append to add to DOM

// newLi.innerText = "DC"; //adding text to new element

//----Creating Elements and Appending END---

//---------------------------NEXT------

//various text manipulation methods
// const firstListItemEl = document.querySelector(".list-items");
// console.log(firstListItemEl.innerText + " --innerText - Displays normal text");
// console.log(
//   firstListItemEl.textContent +
//     " --textContent - Displays same way as in HTML file"
// );

// //Using innerHTML has security issues so, its encouraged not to use this
// console.log(
//   firstListItemEl.innerHTML + " --innerHTML - Displays exact HTML with tags"
// );

//various text manipulation methods END

//---------------------------NEXT------

//----------Modifications-----

//Modifying Attributes & Classes
// newLi.setAttribute("class", "list-items");
// newLi.removeAttribute("class", "list-items");

// //using another method
// newLi.classList.add("list-items");
// newLi.classList.remove("list-items"); //similarly remove

// console.log(newLi.classList.contains("list-items"));
// newLi.remove(); //to remove new ListItemEl

//----------Modifications END-----

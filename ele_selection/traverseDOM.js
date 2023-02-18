//Traverse the DOM

const ulEl = document.querySelector("ul");

//Parent Traversal

// console.log(ulEl.parentElement);
// console.log(ulEl.parentNode);

// const htmlEl = document.documentElement;

// console.log(htmlEl.parentElement);
// console.log(htmlEl.parentNode); //gets the node in DOM tree

//Parent Traversal END

//Child Traversal

//childNodes
// console.log(ulEl.childNodes); //Check output it gets text + li
// console.log(ulEl.firstChild);
// console.log(ulEl.lastChild);
// ulEl.childNodes[1].style.backgroundColor = "green";

//childElement
// console.log(ulEl.children);
// console.log(ulEl.firstElementChild);

//Child Traversal END

//Sibling Traversal

// const containerEl = document.querySelector("div");
// console.log(containerEl.childNodes); //check this OP for clarification

// //Node
// console.log(ulEl.previousSibling); //these return text because it retuns node
// console.log(ulEl.nextSibling);

// //Element
// console.log(ulEl.previousElementSibling);
// console.log(ulEl.nextElementSibling); //returns null as there are no other siblings

//Sibling Traversal END

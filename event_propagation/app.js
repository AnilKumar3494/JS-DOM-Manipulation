//Event Propagation

//===Ture and False explained===
//If third argument is set to true, which means that the event listener is registered as a capturing listener. This means that the event will first be captured by the outermost element in the DOM hierarchy and then propagated down to the target element. In this case, the event listener will be triggered before any other event listener that is registered on the target element.
//If the third argument is not specified, or it is set to false by default. This means that the event listener is registered as a bubbling listener. This means that the event will first be triggered on the target element and then propagated up to the outermost element in the DOM hierarchy. In this case, the event listener will be triggered after any other event listener that is registered on the target element.
//===Ture and False explained END===

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  false //if true then Event Capturing Happens
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  false
);

document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    // e.stopPropagation(); //used to stop the flow
    console.log("Div -2");
  },
  { once: true } // to use it only once
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("Div -1");
  },
  false
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    //e - event object
    console.log(e);
    console.log(e.target); //display target element
    console.log((e.target.innerHTML = "Clicked!"));
  },
  false
);

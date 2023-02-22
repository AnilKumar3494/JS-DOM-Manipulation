const addTaskBtnEl = document.getElementById("add-task");

const containerEl = document.getElementById("task-input-container");

//Getting Task
addTaskBtnEl.addEventListener("click", function () {
  const inputEl = document.getElementById("input-task");
  let inputTaskValue = inputEl.value.trim();

  if (inputTaskValue === "") {
    //Set Error
    const newErrorMsgEl = document.createElement("span");
    window.alert("Enter a Task To-Do");
  } else {
    console.log(inputTaskValue);
    // setSuccess(inputTaskValue);
    addNewTask(inputTaskValue);
  }
});

//Adding new Task
function addNewTask(inputTaskValue) {
  const newTaskContainerEl = document.getElementById("new-task-container");

  newTaskEl = document.createElement("div");
  newTaskContainerEl.appendChild(newTaskEl);

  //Setting Attributes
  newTaskEl.setAttribute("id", "new-task");

  const newTaskItemEl = document.createElement("p");
  newTaskEl.appendChild(newTaskItemEl);
  newTaskItemEl.setAttribute("id", "new-task-item");
  newTaskItemEl.innerText = inputTaskValue;

  //Creating Div for Completed and Delete
  newOperationsDiv = document.createElement("div");
  newTaskEl.appendChild(newOperationsDiv);
  newOperationsDiv.setAttribute("id", "operations");

  setCompleted(newOperationsDiv, newTaskItemEl);
  deleteTask(newOperationsDiv, newTaskEl);
}

//Completed Function
function setCompleted(newOperationsDiv, newTaskItemEl) {
  const completedBtnEl = document.createElement("i");
  newOperationsDiv.appendChild(completedBtnEl);
  completedBtnEl.setAttribute("class", "fa-solid fa-check");

  completedBtnEl.addEventListener("click", function () {
    console.log("Task Completed");
    console.log(newTaskItemEl);
    newTaskItemEl.style.textDecoration = "line-through";
  });
}

//Delete Function
function deleteTask(newOperationsDiv, newTaskEl) {
  const deleteBtnEl = document.createElement("i");
  newOperationsDiv.appendChild(deleteBtnEl);
  deleteBtnEl.setAttribute("class", "fa-solid fa-trash");

  deleteBtnEl.addEventListener("click", function () {
    console.log("Task Deleted");
    console.log(newTaskEl);
    newTaskEl.style.display = "none";
  });
}

// //Setting Error If Input is Empty
// function setError(newErrorMsgEl, errMsg) {
//   containerEl.appendChild(newErrorMsgEl);
//   newErrorMsgEl.setAttribute("class", "error-msg");
//   newErrorMsgEl.innerText = errMsg;
// }

// //Setting Success If Input is has Value
// function setSuccess(inputTaskValue) {
//   const errorMsgEl = document.querySelector(".error-msg");
//   if (!(errorMsgEl === null)) {
//     if (!(inputTaskValue === "")) {
//       console.log(inputTaskValue);
//       console.log(errorMsgEl);
//       errorMsgEl.style.display = "none";
//     }
//   }
// }

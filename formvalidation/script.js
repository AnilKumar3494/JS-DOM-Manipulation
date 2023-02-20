const formEL = document.getElementById("form");

formEL.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});

//checking Inputs Fun START
function checkInputs() {
  //Grabbing input elements by id
  const usernameEl = document.getElementById("username");
  const emailEl = document.getElementById("email");
  const passwordEl = document.getElementById("password");
  const passwordcheckEl = document.getElementById("passwordcheck");

  //getting value from input
  let userNameValue = usernameEl.value.trim();
  let emailValue = emailEl.value.trim();
  let passwordValue = passwordEl.value.trim();
  let passwordcheckValue = passwordcheckEl.value.trim();

  //for username START
  if (userNameValue === "") {
    //set error class
    //disp error msg
    setError(usernameEl, "User Name Cannot be Empty");
  } else {
    //set success class
    setSuccess(usernameEl, userNameValue);

    //for email START
    if (emailValue === "") {
      setError(emailEl, "Email is Required");
    } else if (!emailVerification(emailValue)) {
      setError(emailEl, "Enter Valid Email");
    } else {
      setSuccess(emailEl);

      //for password START
      if (passwordValue === "") {
        setError(passwordEl, "Password Cannot Be Empty");
      } else {
        setSuccess(passwordEl, passwordValue);

        //for passwordCheck START
        if (passwordcheckValue === "") {
          setError(passwordcheckEl, "Re-Enter the Password");
        } else if (passwordcheckValue !== passwordValue) {
          setError(passwordcheckEl, "Password Did not Match");
        } else {
          setSuccess(passwordcheckEl);
        }
        //for passwordCheck END
      } //for password END
    } //for email END
  } //for username END
} //checking Inputs Fun END

//Error Function
function setError(input, errMsg) {
  //adding Error Class
  const formItemEl = input.parentElement;
  formItemEl.classList = "form-items error";
  //   console.log(formItemEl);

  //Changing Span Element
  //   const spanEl = input.nextElementSibling;
  const spanEl = formItemEl.querySelector("span");
  spanEl.innerText = errMsg;
  console.log(spanEl);
}

//Success Function
function setSuccess(input, inputText) {
  //   console.log(inputText);

  //Adding Success Class
  const formItemEl = input.parentElement;
  formItemEl.classList = "form-items success";
}

//Email Verification - Returns true if email is valid
function emailVerification(emailValue) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailValue
  );
}

// function validateEmail() {
//     var middleBeginning = emailInput.value.indexOf('@') + 1;
//     var middleEnd = emailInput.value.lastIndexOf('.');
//     var middle = emailInput.value.substring(middleBeginning, middleEnd);
//     var dot = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/;
//     var symbolRegex = /[^a-zA-Z0-9.]/;
//     var testRegex = /^[^@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
//     if (middle.includes(".")) {
//       errorBtn.innerText = "Invalid Email";
//       daddy.appendChild(errorBtn);
//       errorBtn.appendChild(errorImg);
//       loginBorder.style.borderBottom = "2px solid var(--error-red)";
//       emailPassed = false;
//       beginningEmailFlag = false;
//       return;
//     } else if (emailInput.value.trim() === "") {
//       errorBtn.innerText = "Email required";
//       daddy.appendChild(errorBtn);
//       errorBtn.appendChild(errorImg);
//       loginBorder.style.borderBottom = "2px solid var(--error-red)";
//       emailPassed = false;
//       beginningEmailFlag = false;
//       return;
//     } else if (testRegex.test(emailInput.value)) {
//        if (emailInput.value.includes(" ")) {
//         errorBtn.innerText = "Extra space detected";
//         daddy.appendChild(errorBtn);
//         errorBtn.appendChild(errorImg);
//         loginBorder.style.borderBottom = "2px solid var(--error-red)";
//         emailPassed = false;
//         beginningEmailFlag = false;
//         return;
//       } else if (emailInput.value.indexOf('@') < 2) {
//         errorBtn.innerText = "Email too short";
//         daddy.appendChild(errorBtn);
//         errorBtn.appendChild(errorImg);
//         loginBorder.style.borderBottom = "2px solid var(--error-red)";
//         emailPassed = false;
//         beginningEmailFlag = false;
//         return;
//       } else if (symbolRegex.test(emailInput.value.slice(emailInput.value.indexOf('@') +1 ,
//         emailInput.value.indexOf('.'))) ||
//         (symbolRegex.test(emailInput.value.slice(0, emailInput.value.indexOf('@')))) ||
//         (symbolRegex.test(emailInput.value.slice(emailInput.value.indexOf('.') +5)))) {
//         errorBtn.innerText = "Invalid character";
//         daddy.appendChild(errorBtn);
//         errorBtn.appendChild(errorImg);
//         loginBorder.style.borderBottom = "2px solid var(--error-red)";
//         emailPassed = false;
//         beginningEmailFlag = false;
//         return;
//       } else if (!dot.test(emailInput.value)) {
//         errorBtn.innerText = "Invalid Email";
//         daddy.appendChild(errorBtn);
//         errorBtn.appendChild(errorImg);
//         loginBorder.style.borderBottom = "2px solid var(--error-red)";
//         emailPassed = false;
//         beginningEmailFlag = false;
//         return;
//       } else if (emailPassed === true){
//         loginBorder.style.borderBottom = "2px solid var(--green)"
//           if (!beginningEmailFlag){
//             daddy.removeChild(errorBtn);
//           }
//         return;
//       } else if (emailInput.value.length >= 30) {
//         errorBtn.innerText = "TLDR Lol";
//         daddy.appendChild(errorBtn);
//         errorBtn.appendChild(errorImg);
//         loginBorder.style.borderBottom = "2px solid var(--error-red)";
//         emailPassed = false;
//         beginningEmailFlag = false;
//         return;
//       } else {
//         loginBorder.style.borderBottom = "2px solid var(--green)"
//         emailPassed = true;
//         beginningEmailFlag = true;
//         return;
//       }
//     } else {
//       errorBtn.innerText = "Invalid Email";
//       daddy.appendChild(errorBtn);
//       errorBtn.appendChild(errorImg);
//       loginBorder.style.borderBottom = "2px solid var(--error-red)";
//       return;
//     }
//   }
function validateEmail() {
  var middleBeginning = emailInput.value.indexOf('@') + 1;
  var middleEnd = emailInput.value.lastIndexOf('.');
  var middle = emailInput.value.substring(middleBeginning, middleEnd);
  var dot = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/;
  var symbolRegex = /[^a-zA-Z0-9.]/;
  var testRegex = /^[^@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (middle.includes(".")) {
    logInValidationError("Invalid Email");
    signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
  } else if (emailInput.value.trim() === "") {
    logInValidationError("Email required");
    signUpValidationError("Email required", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
  } else if (testRegex.test(emailInput.value)) {
     if (emailInput.value.includes(" ")) {
      logInValidationError("Extra space detected");
      signUpValidationError("Extra space detected", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
    } else if (emailInput.value.indexOf('@') < 2) {
      logInValidationError("Email too short");
      signUpValidationError("Email too short", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
    } else if (symbolRegex.test(emailInput.value.slice(emailInput.value.indexOf('@') +1 ,
      emailInput.value.indexOf('.'))) ||
      (symbolRegex.test(emailInput.value.slice(0, emailInput.value.indexOf('@')))) ||
      (symbolRegex.test(emailInput.value.slice(emailInput.value.indexOf('.') +5)))) {
      logInValidationError("Invalid character");
      signUpValidationError("Invalid character", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
    } else if (!dot.test(emailInput.value)) {
      logInValidationError("Invalid Email");
      signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
    } else if (emailPassed === true){
      loginBorder.style.borderBottom = "2px solid var(--green)"
        if (!beginningEmailFlag) {
          daddy.removeChild(errorBtn);
        }
    } else if (emailInput.value.length >= 30) {
      logInValidationError("TLDR Lol");
      signUpValidationError("TLDR Lol", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
    } else {
      logInValidationSuccess();
      signUpValidationSuccess(isEmail);
    }
  } else {
    logInValidationError("Invalid Email");
    signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
  }
}
  function signUpValidationError(text, label, className, parent, flag) {
    var child = document.createElement('label');
    child.innerHTML = text;
    child.classList.add(className);
    child.classList.add("small");
    child.classList.add('reveal');
    parent.appendChild(child);
    label.classList.remove('hidden');
    label.classList.add('reveal');
    return flag = false;
  }
  function signUpValidationSuccess(flag) {
    return flag = true;
  }
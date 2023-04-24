function validateEmail() {
    var middleBeginning = emailInput.value.indexOf('@') + 1;
    var middleEnd = emailInput.value.lastIndexOf('.');
    var middle = emailInput.value.substring(middleBeginning, middleEnd);
    var dot = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/;
    var symbolRegex = /[^a-zA-Z0-9.]/;
    var testRegex = /^[^@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (middle.includes(".")) {
      errorBtn.innerText = "Invalid Email";
      daddy.appendChild(errorBtn);
      errorBtn.appendChild(errorImg);
      loginBorder.style.borderBottom = "2px solid var(--error-red)";
      emailPassed = false;
      beginningEmailFlag = false;
      return;
    } else if (emailInput.value.trim() === "") {
      errorBtn.innerText = "Email required";
      daddy.appendChild(errorBtn);
      errorBtn.appendChild(errorImg);
      loginBorder.style.borderBottom = "2px solid var(--error-red)";
      emailPassed = false;
      beginningEmailFlag = false;
      return;
    } else if (testRegex.test(emailInput.value)) {
       if (emailInput.value.includes(" ")) {
        errorBtn.innerText = "Extra space detected";
        daddy.appendChild(errorBtn);
        errorBtn.appendChild(errorImg);
        loginBorder.style.borderBottom = "2px solid var(--error-red)";
        emailPassed = false;
        beginningEmailFlag = false;
        return;
      } else if (emailInput.value.indexOf('@') < 2) {
        errorBtn.innerText = "Email too short";
        daddy.appendChild(errorBtn);
        errorBtn.appendChild(errorImg);
        loginBorder.style.borderBottom = "2px solid var(--error-red)";
        emailPassed = false;
        beginningEmailFlag = false;
        return;
      } else if (symbolRegex.test(emailInput.value.slice(emailInput.value.indexOf('@') +1 ,
        emailInput.value.indexOf('.'))) ||
        (symbolRegex.test(emailInput.value.slice(0, emailInput.value.indexOf('@')))) ||
        (symbolRegex.test(emailInput.value.slice(emailInput.value.indexOf('.') +5)))) {
        errorBtn.innerText = "Invalid character";
        daddy.appendChild(errorBtn);
        errorBtn.appendChild(errorImg);
        loginBorder.style.borderBottom = "2px solid var(--error-red)";
        emailPassed = false;
        beginningEmailFlag = false;
        return;
      } else if (!dot.test(emailInput.value)) {
        errorBtn.innerText = "Invalid Email";
        daddy.appendChild(errorBtn);
        errorBtn.appendChild(errorImg);
        loginBorder.style.borderBottom = "2px solid var(--error-red)";
        emailPassed = false;
        beginningEmailFlag = false;
        return;
      } else if (emailPassed === true){
        loginBorder.style.borderBottom = "2px solid var(--green)"
          if (!beginningEmailFlag){
            daddy.removeChild(errorBtn);
          }
        return;
      } else if (emailInput.value.length >= 30) {
        errorBtn.innerText = "TLDR Lol";
        daddy.appendChild(errorBtn);
        errorBtn.appendChild(errorImg);
        loginBorder.style.borderBottom = "2px solid var(--error-red)";
        emailPassed = false;
        beginningEmailFlag = false;
        return;
      } else {
        loginBorder.style.borderBottom = "2px solid var(--green)"
        emailPassed = true;
        beginningEmailFlag = true;
        return;
      }
    } else {
      errorBtn.innerText = "Invalid Email";
      daddy.appendChild(errorBtn);
      errorBtn.appendChild(errorImg);
      loginBorder.style.borderBottom = "2px solid var(--error-red)";
      return;
    }
  }
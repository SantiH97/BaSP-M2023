var emailInput = document.getElementById('email-input');
var passwordInput = document.getElementById('password-input');
var logInBtn = document.querySelector('#continue-btn');
var parent = document.querySelector('#error-div');
var loginBorder = document.querySelector('#email-input');
var passwordBorder = document.querySelector('#password-input');
var passwordParent = document.querySelector('#password-error-div');
var passwordDaddy = passwordParent.parentNode;
var daddy = parent.parentNode;
var passwordErrorImg = document.createElement("img");
var errorBtn = document.createElement("button");
var errorImg = document.createElement("img");
var passwordErrorBtn = document.createElement("button");
var lastCharIndex = emailInput.value.indexOf(emailInput.value.lenght -1);
var emailPassed = false;
var passwordPassed = false;
var beginningEmailFlag = true;
var beginningPasswordFlag = true;
errorBtn.className = ("error");
passwordErrorBtn.className = ("error");
errorImg.className = ("error-img");
passwordErrorImg.className = ("error-img");
passwordErrorImg.setAttribute("src", "../../assets/images/error.png");
errorImg.setAttribute("src", "../../assets/images/error.png");

logInBtn.addEventListener("click", alertFn);

emailInput.onblur = function () {
  validateEmail();
}
passwordInput.onblur = function() {
  validatePassword();
};
emailInput.onfocus = function () {
  loginBorder.style.borderBottom = "2px solid var(--gray)"
  if (beginningEmailFlag === false) {
    captainHook();
  }
};
passwordInput.onfocus = function() {
  passwordBorder.style.borderBottom = "2px solid var(--gray)";
  if (beginningPasswordFlag === false) {
    captainHook();
  }
};

function captainHook() {
  if (errorBtn) {
    daddy.removeChild(errorBtn);
  }
  if (passwordErrorBtn) {
    passwordDaddy.removeChild(passwordErrorBtn);
  }
}

function validateEmail() {
  var middleBeginning = emailInput.value.indexOf('@') + 1;
  var middleEnd = emailInput.value.lastIndexOf('.');
  var middle = emailInput.value.substring(middleBeginning, middleEnd);
  var dot = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/;
  var symbolRegex = /[^a-zA-Z0-9.]/;
  var testRegex = /^[^@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (middle.includes(".")) {
    errorBtn.innertext = "Invalid Email";
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

function alertFn () {
  if (emailPassed === true && passwordPassed === true) {
  alert ("Email: " + emailInput.value + "\n" + "Valid Password ");
  } else if (emailPassed === false && passwordPassed === true) {
    alert ("Error: " + errorBtn.textContent + "\n" + "Valid Password");
  } else if (emailPassed === true && passwordPassed === false) {
    alert ("Email: " + emailInput.value + "\n" + "Error: " + passwordErrorBtn.innerText);
  } else if (emailPassed === false && passwordPassed === false) {
    alert ("Error: " + errorBtn.textContent + "\n" + "Error: " + passwordErrorBtn.innerText);
  } else {
    alert ("Error: Email Required" + "\n" + "Error: Password Required");
  }
}

function validatePassword() {
    if (passwordInput.value.length >= 8) {
      passwordBorder.style.borderBottom = "2px solid var(--green)"
      passwordPassed = true;
    } else {
      passwordErrorBtn.innerText = "Invalid Password";
      passwordDaddy.appendChild(passwordErrorBtn);
      passwordErrorBtn.appendChild(passwordErrorImg);
      passwordBorder.style.borderBottom = "2px solid var(--error-red)";
      passwordPassed = false;
      beginningPasswordFlag = false;
    }
  }


var emailInput = document.querySelector('.email-input');
var passwordInput = document.querySelector('.password-input');
var logInBtn = document.querySelector('#continue-btn');
var parent = document.querySelector('#error-div');
var loginBorder = document.querySelector('.email-input');
var passwordBorder = document.querySelector('.password-input');
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
  if (errorBtn && daddy.contains(errorBtn)) {
    daddy.removeChild(errorBtn);
  }
  if (passwordErrorBtn && passwordDaddy.contains(passwordErrorBtn)) {
    passwordDaddy.removeChild(passwordErrorBtn);
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


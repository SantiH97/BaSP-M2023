var emailInput = document.getElementById('email-input');
var parent = document.querySelector('#error-div');
var daddy = parent.parentNode;
var errorBtn = document.createElement("button");
var errorImg = document.createElement("img");
var loginInput = document.querySelector('.login-input');
var lastCharIndex = emailInput.value.indexOf(emailInput.value.lenght -1);

var passwordInput = document.getElementById('password-input');
passwordInput.addEventListener("input", mask);

var logInBtn = document.querySelector('#continue-btn');
logInBtn.addEventListener("click", function() {
  alertFn();
  validatePassword();
});

errorBtn.setAttribute("id", "error");
errorImg.setAttribute("id", "error-img");
errorImg.setAttribute("src", "../../assets/images/error.png");

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("focus", captainHook);

function captainHook(){
  if (daddy.childElementCount === 2) {
    return;
  } else {
    daddy.removeChild(errorBtn);
    return;
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
    errorBtn.innerHTML = "Invalid Email";
    daddy.appendChild(errorBtn);
    errorBtn.appendChild(errorImg);
    loginInput.style.borderBottom = "2px solid var(--error-red)";
    return;
  } else if (emailInput.value.trim() === "") {
    errorBtn.innerHTML = "Email required";
    daddy.appendChild(errorBtn);
    errorBtn.appendChild(errorImg);
    loginInput.style.borderBottom = "2px solid var(--error-red)";
    return;
  } else if (testRegex.test(emailInput.value)) {
     if (emailInput.value.includes(" ")) {
      errorBtn.innerHTML = "Extra space detected";
      daddy.appendChild(errorBtn);
      errorBtn.appendChild(errorImg);
      loginInput.style.borderBottom = "2px solid var(--error-red)";
      return;
    } else if (emailInput.value.indexOf('@') < 2) {
      errorBtn.innerHTML = "Email too short";
      daddy.appendChild(errorBtn);
      errorBtn.appendChild(errorImg);
      loginInput.style.borderBottom = "2px solid var(--error-red)";
      return;
    } else if (symbolRegex.test(emailInput.value.slice(emailInput.value.indexOf('@') +1 ,
      emailInput.value.indexOf('.'))) ||
      (symbolRegex.test(emailInput.value.slice(0, emailInput.value.indexOf('@')))) ||
      (symbolRegex.test(emailInput.value.slice(emailInput.value.indexOf('.') +5)))) {
      errorBtn.innerHTML = "Invalid character";
      daddy.appendChild(errorBtn);
      errorBtn.appendChild(errorImg);
      loginInput.style.borderBottom = "2px solid var(--error-red)";
      return;
    } else if (!dot.test(emailInput.value)) {
      errorBtn.innerHTML = "Invalid Email";
      daddy.appendChild(errorBtn);
      errorBtn.appendChild(errorImg);
      loginInput.style.borderBottom = "2px solid var(--error-red)";
      return;
    } else if (daddy.childElementCount > 2){
      loginInput.style.borderBottom = "2px solid var(--green)"
      daddy.removeChild(errorBtn);
      return;
    } else if (emailInput.value.length >= 30) {
      errorBtn.innerHTML = "TLDR Lol";
      daddy.appendChild(errorBtn);
      errorBtn.appendChild(errorImg);
      loginInput.style.borderBottom = "2px solid var(--error-red)";
    } else {
      loginInput.style.borderBottom = "2px solid var(--green)"
      return;
    }
  } else {
    errorBtn.innerHTML = "Invalid Email";
    daddy.appendChild(errorBtn);
    errorBtn.appendChild(errorImg);
    loginInput.style.borderBottom = "2px solid var(--error-red)";
    return;
  }
}


function mask() {
    var maskedValue = "";
    for (var i = 0; i < passwordInput.value.length; i++) {
      maskedValue += "*";
    }
    passwordInput.value = maskedValue;
    return;
  };

function alertFn () {
  alert ("Email: " + emailInput.value + "\n" + "Password: " + passwordInput.value);
  return;
}
function validatePassword() {
  
}
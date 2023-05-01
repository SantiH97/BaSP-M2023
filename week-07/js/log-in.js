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
var modal = document.getElementById("myModal");
var bigDaddy = modal.parentNode;
var modalDaddy = document.querySelector("#modal-text").parentNode;
var span = document.getElementsByClassName("close")[0];

var url = "https://api-rest-server.vercel.app/login";

logInBtn.onclick = function(event) {
  submit(event)
  alertFn();
}

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
    var data = {
      email: emailInput.value,
      password: passwordInput.value
    };
    fetch(`${url}?email=${data.email}&password=${data.password}`)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      if (data.success) {
        modal.classList.remove('hidden');
        modal.classList.add('modal');
        var h2 = document.createElement('h2');
        h2.classList.add('modal-tittle');
        h2.innerText = "Success!!!" + "\n";
        modalDaddy.appendChild(h2);
        var child1 = document.createElement('p');
        child1.classList.add('children');
        modalDaddy.appendChild(child1);
        child1.innerText = data.msg;
      } else {
        modal.classList.remove('hidden');
        modal.classList.add('modal');
        var h2 = document.createElement('h2');
        h2.classList.add('modal-tittle2');
        h2.innerText = "An Issue was found";
        modalDaddy.appendChild(h2);
        var child2 = document.createElement('p');
        child2.classList.add('children2');
        modalDaddy.appendChild(child2);
        child2.innerText = data.msg;
      }
    })
    .catch(function(error) {
      modal.classList.remove('hidden');
      modal.classList.add('modal');
      var h2 = document.createElement('h2');
      h2.classList.add('modal-tittle2');
      h2.innerText = "An Issue was found";
      modalDaddy.appendChild(h2);
      var child2 = document.createElement('p');
      child2.classList.add('children2');
      modalDaddy.appendChild(child2);
      child2.innerText = error + " something bad happened";
    });
  } else if (emailPassed === false && passwordPassed === true) {
    modal.classList.remove('hidden');
      modal.classList.add('modal');
      var h2 = document.createElement('h2');
      h2.classList.add('modal-tittle2');
      h2.innerText = "An Issue was found";
      modalDaddy.appendChild(h2);
      var child2 = document.createElement('p');
      child2.classList.add('children2');
      modalDaddy.appendChild(child2);
      child2.innerText = "Error: " + errorBtn.textContent;
  } else if (emailPassed === true && passwordPassed === false) {
    modal.classList.add('modal');
    var h2 = document.createElement('h2');
    h2.classList.add('modal-tittle2');
    h2.innerText = "An Issue was found";
    modalDaddy.appendChild(h2);
    var child2 = document.createElement('p');
    child2.classList.add('children2');
    modalDaddy.appendChild(child2);
    child2.innerText = "Error: " + passwordErrorBtn.innerText;
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
function validateEmail() {
  var middleBeginning = emailInput.value.indexOf('@') + 1;
  var middleEnd = emailInput.value.lastIndexOf('.');
  var middle = emailInput.value.substring(middleBeginning, middleEnd);
  var dot = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/;
  var testRegex = /^[^@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (middle.includes(".")) {
    logInValidationError("Invalid Email");
  } else if (emailInput.value.trim() === "") {
    logInValidationError("Email required");
  } else if (testRegex.test(emailInput.value)) {
      if (emailInput.value.includes(" ")) {
      logInValidationError("Extra space detected");
    } else if (emailInput.value.indexOf('@') < 2) {
      logInValidationError("Email too short");
    } else if (!dot.test(emailInput.value)) {
      logInValidationError("Invalid Email");
    } else if (emailPassed === true){
      loginBorder.style.borderBottom = "2px solid var(--green)"
        if (!beginningEmailFlag) {
          daddy.removeChild(errorBtn);
        }
    } else if (emailInput.value.length >= 40) {
      logInValidationError("TLDR Lol");
    } else {
      logInValidationSuccess();
    }
  } else {
    logInValidationError("Invalid Email");
  }
}
function logInValidationError(errorMessage) {
  errorBtn.innerText = errorMessage;
  daddy.appendChild(errorBtn);
  errorBtn.appendChild(errorImg);
  loginBorder.style.borderBottom = "2px solid var(--error-red)";
  emailPassed = false;
  beginningEmailFlag = false;
}
function logInValidationSuccess() {
  loginBorder.style.borderBottom = "2px solid var(--green)"
  emailPassed = true;
  beginningEmailFlag = true;
}
function submit(event) {
  event.preventDefault();
}
span.onclick = function() {
  modal.classList.remove('modal');
  modal.classList.add('hidden');
  modalDaddy.replaceChildren(span);
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('modal');
    modal.classList.add('hidden');
    modalDaddy.replaceChildren(span);
  }
}




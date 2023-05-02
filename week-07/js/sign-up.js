// INPUTS----------------------INPUTS-----------------------INPUTS
var nameInput = document.querySelector('#name');
var lastNameInput = document.querySelector('#last-name');
var idInput = document.querySelector('#id');
var phoneNumberInput = document.querySelector('#phone-number');
var dobInput = document.querySelector('#date-of-birth');
var cityInput = document.querySelector('#city');
var addressInput = document.querySelector('#address');
var zipInput = document.querySelector('#zip');
var passwordInput2 = document.querySelector('#password-input');
var repeatInput = document.querySelector('#repeat-password-input');
var emailInput2 = document.querySelector('#email-input');
// LABELS----------------------LABELS-----------------------LABELS
var nameLabelError = document.querySelector('#name-error');
var lastNameLabelError = document.querySelector('#last-name-error');
var idLabelError = document.querySelector('#id-error');
var phoneNumberLabelError = document.querySelector('#phone-number-error');
var dobLabelError = document.querySelector('#date-of-birth-error');
var cityLabelError = document.querySelector('#city-error');
var addressLabelError = document.querySelector('#address-error');
var zipLabelError = document.querySelector('#zip-error');
var passwordLabelError = document.querySelector('#password-error');
var repeatLabelError = document.querySelector('#repeat-password-error');
var emailLabelError = document.querySelector('#email-error');
// PARENTS----------------------PARENTS-----------------------PARENTS
var nameErrorDaddy = document.querySelector('#name-error').parentNode;
var lastNameErrorDaddy = document.querySelector('#last-name-error').parentNode;
var idErrorDaddy = document.querySelector('#id-error').parentNode;
var phoneNumberErrorDaddy = document.querySelector('#phone-number-error').parentNode;
var dobErrorDaddy = document.querySelector('#date-of-birth-error').parentNode;
var cityErrorDaddy = document.querySelector('#city-error').parentNode;
var addressErrorDaddy = document.querySelector('#address-error').parentNode;
var zipErrorDaddy = document.querySelector('#zip-error').parentNode;
var passwordErrorDaddy = document.querySelector('#password-error').parentNode;
var repeatErrorDaddy = document.querySelector('#repeat-password-error').parentNode;
var emailErrorDaddy = document.querySelector('#email-error').parentNode;
// CLASSNAMES----------------------CLASSNAMES-----------------------CLASSNAMES
var nameInputClassName = 'only-letters';
var lastNameInputClassName = 'only-letters2';
var idInputClassName = 'only-numbers';
var phoneNumberInputClassName = 'only-numbers2';
var dobInputClassName = 'only-dob';
var cityInputClassName = 'both';
var addressInputClassName = 'both2';
var zipInputClassName = 'only-numbers3';
var passwordInput2ClassName = 'only-passwords';
var repeatInputClassName = 'not-equal';
var emailInputClassName = 'only-emails';
// FLAGS----------------------FLAGS-----------------------FLAGS
var isLetter = true;
var isNumber = true;
var isbigger = true;
var isSmaller = true;
var isBoth = true;
var both = true;
var isEqual = true;
var isEmail = true;
var isEmpty = true;
var isAddress = true;
var hasError = false;
var nameIsValid = false;
var lastNameIsValid = false;
var idIsValid = false;
var phoneNumberIsValid = false;
var dobIsValid = false;
var cityIsValid = false;
var addressIsValid = false;
var zipIsValid = false;
var passwordIsValid = false;
var repeatIsValid = false;
var emailIsValid = false;
// ARRS----------------------ARRS-----------------------ARRS
var errors = [];
var nameArr = [];
var lastNameArr = [];
var idArr = [];
var phoneArr = [];
var birthArr = [];
var cityArr = [];
var adressArr = [];
var zipArr = [];
var paswordArr = [];
var repeatArr = [];
var emailArr = [];
var successArr = [];
// BLUR----------------------BLUR-----------------------BLUR
nameInput.addEventListener("blur", nameFn);
 function nameFn() {
    validateChars(nameInput, nameLabelError, nameErrorDaddy, nameInputClassName, !both, nameArr);
    validateEmpty(nameInput, nameLabelError);
    moreThan(nameInput, nameLabelError, nameErrorDaddy, nameInputClassName, 4, nameArr);
    if (hasError) {
        hasError = false;
        return;
    } else {
        nameIsValid = true;
        var success = "Name: " + nameInput.value;
        successArr.push(success);
    }
}
lastNameInput.addEventListener("blur", lastNameFn);
 function lastNameFn() {
    validateChars(lastNameInput, lastNameLabelError, lastNameErrorDaddy, lastNameInputClassName, !both, lastNameArr);
    validateEmpty(lastNameInput, lastNameLabelError);
    moreThan(lastNameInput, lastNameLabelError, lastNameErrorDaddy, lastNameInputClassName, 4, lastNameArr);
    if (hasError) {
        hasError = false;
        return;
    } else {
        lastNameIsValid = true;
        var success = "Last name: " + lastNameInput.value;
        successArr.push(success);
    }
}
idInput.addEventListener("blur", idFn);
function idFn() {
    validateNumbs(idInput, idLabelError, idErrorDaddy, idInputClassName, idArr);
    validateEmpty(idInput, idLabelError);
    moreThan(idInput, idLabelError, idErrorDaddy,idInputClassName, 7, idArr);
    lessThan(idInput, idLabelError, idErrorDaddy,idInputClassName, 8, idArr);
    if (hasError) {
        hasError = false;
        return;
    } else {
        idIsValid = true;
        var success = "Id: " + idInput.value;
        successArr.push(success);
    }
}
phoneNumberInput.addEventListener("blur", phoneFn);
function phoneFn() {
    validateNumbs(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDaddy,phoneNumberInputClassName, phoneArr);
    validateEmpty(phoneNumberInput, phoneNumberLabelError);
    moreThan(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDaddy, phoneNumberInputClassName, 10, phoneArr);
    lessThan(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDaddy, phoneNumberInputClassName, 10, phoneArr);
    if (hasError) {
        hasError = false;
        return;
    } else {
        phoneNumberIsValid = true;
        var success = "Phone Number: " + phoneNumberInput.value;
        successArr.push(success);
    }
}
dobInput.addEventListener("blur", dobFn);
function dobFn() {
  validateEmpty(dobInput, dobLabelError);
  var birthD = dobInput.value.split('-');
  var oGFormattedDate = birthD[2] + '/' + birthD[1] + '/' + birthD[0];
  var birthYear = parseInt(birthD[0], 10);
  if (birthYear < 1920 || birthYear > 2005) {
    dobIsValid = false;
    hasError = true;
  }
  if (hasError) {
    showErrorFn("Invalid date", dobLabelError, dobInputClassName, dobErrorDaddy, dobInput);
    birthArr.push(" Invalid date");
    hasError = false;
    return;
  } else {
    dobIsValid = true;
    var success = "Date of Birth: " + oGFormattedDate;
    successArr.push(success);
  }
}
cityInput.addEventListener("blur", cityFn);
function cityFn() {
    validateChars(cityInput, cityLabelError, cityErrorDaddy, cityInputClassName, both, cityArr);
    validateEmpty(cityInput, cityLabelError);
    moreThan(cityInput, cityLabelError, cityErrorDaddy,cityInputClassName, 3, cityArr);
    if (hasError) {
        hasError = false;
        return;
    } else {
        cityIsValid = true;
        var success = "City: " + cityInput.value;
        successArr.push(success);
    }
}
addressInput.addEventListener("blur", addressFn);
function addressFn() {
    var cleanAdrres = addressInput.value.trim();
    if (cleanAdrres.split("").filter(function(char){return char.indexOf(" ") != -1 ;}).length != 1) {
        var child;
        if (!child) {
        var text = "Input must have a space";
        showErrorFn(text, addressLabelError, addressInputClassName, addressErrorDaddy, addressInput);
        moreThan(addressInput, addressLabelError, addressErrorDaddy, addressInputClassName, 5, adressArr);
        adressArr.push(" Input must be only letters");
        isAddress = false;
        hasError = true;
        }
    } else {
        isAddress = true;
    }
    if (hasError) {
        hasError = false;
        return;
    } else {
        addressIsValid = true;
        var success = "Address: " + addressInput.value;
        successArr.push(success);
    }
}
zipInput.addEventListener("blur", zipFn);
function zipFn() {
    validateNumbs(zipInput, zipLabelError, zipErrorDaddy, zipInputClassName, zipArr);
    validateEmpty(zipInput, zipLabelError);
    moreThan(zipInput, zipLabelError, zipErrorDaddy,zipInputClassName, 4, zipArr);
    if (hasError) {
        hasError = false;
        return;
    } else {
        zipIsValid = true;
        var success = "Zip: " + zipInput.value;
        successArr.push(success);
    }
}
passwordInput2.addEventListener("blur", passwordFn);
function passwordFn() {
    validateEmpty(passwordInput2, passwordLabelError);
    moreThan(passwordInput2, passwordLabelError, passwordErrorDaddy, passwordInput2ClassName, 8, paswordArr);
    if (hasError) {
        hasError = false;
        return;
    } else {
        passwordIsValid = true;
        var success = "Valid password";
        successArr.push(success);
    }
}
repeatInput.addEventListener("blur", repeatFn);
function repeatFn() {
    validateEmpty(repeatInput, repeatLabelError);
    moreThan(repeatInput, repeatLabelError, repeatErrorDaddy, repeatInputClassName, 8, repeatArr);
    if (repeatInput.value !== passwordInput2.value) {
        var text = "Not a match";
        showErrorFn(text, repeatLabelError, repeatInputClassName, repeatErrorDaddy, repeatInput);
        repeatArr.push(" Not a match");
        isEqual = false;
        return repeatIsValid = false;
    } else {
        isEqual = true;
    }
    if (hasError) {
        hasError = false;
        return;
    } else {
        repeatIsValid = true;
        var success = "Paswords match";
        successArr.push(success);
    }
}
emailInput2.addEventListener("blur", emailFn);
function emailFn() {
    validateEmpty(emailInput2, emailLabelError);
    validateEmail();
    if (hasError) {
        hasError = false;
        return;
    } else {
        emailIsValid = false;
        var success = "Email: " + emailInput2.value;
        successArr.push(success);
    }
}
// FOCUS----------------------FOCUS-----------------------FOCUS
nameInput.addEventListener("focus", nameFocusFn);
function nameFocusFn() {
    thereAndBackAgain(nameLabelError, nameInputClassName, nameInput);
    nameArr.length = 0;
}
lastNameInput.addEventListener("focus", lastNameFocusFn);
function lastNameFocusFn() {
    thereAndBackAgain(lastNameLabelError, lastNameInputClassName, lastNameInput);
    lastNameArr.length = 0;
}
idInput.addEventListener("focus", idFocusFn);
function idFocusFn() {
    thereAndBackAgain(idLabelError, idInputClassName, idInput);
    idArr.length = 0;
}
phoneNumberInput.addEventListener("focus", phoneFocusFn);
function phoneFocusFn() {
    thereAndBackAgain(phoneNumberLabelError, phoneNumberInputClassName, phoneNumberInput);
    phoneArr.length = 0;
}
dobInput.addEventListener("focus", dobFocusFn);
function dobFocusFn() {
    thereAndBackAgain(dobLabelError, dobInputClassName, dobInput);
    birthArr.length = 0;
}
cityInput.addEventListener("focus", cityFocusFn);
function cityFocusFn() {
    thereAndBackAgain(cityLabelError, cityInputClassName, cityInput);
    cityArr.length = 0;
}
addressInput.addEventListener("focus", addressFocusFn);
function addressFocusFn() {
    thereAndBackAgain(addressLabelError, addressInputClassName, addressInput);
    adressArr.length = 0;
}
zipInput.addEventListener("focus", zipFocusFn);
function zipFocusFn() {
    thereAndBackAgain(zipLabelError, zipInputClassName, zipInput);
    zipArr.length = 0;
}
passwordInput2.addEventListener("focus", passwordFocusFn);
function passwordFocusFn() {
    thereAndBackAgain(passwordLabelError, passwordInput2ClassName, passwordInput2);
    paswordArr.length = 0;
}
repeatInput.addEventListener("focus", repeatFocusFn);
function repeatFocusFn() {
    thereAndBackAgain(repeatLabelError, repeatInputClassName, repeatInput);
    repeatArr.length = 0;
}
emailInput2.addEventListener("focus", emailFocusFn);
function emailFocusFn() {
    thereAndBackAgain(emailLabelError, emailInputClassName, emailInput2);
    emailArr.length = 0;
}
// FUNCTIONS----------------------FUNCTIONS-----------------------FUNCTIONS
function showErrorFn(text, label, className, parent, input) {
    var child = document.createElement('label');
    child.innerHTML = text;
    child.classList.add(className);
    child.classList.add("small");
    child.classList.add('reveal');
    parent.appendChild(child);
    label.classList.remove('hidden');
    label.classList.add('reveal');
    input.classList.add('red');
}
function validateEmpty(contentInput, label) {
    if (contentInput.value.trim() === "") {
        label.classList.remove('hidden');
        label.classList.add('reveal');
        hasError = true;
        isEmpty = false;
    } else {
        isEmpty = true;
    }
}
function validateChars(input, label, parent, className, both, array) {
    var arr = [];
    for (var i = 0; i < input.value.length; i++) {
      var ascii = input.value.charCodeAt(i);
      arr.push(ascii);
    }
    for (var j = 0; j < arr.length; j++) {
      if (both === false && (arr[j] < 65 || arr[j] > 90 && arr[j] < 97 || arr[j] > 122)) {
        var child;
        if (!child) {
        var text = "Only letters";
        showErrorFn(text, label, className, parent, input);
        array.push(" Only letters");
        isLetter = false;
        hasError = true;
        break;
        }
      } else if (both === true) {
        if ((arr[j] < 65 || arr[j] > 90 && arr[j] < 97 || arr[j] > 122) && (arr[j] < 48 || arr[j] > 57)) {
            if (!child) {
                text = "Invalid character";
                showErrorFn(text, label, className, parent, input);
                array.push(" Invalid character");
                isBoth = false;
                hasError = true;
                break;
            }
        } else {
            isBoth = true;
        }
      } else {
        isLetter = true;
      }
    }
}
function validateNumbs(input, label, parent, className, array) {
    var arr = [];
    for (var i = 0; i < input.value.length; i++) {
      var ascii = input.value.charCodeAt(i);
      arr.push(ascii);
    }
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] < 48 || arr[j] > 57) {
        var child;
        if (!child) {
        var text = "Only numbers";
        showErrorFn(text, label, className, parent, input);
        array.push(" Only numbers");
        isNumber = false;
        hasError = true;
        break;
        }
      } else {
        isNumber = true;
      }
    }
}
function moreThan(input, label, parent, className, numb, array) {
    if (input.value.length < numb) {
        var child;
        if (!child) {
        var text = "Wrong length";
        showErrorFn(text, label, className, parent, input);
        array.push(" Wrong length");
        isbigger = false;
        hasError = true;
        }
    } else {
        isbigger = true;
    }
}
function lessThan(input, label, parent, className, numb, array) {
    if (input.value.length > numb) {
        var child;
        if (!child) {
        var text = "Wrong length";
        showErrorFn(text, label, className, parent, input);
        array.push(" Wrong length");
        isSmaller = false;
        hasError = true;
        }
    } else {
        isSmaller = true;
    }
}
function validateEmail() {
    var middleBeginning = emailInput2.value.indexOf('@') + 1;
    var middleEnd = emailInput2.value.lastIndexOf('.');
    var middle = emailInput2.value.substring(middleBeginning, middleEnd);
    var dot = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/;
    var testRegex = /^[^@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    isEmail = false;
    hasError = true;
    if (middle.includes(".")) {
        showErrorFn("Invalid Email", emailLabelError, emailInputClassName, emailErrorDaddy, emailInput2);
        emailArr.push(" Invalid Email");
    } else if (emailInput2.value.trim() === "") {
        showErrorFn("Email required", emailLabelError, emailInputClassName, emailErrorDaddy, emailInput2);
        emailArr.push(" Email required");
    } else if (testRegex.test(emailInput2.value)) {
       if (emailInput2.value.includes(" ")) {
        showErrorFn("Extra space detected", emailLabelError, emailInputClassName, emailErrorDaddy, emailInput2);
        emailArr.push(" Extra space detected");
      } else if (emailInput2.value.indexOf('@') < 2) {
        showErrorFn("Email too short", emailLabelError, emailInputClassName, emailErrorDaddy, emailInput2);
        emailArr.push(" Email too short");
      } else if (!dot.test(emailInput2.value)) {
        showErrorFn("Invalid Email", emailLabelError, emailInputClassName, emailErrorDaddy, emailInput2);
        emailArr.push(" Invalid Email");
      } else if (emailErrorDaddy.childElementCount > 1) {
        thereAndBackAgain(emailLabelError, emailInputClassName);
      } else if (emailInput2.value.length >= 40) {
        showErrorFn("TLDR Lol", emailLabelError, emailInputClassName, emailErrorDaddy, emailInput2);
        emailArr.push(" TLDR Lol");
      } else {
        isEmail = true;
        hasError = false;
        errors.pop(emailArr);
        emailArr.pop();
      }
    } else {
        showErrorFn("Invalid Email", emailLabelError, emailInputClassName, emailErrorDaddy, emailInput2);
        emailArr.push(" Invalid Email");
    }
}
function thereAndBackAgain(label, className, input) {
    var children = document.querySelectorAll('.reveal');
    if (isLetter === false ||
        isNumber === false ||
        isbigger === false ||
        isSmaller === false ||
        isBoth === false ||
        isEqual === false ||
        isEmail === false ||
        isAddress === false ||
        dobIsValid === false) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].classList.contains(className)
            || children[i].classList.contains('size')
            || children[i].classList.contains('size2')) {
                children[i].classList.remove('reveal');
                input.classList.remove('red');
                children[i].classList.add('hidden');
            }
            isLetter = true;
            isNumber = true;
            isbigger = true;
            isSmaller = true;
            isBoth = true;
            isEqual = true;
            isEmail = true;
        }
    }
    if (label.classList.contains ('reveal')) {
        label.classList.remove('reveal');
        label.classList.add('hidden');
    }
}
// STORAGE----------------------STORAGE-----------------------STORAGE
function send() {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("lastName", lastNameInput.value);
    localStorage.setItem("id", idInput.value);
    localStorage.setItem("phoneNumber", phoneNumberInput.value);
    localStorage.setItem("dob", dobInput.value);
    localStorage.setItem("city", cityInput.value);
    localStorage.setItem("address", addressInput.value);
    localStorage.setItem("zip", zipInput.value);
    localStorage.setItem("password", passwordInput2.value);
    localStorage.setItem("email", emailInput2.value);
}
window.onload = function() {
    nameInput.value   = localStorage.getItem("name");
    lastNameInput.value = localStorage.getItem("lastName");
    idInput.value = localStorage.getItem("id");
    phoneNumberInput.value = localStorage.getItem("phoneNumber");
    dobInput.value = localStorage.getItem("dob");
    cityInput.value = localStorage.getItem("city");
    addressInput.value = localStorage.getItem("address");
    zipInput.value = localStorage.getItem("zip");
    emailInput2.value = localStorage.getItem("email");
    passwordInput2.value = localStorage.getItem("password");
    repeatInput.value = localStorage.getItem("password");
};
// MODAL----------------------MODAL-----------------------MODAL
var modal = document.getElementById("myModal");
var bigDaddy = modal.parentNode;
var modalDaddy = document.querySelector("#modal-text").parentNode;
var span = document.getElementsByClassName("close")[0];
function errorsPush() {
    if (nameArr.length !== 0) {
        errors.push("Name:" + "           " + nameArr);
    } if (lastNameArr.length !== 0) {
        errors.push("Last Name:" + "       " + lastNameArr);
    } if (idArr.length !== 0) {
        errors.push("Id:"+ "              " + idArr);
    } if (phoneArr.length !== 0) {
        errors.push("Phone Number:" + "    " + phoneArr);
    } if (birthArr.length !== 0) {
        errors.push("Date of Birth:" + "   " + birthArr);
    } if (cityArr.length !== 0) {
        errors.push("City:" + "            " + cityArr);
    } if (adressArr.length !== 0) {
        errors.push("Address:" + "         " + adressArr);
    } if (zipArr.length !== 0) {
        errors.push("Ziz:" + "             " + zipArr);
    } if (paswordArr.length !== 0) {
        errors.push("Password:" + "        " + paswordArr);
    } if (repeatArr.length !== 0) {
        errors.push("Repeat Password:" + " " + repeatArr);
    } if (emailArr.length !== 0) {
        errors.push("EmailL:" + "          " + emailArr);
    }
}
function modalFn(tittle, message, childClass, arrayJoin) {
    var array = arrayJoin.join('\n');
    modal.classList.remove('hidden');
    modal.classList.add('modal');
    var h2 = document.createElement('h2');
    h2.classList.add(tittle);
    h2.innerText = message;
    modalDaddy.appendChild(h2);
    var child = document.createElement('p');
    child.classList.add(childClass);
    modalDaddy.appendChild(child);
    child.innerText = array;
}
span.onclick = function() {
    modal.classList.remove('modal');
    modal.classList.add('hidden');
    modalDaddy.replaceChildren(span);
    if (success) {
      window.location.href = "./log-in.html";
    }
  }
window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.remove('modal');
      modal.classList.add('hidden');
      modalDaddy.replaceChildren(span);
    } else if (success) {
      window.location.href = "./log-in.html";
    }
  }
// FETCH----------------------FETCH-----------------------FETCH
var url = "https://api-rest-server.vercel.app/signup";
var continueBtn = document.querySelector('#continue-btn');
continueBtn.addEventListener("click", function(e) {
    e.preventDefault();
    goodAsNew();
    if (nameIsValid &&
        lastNameIsValid &&
        idIsValid &&
        phoneNumberIsValid &&
        dobIsValid &&
        cityIsValid &&
        addressIsValid &&
        zipIsValid &&
        passwordIsValid &&
        repeatIsValid) {
    send();
    var dob = dobInput.value.split('-');
    var formattedDate = dob[1] + '/' + dob[2] + '/' + dob[0];
    var data = {
        name: nameInput.value,
        lastName: lastNameInput.value,
        id: idInput.value,
        phoneNumber: phoneNumberInput.value,
        dob: dobInput.value,
        city: cityInput.value,
        address: addressInput.value,
        zip: zipInput.value,
        password: passwordInput2.value,
        repeat: repeatInput.value,
        email: emailInput2.value
    };
    fetch(`${url}?name=${data.name}&lastName=${data.lastName}&dni=${data.id}&phone=${data.phoneNumber}&dob=${formattedDate}&city=${data.city}&address=${data.address}&zip=${data.zip}&password=${data.password}&email=${data.email}`)
    .then(function(res) {
        // throw new Error("Shit happened");
        return res.json();
    })
    .then(function(data) {
        if (data.success) {
            var child1 = document.createElement('p');
            child1.innerText = ("\n" + "Success!!!" + "\n" + data.msg);
            child1.setAttribute('id','success');
            child1.classList.add('children');
            modalDaddy.appendChild(child1);
            var success = true;
            return success;
          } else {
            modalFn('modal-tittle2', "An issue was found", 'children2', errors);
          }
    })
    .catch(function(error) {
        errorsPush();
        modalFn('modal-tittle2', "An issue was found", 'children2', errors);
        child.innerText = error;
    });
        modalFn('modal-tittle', "Saved as default", 'children', successArr);
    } else {
        errors.length = 0;
        errorsPush();
        modalFn('modal-tittle2', "An issue was found", 'children2', errors)
    }
});
function goodAsNew() {
    nameFocusFn();
    lastNameFocusFn();
    idFocusFn();
    phoneFocusFn();
    dobFocusFn();
    cityFocusFn();
    addressFocusFn();
    zipFocusFn();
    passwordFocusFn();
    repeatFocusFn();
    emailFocusFn();
    nameArr.length = 0;
    lastNameArr.length = 0;
    idArr.length = 0;
    phoneArr.length = 0;
    birthArr.length = 0;
    cityArr.length = 0;
    adressArr.length = 0;
    zipArr.length = 0;
    paswordArr.length = 0;
    repeatArr.length = 0;
    emailArr.length = 0;
    successArr.length = 0;
    nameFn();
    lastNameFn();
    idFn();
    phoneFn();
    dobFn();
    cityFn();
    addressFn();
    zipFn();
    passwordFn();
    repeatFn();
    emailFn();
}

// INPUTS----------------------INPUTS-----------------------INPUTS
var nameInput = document.querySelector('#name');
var LastNameInput = document.querySelector('#last-name');
var idInput = document.querySelector('#id');
var phoneNumberInput = document.querySelector('#phone-number');
var birthDayInput = document.querySelector('#birth-day');
var RegionInput = document.querySelector('#region');
var addressInput = document.querySelector('#address');
var postalCodeInput = document.querySelector('#postal-code');
var passwordInput2 = document.querySelector('#password-input');
var repeatPasswordInput = document.querySelector('#repeat-password-input');
var emailInput2 = document.querySelector('#email-input');
// LABELS----------------------LABELS-----------------------LABELS
var nameLabelError = document.querySelector('#name-error');
var LastNameLabelError = document.querySelector('#last-name-error');
var idLabelError = document.querySelector('#id-error');
var phoneNumberLabelError = document.querySelector('#phone-number-error');
var birthDayLabelError = document.querySelector('#birth-day-error');
var regionLabelError = document.querySelector('#region-error');
var addressLabelError = document.querySelector('#address-error');
var postalCodeLabelError = document.querySelector('#postal-code-error');
var passwordLabelError = document.querySelector('#password-error');
var repeatPasswordLabelError = document.querySelector('#repeat-password-error');
var emailLabelError = document.querySelector('#email-error');
// DIVS----------------------DIVS-----------------------DIVS
var nameErrorDiv = document.querySelector('#name-error-div');
var nameErrorDivP = nameErrorDiv.parentNode;
var LastNameErrorDiv = document.querySelector('#last-name-error-div');
var LastNameErrorDivP = LastNameErrorDiv.parentNode;
var idErrorDiv = document.querySelector('#id-error');
var idErrorDivP = idErrorDiv.parentNode;
var phoneNumberErrorDiv = document.querySelector('#phone-number-error-div');
var phoneNumberErrorDivP = phoneNumberErrorDiv.parentNode;
var birthDayErrorDiv = document.querySelector('#birth-day-error-div');
var birthDayErrorDivP = birthDayErrorDiv.parentNode;
var regionErrorDiv = document.querySelector('#region-error-div');
var regionErrorDivP = regionErrorDiv.parentNode;
var addressErrorDiv = document.querySelector('#address-error-div');
var addressErrorDivP = addressErrorDiv.parentNode;
var postalCodeErrorDiv = document.querySelector('#postal-code-error-div');
var postalCodeErrorDivP = postalCodeErrorDiv.parentNode;
var passwordErrorDiv = document.querySelector('#password-error-div');
var passwordErrorDivP = passwordErrorDiv.parentNode;
var repeatPasswordErrorDiv = document.querySelector('#repeat-password-error-div');
var repeatPasswordErrorDivP = repeatPasswordErrorDiv.parentNode;
var emailErrorDiv = document.querySelector('#email-error-div');
var emailErrorDivP = emailErrorDiv.parentNode;
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
// CLASSNAMES----------------------CLASSNAMES-----------------------CLASSNAMES
var nameInputClassName = 'only-letters';
var LastNameInputClassName = 'only-letters2';
var idInputClassName = 'only-numbers';
var phoneNumberInputClassName = 'only-numbers2';
var birthDayInputClassName = 'only-';
var RegionInputClassName = 'both';
var addressInputClassName = 'both2';
var postalCodeInputClassName = 'only-numbers3';
var passwordInput2ClassName = 'only-passwords';
var repeatPasswordInputClassName = 'not-equal';
var emailInputClassName = 'only-emails';
// BLUR----------------------BLUR-----------------------BLUR
nameInput.onblur = function() {
    validateChars(nameInput, nameLabelError, nameErrorDivP, nameInputClassName, !both);
    validateEmpty(nameInput, nameLabelError);
    moreThan(nameInput, nameLabelError, nameErrorDivP, 3);
};
LastNameInput.onblur = function() {
    validateChars(LastNameInput, LastNameLabelError, LastNameErrorDivP, LastNameInputClassName, !both);
    validateEmpty(LastNameInput, LastNameLabelError);
    moreThan(LastNameInput, LastNameLabelError, LastNameErrorDivP, 3);
};
idInput.onblur = function() {
    validateNumbers(idInput, idLabelError, idErrorDivP, idInputClassName);
    validateEmpty(idInput, idLabelError);
    moreThan(idInput, idLabelError, idErrorDivP, 7);
};
phoneNumberInput.onblur = function() {
    validateNumbers(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDivP, phoneNumberInputClassName);
    validateEmpty(phoneNumberInput, phoneNumberLabelError);
    moreThan(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDivP, 10);
    lessThan(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDivP, 10);
};
birthDayInput.onblur = function() {
    validateEmpty(birthDayInput, birthDayLabelError);
};
RegionInput.onblur = function() {
    validateEmpty(RegionInput, regionLabelError);
    moreThan(RegionInput, regionLabelError, regionErrorDivP, 3);
    validateChars(RegionInput, regionLabelError, regionErrorDivP, RegionInputClassName, both);
};
addressInput.onblur = function() {
    if (addressInput.value.includes(" ")) {
    var space = addressInput.value.indexOf(" ");
    var adressArr = [];
    var first = addressInput.value.slice(0, space);
    var last = addressInput.value.slice(space, addressInput.value.length);
    console.log(first);
    console.log(last);
    adressArr.push(first);
    adressArr.push(last);
    console.log(adressArr);
    validateChars(first, addressLabelError, addressErrorDivP, addressInputClassName, !both);
    validateNumbers(last, addressLabelError, addressErrorDivP, addressInputClassName);
    moreThan(first, addressLabelError, addressErrorDivP, 3);
    moreThan(last, addressLabelError, addressErrorDivP, 1);
    } else {
        validateEmpty(addressInput, addressLabelError);
        if (isEmpty === false) {
            signUpValidationError("Must contain a street and a number", addressLabelError, addressInputClassName, addressErrorDivP);
        }
    }
};
postalCodeInput.onblur = function() {
    validateNumbers(postalCodeInput, postalCodeLabelError, postalCodeErrorDivP, postalCodeInputClassName);
    validateEmpty(postalCodeInput, postalCodeLabelError);
    moreThan(postalCodeInput, postalCodeLabelError, postalCodeErrorDivP, 4);
};
passwordInput2.onblur = function() {
    validateEmpty(passwordInput2, passwordLabelError);
    moreThan(passwordInput2, passwordLabelError, passwordErrorDivP, 8);
};
repeatPasswordInput.onblur = function() {
    validateEmpty(repeatPasswordInput, repeatPasswordLabelError);
    moreThan(repeatPasswordInput, repeatPasswordLabelError, repeatPasswordErrorDivP, 8);
    if (repeatPasswordInput.value !== passwordInput2.value) {
        var child = document.createElement('label');
        child.innerHTML = "passwords dont match";
        child.classList.add(repeatPasswordInputClassName);
        child.classList.add("small");
        child.classList.add('reveal');
        repeatPasswordErrorDivP.appendChild(child);
        repeatPasswordLabelError.classList.remove('hidden');
        repeatPasswordLabelError.classList.add('reveal');
        isEqual = false;
    } else {
        isEqual = true;
    }
};
emailInput2.onblur = function() {
    validateEmpty(emailInput2, emailLabelError);
    validateEmail(emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
};
// FOCUS----------------------FOCUS-----------------------FOCUS
nameInput.onfocus = function() {
    thereAndBackAgain(nameLabelError, nameInputClassName);
};
LastNameInput.onfocus = function() {
    thereAndBackAgain(LastNameLabelError, LastNameInputClassName);
};
idInput.onfocus = function() {
    thereAndBackAgain(idLabelError, idInputClassName);
};
phoneNumberInput.onfocus = function() {
    thereAndBackAgain(phoneNumberLabelError, phoneNumberInputClassName);
};
birthDayInput.onfocus = function() {
    thereAndBackAgain(birthDayLabelError);
};
RegionInput.onfocus = function() {
    thereAndBackAgain(regionLabelError, RegionInputClassName);
};
addressInput.onfocus = function() {
    thereAndBackAgain(addressLabelError, addressInputClassName);
};
postalCodeInput.onfocus = function() {
    thereAndBackAgain(postalCodeLabelError, postalCodeInputClassName);
};
passwordInput2.onfocus = function() {
    thereAndBackAgain(passwordLabelError, passwordInput2ClassName);
};
repeatPasswordInput.onfocus = function() {
    thereAndBackAgain(repeatPasswordLabelError, repeatPasswordInputClassName);
};
emailInput2.onfocus = function() {
    thereAndBackAgain(emailLabelError, emailInputClassName);
};

function validateEmpty(contentInput, label) {
    if (contentInput.value.trim() === "") {
        label.classList.remove('hidden');
        label.classList.add('reveal');
        return isEmpty = false;
    } else {
        return isEmpty = true;
    }
};
function thereAndBackAgain(label, className) {
    var children = document.querySelectorAll('.reveal');
    if (isLetter === false
        || isNumber === false
        || isbigger === false
        || isSmaller === false
        || isBoth === false
        || isEqual === false
        || isEmail === false) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].classList.contains(className)
            || children[i].classList.contains('size')
            || children[i].classList.contains('size2')) {
              children[i].classList.remove('reveal');
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
};
function validateChars(input, label, parent, className, both) {
    var arr = [];
    isLetter = false;
    for (var i = 0; i < input.value.length; i++) {
      var ascii = input.value.charCodeAt(i);
      arr.push(ascii);
    };
    for (var j = 0; j < arr.length; j++) {
      if (both === false && (arr[j] < 65 || arr[j] > 90 && arr[j] < 97 || arr[j] > 122)) {
        var child;
        if (!child) {
        child = document.createElement('label');
        child.innerHTML = "Input must be only letters";
        child.classList.add(className);
        child.classList.add("small");
        child.classList.add('reveal');
        parent.appendChild(child);
        label.classList.remove('hidden');
        label.classList.add('reveal');
        isLetter = false;
        }
      } else if (both === true) {
        if ((arr[j] < 65 || arr[j] > 90 && arr[j] < 97 || arr[j] > 122) && (arr[j] < 48 || arr[j] > 57)) {
            var child;
            if (!child) {
            child = document.createElement('label');
            child.innerHTML = "Invalid character";
            child.classList.add(className);
            child.classList.add("small");
            child.classList.add('reveal');
            parent.appendChild(child);
            label.classList.remove('hidden');
            label.classList.add('reveal');
            isBoth = false;
            }
        } else {
            isBoth = true;
        }
      } else {
        isLetter = true;
      }
    }
  };
function validateNumbers(input, label, parent, className) {
    var arr = [];
    isNumber = false;
    for (var i = 0; i < input.value.length; i++) {
      var ascii = input.value.charCodeAt(i);
      arr.push(ascii);
    };
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] < 48 || arr[j] > 57) {
        var child;
        if (!child) {
        child = document.createElement('label');
        child.innerHTML = "Input must be only numbers";
        child.classList.add(className);
        child.classList.add("small");
        child.classList.add('reveal');
        parent.appendChild(child);
        label.classList.remove('hidden');
        label.classList.add('reveal');
        isNumber = false;
        }
      } else {
        isNumber = true;
      }
    }
  };

function moreThan(input, label, parent, numb) {
    if (input.value.length < numb) {
        var child;
        if (!child) {
        child = document.createElement('label');
        child.innerHTML = "Input must be at least " + numb + " characters long";
        child.classList.add("size");
        child.classList.add("small");
        child.classList.add('reveal');
        parent.appendChild(child);
        label.classList.remove('hidden');
        label.classList.add('reveal');
        isbigger = false;
        }
    } else {
        isbigger = true;
    }
}
function lessThan(input, label, parent, numb) {
    if (input.value.length > numb) {
        var child;
        if (!child) {
        child = document.createElement('label');
        child.innerHTML = "Input must be less than " + numb + " characters long";
        child.classList.add("size2");
        child.classList.add("small");
        child.classList.add('reveal');
        parent.appendChild(child);
        label.classList.remove('hidden');
        label.classList.add('reveal');
        isSmaller = false;
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
    var symbolRegex = /[^a-zA-Z0-9.]/;
    var testRegex = /^[^@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    isEmail = false;
    if (middle.includes(".")) {
      signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
    } else if (emailInput2.value.trim() === "") {
      signUpValidationError("Email required", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
    } else if (testRegex.test(emailInput2.value)) {
       if (emailInput2.value.includes(" ")) {
        signUpValidationError("Extra space detected", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
      } else if (emailInput2.value.indexOf('@') < 2) {
        signUpValidationError("Email too short", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
      } else if (symbolRegex.test(emailInput2.value.slice(emailInput2.value.indexOf('@') +1 ,
        emailInput2.value.indexOf('.'))) ||
        (symbolRegex.test(emailInput2.value.slice(0, emailInput2.value.indexOf('@')))) ||
        (symbolRegex.test(emailInput2.value.slice(emailInput2.value.indexOf('.') +5)))) {
        signUpValidationError("Invalid character", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
      } else if (!dot.test(emailInput2.value)) {
        signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
      } else if (emailErrorDivP.childElementCount > 1) {
        console.log("hola")
        thereAndBackAgain(emailLabelError, emailInputClassName);
      } else if (emailInput2.value.length >= 30) {
        signUpValidationError("TLDR Lol", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
      } else {
        isEmail = true;
      }
    } else {
      signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
    }
  }
    function signUpValidationError(text, label, className, parent) {
      var child = document.createElement('label');
      child.innerHTML = text;
      child.classList.add(className);
      child.classList.add("small");
      child.classList.add('reveal');
      parent.appendChild(child);
      label.classList.remove('hidden');
      label.classList.add('reveal');
    }
// INPUTS----------------------INPUTS-----------------------INPUTS
var nameInput = document.querySelector('#name');
var lastNameInput = document.querySelector('#last-name');
var idInput = document.querySelector('#id');
var phoneNumberInput = document.querySelector('#phone-number');
var birthDayInput = document.querySelector('#birth-day');
var regionInput = document.querySelector('#region');
var addressInput = document.querySelector('#address');
var postalCodeInput = document.querySelector('#postal-code');
var passwordInput2 = document.querySelector('#password-input');
var repeatPasswordInput = document.querySelector('#repeat-password-input');
var emailInput2 = document.querySelector('#email-input');
// LABELS----------------------LABELS-----------------------LABELS
var nameLabelError = document.querySelector('#name-error');
var lastNameLabelError = document.querySelector('#last-name-error');
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
var nameErrorDiv = document.querySelector('#name-error');
var nameErrorDivP = nameErrorDiv.parentNode;
var lastNameErrorDiv = document.querySelector('#last-name-error');
var lastNameErrorDivP = lastNameErrorDiv.parentNode;
var idErrorDiv = document.querySelector('#id-error');
var idErrorDivP = idErrorDiv.parentNode;
var phoneNumberErrorDiv = document.querySelector('#phone-number-error');
var phoneNumberErrorDivP = phoneNumberErrorDiv.parentNode;
var birthDayErrorDiv = document.querySelector('#birth-day-error');
var birthDayErrorDivP = birthDayErrorDiv.parentNode;
var regionErrorDiv = document.querySelector('#region-error');
var regionErrorDivP = regionErrorDiv.parentNode;
var addressErrorDiv = document.querySelector('#address-error');
var addressErrorDivP = addressErrorDiv.parentNode;
var postalCodeErrorDiv = document.querySelector('#postal-code-error');
var postalCodeErrorDivP = postalCodeErrorDiv.parentNode;
var passwordErrorDiv = document.querySelector('#password-error');
var passwordErrorDivP = passwordErrorDiv.parentNode;
var repeatPasswordErrorDiv = document.querySelector('#repeat-password-error');
var repeatPasswordErrorDivP = repeatPasswordErrorDiv.parentNode;
var emailErrorDiv = document.querySelector('#email-error');
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
var isAddress = true;
var hasError = false;

var nameIsValid = false;
var lastNameIsValid = false;
var idIsValid = false;
var phoneNumberIsValid = false;
var birthDayIsValid = false;
var regionIsValid = false;
var addressIsValid = false;
var postalCodeIsValid = false;
var passwordIsValid = false;
var repeatPasswordIsValid = false;
var emailIsValid = false;
// CLASSNAMES----------------------CLASSNAMES-----------------------CLASSNAMES
var nameInputClassName = 'only-letters';
var lastNameInputClassName = 'only-letters2';
var idInputClassName = 'only-numbers';
var phoneNumberInputClassName = 'only-numbers2';
var birthDayInputClassName = 'only-';
var regionInputClassName = 'both';
var addressInputClassName = 'both2';
var postalCodeInputClassName = 'only-numbers3';
var passwordInput2ClassName = 'only-passwords';
var repeatPasswordInputClassName = 'not-equal';
var emailInputClassName = 'only-emails';
// ARRS----------------------ARRS-----------------------ARRS
var errors = [];

var nameArr = ["Name: "];
var lastNameArr = ["Last name: "];
var idArr = ["Id: "];
var phoneArr = ["Phone number: "];
var birthArr = ["Birth day: "];
var regionArr = ["region: "];
var adressArr = ["Adress: "];
var postalArr = ["Postal code: "];
var paswordArr = ["Password: "];
var repeatArr = ["Repeat password: "];
var emailArr = ["Email: "];

var successArr = [];
// BLUR----------------------BLUR-----------------------BLUR
nameInput.onblur = function() {
    validateChars(nameInput, nameLabelError, nameErrorDivP, nameInputClassName, !both, nameArr);
    validateEmpty(nameInput, nameLabelError, nameArr);
    moreThan(nameInput, nameLabelError, nameErrorDivP, 3, nameArr);
    if (hasError) {
        nameLabelError.classList.add("name2");
        hasError = false;
        return;
    } else {
        nameIsValid = true;
        var success = "Name: " + nameInput.value;
        successArr.push(success);
    }
};
lastNameInput.onblur = function() {
    validateChars(lastNameInput, lastNameLabelError, lastNameErrorDivP, lastNameInputClassName, !both, lastNameArr);
    validateEmpty(lastNameInput, lastNameLabelError, lastNameArr);
    moreThan(lastNameInput, lastNameLabelError, lastNameErrorDivP, 3, lastNameArr);
    if (hasError) {
        lastNameLabelError.classList.add("last-name2");
        hasError = false;
        return;
    } else {
        lastNameIsValid = true;
        var success = "Last name: " + lastNameInput.value;
        successArr.push(success);
    }
};
idInput.onblur = function() {
    validateNumbers(idInput, idLabelError, idErrorDivP, idInputClassName, idArr);
    validateEmpty(idInput, idLabelError, idArr);
    moreThan(idInput, idLabelError, idErrorDivP, 7, idArr);
    if (hasError) {
        idLabelError.classList.add("id2");
        hasError = false;
        return;
    } else {
        idIsValid = true;
        var success = "id: " + idInput.value;
        successArr.push(success);
    }
};
phoneNumberInput.onblur = function() {
    validateNumbers(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDivP, phoneNumberInputClassName, phoneArr);
    validateEmpty(phoneNumberInput, phoneNumberLabelError, phoneArr);
    moreThan(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDivP, 10, phoneArr);
    lessThan(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDivP, 10, phoneArr);
    if (hasError) {
        phoneNumberLabelError.classList.add("phone2");
        hasError = false;
        return;
    } else {
        phoneNumberIsValid = true;
        var success = "Phone Number: " + phoneNumberInput.value;
        successArr.push(success);
    }
};
birthDayInput.onblur = function() {
    validateEmpty(birthDayInput, birthDayLabelError, birthArr);
    if (hasError) {
        birthDayLabelError.classList.add("birth-day2");
        hasError = false;
        return;
    } else {
        birthDayIsValid = true;
        var success = "Birth day: " + birthDayInput.value;
        successArr.push(success);
    }
};
regionInput.onblur = function() {
    validateEmpty(regionInput, regionLabelError, regionArr);
    moreThan(regionInput, regionLabelError, regionErrorDivP, 3, regionArr);
    validateChars(regionInput, regionLabelError, regionErrorDivP, regionInputClassName, both, regionArr);
    if (hasError) {
        regionLabelError.classList.add("region2");
        hasError = false;
        return;
    } else {
        regionIsValid = true;
        var success = "region: " + regionInput.value;
        successArr.push(success);
    }
};
addressInput.onblur = function() {
    moreThan(addressInput, addressLabelError, addressErrorDivP, 5, adressArr);
    var cleanAdrres = addressInput.value.trim();
    if (cleanAdrres.split("").filter(function(char){return char.indexOf(" ") != -1 ;}).length != 1) {
        var child;
        if (!child) {
        child = document.createElement('label');
        child.innerHTML = "Input must have a space";
        child.classList.add(addressInputClassName);
        child.classList.add("small");
        child.classList.add('reveal');
        addressErrorDivP.appendChild(child);
        addressLabelError.classList.remove('hidden');
        addressLabelError.classList.add('reveal');
        adressArr.push("Input must be only letters");
        errors.push(adressArr);
        isAddress = false;
        hasError = true;
        }
    } else {
        isAddress = true;
    }
    if (hasError) {
        addressLabelError.classList.add("address2");
        hasError = false;
        return;
    } else {
        addressIsValid = true;
        var success = "Adress: " + addressInput.value;
        successArr.push(success);
    }
};
postalCodeInput.onblur = function() {
    validateNumbers(postalCodeInput, postalCodeLabelError, postalCodeErrorDivP, postalCodeInputClassName, postalArr);
    validateEmpty(postalCodeInput, postalCodeLabelError, postalArr);
    moreThan(postalCodeInput, postalCodeLabelError, postalCodeErrorDivP, 4, postalArr);
    if (hasError) {
        postalCodeLabelError.classList.add("postal2");
        hasError = false;
        return;
    } else {
        postalCodeIsValid = true;
        var success = "Postal code: " + postalCodeInput.value;
        successArr.push(success);
    }
};
passwordInput2.onblur = function() {
    validateEmpty(passwordInput2, passwordLabelError, paswordArr);
    moreThan(passwordInput2, passwordLabelError, passwordErrorDivP, 8, paswordArr);
    if (hasError) {
        passwordLabelError.classList.add("password2");
        hasError = false;
        return;
    } else {
        passwordIsValid = true;
        var success = "Valid password";
        successArr.push(success);
    }
};
repeatPasswordInput.onblur = function() {
    validateEmpty(repeatPasswordInput, repeatPasswordLabelError, repeatArr);
    moreThan(repeatPasswordInput, repeatPasswordLabelError, repeatPasswordErrorDivP, 8, repeatArr);
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
    if (hasError) {
        repeatPasswordLabelError.classList.add("repeat2");
        hasError = false;
        return;
    } else {
        repeatPasswordIsValid = true;
        var success = "Paswords match";
        successArr.push(success);
    }
};
emailInput2.onblur = function() {
    validateEmpty(emailInput2, emailLabelError, emailArr);
    validateEmail(emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
    if (hasError) {
        emailLabelError.classList.add("email2");
        hasError = false;
        return;
    } else {
        emailIsValid = false;
        var success = "Email: " + emailInput2.value;
        successArr.push(success);
    }
};
// FOCUS----------------------FOCUS-----------------------FOCUS
nameInput.onfocus = function() {
    thereAndBackAgain(nameLabelError, nameInputClassName);
};
lastNameInput.onfocus = function() {
    thereAndBackAgain(lastNameLabelError, lastNameInputClassName);
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
regionInput.onfocus = function() {
    thereAndBackAgain(regionLabelError, regionInputClassName);
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

function validateEmpty(contentInput, label, array) {
    if (contentInput.value.trim() === "") {
        label.classList.remove('hidden');
        label.classList.add('reveal');
        hasError = true;
        array.push("Input required");
        errors.push(array);
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
        || isEmail === false
        || isAddress === false) {
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
function validateChars(input, label, parent, className, both, array) {
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
        array.push("Input must be only letters");
        errors.push(array);
        isLetter = false;
        hasError = true;
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
            array.push("Invalid character");
            errors.push(array);
            isBoth = false;
            hasError = true;
            }
        } else {
            isBoth = true;
        }
      } else {
        isLetter = true;
      }
    }
  };
function validateNumbers(input, label, parent, className, array) {
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
        array.push("Input must be only numbers");
        errors.push(array);
        isNumber = false;
        hasError = true;
        }
      } else {
        isNumber = true;
      }
    }
  };

function moreThan(input, label, parent, numb, array) {
    if (input.value.length < numb) {
        var child;
        if (!child) {
        child = document.createElement('label');
        child.innerHTML = "Wrong length";
        child.classList.add("size");
        child.classList.add("small");
        child.classList.add('reveal');
        parent.appendChild(child);
        label.classList.remove('hidden');
        label.classList.add('reveal');
        array.push("Wrong length");
        errors.push(array);
        isbigger = false;
        hasError = true;
        }
    } else {
        isbigger = true;
    }
}
function lessThan(input, label, parent, numb, array) {
    if (input.value.length > numb) {
        var child;
        if (!child) {
        child = document.createElement('label');
        child.innerHTML = "Wrong length";
        child.classList.add("size2");
        child.classList.add("small");
        child.classList.add('reveal');
        parent.appendChild(child);
        label.classList.remove('hidden');
        label.classList.add('reveal');
        array.push("Wrong length");
        errors.push(array);
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
    var symbolRegex = /[^a-zA-Z0-9.]/;
    var testRegex = /^[^@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    isEmail = false;
    hasError = true;
    if (middle.includes(".")) {
        signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
        emailArr.push("Invalid Email");
        errors.push(emailArr);
    } else if (emailInput2.value.trim() === "") {
        signUpValidationError("Email required", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
        emailArr.push("Email required");
        errors.push(emailArr);
    } else if (testRegex.test(emailInput2.value)) {
       if (emailInput2.value.includes(" ")) {
        signUpValidationError("Extra space detected", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
        emailArr.push("Extra space detected");
        errors.push(emailArr);
      } else if (emailInput2.value.indexOf('@') < 2) {
        signUpValidationError("Email too short", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
        emailArr.push("Email too short");
        errors.push(emailArr);
      } else if (symbolRegex.test(emailInput2.value.slice(emailInput2.value.indexOf('@') +1 ,
        emailInput2.value.indexOf('.'))) ||
        (symbolRegex.test(emailInput2.value.slice(0, emailInput2.value.indexOf('@')))) ||
        (symbolRegex.test(emailInput2.value.slice(emailInput2.value.indexOf('.') +5)))) {
        signUpValidationError("Invalid character", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
        emailArr.push("Invalid character");
        errors.push(emailArr);
      } else if (!dot.test(emailInput2.value)) {
        signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
        emailArr.push("Invalid Email");
        errors.push(emailArr);
      } else if (emailErrorDivP.childElementCount > 1) {
        thereAndBackAgain(emailLabelError, emailInputClassName);
      } else if (emailInput2.value.length >= 30) {
        signUpValidationError("TLDR Lol", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
        emailArr.push("TLDR Lol");
        errors.push(emailArr);
      } else {
        isEmail = true;
        hasError = false;
      }
    } else {
        signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, isEmail);
        emailArr.push("Invalid Email");
        errors.push(emailArr);
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
var continueBtn = document.querySelector('#continue-btn')
continueBtn.onclick = function() {
    if (nameIsValid && lastNameIsValid && idIsValid && phoneNumberIsValid && birthDayIsValid && regionIsValid && addressIsValid && postalCodeIsValid && passwordIsValid && repeatPasswordIsValid) {
        var nice = successArr.join('\n');
        alert(nice);
        window.location.href = "./log-in.html";
    } else {
        var notNice = errors.join('\n');
        alert(notNice);
    }
}

// INPUTS----------------------INPUTS-----------------------INPUTS
var nameInput = document.querySelector('#name');
var lastNameInput = document.querySelector('#last-name');
var idInput = document.querySelector('#id');
var phoneNumberInput = document.querySelector('#phone-number');
var dateOfBirthInput = document.querySelector('#date-of-birth');
var cityInput = document.querySelector('#city');
var addressInput = document.querySelector('#address');
var zipInput = document.querySelector('#zip');
var passwordInput2 = document.querySelector('#password-input');
var repeatPasswordInput = document.querySelector('#repeat-password-input');
var emailInput2 = document.querySelector('#email-input');
// LABELS----------------------LABELS-----------------------LABELS
var nameLabelError = document.querySelector('#name-error');
var lastNameLabelError = document.querySelector('#last-name-error');
var idLabelError = document.querySelector('#id-error');
var phoneNumberLabelError = document.querySelector('#phone-number-error');
var dateOfBirthLabelError = document.querySelector('#date-of-birth-error');
var cityLabelError = document.querySelector('#city-error');
var addressLabelError = document.querySelector('#address-error');
var zipLabelError = document.querySelector('#zip-error');
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
var dateOfBirthErrorDiv = document.querySelector('#date-of-birth-error');
var dateOfBirthErrorDivP = dateOfBirthErrorDiv.parentNode;
var cityErrorDiv = document.querySelector('#city-error');
var cityErrorDivP = cityErrorDiv.parentNode;
var addressErrorDiv = document.querySelector('#address-error');
var addressErrorDivP = addressErrorDiv.parentNode;
var zipErrorDiv = document.querySelector('#zip-error');
var zipErrorDivP = zipErrorDiv.parentNode;
var passwordErrorDiv = document.querySelector('#password-error');
var passwordErrorDivP = passwordErrorDiv.parentNode;
var repeatPasswordErrorDiv = document.querySelector('#repeat-password-error');
var repeatPasswordErrorDivP = repeatPasswordErrorDiv.parentNode;
var emailErrorDiv = document.querySelector('#email-error');
var emailErrorDivP = emailErrorDiv.parentNode;
// CLASSNAMES----------------------CLASSNAMES-----------------------CLASSNAMES
var nameInputClassName = 'only-letters';
var lastNameInputClassName = 'only-letters2';
var idInputClassName = 'only-numbers';
var phoneNumberInputClassName = 'only-numbers2';
var dateOfBirthInputClassName = 'only-dob';
var cityInputClassName = 'both';
var addressInputClassName = 'both2';
var zipInputClassName = 'only-numbers3';
var passwordInput2ClassName = 'only-passwords';
var repeatPasswordInputClassName = 'not-equal';
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
var dateOfBirthIsValid = false;
var cityIsValid = false;
var addressIsValid = false;
var zipIsValid = false;
var passwordIsValid = false;
var repeatPasswordIsValid = false;
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
nameInput.onblur = function() {
    validateChars(nameInput, nameLabelError, nameErrorDivP, nameInputClassName, !both, nameArr, nameInput);
    validateEmpty(nameInput, nameLabelError, nameArr, nameInput);
    moreThan(nameInput, nameLabelError, nameErrorDivP, nameInputClassName, 3, nameArr, nameInput);
    if (hasError) {
        hasError = false;
        return;
    } else {
        nameIsValid = true;
        var success = "Name: " + nameInput.value;
        successArr.push(success);
    }
};
lastNameInput.onblur = function() {
    validateChars(lastNameInput, lastNameLabelError, lastNameErrorDivP, lastNameInputClassName, !both, lastNameArr, lastNameInput);
    validateEmpty(lastNameInput, lastNameLabelError, lastNameArr, lastNameInput);
    moreThan(lastNameInput, lastNameLabelError, lastNameErrorDivP,lastNameInputClassName, 3, lastNameArr, lastNameInput);
    if (hasError) {
        hasError = false;
        return;
    } else {
        lastNameIsValid = true;
        var success = "Last name: " + lastNameInput.value;
        successArr.push(success);
    }
};
idInput.onblur = function() {
    validateNumbers(idInput, idLabelError, idErrorDivP, idInputClassName, idArr, idInput);
    validateEmpty(idInput, idLabelError, idArr, idInput);
    moreThan(idInput, idLabelError, idErrorDivP,idInputClassName, 7, idArr, idInput);
    if (hasError) {
        hasError = false;
        return;
    } else {
        idIsValid = true;
        var success = "id: " + idInput.value;
        successArr.push(success);
    }
};
phoneNumberInput.onblur = function() {
    validateNumbers(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDivP, phoneNumberInputClassName, phoneArr, phoneNumberInput);
    validateEmpty(phoneNumberInput, phoneNumberLabelError, phoneArr, phoneNumberInput);
    moreThan(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDivP, phoneNumberInputClassName, 10, phoneArr, phoneNumberInput);
    lessThan(phoneNumberInput, phoneNumberLabelError, phoneNumberErrorDivP, phoneNumberInputClassName, 10, phoneArr, phoneNumberInput);
    if (hasError) {
        hasError = false;
        return;
    } else {
        phoneNumberIsValid = true;
        var success = "Phone Number: " + phoneNumberInput.value;
        successArr.push(success);
    }
};
dateOfBirthInput.onblur = function() {
    validateEmpty(dateOfBirthInput, dateOfBirthLabelError, birthArr, dateOfBirthInput);
    if (hasError) {
        hasError = false;
        return;
    } else {
        dateOfBirthIsValid = true;
        var birthD = dateOfBirthInput.value.split('-');
        var oGFormattedDate = birthD[2] + '/' + birthD[1] + '/' + birthD[0];
        var success = "Birth day: " + oGFormattedDate;
        successArr.push(success);
    }
};
cityInput.onblur = function() {
    validateChars(cityInput, cityLabelError, cityErrorDivP, cityInputClassName, both, cityArr, cityInput);
    validateEmpty(cityInput, cityLabelError, cityArr, cityInput);
    moreThan(cityInput, cityLabelError, cityErrorDivP,cityInputClassName, 3, cityArr, cityInput);
    if (hasError) {
        hasError = false;
        return;
    } else {
        cityIsValid = true;
        var success = "city: " + cityInput.value;
        successArr.push(success);
    }
};
addressInput.onblur = function() {
    moreThan(addressInput, addressLabelError, addressErrorDivP, addressInputClassName, 5, adressArr, addressInput);
    var cleanAdrres = addressInput.value.trim();
    if (cleanAdrres.split("").filter(function(char){return char.indexOf(" ") != -1 ;}).length != 1) {
        var child;
        if (!child) {
        var text = "Input must have a space";
        signUpValidationError(text, addressLabelError, addressInputClassName, addressErrorDivP, addressInput);
        adressArr.push("Input must be only letters");
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
        var success = "Adress: " + addressInput.value;
        successArr.push(success);
    }
};
zipInput.onblur = function() {
    validateNumbers(zipInput, zipLabelError, zipErrorDivP, zipInputClassName, zipArr, zipInput);
    validateEmpty(zipInput, zipLabelError, zipArr, zipInput);
    moreThan(zipInput, zipLabelError, zipErrorDivP,zipInputClassName, 4, zipArr, zipInput);
    if (hasError) {
        hasError = false;
        return;
    } else {
        zipIsValid = true;
        var success = "Postal code: " + zipInput.value;
        successArr.push(success);
    }
};
passwordInput2.onblur = function() {
    validateEmpty(passwordInput2, passwordLabelError, paswordArr, passwordInput2);
    moreThan(passwordInput2, passwordLabelError, passwordErrorDivP, passwordInput2ClassName, 8, paswordArr, passwordInput2);
    if (hasError) {
        hasError = false;
        return;
    } else {
        passwordIsValid = true;
        var success = "Valid password";
        successArr.push(success);
    }
};
repeatPasswordInput.onblur = function() {
    validateEmpty(repeatPasswordInput, repeatPasswordLabelError, repeatArr, repeatPasswordInput);
    moreThan(repeatPasswordInput, repeatPasswordLabelError, repeatPasswordErrorDivP, repeatPasswordInputClassName, 8, repeatArr, repeatPasswordInput);
    if (repeatPasswordInput.value !== passwordInput2.value) {
        text = "passwords dont match";
        signUpValidationError(text, repeatPasswordLabelError, repeatPasswordInputClassName, repeatPasswordErrorDivP, repeatPasswordInput)
        isEqual = false;
    } else {
        isEqual = true;
    }
    if (hasError) {
        hasError = false;
        return;
    } else {
        repeatPasswordIsValid = true;
        var success = "Paswords match";
        successArr.push(success);
    }
};
emailInput2.onblur = function() {
    validateEmpty(emailInput2, emailLabelError, emailArr, emailInput2);
    validateEmail(emailLabelError, emailInputClassName, emailErrorDivP, isEmail, emailInput2);
    if (hasError) {
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
    thereAndBackAgain(nameLabelError, nameInputClassName, nameArr, nameInput);
};
lastNameInput.onfocus = function() {
    thereAndBackAgain(lastNameLabelError, lastNameInputClassName, lastNameArr, lastNameInput);
};
idInput.onfocus = function() {
    thereAndBackAgain(idLabelError, idInputClassName, idArr, idInput);
};
phoneNumberInput.onfocus = function() {
    thereAndBackAgain(phoneNumberLabelError, phoneNumberInputClassName, phoneArr, phoneNumberInput);
};
dateOfBirthInput.onfocus = function() {
    thereAndBackAgain(dateOfBirthLabelError, dateOfBirthInputClassName, birthArr, dateOfBirthInput);
};
cityInput.onfocus = function() {
    thereAndBackAgain(cityLabelError, cityInputClassName, cityArr, cityInput);
};
addressInput.onfocus = function() {
    thereAndBackAgain(addressLabelError, addressInputClassName, adressArr, addressInput);
};
zipInput.onfocus = function() {
    thereAndBackAgain(zipLabelError, zipInputClassName, zipArr, zipInput);
};
passwordInput2.onfocus = function() {
    thereAndBackAgain(passwordLabelError, passwordInput2ClassName, paswordArr, passwordInput2);
};
repeatPasswordInput.onfocus = function() {
    thereAndBackAgain(repeatPasswordLabelError, repeatPasswordInputClassName, repeatArr, repeatPasswordInput);
};
emailInput2.onfocus = function() {
    thereAndBackAgain(emailLabelError, emailInputClassName, emailArr, emailInput2);
};
function validateEmpty(contentInput, label, array) {
    if (contentInput.value.trim() === "") {
        label.classList.remove('hidden');
        label.classList.add('reveal');
        hasError = true;
        array.push("Input required");
        return isEmpty = false;
    } else {
        return isEmpty = true;
    }
};
function thereAndBackAgain(label, className, array, input) {
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
              input.classList.remove('red');
              children[i].classList.add('hidden');
              array.pop();
              array.pop("Input required");
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
function validateChars(input, label, parent, className, both, array, input) {
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
        var text = "Input must be only letters";
        signUpValidationError(text, label, className, parent, input);
        array.push("Input must be only letters");
        isLetter = false;
        hasError = true;
        }
      } else if (both === true) {
        if ((arr[j] < 65 || arr[j] > 90 && arr[j] < 97 || arr[j] > 122) && (arr[j] < 48 || arr[j] > 57)) {
            var child;
            if (!child) {
            text = "Invalid character";
            signUpValidationError(text, label, className, parent, input);
            array.push("Invalid character");
            isBoth = false;
            hasError = true;
            }
        } else {
            isBoth = true;
        }
      } else {
        isLetter = true;
        array.pop();
      }
    }
  };
function validateNumbers(input, label, parent, className, array, input) {
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
        var text = "Input must be only numbers";
        signUpValidationError(text, label, className, parent, input);
        array.push("Input must be only numbers");
        isNumber = false;
        hasError = true;
        }
      } else {
        isNumber = true;
        array.pop();
      }
    }
  };

function moreThan(input, label, parent, className, numb, array, input) {
    if (input.value.length < numb) {
        var child;
        if (!child) {
        var text = "Wrong length";
        signUpValidationError(text, label, className, parent, input);
        array.push("Wrong length");
        isbigger = false;
        hasError = true;
        }
    } else {
        isbigger = true;
        array.pop();
    }
}
function lessThan(input, label, parent, className, numb, array, input) {
    if (input.value.length > numb) {
        var child;
        if (!child) {
        var text = "Wrong length";
        signUpValidationError(text, label, className, parent, input);
        array.push("Wrong length");
        isSmaller = false;
        hasError = true;
        }
    } else {
        isSmaller = true;
        array.pop();
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
        signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, emailInput2);
        emailArr.push("Invalid Email");
    } else if (emailInput2.value.trim() === "") {
        signUpValidationError("Email required", emailLabelError, emailInputClassName, emailErrorDivP, emailInput2);
        emailArr.push("Email required");
    } else if (testRegex.test(emailInput2.value)) {
       if (emailInput2.value.includes(" ")) {
        signUpValidationError("Extra space detected", emailLabelError, emailInputClassName, emailErrorDivP, emailInput2);
        emailArr.push("Extra space detected");
      } else if (emailInput2.value.indexOf('@') < 2) {
        signUpValidationError("Email too short", emailLabelError, emailInputClassName, emailErrorDivP, emailInput2);
        emailArr.push("Email too short");
      } else if (!dot.test(emailInput2.value)) {
        signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, emailInput2);
        emailArr.push("Invalid Email");
      } else if (emailErrorDivP.childElementCount > 1) {
        thereAndBackAgain(emailLabelError, emailInputClassName);
      } else if (emailInput2.value.length >= 40) {
        signUpValidationError("TLDR Lol", emailLabelError, emailInputClassName, emailErrorDivP, emailInput2);
        emailArr.push("TLDR Lol");
      } else {
        isEmail = true;
        hasError = false;
        errors.pop(emailArr);
        emailArr.pop();
      }
    } else {
        signUpValidationError("Invalid Email", emailLabelError, emailInputClassName, emailErrorDivP, emailInput2);
        emailArr.push("Invalid Email");
    }
  }
function signUpValidationError(text, label, className, parent, input) {
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
// STORAGE----------------------STORAGE-----------------------STORAGE
function send() {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("lastName", lastNameInput.value);
    localStorage.setItem("id", idInput.value);
    localStorage.setItem("phoneNumber", phoneNumberInput.value);
    localStorage.setItem("dateOfBirth", dateOfBirthInput.value);
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
    dateOfBirthInput.value = localStorage.getItem("dateOfBirth");
    cityInput.value = localStorage.getItem("city");
    addressInput.value = localStorage.getItem("address");
    zipInput.value = localStorage.getItem("zip");
    emailInput2.value = localStorage.getItem("email");
    passwordInput2.value = localStorage.getItem("password");
    repeatPasswordInput.value = localStorage.getItem("password");
}
// FETCH----------------------FETCH-----------------------FETCH
function submit(event) {
    event.preventDefault();
  }
var url = "https://api-rest-server.vercel.app/signup";
var continueBtn = document.querySelector('#continue-btn')
continueBtn.onclick = function(event) {
    submit(event);
    if (nameIsValid
        && lastNameIsValid
        && idIsValid
        && phoneNumberIsValid
        && dateOfBirthIsValid
        && cityIsValid
        && addressIsValid
        && zipIsValid
        && passwordIsValid
        && repeatPasswordIsValid) {
    send();
    var dob = dateOfBirthInput.value.split('-');
    var formattedDate = dob[1] + '/' + dob[2] + '/' + dob[0];
    var data = {
        name: nameInput.value,
        lastName: lastNameInput.value,
        id: idInput.value,
        phoneNumber: phoneNumberInput.value,
        dateOfBirth: dateOfBirthInput.value,
        city: cityInput.value,
        address: addressInput.value,
        zip: zipInput.value,
        password: passwordInput2.value,
        repeatPassword: repeatPasswordInput.value,
        email: emailInput2.value
    };
    fetch(`${url}?name=${data.name}&lastName=${data.lastName}&dni=${data.id}&phone=${data.phoneNumber}&dob=${formattedDate}&city=${data.city}&address=${data.address}&zip=${data.zip}&password=${data.password}&email=${data.email}`)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        if (data.success) {
            alert("Success!!!" + "\n" + data.msg);
            window.location.href = "./log-in.html";
          } else {
            alert("Error: " + data.msg);
          }
    })
    .catch(function(error) {
        alert(error);
    });
        var nice = successArr.join('\n');
        alert(nice);
    } else {
        errors.push("Name: " + nameArr);
        errors.push("Last name: " + lastNameArr);
        errors.push("Id: " + idArr);
        errors.push("Phone number: " + phoneArr);
        errors.push("Date of Birth: " + birthArr);
        errors.push("City: " + cityArr);
        errors.push("Adress: " + adressArr);
        errors.push("Postal code: " + zipArr);
        errors.push("Password: " + paswordArr);
        errors.push("Repeat password: " + repeatArr);
        errors.push("Email: " + emailArr);
        var notNice = errors.join('\n');
        alert(notNice);
    }
}

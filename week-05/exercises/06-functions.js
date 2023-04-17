console.log("Exercise 6- Functions.");

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
 Ejecutar la función y guardar el resultado en una variable,
 mostrando el valor de dicha variable en la consola del navegador.*/
console.log("Exercise 6- a.");

function sum(a, b) {
    return a + b;
}
var answer = sum(10, 1214);
console.log ("Answer: " + answer);

/* b. Copiar la función suma anterior y agregarle una validación
 para controlar si alguno de los parámetros no es un número; de no ser un número,
 mostrar un alert aclarando que uno de los parámetros
 tiene error y retornar el valor NaN como resultado.*/
console.log("Exercise 6- b.");

function newSum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("One of the parameters is not a number");
        return NaN;
    } else {
        return a + b;
    }
}
var secondAnswer = newSum(10, "Australopithecus");
console.log ("Answer: " + secondAnswer);


/* c. Crear una función “validateInteger” que reciba un número como parámetro
 y devuelva verdadero si es un número entero.*/
console.log("Exercise 6- c.");

function validateInteger(a) {
   return Number.isInteger(a);
}
var thirdAnswer = validateInteger(22.5);
console.log ("Answer: " + thirdAnswer);

/* d. Copiar y renombrar la función suma del ejercicio 6b)
 y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros.
 En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).*/
console.log("Exercise 6- d.");

function anotherNewSum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("One of the parameters is not a number");
        return NaN;
    } else {
        if (validateInteger(a) === true && validateInteger(b) === true) {
            return a + b;
        } else {
            alert("One of the parameters is not a whole number");
            a = Math.round(a);
            b = Math.round(b);
            return a + b;
        }
    }
}
var fourthAnswer = anotherNewSum(10, 22.4);
console.log ("Answer: " + fourthAnswer);

/* e. Convertir la validación del ejercicio 6d) en una función separada
 y llamarla dentro de una nueva función probando que todo siga
 funcionando igual que en el apartado anterior.*/
console.log("Exercise 6- e.");

function validateAnswer(a, b) {
    if (validateInteger(a) === true && validateInteger(b) === true) {
        return a + b;
    } else {
        alert("One of the parameters is not a whole number");
        a = Math.round(a);
        b = Math.round(b);
        return a + b;
    }
}
function yetAnotherNewSum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("One of the parameters is not a number");
        return NaN;
    } else {
        return validateAnswer(a, b);
    }
}
var fifthAnswer = yetAnotherNewSum(10, 22.7);
console.log ("Answer: " + fifthAnswer);
console.log("Exercise 3- Arrays.");

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
 "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
 mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log("Exercise 3- a.");

var myArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Result: " + myArr[4], myArr[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log("Exercise 3- b.");

myArr.sort();
console.log("Result: " + myArr);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */
console.log("Exercise 3- c.");

myArr.unshift("Santembre");
myArr.push("Herrerosto");
console.log("Result: " + myArr);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */
console.log("Exercise 3- d.");

myArr.shift();
myArr.pop();
console.log("Result: " + myArr);

/* e. Invertir el orden del array (utilizar reverse). */
console.log("Exercise 3- e.");

myArr.reverse();
console.log("Result: " + myArr);

/* f. Unir todos los elementos del array en un único string donde cada mes
 este separado por un guión - (utilizar join). */
console.log("Exercise 3- f.");

console.log("Result: " + myArr.join('-'));

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
console.log("Exercise 3- g.");

myArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var slicedArr = myArr.slice(4, 11);
console.log("Result: " + slicedArr);


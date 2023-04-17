console.log("Exercise 2- Strings.");

/* a. Crear una variable de tipo string con al menos 10 caracteres y
 convertir todo el texto en mayúscula (utilizar toUpperCase). */
console.log("Exercise 2- a.");

var upperCase = "characters"
upperCase = upperCase.toUpperCase();
console.log("Answer: " + upperCase);

/* b. Crear una variable de tipo string con al menos 10 caracteres y
 generar un nuevo string con los primeros 5 caracteres guardando el resultado
 en una nueva variable (utilizar substring). */
console.log("Exercise 2- b.");

var beggining = "otherChars";
var beginningFirstFive = beggining.substring(0 , 5);
console.log(beginningFirstFive);

/* c. Crear una variable de tipo string con al menos 10 caracteres y
 generar un nuevo string con los últimos 3 caracteres
 guardando el resultado en una nueva variable (utilizar substring). */
console.log("Exercise 2- c.");

var lastThree = "finalChars";
var lastThreeEnd = lastThree.substring(7 , 10);
console.log("Answer: " + lastThreeEnd);

/* d. Crear una variable de tipo string con al menos 10 caracteres y
 generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
 Guardar el resultado en una nueva variable
 (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log("Exercise 2- d.");

var themBoth = "charGalore"
upperCaseBeginning = themBoth.substring(0 , 1);
upperCaseBeginning = upperCaseBeginning.toUpperCase();
lowerCaseEnd = themBoth.substring(1 , 10);
lowerCaseEnd = lowerCaseEnd.toLowerCase();
var capitalize = upperCaseBeginning + lowerCaseEnd;
console.log("Answer: " + capitalize);

/* e. Crear una variable de tipo string con al menos 10 caracteres y
 algún espacio en blanco. Encontrar la posición del primer espacio en blanco y
 guardarla en una variable (utilizar indexOf). */
console.log("Exercise 2- e.");

var withSpace = "Nine Chars";
var index = withSpace.indexOf(" ");
console.log("Answer: " + index);

/* f. Crear una variable de tipo string con al menos 2 palabras largas
 (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores
 para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y
 las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
console.log("Exercise 2- f.");

var LongWords = "firstChars lastOthers"
var firstIndex = LongWords.indexOf("irstChars");
var lastIndex = LongWords.indexOf("astOthers");
var capitalizeFirst = LongWords.substring(0, firstIndex);
var capitalizeLast = LongWords.substring(11, lastIndex);
var firstRest = LongWords.substring(firstIndex, 11);
var lastRest = LongWords.substring(lastIndex);
capitalizeFirst = capitalizeFirst.toUpperCase();
capitalizeLast = capitalizeLast.toUpperCase();
firstRest = firstRest.toLowerCase();
lastRest = lastRest.toLowerCase();
var result = capitalizeFirst + firstRest + capitalizeLast + lastRest;
console.log("Answer: " + result);

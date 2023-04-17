console.log("Exercise 4- If Else.");

/* a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
 si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje
 “Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/
console.log("Exercise 4- a.");

var randomNumber = Math.random();
if (randomNumber >= 0.5) {
    alert("Number: " + randomNumber + " Result: Greater than or equal to 0,5");
} else {
    alert("Number: " + randomNumber + " Result: Lower than 0,5");
};

/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y
 muestre los siguientes mensajes de alerta:
I. “Bebe” si la edad es menor a 2 años;
II. “Niño” si la edad es entre 2 y 12 años;
III. “Adolescente” entre 13 y 19 años;
IV. “Joven” entre 20 y 30 años;
V. “Adulto” entre 31 y 60 años;
VI. “Adulto mayor” entre 61 y 75 años;
VII. “Anciano” si es mayor a 75 años.*/
console.log("Exercise 4- b.");

var age = 14;
if (age < 2) {
    alert("Number: " + age + " Result: I. Bebé");
} else if (age >= 2 && age < 12) {
    alert("Number: " + age + " Result: II. Niño");
} else if (age >= 13 && age < 19) {
    alert("Number: " + age + " Result: III. Adolescente");
} else if (age >= 20 && age < 30) {
    alert("Number: " + age + " Result: IV. Joven");
} else if (age >= 31 && age < 60) {
    alert("Number: " + age + " Result: V. Adulto");
} else if (age >= 61 && age < 75) {
    alert("Number: " + age + " Result: VI. Adulto mayor");
} else {
    alert("Number: " + age + " Result: VII. Anciano");
};
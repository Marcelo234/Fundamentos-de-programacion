let numero1;
let numero2;
let resultado;

alert("Ejercicio 2 - Suma de dos numeros");
numero1 = Number(prompt("Ingrese el primer numero"));
numero2 = Number(prompt("Ingrese el segundo numero"));

resultado = numero1 + numero2;

document.getElementById("num1").innerHTML = "El primer numero es : " + numero1;
document.getElementById("num2").innerHTML = "El segundo numero es : " + numero2;
document.getElementById("suma").innerHTML = "La suma es igual a: " + resultado;
let cont;
let suma;

alert("Ejercicio 10 - Suma de numeros naturales do while");

var n = new Number();
n = Number(prompt("Ingrese un numero"));
document.getElementById("ingreseNumero").innerHTML = "Ingrese un numero : " + n;
cont = 0;
suma = 0;
do {
    cont = cont+1;
	suma = suma+cont;
} while (cont <= n);
document.write("La suma es : ",suma,'<BR/>');
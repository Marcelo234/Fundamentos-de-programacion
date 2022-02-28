
alert("Ejercicio 16 - Suma de pares e impares desde 0");

let sumaPares, sumaImpares, cont, numeroImpar, numeroPar;
cont = 0;
numeroPar = 0;
numeroImpar = 0;
sumaPares = 0;
sumaImpares = 0;

numero = prompt("Ingrese un numero : ");
num = parseFloat(numero);
document.getElementById("leerNumero").innerHTML = "Ingrese un numero : " + num;

do { cont = cont + 1;

if (0 == cont % 2) {
    numeroPar = numeroPar + 1;

    sumaPares = sumaPares + cont;

} else {
    numeroImpar = numeroImpar + 1;
    
    sumaImpares = sumaImpares + cont;
}
} while (cont < num);
document.write("Suma de pares : " + sumaPares, '<BR/>');
document.write("Suma de impares : " + sumaImpares, '<BR/>');



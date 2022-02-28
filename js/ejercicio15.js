
alert("Ejercicio 15 - 10 numeros pares e impares");

var cont = 1;
var impares = 0;
var pares = 0;

do { cont = cont + 1;
    numero = prompt("Ingrese un numero");
    num = parseFloat(numero);
alert(num)
valor = num % 2
if (valor == 0) {
    pares = pares + 1;
} else {
    impares = impares + 1;
}
    } while (cont < 11 && cont > 0);
        alert("Pares: " + pares);
        document.write("Pares:" + pares,'<BR/>');
    alert("Impares: " + impares);
    document.write("Impares: " + impares);

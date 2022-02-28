let cont;
let suma;

alert("Suma de numeros naturales");

var n = new Number();
n = Number(prompt("Ingrese un numero"));
document.getElementById("ingreseNumero").innerHTML = "Ingrese un numero : " + n;
cont = 0;
suma = 0;
while (cont<n) {
	cont = cont+1;
	suma = suma+cont;
}
document.write("La suma es : ",suma,'<BR/>');

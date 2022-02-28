
alert("Ejercicio 13 - Mayor de los 3")

var a = new Number();
var b = new Number();
var c = new Number();
a = Number(prompt("Ingresar el primer numero"));
document.getElementById("ingreseNumeros").innerHTML = " " + a;
b = Number(prompt("Ingresar el segundo numero"));
document.getElementById("ingreseNumero").innerHTML = " " + b;
c = Number(prompt("Ingresar el tercer numero"));
document.getElementById("ingreseNum").innerHTML = " " + c;
if (a>b) {
    if (a>c) {
        document.write("El numero ",a," es el mayor de los tres",'<BR/>');
    } else {
        document.write("El numero ",c," es el mayor de los tres",'<BR/>');
    }
} else {
    if (b>c) {
        document.write("El numero ",b," es el mayor de los tres",'<BR/>');
    } else {
        document.write("El numero ",c," es el mayor de los tres",'<BR/>');
    }
}
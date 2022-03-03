
alert("Ejercicio 1 - Numeros del 1 al 10 y su equivalente");

var n = new Number();
n = Number(prompt("Ingrese un numero del 1 al 10"));
document.write("Ingresa un numero del 1 al 10",'<BR/>');
document.write(" ", n,'<BR/>');
switch (n) {
case 1:
    document.write("I",'<BR/>');
    break;
case 2:
    document.write("II",'<BR/>');
    break;
case 3:
    document.write("III",'<BR/>');
    break;
case 4:
    document.write("IV",'<BR/>');
    break;
case 5:
    document.write("V",'<BR/>');
    break;
case 6:
    document.write("VI",'<BR/>');
    break;
case 7:
    document.write("VII",'<BR/>');
    break;
case 8:
    document.write("VIII",'<BR/>');
    break;
case 9:
    document.write("IX",'<BR/>');
    break;
case 10:
    document.write("X",'<BR/>');
    break;
default:
    document.write("Ingrese un numero del 1 al 10",'<BR/>');
}
var alto;
var ancho;

alert("Ejercicio 1 - Calcular el area de un rectangulo");
alto = prompt("Ingrese el alto en CM", "cm");
ancho = prompt("Ingrese el ancho en CM", "cm");

area = alto * ancho;

document.getElementById("altoRectangulo").innerHTML = "Alto=" + alto;
document.getElementById("anchoRectangulo").innerHTML = "Ancho=" + ancho;

document.getElementById("areaRectangulo").innerHTML = "El area del rectangulo es: " + area;
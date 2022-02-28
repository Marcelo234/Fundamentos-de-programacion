
alert("Ejercicio 27 - Año bisiesto y fecha correcta");

año = prompt("Ingrese el año");
año = parseInt(año);
if ((año % 4 == 0) && (año % 100 !=0  || año % 400 == 0)) {
   document.write("El año es bisiesto");
} else {
   document.write("El año no es bisiesto");
}



alert("Ejercicio 17 - Promedio de n notas");

var notas = new Number();
	var suma = new Number();
	var prom = new Number();
	var n = new Number();
	var acum = new Number();
	acum = 1;
	suma = 0;
    notas = Number(prompt("Cuantas notas desea promediar"));
	document.getElementById("notasPromedio").innerHTML = "Cuantas notas desea promediar : " + notas;
	while (acum<=notas) {
        n = Number(prompt("Ingrese una nota"));
        document.write("Ingrese la nota numero : ",acum,'<BR/>');
        document.write(" ", n,'<BR/>');
		suma = suma+n;
		acum = acum+1;
	}
	prom = suma/notas;
	document.write("El promedio es: ",prom,'<BR/>');



    alert("Ejercicio 8 - Clasificacion de notas");

    var nota = new Number();
	var nombre = new String();
	nombre = prompt("Ingrese el nombre del estudiante");
    document.getElementById("Ingrese el nombre del estudiante").innerHTML = "Ingrese el nombre del estudiante : " + nombre;
    nota = Number(prompt("Ingrese la nota del estudiante"));
    document.getElementById("notaEstudiante").innerHTML = "Ingrese la nota del estudiante : " + nota;
	if (nota>=0 && nota<=2) {
		document.write("El estudiante ",nombre," Necesita Reforzamiento",'<BR/>');
	} else {
		if (nota>=3 && nota<=4) {
			document.write("El estudiante ",nombre," Esta Desaprobado",'<BR/>');
		} else {
			if (nota>=5 && nota<=7) {
				document.write("El estudiante ",nombre," Esta aprobado",'<BR/>');
			} else {
				if (nota>=8 && nota<=9) {
					document.write("El estudiante ",nombre," Tiene un promedio EXCELENTE",'<BR/>');
				} else {
					if (nota==10) {
						document.write("El estudiante ",nombre," Esta BECADO",'<BR/>');
					} else {
						document.write("Nota no valida volver a ingresar",'<BR/>');
					}
				}
			}
		}
	}
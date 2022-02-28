
alert("Ejercicio 11 - Alumnos aprobados y desaprobados");

    var apro; 
    var desa;
    apro = prompt("Ingrese los alumnos aprobados");
	document.getElementById("alumAprobados").innerHTML = "Alumnos aprobados : " + apro;
	desa = prompt("Ingrese los alumnos desaprobados");
    document.getElementById("alumDesaprobados").innerHTML = "Alumnos desaprobados : " + desa;
	total = parseFloat (apro) + parseFloat (desa);
    document.write("Total: ",total,'<BR/>');
    porA = (apro * 100) / total;
    document.write("Alumnos aprobados : ",porA,"%",'<BR/>');
    porD = (desa * 100) / total;
    document.write("Alumnos desaprobados : ",porD,"%",'<BR/>');

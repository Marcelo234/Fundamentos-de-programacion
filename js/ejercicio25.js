
alert("Ejercicio 25 - Numero intermendio");

    var medio, n1, n2, n3, xtem;
	document.write(" ",'<BR/>');
	n1 = prompt("Ingrese el numero 1");
    document.write("Ingrese Numero 01 : ");
    document.write(" ", n1,'<BR/>');
	n2 = prompt("Ingrese el numero 2");
    document.write("Ingrese Numero 02 : ");
    document.write(" ",n2,'<BR/>');
    n3 = prompt("Ingrese el numero 3");
	document.write("Ingrese Numero 03 : ");
	document.write(" ",n3,'<BR/>')
	if (n1>n2) {
		medio = n1;
		xtem = n2;
	} else {
		medio = n2;
		xtem = n1;
	}
	if (medio>n3) {
		medio = n3;
	}
	if (medio<xtem) {
		medio = xtem;
	}
	document.write(" ",'<BR/>');
	document.write("El numero Medio es : ",medio,'<BR/>');

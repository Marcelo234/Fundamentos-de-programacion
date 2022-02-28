
alert("Ejercicio 18 - Mayor de 10 numeros")

    var cont, mayor, num;
	mayor = 0;
	for (cont=1;cont<=10;cont++) {
		num = prompt("Ingrese un Numero",cont);
        document.write("Ingrese Numero ",cont," : ",'<BR/>');
        document.write(" ", num,'<BR/>')
		if (mayor<num) {
			mayor = num;
		}
	}
	document.write("El Mayor es : ",mayor,'<BR/>');


alert("Ejercicio 22 - Serie Fibonacci");

    var a, b, c, i, n;
    n = Number(prompt("Ingrese un numero"));
	document.write("Por favor ingrese un numero: ",n,'<BR/>');
	a = 0;
	b = 1;
	for (i=1;i<=n;i++) {
		document.write(a,'<BR/>');
		c = a+b;
		a = b;
		b = c;
	}
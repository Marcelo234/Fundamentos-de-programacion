
alert("Ejercicio 24 - Multiplos de 3 y 2");

document.write("Multiplos de 3-100",'<BR/>');
	var x = new Number();
	for (x=1;x<=100;x++) {
		if (x%3==0) {
			document.write(x,'<BR/>');
		}
	}
	document.write("Multiplos de 2-100",'<BR/>');
	var xy = new Number();
	for (x=1;x<=100;x++) {
		if (x%2==0) {
			document.write(x,'<BR/>');
		}
	}
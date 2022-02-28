
alert("Ejercicio 20 - Numero palindromo de 3 cifras");

    var d1, d2, d3, num, r1;
	document.write(" ",'<BR/>');
    num = Number(prompt("Ingrese un numero de 3 cifras"));
	document.write("Ingrese un numero de 3 cifras: ");
    document.write(" ", num,'<BR/>');
	d1 = (num-(num%100))/100;
	r1 = num%100;
	d2 = (r1-(r1%10))/10;
	d3 = r1%10;
	document.write(" ",'<BR/>');
	if (num==((d3*100)+(d2*10)+d1)) {
		document.write("El numero es palindromo",'<BR/>');
	} else {
		document.write("El numero NO ES palindromo",'<BR/>');
	}
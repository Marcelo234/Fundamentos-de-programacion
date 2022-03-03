
alert("Ejercicio 3 - Sumatoria de numeros por teclado hasta 0");

    var a = new Number();
	var b = new Number();
	var x = new Number();
	var suma1 = new Number();
	x = 1;
	a = 0;
	b = 0;
	suma1 = 0;
	while (x!=0) {
        x = Number(prompt("Ingresa un numero"));
		document.write("Ingresa un numero",'<BR/>');
        document.write(" ", x,'<BR/>');
		if (x!=0) {
			a = a+1;
			if (x>0) {
				b = b+1;
				suma1 = suma1+x;
			}
		}
	}
	document.write("El total de numeros es: ",a,'<BR/>');
	document.write("La suma de todos los numeros ingresados es: ",suma1,'<BR/>');
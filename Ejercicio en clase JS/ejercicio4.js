
alert("Ejercicio 4 - Promedio de notas");

    var a = new Number();
	var b = new Number();
	var x = new Number();
	var suma1 = new Number();
	var suma2 = new Number();
	var promedio1 = new Number();
	var promedio2 = new Number();
	x = 1;
	a = 0;
	b = 0;
	suma1 = 0;
	suma2 = 0;
	promedio2 = 0;
	while (x!=0) {
		x = Number(prompt("Ingrese una nota"));
        document.write("Ingresa una nota",'<BR/>');
        document.write(" ", x,'<BR/>')
		if (x!=0) {
			a = a+1;
			if (x>0) {
				b = b+1;
				suma1 = suma1+x;
			}
			suma2 = suma2+x;
			promedio2 = suma2/a;
		}
	}
	document.write("El total de notas es: ",a,'<BR/>');
	document.write("El promedio de todas las notas es: ",promedio2,'<BR/>');

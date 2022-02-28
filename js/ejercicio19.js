
alert("Ejercicio 19 - Numero de mayor a menor y viceversa");

    var n1, n2, n3, p, s, t;
	document.write(" ",'<BR/>');
    n1 = prompt("Numero 1");
	document.write("Numero 01 : ",'<BR/>');
    document.write(" ", n1,'<BR/>')
	n2 = prompt("Numero 2");
    document.write("Numero 02 : ",'<BR/>');
	document.write(" ", n2,'<BR/>')
	n3 = prompt("Numero 3");
    document.write("Numero 03 : ",'<BR/>');
	document.write(" ", n3,'<BR/>');
	if ((n1>n2) && (n1>n3)) {
		p = n1;
		if (n2>n3) {
			s = n2;
			t = n3;
		} else {
			s = n3;
			t = n2;
		}
	} else {
		if (n2>n3) {
			p = n2;
			if (n1>n3) {
				s = n1;
				t = n3;
			} else {
				s = n3;
				t = n1;
			}
		} else {
			p = n3;
			if (n1>n2) {
				s = n1;
				t = n2;
			} else {
				s = n2;
				t = n1;
			}
		}
	}
	document.write(" ",'<BR/>');
	document.write("Mayor a menor : ",p," - ",s," - ",t,'<BR/>');
	document.write("Menor a mayor : ",t," - ",s," - ",p,'<BR/>');
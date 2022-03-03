
alert("Ejercicio 6 - Calzado con descuento");

    var categoria;
    categoria = (prompt("Ingrese una categoria A, B, C"));
	document.write("Ingrese una categoria A, B, C",'<BR/>');
    document.write(" ", categoria,'<BR/>');
	switch (categoria) {
	case "A":
		document.write("Recibiste el 10% de descuento por tu compra",'<BR/>');
		break;
	case "B":
		document.write("Recibiste el 15% de descuento por tu compra",'<BR/>');
		break;
	case "C":
		document.write("Recibiste el 20% de descuento por tu compra",'<BR/>');
		break;
	default:
		document.write("No recibiste ningun descuento",'<BR/>');
	}
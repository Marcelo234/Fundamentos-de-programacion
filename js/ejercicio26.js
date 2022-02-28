
alert("Ejercicio 26 - Llama telefonica");
    
    var minutos;
	var clave = new Number();
	document.write("Clave destino",'<BR/>');
	document.write("[1] Estados Unidos - $. 0.13",'<BR/>');
	document.write("[2] Canada - $. 0.11",'<BR/>');
	document.write("[5] America del Sur - $. 0.52",'<BR/>');
	document.write("[6] America Central - $. 0.99",'<BR/>');
	document.write("[8] Mexico - $. 0.17",'<BR/>');
	document.write("[9] Europa - $. 0.17",'<BR/>');
	document.write("[10] Asia - $. 0.20",'<BR/>');
	document.write("[15] Africa - $. 0.59",'<BR/>');
	document.write("[20] Oceania - $. 0.28",'<BR/>');
	document.write("Ingrese la clave : ");
	clave = Number(prompt("Ingrese la clave"));
    document.write(" ", clave,'<BR/>')
    minutos = prompt("Duracion de la llamada");
	document.write("Duracion de llamada en minutos : ");
    document.write(" ",minutos,'<BR/>');
	switch ((clave)) {
	case 1:
		document.write("Costo de la llamada : $.",minutos*0.13,'<BR/>');
		break;
	case 2:
		document.write("Costo de la llamada : $.",minutos*0.11,'<BR/>');
		break;
	case 5:
		document.write("Costo de la llamada : $.",minutos*0.52,'<BR/>');
		break;
	case 6:
		document.write("Costo de la llamada : $.",minutos*0.99,'<BR/>');
		break;
	case 8:
		document.write("Costo de la llamada : $.",minutos*0.17,'<BR/>');
		break;
	case 9:
		document.write("Costo de la llamada : $.",minutos*0.17,'<BR/>');
		break;
	case 10:
		document.write("Costo de la llamada : $.",minutos*0.20,'<BR/>');
		break;
	case 15:
		document.write("Costo de la llamada : $.",minutos*0.59,'<BR/>');
		break;
	case 20:
		document.write("Costo de la llamada : $.",minutos*0.28,'<BR/>');
		break;
	}
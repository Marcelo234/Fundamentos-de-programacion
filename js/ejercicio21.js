
alert("Ejercicio 21 - Palindromo de 4 y 5 cifras");

cadena = prompt("Ingrese un numero de 4 o 5 cifras");

if (cadena.length == "4"  || cadena.length == "5") {
	if (cadena.length == 4){
		n1 = cadena.substr(0,1);
		n2 = cadena.substr(1,1);
		n3 = cadena.substr(2,1);
		n4 = cadena.substr(3,3);
	if (n1 == n4 && n2 == n3) {
		alert("El numero es palindromo");
	} else {
		alert("El numero no es palindromo");
	}
} else { if (cadena.length == 5) {
	    n1 = cadena.substr(0,1);
	    n2 = cadena.substr(1,1);
	  	n3 = cadena.substr(2,1);
		n4 = cadena.substr(3,1);
		n5 = cadena.substr(4,4);
	if (n1 == n5 && n2 == n4) {
		alert("El numero es palindromo");
	} else {
		alert("El numero no es palindromo");
    }
}
}
}else{
	alert("El numero no es valido");
}


alert("Ejercicio 14 - Sueldo de un trabajador y su categoria");

sueldo = prompt("Ingrese su sueldo base");
document.getElementById("sueldoBase").innerHTML = "Sueldo base : " + sueldo;
categoria = prompt("Ingrese su categoria: A, B, C, D");
document.getElementById("categoriaBase").innerHTML = "Categoria : " + categoria;

if (categoria=="A") {
    por = (parseFloat(sueldo) * 10) / 100;
    document.write("Bonificacion : ",por, '<BR/>');
    aumento = parseFloat (sueldo) + parseFloat (por);
    document.write("Neto a pagar : ",aumento);
} else { if (categoria=="B") {
    por = (parseFloat(sueldo) * 20) / 100;
    document.write("Bonificacion : ",por, '<BR/>');
    aumento = parseFloat (sueldo) + parseFloat (por);
    document.write("Neto a pagar : ",aumento);
} else { if (categoria=="C") {
    por = (parseFloat(sueldo) * 30) / 100;
    document.write("Bonificacion : ",por, '<BR/>');
    aumento = parseFloat (sueldo) + parseFloat (por);
    document.write("Neto a pagar : ",aumento);
} else { if (categoria=="D") {
    por = (parseFloat(sueldo) * 40) / 100;
    document.write("Bonificacion : ",por, '<BR/>');
    aumento = parseFloat (sueldo) + parseFloat (por);
    document.write("Neto a pagar : ",aumento);
} else {
    alert("Escriba el sueldo o categoria correcta")
}
}
}
}
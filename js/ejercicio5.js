let estudiante;
let nota1;
let nota2;
let nota3;

alert("Ejercicio 5 - Promedio de 3 notas");
estudiante = prompt("Nombre del estudiante");
nota1 = Number(prompt("Ingrese la Nota 1"));
nota2 = Number(prompt("Ingrese la Nota 2"));
nota3 = Number(prompt("Ingrese la Nota 3"));

document.getElementById("estudianteColegio").innerHTML = "El estudiante : " + estudiante;
document.getElementById("nota1Colegio").innerHTML = "La nota 1 es : " + nota1;
document.getElementById("nota2Colegio").innerHTML = "La nota 2 es : " + nota2;
document.getElementById("nota3Colegio").innerHTML = "La nota 3 es : " + nota3;

let suma;
suma = nota1 + nota2 + nota3;
let promedio;
promedio = suma / 3;
if (promedio >= 6) {
    document.getElementById("promedioColegio").innerHTML = "Su promedio es de : " + promedio;
    document.write("Usted ha Aprobado");
} else {
    document.getElementById("promedioColegio").innerHTML = "Su promedio es de : " + promedio;
    document.write("Usted ha Reprobado");
}

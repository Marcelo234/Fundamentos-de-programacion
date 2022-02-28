let nombre;
let horas;
let valor;

alert("Ejercicio 3 - Sueldo del trabajador");
nombre = prompt("Ingrese su nombre");
horas = prompt("Ingrese las horas trabajadas en el mes");
valor = prompt("Cuanto gana por hora");

sueldo = horas * valor;

document.getElementById("nombreTrabajador").innerHTML = "El trabajador : " + nombre;
document.getElementById("horasTrabajador").innerHTML = "Las horas del trabajador son : " + horas;
document.getElementById("valorTrabajador").innerHTML = "Lo que gana por hora es : " + valor;
document.getElementById("sueldoTrabajador").innerHTML = "El sueldo del trabajador en base a sus horas trabajadas es : " + sueldo;
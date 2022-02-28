let producto;
let costo;
let unidades;

alert("Ejercicio 4 - Descuento del producto");
producto = prompt("Nombre del producto");
costo = prompt("Costo Unitario");
unidades = prompt("Unidades pedidas");

subtotal = costo * unidades;

document.getElementById("productoCompra").innerHTML = "El producto : " + producto;
document.getElementById("costoCompra").innerHTML = "El costo unitario es : " + costo;
document.getElementById("unidadesCompra").innerHTML = "La unidades pedidas son : " + unidades;
document.getElementById("subtotalCompra").innerHTML = "El subtotal es de : " + subtotal;

descuento = subtotal * 0.1;

document.getElementById("descuentoCompra").innerHTML = "Su descuento es de : " + descuento;

total = subtotal - descuento;

document.getElementById("totalCompra").innerHTML = "El total de su factura es de : " + total;
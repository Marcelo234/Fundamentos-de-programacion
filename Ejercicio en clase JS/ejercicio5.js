
alert("Ejercicio 5 - Calcular el descuento y el valor a pagar");

canti = prompt("Ingrese la cantidad de producto");
cant = parseFloat(canti);
precio = prompt("Ingrese el precio del producto");
pre = parseFloat(precio);

precios = precio * cant;

if (cant <= 100) {
    descuento = (2 * precios) / 100
    total = precios - descuento;
    document.write("Su total a pagar por: "+ cant +" ,unidades es: "+ total+ "$");

} else { if (cant > 100 && cant <= 250) {
    descuento = (5 * precios) / 100
    total = precios - descuento;
    document.write("Su total a pagar por: "+ cant +" ,unidades es: "+ total+ "$");

} else { if (cant > 250.99 && cant <= 800) {
    descuento = (8 * precios) / 100
    total = precios - descuento;
    document.write("Su total a pagar por: "+ cant +" ,unidades es: "+ total+ "$");

} else { if (cant > 800.99) {
    descuento = (12 * precios) / 100
    total = precios - descuento;
    document.write("Su total a pagar por: "+ cant +" ,unidades es: "+ total+ "$");
}

}

}

}
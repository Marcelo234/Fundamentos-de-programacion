
alert("Ejercicio 28 - Cualquier numero palindromo");

var frase = prompt("Ingrese cualquier numero: ");
document.write("Ingrese cualquier numero");

function palindromo(fra) {
    // Convierto la cadena a minúscula
    var minuscula = fra.toLowerCase();
    alert(minuscula);
    // Convierto la cadena en un array
    var convertirArray = minuscula.split("");
    alert(convertirArray);
    // Elimino los espacios del array
    var sinEspacios = "";
    for (i in convertirArray) {
        if (convertirArray[i] != " ") {
            sinEspacios += convertirArray[i];
        }
    }
    alert(sinEspacios);
    // Vuelvo a convertir en array
    var nuevoArray = sinEspacios.split("");
    var alReves = nuevoArray.reverse();
    alert(alReves);
    // Verifico sin son iguales
    flag = true;
    for (i in nuevoArray) {
        if (nuevoArray[i] != alReves[i]) {
            flag = false;
            break;
        };
    };
    if (flag) {
        return ("Es un numero palíndromo.");
    } else {
        return ("NO es un numero palíndromo.");
    }
};

alert(palindromo(frase));
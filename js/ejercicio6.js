

alert("Ejercicio 6 - Vocal o consonante");

let letra;

letra = prompt("Ingrese una letra : ");
switch (letra)
{
    case "A": case "a":
        document.getElementById("letraVocal").innerHTML = " " + letra;
        document.write("Es vocal");
        break;
    case "e": case "E":
        document.getElementById("letraVocal").innerHTML = " " + letra;
        document.write("Es vocal");
        break;
    case "i": case "I":
        document.getElementById("letraVocal").innerHTML = " " + letra;
        document.write("Es vocal");
        break;
    case "o": case "O":
        document.getElementById("letraVocal").innerHTML = " " + letra;
        document.write("Es vocal");
        break;
    case "u": case "U":
        document.getElementById("letraVocal").innerHTML = " " + letra;
        document.write("Es vocal");
        break;
    default:
        document.getElementById("letraVocal").innerHTML = " " + letra;
        document.write("Es consonante");
        break;
}
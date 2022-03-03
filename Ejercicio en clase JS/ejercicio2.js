
alert("Ejercicio 2 - Mayor o menor de edad");

var i, mayores, menores;
var edad = new Number();
mayores = 0;
menores = 0;
for (i=1;i<=20;i++) {
    edad = Number(prompt("Ingresa la edad de la persona: ",i,'<BR/>'));
    document.write("Ingresa la edad de la persona: ",i,'<BR/>');
    document.write(" ",edad,'<BR/>');
    if (edad>=18) {
        mayores = mayores+1;
    } else {
        menores = menores+1;
    }
}
document.write("Las personas mayores de edad son: ",mayores,'<BR/>');
document.write("Las personas menores de edad son: ",menores,'<BR/>');

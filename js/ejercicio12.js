
alert("Ejercicio 12 - Area y perimetro del circulo ")

var a, p, pi, r;
r = Number(prompt("Radio"));
document.getElementById("radioCirculo").innerHTML = "Radio : " + r;
a = Math.PI*(r*r);
document.write("Area del circulo",'<BR/>');
document.write("Area : ",a,'<BR/>');
document.write("",'<BR/>');
document.write("Perimetro del circulo",'<BR/>');
p = 2*Math.PI*r;
document.write("Perimetro : ",p,'<BR/>');
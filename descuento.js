let Llavero = 1000;
let Taza= 2000;

let codigoDito = "DITO";

let descuento= 1000;

const nombreDeLaTienda = prompt (`Bienvenid@ a: Merca-Dito, por favor ingresa tu nombre:`)

alert (`Hola, tenemos en oferta los siguientes productos:
Llavero
Taza`)

const comprarLlavero = prompt("Desea comprar un llavero?");
let cantidadLlavero= comprarLlavero === "SI" && prompt("Que cantidad desea comprar?") || "NO" && "0";

const comprarTaza = prompt("Desea comprar una taza?");
let cantidadTaza= comprarTaza === "SI" && prompt("Que cantidad desea comprar?") || "NO" && "0";

const abonarConTarjeta = prompt (`El detalle de tu compra es :
Llavero: ${cantidadLlavero} x $1000
Taza: ${cantidadTaza} x $2000
Total: ${(cantidadLlavero * Llavero) + (cantidadTaza* Taza)}
Desea abonar con tarjeta?`) || "NO" && prompt("ingrese codigo de descuento");

const cuantasCuotas = prompt("En cuantas cuotas desea abonarlo?")


const codigoDeDescuento = prompt(`El detalle de tu compra es:
Llavero: ${cantidadLlavero} x $1000
Taza: ${cantidadTaza} x $2000
Total: ${(cantidadLlavero * Llavero) + (cantidadTaza * Taza)}
A pagar en ${cuantasCuotas} cuotas de ${((cantidadLlavero * Llavero) + (cantidadTaza * Taza)) / (cuantasCuotas)} pesos
¿Tenés un código de descuento?`) 

const codigo = codigoDeDescuento == "SI"&& prompt("ingrese codigo de descuento");

codigo === codigoDito &&  prompt(`El detalle de tu compra es:
Llavero: ${cantidadLlavero
} x $1000
Taza: ${cantidadTaza} x $2000
Total: ${(cantidadLlavero * Llavero) + (cantidadTaza * Taza)}
descuento= -1000
Total final: Total: ${(cantidadLlavero * Llavero) + (cantidadTaza * Taza)- descuento}
A pagar en ${cuantasCuotas} cuotas de ${((cantidadLlavero * Llavero) + (cantidadTaza * Taza)- descuento)/ (cuantasCuotas)} pesos

Que disfrutes tu compra!`);
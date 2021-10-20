"use strict";
function division(x, y) {
    let res = x + y;
    console.log(`${x} + ${y} =${res}`);
    return res;
}
division(5, 3);
function sumar(x, y) {
    let suma = x + y;
    console.log(`${x} + ${y} =${suma}`);
    return suma;
}
let x = sumar(3, 6);
console.log(`la suma de los numeros es ${x}`);
let funcion = function (m, n) {
    let resta = m - n;
    console.log(`${m} - ${n} =${resta}`);
    return resta;
};
console.log(funcion(62, 4));
let multiplicar;
multiplicar = (m, n) => m * n;
console.log(multiplicar(5, 4));
function sumar2(x, y) {
    if (y == undefined) {
        return x;
    }
    else {
        let suma = x + y;
        return suma;
    }
}
let suma01 = sumar2(2);
let suma02 = sumar2(2, 3);
console.log(`el resultado de la suma 1 es =${suma01}`);
console.log(`el resultado de la suma 2 es =${suma02}`);
function calcularEdad() {
    return 18;
}
let mostrarPersona = function (nombre, Edad = calcularEdad()) {
    console.info(`nombre : ${nombre} - Edad : ${Edad}`);
    if (Edad == 18) {
        console.warn(`la edad no fue enviada`);
    }
};
mostrarPersona("German");
let duplicador = function (n) {
    return n * 2;
};
let triplicador = function (n) {
    return n * 3;
};
let potenciadorALaDos = function (n) {
    return n * n;
};
function sumar50(f, y) {
    return f(y) + 50;
}
console.log(sumar50(duplicador, 20));
console.log(sumar50(triplicador, 20));
console.log(sumar50(potenciadorALaDos, 20));
console.log(sumar50(duplicador, 10));

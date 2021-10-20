"use strict";
let numero = 75;
let nombre1 = "German";
let nombre2 = "Airin";
let nombre3 = "Deider";
console.log("numero");
console.log(`el numero es ${numero}`);
console.log(`el nombre es ${nombre1}`);
console.log(`el nombre es ${nombre2}`);
console.log(`el nombre es ${nombre3}`);
let lista = ["Riohacha ", "Maicao", "Dibulla"];
console.log(lista);
for (let index = 0; index < lista.length; index++) {
    console.log(lista[index]);
}
lista.forEach(element => {
    console.log(element);
});
let tuple = [1, "German Mendoza"];
console.log(tuple[1]);
let tuple2 = [1, "German", "Mendoza", 44];
console.log(tuple2[1]);
tuple2.forEach(element => {
    console.log(element);
});
let miVariable = "Saludos";
console.log(miVariable);
miVariable = 75;
console.log(miVariable);
const persona1 = {
    cedula: 1118868114,
    nombre: "German",
    apellido: "Mendoza",
    edad: 23
};
console.log(persona1.nombre + persona1.apellido);

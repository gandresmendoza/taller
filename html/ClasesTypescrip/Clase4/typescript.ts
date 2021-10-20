let numero:number = 75;
let nombre1: string ="German";
let nombre2: string ="Airin";
let nombre3: string ="Deider";

console.log("numero");

console.log (`el numero es ${numero}`);
console.log (`el nombre es ${nombre1}`);
console.log (`el nombre es ${nombre2}`);
console.log (`el nombre es ${nombre3}`);

let lista: string[]=["Riohacha ", "Maicao","Dibulla"];
console.log(lista)

for (let index = 0; index < lista.length; index++) {
    console.log(lista[index])
    
}


lista.forEach(element => {
    console.log(element)
});


let tuple:[number,string]=[1,"German Mendoza"]
console.log(tuple[1])

let tuple2:[number,string,string,number]=[1,"German","Mendoza",44]
console.log(tuple2[1])

tuple2.forEach(element => {
    console.log(element)

});

//Any//
let miVariable:any = "Saludos"
console.log(miVariable)

miVariable = 75;
console.log(miVariable)


//Objeto

interface persona{
    cedula: number;
    nombre: string;
    apellido: string;
    edad: number
}

const persona1:persona = {
    cedula: 1118868114,
    nombre: "German",
    apellido: "Mendoza",
    edad: 23

}

console.log(persona1.nombre + persona1.apellido)



// variables - tipos
var ejemplo; // no se usa
let ejemplo1;
const ejemplo3 = "Ejemplo";

// variables - tipos de datos
const edad = 21 // tipo number
const nombre = "Argia" // tipo string
const apellido = "unsen"; // tipo string
let clases = ["clase0", "clase1", "clase2", "clase3"];
let persona = {
    nombre: "Argia",
    apellido: "Unsen",
    edad: 32,
};
let existePapaNoel = false;
let programacion = true

// log variables
console.log("APRENDIENDO VARIABLES");
console.log(edad);
console.log(nombre);
console.log(apellido);
console.log(clases);
console.log(persona);
console.log(existePapaNoel);
console.log(programacion);

// nombrar variables

let apelNom = "Pepito Juarez"

//switch case
const palabra = "hola";
switch (palabra) {
  case "hola":
    console.log("buenos dias");
    break;
  case "adios":
    console.log("hasta pronto");
    break;
  default:
    console.log("Hola mundo");
    break;
}

//for
const frutas = ["🍎", "🍏"];
for (let index = 0; index < frutas.length; index++) {
  console.log("El elemento es: ", frutas[index]);
}

//metodos de array: push
const gente = ["MARCOS", "PRISCILA", "RAMIRO"];
gente.push("NATALIA");
console.log(gente);

//metodos de array : pop
const nombres = ["MARCOS", "PRISCILA", "RAMIRO"];
nombres.push("NATALIA");
console.log(nombres);
nombres.pop();
console.log(nombres);

//while
let count = 50;
let contador = 0;
while (count > contador) {
  console.log("Hola chicos RD");
  contador++;
}
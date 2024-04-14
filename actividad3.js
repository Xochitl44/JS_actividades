/*Ejercicio 1: Filtrado de Números Pares
Dado un array de números, crea una función que filtre y devuelva solo los números pares utilizando una arrow function.*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros)

const parOrImpar = numeros.filter(numPares);

function numPares(numeros) {
    return numeros % 2
}
console.log(numPares)

/*Ejercicio 2: Cálculo del Área de un Círculo
Crea una función que calcule y devuelva el área de un círculo dado su radio utilizando una arrow function.*/

const area = 3.14 * 5 ** 2
const areaOfCircle = (numero) => area

console.log(areaOfCircle(4))

/*Ejercicio 3: Concatenación de Nombres
Dado un array de nombres, crea una función que los concatene en una sola cadena separada por comas utilizando una arrow function.*/
const nombres = ['Juan', 'María', 'Carlos', 'Ana'];

/*funcion convencional
function concatNames(name) {
    return nombres.join(", ")
}

console.log(concatNames(nombres));
*/

//funcion arrow

const concatNames = name => nombres.join(", ")
console.log(concatNames(nombres))
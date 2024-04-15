const phrase = "La mejor forma de predecir el futuro es creándolo"
//1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra se debe seleccionar por su posicion.
//(quiero saber la longitud de la segunda palabra)
//si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error

/*Steps
  1. cambiar el string a un array
  2. usar un metodo que me deje seleccionar el indice 1 (mejor)
  3. usar el metodo length para saber la cantidad de letras de la segunda palabra
  4. necesitamos una condicion que acepte dos condiciones
    -si el indice es 1 entonces no regresa el length
    -si el indice NO es 1 entonces devuelve el mensaje que indica que la palabra seleccionada es incorrecta
*/
/*
console.log("PHRASE: ", phrase)

function wordsAndLetters(sentence) {
    const convertirEnArry = phrase.split(" ");
    const totalLetters = convertirEnArry[1].length;

    if (sentence = [1]) {
        console.log(`La segunda palabra ${convertirEnArry[1]} tiene un total de ${totalLetters} letras`)
    } else {
        console.log("La palabra selecionada es incorrecta, necesitamos la seguna palabra")
    }
    return totalLetters
}
console.log(wordsAndLetters(phrase))
*/
//2.- De la frase, necesitamos eliminar una palabra con base en su posicion, y recibir una nueva frase sin la palabra borrada
/*Steps
    1. usar metodo para quitar una palabra del array
    2. despues de quitarla, el array me debe de devolver un nuevo array con todas las palabras menos la que quitamos
*/
/*
function removeWord(sentence) {
    const convertirEnArry = phrase.split(" ");
    const wordEliminated = convertirEnArry.splice(4, 1);
    const rePhrase = convertirEnArry.join(" ")
    return (rePhrase)
}

console.log(removeWord(phrase))
*/

//3.- Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra corta es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva frase sin palabras cortas
/*STEPS
    1. cambiar string a un array
    2. declarar variable que indique que una palabra corta = 3 caracteres o menos
    3. usar un metodo que me permite quitar esas palabas que cupmlan con la condicion de ser palabras cortas y devolver todas las demas palabras
    4. 
*/
function shortWords(phrase) {
    const convertirEnArry = phrase.split(" ");
    const shortWord = convertirEnArry.length < 3

    if (shortWord) {
        console.log(shortWord)
    }
}

console.log(shortWords(phrase))
//4.- Se requiere obtener la frase, pero escrita en orden inve
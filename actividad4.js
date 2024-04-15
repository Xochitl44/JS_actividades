const phrase = "La mejor forma de predecir el futuro es creándolo"
//1.- Saber cuántos caracteres tiene la frase
/*
Steps
1. Identificar si la variable const phrase es un string o array
2. Si es un string, empezar a contar cada caracter desde el inicio siendo que el valor inicial seria 0
3. incrementar el valor si encuentra un caracter por uno considerando que el valor principal seria 0 hasta que termine el string
3. almacenar en una variable 
*/

function numOfChar() {
    let totalLetters = phrase.length;
    console.log(totalLetters);
}
numOfChar();

//2. - Saber cuántas letras tiene la frase

function numOfLetters() {
    let totalLetters = phrase.replace(/ /g, "");
    let newTotal = totalLetters.length;
    console.log(newTotal);
}

numOfLetters();


//3. - Saber cuántas palabras tiene la frase
function numOfWords() {
    let totalLetters = phrase.split(" ");
    let newTotal = totalLetters.length;
    console.log(newTotal);
}

numOfWords();


//4. - Obtener la misma frase pero en mayúsculas
function phraseUppercase() {
    let totalLetters = phrase.toUpperCase();
    console.log(totalLetters);
}

phraseUppercase();
//5. - Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
function replacePhrase() {
    let totalLetters = phrase.replace(/a/g, 4);
    console.log(totalLetters);
}

replacePhrase();



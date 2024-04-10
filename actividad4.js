const phrase = "La mejor forma de predecir el futuro es creándolo"
//1.- Saber cuántos caracteres tiene la frase
function numOfChar() {
    let totalLetters = phrase.length;
    console.log(totalLetters);
}

numOfChar();

//2. - Saber cuántas letras tiene la frase
function numOfWords() {
    let totalLetters = phrase.replace;
    console.log(totalLetters);
}

numOfWords();
//3. - Saber cuántas palabras tiene la frase


//4. - Obtener la misma frase pero en mayúsculas
function phraseUppercase() {
    let totalLetters = phrase.toUpperCase();
    console.log(totalLetters);
}

phraseUppercase();
//5. - Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
function replacePhrase() {
    let totalLetters = phrase.replace(/a/g, '4');
    console.log(totalLetters);
}

replacePhrase();
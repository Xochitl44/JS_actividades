/*Estás desarrollando un sistema de gestión de libros para una biblioteca. Como parte de este proyecto, necesitas crear una estructura de datos que represente un libro y su información asociada. El objeto libro debe tener las siguientes propiedades:*/


const library = {
    book1: {
        title: "Battle Royale",
        author: "Koushun Takami",
        genre: "Distopian horror",
        published: "1999",
        editorial: "Ohta Publishing"
    }
    /*
        book2: {
            title: "Battle Royale",
            author: "",
            genre: "Distopian horror",
            published: "1999",
            editorial: "Ohta Publishing"
        },
    
        book3: {
            title: "Battle Royale",
            author: "Linus Torvald",
            genre: "Distopian horror",
            published: "1999",
            editorial: "Ohta Publishing"
        }
        */
}

/*ejemplo -> Declaracion de function
function persona (nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad
  }
  // Incializar objeto
  const juan = new persona('Juan', 30, 'Madrid');
*/

function fullLibrary(title, author, genre, published, editorial) {
    console.log("See below for a summary of book 1")
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.published = published;
    this.editorial = editorial;
};

// Incializar objeto
const books = new fullLibrary(library.book1.title, library.book1.author, library.book1.genre, library.book1.published, library.book1.editorial)
console.log(books)
//console.log(library);

/*Bonus
Crea una función para filtrar los libros por autor.
const newAuthor = library.filter(getAuthor)

function getAuthor(library) {
    return library.book3.author === "Linius Torvald"
}

getAuthor()
*/


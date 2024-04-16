const canes = [
    {
        nombre: "Rex",
        tipo: "Perro",
        edad: 4,
        vacunado: true,
        pais: "México",
        direccion: {
            calle: "Calle del Parque",
            numero: 23,
            colonia: "San José",
            codigoPostal: 78900,
        },
    },
    {
        nombre: "Bella",
        tipo: "Perro",
        edad: 6,
        vacunado: true,
        pais: "México",
        direccion: {
            calle: "Avenida Libertad",
            numero: 56,
            colonia: "El Bosque",
            codigoPostal: 78500,
        },
    },
    {
        nombre: "Max",
        tipo: "Perro",
        edad: 3,
        vacunado: false,
        pais: "Colombia",
        direccion: {
            calle: "Callejón del Puente",
            numero: 12,
            colonia: "Villa Hermosa",
            codigoPostal: 78850,
        },
    },
    {
        nombre: "Rocky",
        tipo: "Perro",
        edad: 2,
        vacunado: false,
        pais: "Ecuador",
        direccion: {
            calle: "Camino Real",
            numero: 34,
            colonia: "Las Palmas",
            codigoPostal: 78600,
        },
    },
];

/*
    1.- Necesito conocer la edad promedio de todos los perros

    STEPS
    1. Usar metodo map()
    2. declarar funcion que me permita recorrer cada objeto y acceder la propiedad edad para poder sumar cada uno y dividir / 4 
    
*/
const dogAge = (age) => {
    let result = age.map((dog) => (dog.edad));
    let sum = 0;
    for (i = 0; i < result.length; i++) {
        sum += result[i] / 4
    }
    console.log(`La edad promedio de los cuatro perritos es de: ${sum}`);
    return (`El array incluye la edad de cada perrito: ${result}`);
};

console.log(dogAge(canes));

/*
2.- Necesito obtener una lista de perros basados en el país al que pertenecen+
*/


//3.- Necesito una lista de los códigos postales de los perros

const zipCodeArray = (zipCode) => {
    let codigoPostal = zipCode.map((zip) => (zip.direccion.codigoPostal))
    console.log("Lista de los codigo postales de los cuatro perritos: ")
    return codigoPostal
};


console.log(zipCodeArray(canes))

/*
4.- Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos
*/
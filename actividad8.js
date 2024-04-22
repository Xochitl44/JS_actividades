const canes = [
    {
        nombre: "Rex",
        tipo: "Perro",
        edad: 4,
        vacunado: true,
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
        direccion: {
            calle: "Camino Real",
            numero: 34,
            colonia: "Las Palmas",
            codigoPostal: 78600,
        },
    },
];
/*
    1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
    */
//function that provdies array of each of the dog's age in dog years
/*const getAgeInDogYears = dogArray => {
    let dogAge = dogArray.map((dog) => dog.edad * 7);
    return dogAge
}

console.log(getAgeInDogYears(canes))
*/

//function that obtains a list with the objects of all the canes
const getAgeInDogYears = dogArray => {
    let dogAge = dogArray.map((dog) => ({ ...dog, edad: dog.edad * 7 }));
    return dogAge
}

console.log(getAgeInDogYears(canes))

/*
    2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
*/
const dogsThatAreVaccinated = dogArray => {
    let total = 0;
    let dogsVaccinated = dogArray.forEach((dog) => {
        if (dog.vacunado === true) {
            total++;
        }
    });
    return total
}

console.log(dogsThatAreVaccinated(canes))

/*
    3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
        "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "
*/
const dogData = dogArray => {
    let dogInfo = dogArray.map((dog) => {
        return `Nombre: ${dog.nombre}, Calle: ${dog.direccion.calle}, Numero: ${dog.direccion.numero}, Colonia: ${dog.direccion.colonia}, CodigoPostal: ${dog.direccion.codigoPostal}`
    })
    console.log(dogInfo)
}

console.log(dogData(canes))

/*
    4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
*/
const avgDogAgeInHumanYears = dogArray => {
    let avg = 0;
    let avgDogAge = dogArray.forEach((dog) => {
        return avg += (dog.edad * 7)
    });

    return avg / dogArray.length

}

console.log(avgDogAgeInHumanYears(canes))

/*
    5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")
 */
const listOfVaccinated = dogArray => {
    let dogsVaccinatedNew = dogArray.map((dog) => {
        totalDogsVaccinated = []
        if (dog.vacunado === "true") {
            totalDogsVaccinated = { ...dog, vacunado: "Si" }
        } else {
            totalDogsVaccinated = { ...dog, vacunado: "No" }
        }
        return totalDogsVaccinated
    });
    return dogsVaccinatedNew
}

console.log(listOfVaccinated(canes))
/*
   6.- Necesitamos una nueva lista con únicamente el nombre de cada can
*/


const getName = (dogArray) => {
    let doggyName = dogArray.map((dog) => dog.nombre);

    return doggyName

}

console.log(getName(canes))


//console.log(firstName);

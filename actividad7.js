const users = [
    {
        name: "Alice",
        lastname: "Johnson",
        age: 28,
        gender: "Female",
        country: "USA",
    },
    {
        name: "Bob",
        lastname: "Smith",
        age: 32,
        gender: "Male",
        country: "Canada",
    },
    {
        name: "Carlos",
        lastname: "Gomez",
        age: 24,
        gender: "Male",
        country: "Mexico",
    },
    {
        name: "Daniela",
        lastname: "Martinez",
        age: 30,
        gender: "Female",
        country: "Colombia",
    },
    {
        name: "Erik",
        lastname: "Svensson",
        age: 29,
        gender: "Male",
        country: "Sweden",
    },
    {
        name: "Fiona",
        lastname: "O'Donnell",
        age: 35,
        gender: "Female",
        country: "Ireland",
    },
    {
        name: "Gautam",
        lastname: "Patel",
        age: 27,
        gender: "Male",
        country: "India",
    },
    {
        name: "Hana",
        lastname: "Kim",
        age: 22,
        gender: "Female",
        country: "South Korea",
    },
    {
        name: "Ivan",
        lastname: "Petrov",
        age: 34,
        gender: "Male",
        country: "Russia",
    },
    {
        name: "Julia",
        lastname: "Santos",
        age: 25,
        gender: "Female",
        country: "Brazil",
    },
];

/*
    1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
*/
const listOfNames = namesArray => {
    let fullName = namesArray.map((user) => {
        let arrName = `${user.name} ${user.lastname}`
        return arrName;
    })

    return fullName
}

console.log(listOfNames(users))
/*
    2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
*/
const listOfMaleUsers = namesArray => {
    let usersWhoAreMale = []
    namesArray.forEach((user) => {
        if (user.gender === "Male") {
            usersWhoAreMale.push({ ...user, gender: user.gender })
        } else {
            return "User is a female"
        }
    })

    return usersWhoAreMale
}

console.log(listOfMaleUsers(users))

/*
    3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
*/
const listOfFemaleUsers = namesArray => {
    let usersWhoAreFemale = []
    namesArray.forEach((user) => {
        if (user.gender === "Female") {
            usersWhoAreFemale.push({ ...user, gender: user.gender })
        }
    })

    return usersWhoAreFemale
}

console.log(listOfFemaleUsers(users))

/*
    4.- Necesitamos saber la edad promedio de los usuarios
*/
const averageAgeOfUsers = userArray => {
    let avg = 0;
    userArray.forEach((user) => {
        avg += user.age
    });
    return avg / userArray.length

}

console.log(averageAgeOfUsers(users))
/*
    5.- Necesitamos saber la mayor edad
*/
const determineMayorEdad = userArray => {
    let oldestPerson = 0;

    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].age > oldestPerson) {
            oldestPerson = userArray[i].age
        }
    }

    return oldestPerson
}

console.log(determineMayorEdad(users))

/*
   6.- Necesitamos saber la menor edad
*/

const determineMenorEdad = userArray => {
    let youngestPerson = 35;

    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].age < youngestPerson) {
            youngestPerson = userArray[i].age
        }
    }

    return youngestPerson
}

console.log(determineMenorEdad(users))
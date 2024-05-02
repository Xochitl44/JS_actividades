/*Ejercicio DOM
Crear una lista de koders, usando el siguiente array:
usar componentes de bootstrap como list-group
*/
koder = [
    {
        name: "Xochitl",
        lastName: "Moreno",
        age: 33,
        numberOfLanguagesSpoke: 3,
        country: "Mexico"
    },
    {
        name: "Eduardo",
        lastName: "Garcia",
        age: 38,
        numberOfLanguagesSpoke: 2,
        country: "Mexico"
    },
    {
        name: "Jozette",
        lastName: "Goss",
        age: 33,
        numberOfLanguagesSpoke: 6,
        country: "Italy"
    },
    {
        name: "Rebecca",
        lastName: "Lopez",
        age: 20,
        numberOfLanguagesSpoke: 1,
        country: "Portugal"
    }
]

//create function to create list of koders based on the objects of each koder
let createKoderList = (koderObject) => {
    //desestructurando el objeto con las propiedades de cada koder
    let {name, lastName, age, numberOfLanguagesSpoke, country} = koderObject;
    let kodersFullInfo = `First Name: ${name} Last Name: ${lastName} Age of Koder: ${age} Number of Languages Koder Can Speak: ${numberOfLanguagesSpoke} Country Koder is From: ${country}`;

    //creando elementos de DOM
    let koderListItem = document.createElement("li");
    koderListItem.classList.add("list-group-item");
    let koderItemText = document.createTextNode(kodersFullInfo);
    koderListItem.append(koderItemText);

    return koderListItem;

};

//funcion para imprimir lista de koders dentro del objeto. 
const printKodersList = (koders, listWrapper) => {

    let wrapper = document.getElementById(listWrapper);

    koders.forEach((koder) => {
        let koderNewList = createKoderList(koder);
        wrapper.append(koderNewList);
    });

};

printKodersList(koder, "list-wrapper");


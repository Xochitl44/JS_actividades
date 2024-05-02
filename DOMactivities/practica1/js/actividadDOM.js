/*Ejercicio DOM
Crear una lista de koders, usando el siguiente array:
usar componentes de bootstrap como list-group
*/
koder = [
    {
        fullName: "Xochitl",
        lastName: "Moreno",
        age: 33,
        numberOfLanguagesSpoke: 3,
        country: "Mexico"
    },
    {
        fullName: "Eduardo",
        lastName: "Garcia",
        age: 38,
        numberOfLanguagesSpoke: 2,
        country: "Mexico"
    },
    {
        fullName: "Jozette",
        lastName: "Goss",
        age: 33,
        numberOfLanguagesSpoke: 6,
        country: "Italy"
    },
    {
        fullName: "Rebecca",
        lastName: "Lopez",
        age: 20,
        numberOfLanguagesSpoke: 1,
        country: "Portugal"
    }
]

//create DOM Elements in a function
createKoderList = (koder) => {
    let koderListItem = document.createElement("li");
    koderListItem.classList.add("list-group-item");
    let koderItemText = document.createTextNode(`First Name: ${koder.fullName} Last Name: ${koder.lastName} Age of Koder: ${koder.age} Number of Languages Koder Can Speak: ${koder.numberOfLanguagesSpoke} Country Koder is From: ${koder.country}`);
    koderListItem.append(koderItemText);

    return koderListItem;
}



//funcion para imprimir lista de koders dentro del objeto. 
const printKodersList = (koders, listWrapper) => {
    let wrapper = document.getElementById(listWrapper);
    
    koders.forEach((koder) => {
        let koderNewList = createKoderList(koder);
        wrapper.append(koderNewList);
    });

};

printKodersList(koder, "list-wrapper");

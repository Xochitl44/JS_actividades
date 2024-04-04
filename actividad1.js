//Parte 1

//Declaracion de variables
let numOfOrder = 20;
let ordersProvided = 10;

function capacityIndication() {
    if (numOfOrder > ordersProvided) {
        console.log("Congrats, the number of orders surpassed the orders provided, you can increase your capacity for the following day");
    } else {
        console.log("Sorry, the number of orders was less. Please reduce your capacity for the following day in order to save costs.");
    }
}

capacityIndication();

//Parte 2
//Declar variables
const dayOfMonth = 7

//indicar si el dia del mes es par o impar
function evenOrOdd() {
    if (dayOfMonth % 2 == 0) {
        console.log("Today is an even day");
    } else {
        console.log("Today is an odd day");
    }
}
evenOrOdd();

//Parte 3
//funcion para determinar si dia es impar y si demanda esperada fue mayor a la prevista
function demand() {
    if (dayOfMonth % 2 == 1 && numOfOrder > ordersProvided) {
        console.log("Since this day is odd and the number of orders surpasses the orders provided, next days demand will be greater!");
    }
}

demand();





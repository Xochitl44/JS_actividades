//variables para la calculadora de IMC
peso = 150;
altura = 1.76;

let calcularIMC = peso / (altura * altura);

//programa simple para que usuarios puedan calcular su IMC
function IMC() {
    console.log("Tu IMC es de", calcularIMC);

    function resultados() {
        if (calcularIMC < 18.5) {
            console.log("Bajo Peso");
        } else if (calcularIMC >= 18.5 && calcularIMC < 24.9) {
            console.log("Peso Saludable");
        } else if (calcularIMC >= 25 && calcularIMC < 29.9) {
            console.log("Sobrepeso");
        } else if (calcularIMC >= 30) {
            console.log("Obesidad");
        }
    }
    resultados();
}

IMC();

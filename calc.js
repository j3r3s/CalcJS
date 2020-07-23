const leerResultado = document.querySelector("#resultado");


function set(e) {

    leerResultado.textContent += e

}

function result() {

    resultado = eval(leerResultado.textContent);

    leerResultado.textContent = resultado;

}
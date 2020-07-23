const leerResultado = document.querySelector("#resultado");


function clear() {

    leerResultado.value = y
}


function set(e) {

    leerResultado.value += e

}

function result() {

    resultado = eval(leerResultado.value);

    leerResultado.value = resultado;

}
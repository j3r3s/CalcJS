const leerResultado = document.querySelector("#resultado");



document.addEventListener('keydown', (event) => {
   
    let keyName = event.keyCode;
   
    switch (keyName) {
        case 13:
            result()
            break;

        case 46:
            C()
            break;
    }
})

function C() {

    leerResultado.classList.remove("resultadototal", "resultadoerror");
    leerResultado.value = "";
}

function set(e) {

    leerResultado.value += e;
}

function result() {
    try {
        resultado = eval(leerResultado.value);
        leerResultado.classList.add("resultadototal");
        leerResultado.value = resultado;

    } catch (error) {

        leerResultado.classList.add("resultadoerror");
        leerResultado.value = "mandaste cualquiera";
    }
}
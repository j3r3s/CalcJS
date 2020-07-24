const leerResultado = document.querySelector("#resultado");



document.addEventListener('keydown', (event) => {
   
    let keyName = event.keyCode;
    console.log(keyName)
   
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

    leerResultado.value = "";
    leerResultado.style.fontSize = "1.1em";
    leerResultado.style.color = "black";
}

function set(e) {

    leerResultado.value += e;

}

function result() {
    try {
        resultado = eval(leerResultado.value);

        leerResultado.value = resultado;

    } catch (error) {

        leerResultado.value = "mandaste cualquiera";
        leerResultado.style.color = 'red';
        leerResultado.style.fontSize = '0.7em'
    }

}
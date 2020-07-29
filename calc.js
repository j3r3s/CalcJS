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
	leerResultado.textContent = "";
}

function set(e) {

	leerResultado.textContent += e;
}


function pi(e) {

	

}


function result() {
	try {
		let resultado = eval(leerResultado.textContent);

		if (typeof(eval(leerResultado.textContent)) == 'undefined') {

		leerResultado.textContent = ""

		} else {

		leerResultado.classList.add("resultadototal");
		leerResultado.textContent = resultado;
		}

	} catch (error) {

		leerResultado.classList.add("resultadoerror");
		leerResultado.textContent = "mandaste cualquiera";
	}
}
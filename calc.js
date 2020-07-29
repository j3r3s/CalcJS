const leerResultado = document.querySelector("#resultado");



document.addEventListener('keydown', (event) => {

	let keyName = event.key;

	switch (keyName) {
		case 'Enter':
			result()
			break;

		case 'Delete':
			C()
			break;

		case '(':
		set(keyName)
			break;

		case ')':
		set(keyName)
			break
	}
	
	if (event.location == 3 && event.key != 'Enter') {

		set(keyName)
	}

	let colorbuttom = document.querySelector("input[value=" + CSS.escape(keyName) + "]");
	colorbuttom.style.color = 'red';
})


document.addEventListener('keyup', (event) => {

	let keyup = event.key;
	let colorbuttom = document.querySelector("input[value=" + CSS.escape(keyup) + "]");
	colorbuttom.style.color = '';
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






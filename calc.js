const leerResultado = document.querySelector("#resultado");



document.addEventListener('keydown', (event) => {

	let keyName = event.key;
	let numlock = event.getModifierState("NumLock");
	console.log(numlock);
	switch (keyName) {
		case 'Enter':
			event.preventDefault();
			result()
			break;

		case 'Delete':
			C();
			break;

		case 'Backspace':
			backspace();
			break;

		case '(':
		set(keyName);
			break;

		case ')':
		set(keyName);
			break;
	}
	if (numlock) {

		if (event.location == 3 && keyName != 'Enter') {

			set(keyName);
		}
	
		let colorbuttom = document.querySelector("input[id=" + CSS.escape(keyName) + "]");
		colorbuttom.style.color = 'red';
	}
	
})


document.addEventListener('keyup', (event) => {

	let keyup = event.key;
	let colorbuttom = document.querySelector("input[id=" + CSS.escape(keyup) + "]");
	colorbuttom.style.color = '';
})


function C() {

	leerResultado.classList.remove("resultadototal", "resultadoerror");
	leerResultado.textContent = "";
}

function backspace() {

	let borrarultimo = leerResultado.textContent.slice(0, -1);
	leerResultado.textContent = borrarultimo
} 

function set(e) {

	leerResultado.textContent += e;
	
}

function pi(e) {

	

}

function percent() {



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
const leerResultado = document.querySelector("#resultado");


//listener function to write and color buttons by keyboard
document.addEventListener('keydown', (event) => {

	let keyName = event.key;
	let numlock = event.getModifierState("NumLock");
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
	//block if numlock is disable
	if (numlock) {

		if (event.location == 3 && keyName != 'Enter') {

			set(keyName);
		}
		//color buttons
		let colorbutton = document.querySelector("input[id=" + CSS.escape(keyName) + "]");
		colorbutton.style.color = 'red';
	}
	
})

//uncolor buttons when keyup
document.addEventListener('keyup', (event) => {

	let keyup = event.key;
	let colorbutton = document.querySelector("input[id=" + CSS.escape(keyup) + "]");
	colorbutton.style.color = '';
})

//clear calc screen
function C() {

	leerResultado.classList.remove("resultadototal", "resultadoerror");
	leerResultado.textContent = "";
}
//delete last character on screen
function backspace() {

	let borrarultimo = leerResultado.textContent.slice(0, -1);
	leerResultado.textContent = borrarultimo
} 
//write values by click
function set(e) {

	if (leerResultado.textContent.length <= 10) {

		leerResultado.textContent += e;
	}
}

//percet function
function percent() {



}

//validattion and results on screeen
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
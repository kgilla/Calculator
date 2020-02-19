let numeroUno = 0;
let numeroDe = 0;
let dotAdded = false;
let operationCount = 0;

// querySelectors and eventListeners
const display = document.querySelector('h1');
const totalDisplay = document.querySelector('h3');
const numeric = document.querySelectorAll('.numeric');
numeric.forEach((numeric) => {
    numeric.addEventListener('click', number, event);
});
const operator = document.querySelectorAll('.operator');
operator.forEach((operator) => {
    operator.addEventListener('click', operation, event);
});
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearDisplay, event);
const remove = document.querySelector('#delete');
remove.addEventListener('click', deleteDisplay, event);
const equality = document.querySelector('#equals');
equality.addEventListener('click', equals, event);
const dot = document.querySelector('#dot');
dot.addEventListener('click', addDot, event);
const changer = document.querySelector('#changer');
changer.addEventListener('click', change, event);

//--------------------------------------------------------
// main functions

function number () {
	let number = event.target.textContent;
	number *= 1;
	display.textContent += number;
	totalDisplay.textContent += number;
	if (operationCount > 0) {
		numeroDe = 0;
		numeroDe = display.textContent;
	} else {
		numeroUno = display.textContent;
	}
}

function operation () {
	if (operationCount > 0) {
		operate();
		operatorValue = event.target.id;
		display.textContent = "";
		totalDisplay.textContent += operatorValue;
		dotAdded = false;
	} else {
		operatorValue = event.target.id;
		display.textContent = "";
		totalDisplay.textContent += operatorValue;
		operationCount++;
		dotAdded = false;
	}
}

function operate () {
	numeroUno *= 1;
	numeroDe *= 1;
	let answer = resolver(operatorValue, numeroUno, numeroDe);
	numeroUno = answer;
	return answer;
}

function equals () {
	if (numeroDe === undefined) {
		return 0;
	} else {
		let answer = operate();
		numeroUno = answer;
		console.log(numeroUno, numeroDe);
		display.textContent = answer;
		numeroDe = 0;
	}
}


// math functions
function resolver (operation, num1, num2) {
	if (operation === '+') {
		 return addition(num1, num2);
	} else if (operation === "-") {
		return subtraction(num1, num2);
	} else if (operation === "x") {
		return multiplication(num1, num2);
	} else if (operation === "/") {
		return division(num1, num2);
	}
}
function addition (a, b) {
	return a + b;
}
function subtraction (a, b) {
	return a - b;
}
function multiplication (a, b) {
	return a * b;
}
function division (a, b) {
	return a / b;
}

// formatting functions
function addDot () {
	if (dotAdded === false) {
		display.textContent += event.target.textContent;
		totalDisplay.textContent += event.target.textContent;
		dotAdded = true;
	}
}

function clearDisplay () {
	display.textContent = "";
	totalDisplay.textContent = "";
	numeroUno = 0;	
	numeroDe = 0;
	operatorValue = "";
	operationCount = 0;
	dotAdded = false;
}

function deleteDisplay () {
	let temp = display.textContent;
	
	temp.pop().join();
	display.textContent = temp;
}

function change () {

}

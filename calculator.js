let calculation = '';

const display = document.getElementById('display');

function updateCalculation(value) {
  calculation += value;
  display.innerText = calculation;
}

function calculateResult() {
  if (calculation === '') return;

  calculation = eval(calculation).toString();
  display.innerText = calculation;
}

function clearDisplay() {
  calculation = '';
  display.innerText = '';
}
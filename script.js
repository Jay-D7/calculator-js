'use strict';

const currNumber = document.querySelector('.current-number');
const prevNumber = document.querySelector('.previous-number p');
const mathSign = document.querySelector('.math-sign');
const numbersButtons = document.querySelectorAll('.number');
const operatorsButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const calculatorHistory = document.querySelector('.history');
const historyBtn = document.querySelector('.history-btn');

let result = '';

function displayNumbers() {
  if (this.textContent === '.' && currNumber.innerHTML.includes('.')) return;
  if (this.textContent === '.' && currNumber.innerHTML === '')
    return (currNumber.innerHTML = '.0');
  currNumber.innerHTML += this.textContent;
}

function operate() {
  if (currNumber.innerHTML === '' && this.textContent === '-') {
    currNumber.innerHTML = '-';
    return;
  } else if (currNumber.innerHTML === '') {
    return;
  }

  if (mathSign.innerHTML !== '') {
    showResult();
  }
  prevNumber.innerHTML = currNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currNumber.innerHTML = '';
}

function showResult() {
  if (prevNumber.innerHTML === '' || currNumber.innerHTML === '') return;

  let a = Number(currNumber.innerHTML);
  let b = Number(prevNumber.innerHTML);
  let operator = mathSign.innerHTML;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = b - a;
      break;
    case 'x':
      result = a * b;
      break;
    case ':':
      result = b / a;
      break;
    case '2^':
      result = b ** a;
      break;
  }

  addToHistory();
  historyBtn.classList.add('active');
  currNumber.innerHTML = result;
  prevNumber.innerHTML = '';
  mathSign.innerHTML = '';
}

function addToHistory() {
  const newHistoryItem = document.createElement('li');
  newHistoryItem.innerHTML = `${currNumber.innerHTML} ${mathSign.innerHTML} ${prevNumber.innerHTML} = ${result}`;

  newHistoryItem.classList.add('history-item');
  calculatorHistory.appendChild(newHistoryItem);
}

function clearHistory() {
  calculatorHistory.textContent = '';
  if (calculatorHistory.textContent === '')
    historyBtn.classList.remove('active');
}

function clearScreen() {
  result = '';
  currNumber.innerHTML = '';
  prevNumber.innerHTML = '';
  mathSign.innerHTML = '';
}

// Add Listener
operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
  button.addEventListener('click', displayNumbers);
});

historyBtn.addEventListener('click', clearHistory);

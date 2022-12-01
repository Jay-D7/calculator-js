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

function displayNumbers(params) {}

function operate() {}

function showResult() {}

function clearScreen() {}

function clearHistory() {}

// Add Listener
operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', addEventListener('click', showResult));

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
  button.addEventListener('click', displayNumbers);
});

historyBtn.addEventListener('click', clearHistory);

const clickMe = function () {
  document.querySelector('.history-btn').addEventListener('click', () => {
    console.log('Clicked');
  });
};
clickMe();

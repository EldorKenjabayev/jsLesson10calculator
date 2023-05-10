const calculator = document.querySelector('.calculator');
let tempNumber = '';
let total = document.querySelector('.calculator_total');
let calculator_history = document.querySelector('.calculator_history');
let operationType = '';
calculator.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('calculator_col')) {
    const data = target.dataset.type;
    operation(data);
  }
});

let number = '0';
function operation(data) {
  if (data >= 0) {
    number += data;
    operationType += data;
    calculator_history.innerHTML = operationType;
  } else if (data == '+') {
    tempNumber = parseInt(number);
    number = '';
    operationType += '+';
    calculator_history.innerHTML += ' + ';
  } else if (data == '-') {
    tempNumber = parseInt(number);
    number = '';
    operationType += '-';
    calculator_history.innerHTML += ' - ';
  } else if (data == '*') {
    tempNumber = parseInt(number);
    number = '';
    operationType += '*';
    calculator_history.innerHTML += ' × ';
  } else if (data == '/') {
    tempNumber = parseInt(number);
    number = '';
    operationType += '/';
    calculator_history.innerHTML += ' ÷ ';
  } else if (data == 'Enter') {
    const result = eval(calculator_history.innerHTML);
    if (result === null) {
      // total.innerHTML = '';
      return;
    }
    calculator_history.innerHTML = result
    number = result.toString();
    operationType = '';

  } else if (data == 'c') {
    number = '';
    operationType = '';
    calculator_history.innerHTML = '';
    total.innerHTML = '';
  } else if (data == 'Backspace') {
    number = number.slice(0, -1);
    operationType = operationType.slice(0, -1);
    calculator_history.innerHTML = operationType;
  } else if (data == '%') {
    percentage();
  }

}

function percentage() {
  const currentNumber = parseInt(number);
  const percentageNumber = currentNumber / 100;
  calculator_history.innerHTML = operationType + percentageNumber.toString();
}


let keyDown = (e) => {
  if (e.key == '0' || e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9') {
    operation(e.key)
  } else if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '=' || e.key == 'c' || e.key == 'Backspace' || e.key == 'Enter' || e.key == '=') {
    operation(e.key)
  }
}

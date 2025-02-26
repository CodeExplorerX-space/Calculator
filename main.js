let currentInput = '';
const resultField = document.getElementById('result');

function appendValue(value) {
  currentInput += value;
  resultField.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  resultField.value = '';
}

function performOperation(operator) {
  currentInput += operator;
  resultField.value = currentInput;
}

function calculateResult() {
  try {
    resultField.value = eval(currentInput);
    currentInput = resultField.value;
  } catch {
    resultField.value = 'Error';
    currentInput = '';
  }
}

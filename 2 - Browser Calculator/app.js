
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.textbox');
    display.value = calculator.displayValue;
}
updateDisplay();

const keys = document.querySelector('.buttons');
keys.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
    }
});
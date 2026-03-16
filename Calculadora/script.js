const display = document.getElementById('display');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (display.value === 'Erro de Sintaxe') {
            display.value = '';
        }
        display.value += number.textContent;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        display.value += operator.textContent;
    });
});

equals.addEventListener('click', () => {
    try {
        display.value = math.evaluate(display.value);
    } catch (error) {
        display.value = 'Erro de Sintaxe';
    }
});

clear.addEventListener('click', () => {
    display.value = '';
});


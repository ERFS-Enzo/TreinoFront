let minusButton = document.getElementById('Minus');
let plusButton = document.getElementById('Plus');
let resetButton = document.getElementById('Reset');
let counter = document.getElementById('counterNumber');

let count = 0;

plusButton.addEventListener('click', () => {
    count++;
    counter.innerText = count;
});

minusButton.addEventListener('click', () => {
    count--;
    counter.innerText = count;
});

resetButton.addEventListener('click', () => {
    count = 0;
    counter.innerText = count;
});
let minusButton = document.getElementById('Minus');
let plusButton = document.getElementById('Plus');
let resetButton = document.getElementById('Reset');
let counter = document.getElementById('counterNumber');

let count = 0;

plusButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

minusButton.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

function updateCounter() {
    counter.innerText = count;
}
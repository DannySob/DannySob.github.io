function check() {
    console.log('test');
}

function submit() {
    alert("Your volume is now: "+output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function minus() {
    if (outputInt > 0) {
    outputInt -= 10;
    output.textContent = outputInt; }
    
}

function plus() {
    if (outputInt < 100) {
    outputInt += 10;
    output.textContent = outputInt;
    }
}

function random() {
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

const volumeBar = document.querySelector('.volume-bar-inner');
const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

function countDown() {
    if (outputInt <= 0) {
        outputInt = 0;
        output.textContent = outputInt;
        volumeBar.style.width = '0%';
    }
    else if (outputInt >= 100) {
        outputInt = 100;
        outputInt -= 1;
        output.textContent = outputInt;
        volumeBar.style.width = '100%';
    }
    else {
        outputInt -= 1;
        output.textContent = outputInt;
        volumeBar.style.width = outputInt + '%';
    }
}

setInterval(countDown, 20);

const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
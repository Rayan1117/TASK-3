function appendToDisplay(value) {
    let currentValue = document.getElementById('display').value;

    if ((value === "00" || value === "0") && (currentValue === "0" || currentValue === "00")) {
        return;
    } else if (value !== "." && currentValue === "0") {
        document.getElementById('display').value = value;
    } else if (value === '00' && currentValue !== '0') {
        document.getElementById('display').value += value;
    } else if (value === '.' && currentValue.includes('.')) {
        return;
    } else if ('+-*/%'.includes(value) && '+-*/%'.includes(currentValue[currentValue.length - 1])) {
        return;
    } else {
        document.getElementById('display').value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearOne() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.substring(0, displayValue.length - 1);
}
function calculate() {
    let result;
    try {
        let expression = document.getElementById('display').value.replace(/X/g, '*');
        result = eval(expression);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('display').value = result;
}
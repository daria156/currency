const currency = document.getElementById('currency');
const button = document.querySelector('#show');
const result = document.getElementById('result');
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');

button.addEventListener('click', () => {
    const amountText = amountInput.value;

    if (amountText === '' || amountText < 0) {
        result.innerHTML = 'Введите сумму от 0';
        return;
    }

    const amount = Number(amountText);

    let fromRate;
    let toRate; 

    if (fromCurrency.value === 'RUB') {
        fromRate = 1;
    } else if (fromCurrency.value === 'USD') {
        fromRate = 90;
    } else if (fromCurrency.value === 'EUR') {
        fromRate = 100;
    } else if (fromCurrency.value === 'KZT') {
        fromRate = 0.2;
    }

    if (toCurrency.value === 'RUB') {
        toRate = 1;
    } else if (toCurrency.value === 'USD') {
        toRate = 90;
    } else if (toCurrency.value === 'EUR') {
        toRate = 100;
    } else if (toCurrency.value === 'KZT') {
        toRate = 0.2;
    }

    const rubles = amount * fromRate;
    const resultAmount = rubles / toRate;

    result.innerHTML = amount + ' ' + fromCurrency.value + ' = ' + resultAmount.toFixed(2) + ' ' + toCurrency.value;

   
});
 const swap =  document.getElementById('swap');
 swap.addEventListener('click', () => {
    const oldCurrency1 = fromCurrency.value;
    const oldCurrency2 = toCurrency.value;

    fromCurrency.value = oldCurrency2;
    toCurrency.value = oldCurrency1

    const amountText = amountInput.value;

    if (amountText === '' || amountText < 0) {
        result.innerHTML = 'Введите сумму от 0';
        return;
    }

    const amount = Number(amountText);

    let fromRate;
    let toRate;

    if (fromCurrency.value === 'RUB') {
        fromRate = 1;
    } else if (fromCurrency.value === 'USD') {
        fromRate = 90;
    } else if (fromCurrency.value === 'EUR') {
        fromRate = 100;
    } else if (fromCurrency.value === 'KZT') {
        fromRate = 0.2;
    }

    if (toCurrency.value === 'RUB') {
        toRate = 1;
    } else if (toCurrency.value === 'USD') {
        toRate = 90;
    } else if (toCurrency.value === 'EUR') {
        toRate = 100;
    } else if (toCurrency.value === 'KZT') {
        toRate = 0.2;
    }

    const rubles = amount * fromRate;
    const resultAmount = rubles / toRate;

    result.innerHTML = amount + ' ' + fromCurrency.value + ' = ' + resultAmount.toFixed(2) + ' ' + toCurrency.value;

 });
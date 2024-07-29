document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    if (isNaN(newDepositAmount)) {
        alert('Please input valid numbers');
        return;
    }
    const previousDepositTotal = getTextElementValueById('deposit-total');
    if (newDepositAmount <= 0) {
        alert('Baap er bank e kisu holeo joma rakho');
        return;
    }
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})
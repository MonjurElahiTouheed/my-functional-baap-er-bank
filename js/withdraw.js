document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    if(isNaN(newWithdrawAmount)){
        alert('Please input valid numbers');
        return;
     }
     const previousWithdrawTotal = getTextElementValueById('withdraw-total');
     
     const previousBalanceTotal = getTextElementValueById('balance-total');
     if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank e eto taka nei');
        return;
     }
     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     setTextElementValueById('withdraw-total', newWithdrawTotal);
     
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})
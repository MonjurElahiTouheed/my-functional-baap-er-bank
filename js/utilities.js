
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldStringValue = inputField.value;
    const inputFieldValue = parseFloat(inputFieldStringValue);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const valueString = element.innerText;
    const value = parseFloat(valueString);
    return value;
}

function setTextElementValueById(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}
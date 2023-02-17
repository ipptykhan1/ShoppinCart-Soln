function getTexElementValueById(elementId){

    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
   return currentPhoneTotal;

} 

function setTexElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate Total
    const currentPhoneTotal = getTexElementValueById('phone-total');
    const currentCaseTotal = getTexElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTexElementValueById('sub-total', currentSubTotal);
    
}

// tax calculate
const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
const taxAmount = parseFloat(taxAmountString);
setTexElementValueById('tax-amount', taxAmount);

const finalAmount = currentSubTotal + taxAmount;
setTexElementValueById('final-total', finalAmount);

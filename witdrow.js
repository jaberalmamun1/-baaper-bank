document.getElementById('btn-witdrow').addEventListener('click', function(){
    const witdrowField = document.getElementById('Witdrow-field');
    const newWitdrowAmountString= witdrowField.value;
    const newWitdrowAmount =parseFloat(newWitdrowAmountString);


    const witdrowTotalElement = document.getElementById('witdrow-total');
    const previousWitdrowTotalString= witdrowTotalElement.innerText;
   const previousWitdrowTotal= parseFloat(previousWitdrowTotalString);

   const currentWitrowTotal = previousWitdrowTotal + newWitdrowAmount;
   witdrowTotalElement.innerText=currentWitrowTotal;

//    conect with the balance
const balanceTotalElement= document.getElementById('Balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal =parseFloat(previousBalanceTotalString);

// calculate the new balance 
const newBalanceTotal = previousBalanceTotal-newWitdrowAmount;
balanceTotalElement.innerText=newBalanceTotal;
//    step clear 
    witdrowField.value='';


})
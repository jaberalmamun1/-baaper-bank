document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('depo-field');
    const newDepositAmountString =depositField.value;
    
    const newDepositAmount=parseFloat(newDepositAmountString);
//   we gib the amount value to as depo abob this.innerText hiseba
    const depositTotalElement = document.getElementById('depo-total');
    const previousDepositTotalSring= depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalSring);
    // 2i ta jate jpg hoi 
    const currentDeposit =previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText= currentDeposit;
    // here we giv it to the amount 

    // step to adding in balance
    const balanceTotalElement = document.getElementById('Balance-total');
    const previousBalanceTotalString= balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    // step calculate 
    const currentBalanceTotal= previousBalanceTotal + newDepositAmount;
    // set the banlance total
    balanceTotalElement.innerText=currentBalanceTotal;

    // clear it after submited
    depositField.value='';
})
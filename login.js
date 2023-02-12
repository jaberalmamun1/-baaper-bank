// step1 : add click Event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
//    step2: get the enail address inside the email input field 
//   always remember to use .value to get the text from an input field 
  const emailField = document.getElementById('user-email');
  const email= emailField.value;
//   step3: get password 
// 3.a set id on the html Element
//    3.b get the value from the Element
   const passwordField =document.getElementById('user-pass');
   const password= passwordField.value;
//    console.log(email, password);
// danger: do not verify email and password 
// step4: verify email password
if (email=='sansan@33.com' && password=== 'secret'){
    window.location.href='bank.html';
}else{
    alert('bola geso pass');
}
})
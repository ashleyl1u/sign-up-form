document.querySelector('.form').addEventListener('submit',(e) => {
  const form = document.querySelector('.form');

  if(confirmPassword()){
    form.submit();
  }
  else{
    e.preventDefault();
  }
   
});





document.querySelector('#confirm-password').addEventListener('keyup', (e) =>{
  confirmPassword();
})

function confirmPassword(){
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');
  const confirmPasswordError = document.querySelector('.confirm-password-error');
  
  if((confirmPassword.value !== password.value) || password.value ===''){
    password.classList.remove('valid');
    confirmPassword.classList.remove('valid');
    password.classList.add('invalid');
    confirmPassword.classList.add('invalid');
    confirmPasswordError.textContent = '*Passwords do not match'
    return false;
  }
  else{
    password.classList.remove('invalid');
    confirmPassword.classList.remove('invalid');
    password.classList.add('valid');
    confirmPassword.classList.add('valid');
    confirmPasswordError.textContent = ''
    return true;
  }
}


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
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const confirmPasswordError = document.querySelector('.confirm-password-error');
    password.classList.remove('invalid');
    confirmPassword.classList.remove('invalid');
    confirmPasswordError.textContent = '';
})

function confirmPassword(){
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');
  const confirmPasswordError = document.querySelector('.confirm-password-error');
  
  if((confirmPassword.value !== password.value) || password.value ===''){
    password.classList.add('invalid');
    confirmPassword.classList.add('invalid');
    confirmPasswordError.textContent = '*Passwords do not match'
   
    return false;
  }
  else{
    password.classList.remove('invalid');
    confirmPassword.classList.remove('invalid');
    confirmPasswordError.textContent = '';

    return true;
  }
}



document.querySelectorAll('.input').forEach((element) => {
  element.addEventListener('focus',() => {
    const inputId = element.getAttribute('id');
    document.querySelector(`.${inputId}-label`).style.color = '#536878';
  });
});

document.querySelectorAll('.input').forEach((element) => {
  element.addEventListener('focusout',() => {
    const inputId = element.getAttribute('id');
    document.querySelector(`.${inputId}-label`).style.color = 'black';
  });
});
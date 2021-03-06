const register = document.getElementById('register-btn');
const confirmation = document.getElementById('confirmation');
const name = document.getElementById('name');
const inputFields = document.querySelectorAll('.form-control');

register.addEventListener('click', () => {
    confirmation.innerHTML += `Thank you for registering, ${name.value}! We will contact you shortly.`
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = ''
    }
    
    disableButton();
  });

  const disableButton = () => {
    document.getElementById('register-btn').disabled = true;
 };
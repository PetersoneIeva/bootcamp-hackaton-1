const register = document.getElementById('register-btn');
const confirmation = document.getElementById('confirmation');
const name = document.getElementById('name');

register.addEventListener('click', () => {
    confirmation.innerHTML += `Thank you for registering, ${name.value}! We will contact you shortly.`
    disableButton();
  });

  const disableButton = () => {
    document.getElementById('register-btn').disabled = true;
 };
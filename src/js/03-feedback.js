import throttle from 'lodash.throttle';

let form = document.querySelector('form');
let mail = document.querySelector('input[type="email"]');
let text = document.querySelector('textarea[name="message"]');


form.addEventListener('input', throttle(function(event) {
   let input = {
    email: mail.value,
    message: text.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(input));
}, 500)
);

let formState= JSON.parse(localStorage.getItem('feedback-form-state'));



if (localStorage.getItem('feedback-form-state') === null) {
   mail.value = '';
  text.value = '';
  
}
else{
  mail.value = formState.email;
  text.value = formState.message;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  form.elements.email.value = '';
  form.elements.message.value = '';
  localStorage.removeItem('feedback-form-state');
});

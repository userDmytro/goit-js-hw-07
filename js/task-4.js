'use strict';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {};
  const formElements = event.target.elements;

  for (const element of formElements) {
    if (element.type !== 'submit') {
      const trimmedValue = element.value.trim();
      formData[element.name] = trimmedValue;
    }
  }


  if (!formData.email || !formData.password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);

  loginForm.reset();
});

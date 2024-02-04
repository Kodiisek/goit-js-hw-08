import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const storageKey = 'feedback-form-state';

const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formState));
  console.log('Zapisano dane do LocalStorage:', formState);
};

const loadFormState = () => {
  const storedState = localStorage.getItem(storageKey);
  if (storedState) {
    const parsedState = JSON.parse(storedState);
    emailInput.value = parsedState.email || '';
    messageTextarea.value = parsedState.message || '';
    console.log('Wczytano dane z LocalStorage:', parsedState);
  }
};

const clearFormState = () => {
  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageTextarea.value = '';
  console.log('Formularz wysłany. Usunięto dane z LocalStorage.');
};

feedbackForm.addEventListener('input', throttle(saveFormState, 500));

window.addEventListener('load', loadFormState);

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearFormState();
});

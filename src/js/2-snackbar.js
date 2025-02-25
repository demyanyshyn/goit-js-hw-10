// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
//functions

function startFunction(event) {
  let message = {
    icon: `material-icons-outlined`,
    iconColor: '#fff',
    messageColor: `#fff`,
    color: `#ef4040`,
    position: `topRight`,
    timeout: 5000,
    imageWidth: 50,
    theme: `dark`,
  };
  event.preventDefault();
  const delay = Number(event.target.delay.value);
  const state = event.target.state.value.toLowerCase();
  let shouldResolve = state === `fulfilled`;

  makePromise(delay, shouldResolve)
    .then(delay => {
      message.message = `<span class="material-icons-outlined" style="margin-right:10px;">task_alt </span>task_alt</span> Fulfilled promise ${delay}ms`;
      message.color = `#59a10d`;
      iziToast.show(message);
    })
    .catch(delay => {
      message.message = `<span class="material-icons-outlined" style="margin-right:10px;">dangerous </span>task_alt</span> Rejected promise ${delay}ms`;
      message.color = `#ef4040`;
      shouldResolve = false;
      iziToast.show(message);
    });
}

const makePromise = (delay, shouldResolve = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve ? resolve(delay) : reject(delay);
    }, delay);
  });
};
//body
const form = document.querySelector(`.form`);
form.addEventListener(`submit`, event => startFunction(event));
console.log(`form:`, form);

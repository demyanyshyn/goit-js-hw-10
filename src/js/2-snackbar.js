// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
//functions

function startFunction(event) {
  let message = {
    icon: `material-icons-outlined`,
    // iconUrl: `./img/alert.png`,
    iconColor: '#fff',
    messageColor: `#fff`,
    color: `#ef4040`,
    position: `topRight`,
    // class: 'icon',
    timeout: 5000,
    imageWidth: 50,
    theme: `dark`,
  };
  event.preventDefault();
  const delay = event.target.delay.value;
  const state = event.target.state.value.toLowerCase();
  let shouldResolve = state === `fulfilled`;

  makePromise(delay, shouldResolve)
    .then(delay => {
      message.message = `Fulfilled promise ${delay}ms`;
      message.color = `#59a10d`;
      message.iconText = `task_alt`;
      iziToast.show(message);
    })
    .catch(delay => {
      message.message = ` Rejected promise ${delay}ms`;
      message.iconText = `dangerous`;
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

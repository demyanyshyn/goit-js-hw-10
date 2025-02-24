// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

//functions
function startFunction(event) {
  let message = {
    icon: ``,
    iconUrl: `../img/alert.png`,
    iconColor: '#fff',
    messageColor: `#fff`,
    color: `#ef4040`,
    position: `topRight`,
    class: 'izi-svg',
    timeout: 5000,
    imageWidth: 50,
    theme: `dark`,
  };
  event.preventDefault();
  const delay = event.target.delay.value;
  const state = event.target.state.value;
  let shouldResolve = true;

  switch (state) {
    case `fulfilled`: {
      message.message = `Fulfilled promise ${delay}ms`;
      message.color = `#59a10d`;
      message.iconUrl = `../img/ok.png`;

      break;
    }
    case `rejected`: {
      message.message = `Rejected promise ${delay}ms`;
      message.iconUrl = `../img/alert.png`;
      message.color = `#ef4040`;
      shouldResolve = false;

      break;
    }
  }
  makePromise(message, delay, shouldResolve);
}

const makePromise = (message, delay, shouldResolve = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(iziToast.show(message));
      } else {
        reject(iziToast.show(message));
      }
    }, delay);
  });
};
//body
const form = document.querySelector(`.form`);
form.addEventListener(`submit`, event => startFunction(event));
console.log(`form:`, form);

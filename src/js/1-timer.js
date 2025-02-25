import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const erorrMessage = {
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
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (isDateValid(selectedDates[0])) {
      activateBtn();
      userSelectedDate = selectedDates[0];
    } else {
      disactivateBtn();
    }
  },
};
//functions
const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const activateBtn = () => {
  if (isActive(btn)) return;
  btn.active = true;
  switchBtnStyle();
};
const disactivateBtn = () => {
  if (!isActive(btn)) return;
  btn.active = false;
  switchBtnStyle();
};
const disactivateInput = () => {
  dateInput.disabled = true;
  dateInput.classList.add(`input-disable`);
};
const activateInput = () => {
  dateInput.disabled = false;
  dateInput.classList.remove(`input-disable`);
};

const switchBtnStyle = position => {
  position = position ? position : ``;

  switch (position.toLowerCase()) {
    case `on`: {
      btn.classList.add(`is-active`);
      break;
    }
    case `off`: {
      btn.classList.remove(`is-active`);
      break;
    }
    default: {
      btn.classList.toggle(`is-active`);
    }
  }
};

const btnFunc = event => {
  startTimer(event);

  disactivateBtn();
  disactivateInput();
};

const showTimer = () => {
  let timeLeft = 0;
  let timeLeftObject = {};

  timeLeft = userSelectedDate.getTime() - Date.now();
  if (timeLeft > 0) {
    timeLeftObject = convertMs(timeLeft);
    days.textContent = String(timeLeftObject.days).padStart(2, '0');
    hours.textContent = String(timeLeftObject.hours).padStart(2, '0');
    minutes.textContent = String(timeLeftObject.minutes).padStart(2, '0');
    seconds.textContent = String(timeLeftObject.seconds).padStart(2, '0');
  } else {
    stopTimer();
    return;
  }
  console.log(intervalId);
};

const startTimer = event => {
  showTimer();
  intervalId = setInterval(showTimer, 1000);
};

const stopTimer = () => {
  activateInput();
  clearInterval(intervalId);
};

const isDateValid = date => {
  if (date.getTime() <= Date.now()) {
    buildErrorMessage();
    return false;
  }
  return true;
};

const btnClick = event => {
  event.preventDefault();
  isActive(event.currentTarget)
    ? btnFunc()
    : !dateInput.disabled
    ? buildErrorMessage()
    : buildErrorMessage(`Wait please for timer finish`);
};

const buildErrorMessage = message => {
  erorrMessage.message = message ?? `Please choose a date in the future`;
  iziToast.show(erorrMessage);
};

const isActive = elem => elem.active ?? false;

//Body
const dateInput = document.querySelector(`#datetime-picker`);
const calendar = flatpickr(dateInput, options);
const btn = document.querySelector(`[data-start]`);
const timer = document.querySelector(`.timer`);
const days = timer.querySelector(`[data-days]`);
const hours = timer.querySelector(`[data-hours]`);
const minutes = timer.querySelector(`[data-minutes]`);
const seconds = timer.querySelector(`[data-seconds]`);
let userSelectedDate = ``;
let intervalId;
btn.addEventListener(`click`, event => btnClick(event));

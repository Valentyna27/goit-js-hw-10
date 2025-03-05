// Use libraries
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Declare variables
let userSelectedDate;
let differenceInTime;

const button = document.querySelector('button');
const input = document.getElementById('datetime-picker');
button.setAttribute('disabled', 'true');

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    // Check if the determined date is correct
    if (userSelectedDate < new Date()) {
      button.setAttribute('disabled', 'true');
      iziToast.error({
        title: 'Error',
        titleSize: '16px',
        titleHeight: 1.5,
        titleColor: '#FFFFFF',
        message: 'Please choose a date in the future',
        messageSize: '16px',
        messageLineHeight: 1.5,
        messageColor: '#FFFFFF',
        icon: 'material-icons',
        iconText: 'error',
        iconColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        progressBarColor: '#B51B1B',
        closeOnClick: true,
        closeOnEscape: true,
        color: '#FFFFFF',
        layout: 2,
        timeout: 10000,
        position: 'bottomLeft',
      });
    } else {
      button.removeAttribute('disabled');
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Add event listener and start timer
button.addEventListener('click', () => {
  if (userSelectedDate) {
    input.setAttribute('disabled', 'true');
    button.setAttribute('disabled', 'true');

    const intervalId = setInterval(() => {
      differenceInTime = userSelectedDate - new Date();

      if (differenceInTime <= 0) {
        clearInterval(intervalId);
        timerDays.textContent = '00';
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        input.removeAttribute('disabled', 'true');
      } else {
        const { days, hours, minutes, seconds } = convertMs(differenceInTime);
        timerDays.textContent = String(days).padStart(2, '0');
        timerHours.textContent = String(hours).padStart(2, '0');
        timerMinutes.textContent = String(minutes).padStart(2, '0');
        timerSeconds.textContent = String(seconds).padStart(2, '0');
      }
    }, 1000);
  }
});

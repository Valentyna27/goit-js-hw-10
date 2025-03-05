// Use the library named "iziToast"
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

// Add event listener
form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.delay.value);
  const stateOfRadioButton = form.querySelector('input[name="state"]:checked');

  // Create promise
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateOfRadioButton.value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(resolvedDelay => {
      iziToast.show({
        title: 'OK',
        titleColor: '#FFFFFF',
        icon: 'material-icons',
        iconText: 'task_alt',
        iconColor: '#FFFFFF',
        message: ` Fulfilled promise in ${resolvedDelay}ms`,
        messageColor: '#FFFFFF',
        backgroundColor: '#59A10D',
        position: 'topRight',
        close: false,
        layout: 2,
        timeout: 10000,
      });
    })
    .catch(rejectedDelay => {
      iziToast.error({
        title: ' Error',
        titleColor: '#FFFFFF',
        icon: 'material-icons',
        iconText: 'error',
        iconColor: '#FFFFFF',
        message: `Rejected promise in ${rejectedDelay}ms`,
        messageColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        position: 'topRight',
        close: false,
        layout: 2,
        timeout: 10000,
      });
    });
});

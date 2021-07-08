import { showErrorMessage, showSuccessMessage } from './messages.js';
import {showAlert} from './util.js';

const DATA_ENDPOINT = 'https://23.javascript.pages.academy/keksobooking/data';
const MAIN_ENDPOINT = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(DATA_ENDPOINT)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(() => {
      showAlert('Не удалось загрузить объявления.');
    });
};

const sendData = (body) => {
  fetch(MAIN_ENDPOINT,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        showSuccessMessage();
      } else {
        showErrorMessage();
      }
    })
    .catch(() => {
      showErrorMessage();
    });
};

export {getData, sendData};

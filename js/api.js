import {getFeaturesArray, setFilterFormChange} from './filters.js';
import {toggleActivationForm} from './form.js';
import {showMarkers} from './map.js';
import {showErrorMessage, showSuccessMessage} from './messages.js';
import {debounce, showAlert} from './util.js';

const DATA_ENDPOINT = 'https://23.javascript.pages.academy/keksobooking/data';
const MAIN_ENDPOINT = 'https://23.javascript.pages.academy/keksobooking';

const onGetSuccess = (response) => {
  const rankingResponse = response.reduce(getFeaturesArray, []);
  showMarkers(rankingResponse);
  toggleActivationForm(true);
  setFilterFormChange(debounce (
    () => showMarkers(rankingResponse)));
};

const getData = (onSuccess) => {
  fetch(DATA_ENDPOINT)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
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

export {onGetSuccess, getData, sendData};

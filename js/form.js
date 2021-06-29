const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const selects = mapFilters.querySelectorAll('select');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const roomNumberInput = adForm.querySelector('#room_number');
const capacityInput = adForm.querySelector('#capacity');
const submitButton = document.querySelector('.ad-form__submit');
const typeInput = adForm.querySelector('#type');
const timeInInput = adForm.querySelector('#timein');
const timeOutInput = adForm.querySelector('#timeout');

const minPriceForType = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const validateTitle = () => {
  if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity('Заполните заголовок объявления');
  } else if (titleInput.validity.tooShort) {
    titleInput.setCustomValidity('Заголовок объявления должен содержать минимум 30 символов');
  } else {
    titleInput.setCustomValidity('');
  }
};

const validatePrice = () => {
  if (priceInput.validity.valueMissing) {
    priceInput.setCustomValidity('Цена за ночь обязательна для заполнения');
  } else if (priceInput.validity.rangeOverflow) {
    priceInput.setCustomValidity('Цена должна быть меньше или равна 1 000 000');
  } else {
    priceInput.setCustomValidity('');
  }
};

const capacityChangeHandler = () => {
  if (roomNumberInput.value === '1' && capacityInput.value !== '1') {
    roomNumberInput.setCustomValidity('жильё для одного гостя');
  } else if (roomNumberInput.value === '2' && capacityInput.value !== '1' && capacityInput.value !== '2') {
    roomNumberInput.setCustomValidity('вмещает от 1 до 2 гостей');
  } else if (roomNumberInput.value === '3' && capacityInput.value === '0') {
    roomNumberInput.setCustomValidity('вмещает от 1 до 3 гостей');
  } else if (roomNumberInput.value === '100' && capacityInput.value !== '0') {
    roomNumberInput.setCustomValidity('Жильё не для гостей');
  } else {
    roomNumberInput.setCustomValidity('');
  }
  roomNumberInput.reportValidity();
};

const typeChangeHandler = () => {
  priceInput.placeholder = minPriceForType[typeInput.value];
  priceInput.min = minPriceForType[typeInput.value];
};

const checkinChangeHandler = (evt) => {
  timeOutInput.value = evt.target.value;
  timeInInput.value = evt.target.value;
};

typeInput.addEventListener('change', typeChangeHandler);
titleInput.addEventListener('change', validateTitle);
priceInput.addEventListener('change', validatePrice);
roomNumberInput.addEventListener('change', capacityChangeHandler);
capacityInput.addEventListener('change', capacityChangeHandler);
timeInInput.addEventListener('change', checkinChangeHandler);
timeOutInput.addEventListener('change', checkinChangeHandler);

submitButton.addEventListener('click', () => {
  validateTitle();
  validatePrice();
  capacityChangeHandler();
});

const toggleActivationForm = (data) => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilters.classList.toggle('map__filters--disabled');
  if (!data) {
    fieldsets.forEach((fieldset) => fieldset.setAttribute('disabled', ''));
    selects.forEach((select) => select.setAttribute('disabled', ''));
  }
  else {
    fieldsets.forEach((fieldset) => fieldset.removeAttribute('disabled'));
    selects.forEach((select) => select.removeAttribute('disabled'));
  }
  adForm.classList.toggle('ad-form--disabled');
  mapFilters.classList.toggle('map__filters--disabled');
};

export {toggleActivationForm};

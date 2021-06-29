const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const selects = mapFilters.querySelectorAll('select');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const roomNumberInput = adForm.querySelector('#room_number');
const capacityInput = adForm.querySelector('#capacity');

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

titleInput.addEventListener('change', validateTitle);
priceInput.addEventListener('change', validatePrice);
roomNumberInput.addEventListener('change', capacityChangeHandler);
capacityInput.addEventListener('change', capacityChangeHandler);

adForm.addEventListener('submit', () => {
  validateTitle();
  validatePrice();
  capacityChangeHandler();
});

const toggleActivationForm = (data) => {
  if (!data) {
    adForm.classList.toggle('ad-form--disabled');
    mapFilters.classList.toggle('map__filters--disabled');
    fieldsets.forEach((fieldset) => fieldset.setAttribute('disabled', ''));
    selects.forEach((select) => select.setAttribute('disabled', ''));
  }
  else {
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
    fieldsets.forEach((fieldset) => fieldset.removeAttribute('disabled'));
    selects.forEach((select) => select.removeAttribute('disabled'));
  }
};

export {toggleActivationForm};

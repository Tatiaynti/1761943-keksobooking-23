const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (max > min && min >= 0)
    ? Math.floor(Math.random() * (max - min + 1)) + min
    : undefined;
};
/**
 * Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
 * @param {*} min - начальное значение диапазона (от)
 * @param {*} max - конечное значение диапазона (до)
 * @param {*} decimalPoints - кол-во знаков после запятой
 */
const getRandomFloat = (min, max, decimalPoints = 1) => {
  if (max > min && min >= 0) {
    const randomNumber = Math.random() * (max - min + 1) + min;
    return randomNumber.toFixed(decimalPoints);
  }
  return undefined;
};

const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
];
const TITLES = [
  'Милый домик на побережье',
  'Лучший отель для отдыха всей семьёй',
  'Романтичный курорт в палатках',
  'Гостиница с видом на Байкал',
  'Отдых в бабушкином сарайчике',
  'Уютный шалаш посреди дикого леса',
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKIN_HOURS = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUT_HOURS = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURE_ITEMS = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTIONS = [
  'Апартаменты с 1 спальней',
  'Стандартный двухместный номер с 1 кроватью',
  'Семейный номер-студия',
  'Большой двухместный номер с 1 кроватью',
  'Трехместный номер Комфорт',
  'Просторный номер с двумя кроватями',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const createCard = () => {
  const latitude = getRandomFloat(35.65000, 35.70000);
  const longitude = getRandomFloat(139.70000, 139.80000);
  return {
    author: {
      avatar: getRandomArrayElement(AVATARS),
    },
    location: {
      lat: latitude,
      lng: longitude,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${latitude}, ${longitude}`,
      price: getRandomNumber(1234, 387423),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(0, 5),
      guests: getRandomNumber(1, 7),
      checkin: getRandomArrayElement(CHECKIN_HOURS),
      checkout: getRandomArrayElement(CHECKOUT_HOURS),
      features: new Array(getRandomNumber(1, FEATURE_ITEMS.length)).fill('').map(() => FEATURE_ITEMS[getRandomNumber(0, FEATURE_ITEMS.length - 1)]),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: new Array(getRandomNumber(1, PHOTOS.length)).fill('').map(() => PHOTOS[getRandomNumber(0, PHOTOS.length - 1)]),
    },
  };
};
const similarCards = new Array(10).fill(null).map(() => createCard());

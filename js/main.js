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

const AVATARS = [];
for (let i = 1; i <= 10; i++ ) {
  if (i<=9) {
    AVATARS.push('img/avatars/user0' + i + '.png');
  }
  else {
    AVATARS.push('img/avatars/user' + i + '.png');
  }
};

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

const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

const createCard = () => {
  const avatar = getRandomArrayElement(AVATARS);
  const lat = getRandomFloat(35.65000, 35.70000);
  const lng = getRandomFloat(139.70000, 139.80000);
  const title = getRandomArrayElement(TITLES);
  const address = `${lat}, ${lng}`;
  const price = getRandomNumber(1234, 387423);
  const type = getRandomArrayElement(TYPES);
  const rooms = getRandomNumber(0, 5);
  const guests = getRandomNumber(1, 7);
  const checkin = getRandomArrayElement(CHECKIN_HOURS);
  const checkout = getRandomArrayElement(CHECKOUT_HOURS);
  const features = new Array(getRandomNumber(1, FEATURE_ITEMS.length)).fill('').map(() =>
  FEATURE_ITEMS[getRandomNumber(0, FEATURE_ITEMS.length - 1)]);
  const description = getRandomArrayElement(DESCRIPTIONS);
  const photos = new Array(getRandomNumber(1, PHOTOS.length)).fill('').map(() =>
  PHOTOS[getRandomNumber(0, PHOTOS.length - 1)]);

  return {
    author: {
      avatar,
    },
    location: {
      lat,
      lng,
    },
    offer: {
      title,
      address,
      price,
      type,
      rooms,
      guests,
      checkin,
      checkout,
      features,
      description,
      photos,
    },
  };
};

const similarCards = new Array(10).fill(null).map(() => createCard());
similarCards;

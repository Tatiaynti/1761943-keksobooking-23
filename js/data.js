import {getRandomNumber, getRandomFloat, getRandomArrayElement} from './util.js';

const AVATARS = [];
const avatarsNumber = 10;
const avatarsNumberWithZeroInLink = 9;
for (let index = 1; index <= avatarsNumber; index++) {
  if (index <= avatarsNumberWithZeroInLink) {
    AVATARS.push(`img/avatars/user0${index}.png`);
  }
  else {
    AVATARS.push(`img/avatars/user${index}.png`);
  }
}
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
const SIMILAR_OFFERS_COUNT = 10;
const latMin = 35.65000;
const latMax = 35.70000;
const lngMin = 139.70000;
const lngMax = 139.80000;
const priceMin = 1234;
const priceMax = 387423;
const roomsMin = 1;
const roomsMax = 5;
const guestsMin = 1;
const guestsMax = 7;

const createCard = () => {
  const avatar = getRandomArrayElement(AVATARS);
  const lat = getRandomFloat(latMin, latMax);
  const lng = getRandomFloat(lngMin, lngMax);
  const title = getRandomArrayElement(TITLES);
  const address = `${lat}, ${lng}`;
  const price = getRandomNumber(priceMin, priceMax);
  const type = getRandomArrayElement(TYPES);
  const rooms = getRandomNumber(roomsMin, roomsMax);
  const guests = getRandomNumber(guestsMin, guestsMax);
  const checkin = getRandomArrayElement(CHECKIN_HOURS);
  const checkout = getRandomArrayElement(CHECKOUT_HOURS);
  const featuresArray = new Array(getRandomNumber(1, FEATURE_ITEMS.length)).fill('').map(() =>
  FEATURE_ITEMS[getRandomNumber(0, FEATURE_ITEMS.length - 1)]);
  const features = [...new Set(featuresArray)];
  const description = getRandomArrayElement(DESCRIPTIONS);
  const photosArray = new Array(getRandomNumber(1, PHOTOS.length)).fill('').map(() =>
  PHOTOS[getRandomNumber(0, PHOTOS.length - 1)]);
  const photos = [...new Set(photosArray)];
  return {
    offer: {
      author: avatar,
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

const similarCards = new Array(SIMILAR_OFFERS_COUNT).fill(null).map(() => createCard());

export {similarCards};

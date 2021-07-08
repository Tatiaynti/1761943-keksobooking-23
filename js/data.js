// import {getRandomNumber, getRandomFloat, getRandomArrayElement} from './util.js';

// const AVATARS = [];
// const avatarsNumber = 10;
// const avatarsNumberWithZeroInLink = 9;
// for (let index = 1; index <= avatarsNumber; index++) {
//   if (index <= avatarsNumberWithZeroInLink) {
//     AVATARS.push(`img/avatars/user0${index}.png`);
//   }
//   else {
//     AVATARS.push(`img/avatars/user${index}.png`);
//   }
// }

// const TITLES = [
//   'Милый домик на побережье',
//   'Лучший отель для отдыха всей семьёй',
//   'Романтичный курорт в палатках',
//   'Гостиница с видом на Байкал',
//   'Отдых в бабушкином сарайчике',
//   'Уютный шалаш посреди дикого леса',
// ];

// const TYPES = [
//   'palace',
//   'flat',
//   'house',
//   'bungalow',
//   'hotel',
// ];

// const CHECKIN_HOURS = [
//   '12:00',
//   '13:00',
//   '14:00',
// ];

// const CHECKOUT_HOURS = [
//   '12:00',
//   '13:00',
//   '14:00',
// ];

// const FEATURE_ITEMS = [
//   'wifi',
//   'dishwasher',
//   'parking',
//   'washer',
//   'elevator',
//   'conditioner',
// ];

// const DESCRIPTIONS = [
//   'Апартаменты с 1 спальней',
//   'Стандартный двухместный номер с 1 кроватью',
//   'Семейный номер-студия',
//   'Большой двухместный номер с 1 кроватью',
//   'Трехместный номер Комфорт',
//   'Просторный номер с двумя кроватями',
// ];

// const PHOTOS = [
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
//   'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
// ];

// const SIMILAR_OFFERS_COUNT = 10;
// const LAT_MIN = 35.65000;
// const LAT_MAX = 35.70000;
// const LNG_MIN = 139.70000;
// const LNG_MAX = 139.80000;
// const PRICE_MIN = 1234;
// const PRICE_MAX = 387423;
// const ROOMS_MIN = 1;
// const ROOMS_MAX = 5;
// const GUESTS_MIN = 1;
// const GUESTS_MAX = 7;

// const createCard = () => {
//   const avatar = getRandomArrayElement(AVATARS);
//   const lat = getRandomFloat(LAT_MIN, LAT_MAX);
//   const lng = getRandomFloat(LNG_MIN, LNG_MAX);
//   const featuresArray = new Array(getRandomNumber(1, FEATURE_ITEMS.length)).fill('').map(() =>
//     FEATURE_ITEMS[getRandomNumber(0, FEATURE_ITEMS.length - 1)]);
//   const photosArray = new Array(getRandomNumber(1, PHOTOS.length)).fill('').map(() =>
//     PHOTOS[getRandomNumber(0, PHOTOS.length - 1)]);
//   return {
//     author:
//     { avatar },
//     offer: {
//       title: getRandomArrayElement(TITLES),
//       address: `${lat}, ${lng}`,
//       price: getRandomNumber(PRICE_MIN, PRICE_MAX),
//       type: getRandomArrayElement(TYPES),
//       rooms: getRandomNumber(ROOMS_MIN, ROOMS_MAX),
//       guests: getRandomNumber(GUESTS_MIN, GUESTS_MAX),
//       checkin: getRandomArrayElement(CHECKIN_HOURS),
//       checkout: getRandomArrayElement(CHECKOUT_HOURS),
//       features: [...new Set(featuresArray)],
//       description: getRandomArrayElement(DESCRIPTIONS),
//       photos: [...new Set(photosArray)],
//     },
//     location: {
//       lat: lat,
//       lng: lng,
//     },
//   };
// };

// const similarCards = new Array(SIMILAR_OFFERS_COUNT).fill(null).map(() => createCard());

// export {similarCards};

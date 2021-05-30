// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (max > min && min >= 0)
    ? Math.floor(Math.random() * (max - min + 1)) + min
    : 'Задан некорректный диапазон';
};
getRandomNumber(2, 342);

// Используемые источники
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomFloat = (min, max, decimalPoints) => {
  if (max > min && min >= 0 && decimalPoints >= 0) {
    const randomNumber = Math.random() * (max - min + 1) + min;
    return randomNumber.toFixed(decimalPoints);
  }
  return 'Заданы некорректные координаты';
 }
getRandomFloat(2, 12, 3);

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (max > min && min >= 0)
    ? Math.floor(Math.random() * (max - min + 1)) + min
    : undefined;
};
getRandomNumber(2, 342);
/**
 * Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
 * @param {*} min - начальное значение диапазона (от)
 * @param {*} max - конечное значение диапазона (до)
 * @param {*} decimalPoints - кол-во знаков после запятой
 */
const getRandomFloat = (min, max, decimalPoints) => {
  if (max > min && min >= 0 && decimalPoints >= 0) {
    const randomNumber = Math.random() * (max - min + 1) + min;
    return randomNumber.toFixed(decimalPoints);
  }
  return undefined;
};
getRandomFloat(2, 12, 3);

// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }

  if (!isFinite(min) || !isFinite(max)) {
    return NaN;
  }

  if (!Number.isInteger(min)) {
    min = Math.round(min);
  }

  if (!Number.isInteger(max)) {
    max = Math.round(max);
  }

  if (min > max) {
    [min,max] = [max,min];
  }

  if (min < 0 || max < 1) {
    return NaN;
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}

export {getRandomNumber};

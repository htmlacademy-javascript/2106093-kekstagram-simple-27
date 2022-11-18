// Функция для проверки максимальной и минимальной длины строки.
const isLengthCorrect = function isLengthLongCorrect (string, minStringLength, maxStringLength) {
  if (typeof string !== 'string') {
    string = String(string);
  }

  if (string.length >= maxStringLength) {
    return false;
  }

  if (string.length <= minStringLength) {
    return false;
  }

  return true;
};

export {isLengthCorrect};

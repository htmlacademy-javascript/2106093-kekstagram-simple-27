import {uploadImage} from './form.js';

//Обьявление констант масштабирования
const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

// Переменные масштабирования изображения
const scaleControl = document.querySelector('.scale__control--value'); // Поле отображения значения масштаба
const scaleDecreaseButton = document.querySelector('.scale__control--smaller'); // Кнопка уменьшения масштаба изображения
const scaleIncreaseButton = document.querySelector('.scale__control--bigger'); // Кнопка увеличения масштаба изображения

// ---- Масштабирование картинки по клику ----
// Функция получения и преобразование значения из input
const getInputValue = (input) => {
  const value = Number.parseInt(input.value, 10);
  if (Number.isNaN(value)) {
    return 0;
  }
  return value;
};

// Функция уменьшения масштаба по кнопке
const onScaleDecrease = function () {
  const value = Math.max(getInputValue(scaleControl) - Scale.STEP, Scale.MIN);
  scaleControl.value = `${value}%`;
  uploadImage.style.transform = `scale(${value / 100})`;
};

// Функция увеличения масштаба по кнопке
const onScaleIncrease = function () {
  const value = Math.min(getInputValue(scaleControl) + Scale.STEP, Scale.MAX);
  scaleControl.value = `${value}%`;
  uploadImage.style.transform = `scale(${value / 100})`;
};

// Вызываем обработчики на кнопки масштабирования
scaleDecreaseButton.addEventListener('click', onScaleDecrease);
scaleIncreaseButton.addEventListener('click', onScaleIncrease);

export {Scale, scaleControl, getInputValue};

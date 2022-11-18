//Обьявление констант масштабирования
const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

// Переменные масштабирования изображения
const scaleControl = document.querySelector('.scale__control--value');
const scaleDecreaseButton = document.querySelector('.scale__control--smaller');
const scaleIncreaseButton = document.querySelector('.scale__control--bigger');
const uploadImage = document.querySelector('.img-upload__preview').querySelector('img');
let currentScaleValue = getInputValue(scaleControl);

// ---- Масштабирование картинки по клику ----
// Функция получения и преобразование значения из input
function getInputValue (input) {
  const value = Number.parseInt(input.value, 10);
  if (Number.isNaN(value)) {
    throw new Error('Значение не является числом');
  } else {
    return value;
  }
}

const resetScale = function (input, defaultValue) {
  input.value = `${defaultValue}%`;
  currentScaleValue = defaultValue;
};

// Функция уменьшения масштаба по кнопке
const onScaleDecrease = function () {
  const newValue = Math.max(getInputValue(scaleControl) - Scale.STEP, Scale.MIN);
  scaleControl.value = `${newValue}%`;
  uploadImage.style.transform = `scale(${newValue / 100})`;

};

// Функция увеличения масштаба по кнопке
const onScaleIncrease = function () {
  const newValue = Math.min(getInputValue(scaleControl) + Scale.STEP, Scale.MAX);
  scaleControl.value = `${newValue}%`;
  uploadImage.style.transform = `scale(${newValue / 100})`;
};

// Вызываем обработчики на кнопки масштабирования
scaleDecreaseButton.addEventListener('click', onScaleDecrease);
scaleIncreaseButton.addEventListener('click', onScaleIncrease);

export { resetScale, scaleControl, Scale };

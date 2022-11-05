import {isEscapeKey} from './utils.js';


const form = document.querySelector('.img-upload__form'); // Форма
const upload = form.querySelector('#upload-file'); // Инпут загрузки файла или в JS открытия overlay
const uploadOverlay = form.querySelector('.img-upload__overlay'); // Overlay
const closeUploadOverlayButton = uploadOverlay.querySelector('.img-upload__cancel'); // Кнопку закрытия overlay

// Переменные масштабирования изображения
const scaleControl = uploadOverlay.querySelector('.scale__control--value');
const scaleSmallerButton = uploadOverlay.querySelector('.scale__control--smaller');
const scaleBiggerButton = uploadOverlay.querySelector('.scale__control--bigger');
const uploadImage = uploadOverlay.querySelector('.img-upload__preview').querySelector('img');

// Функция закрытия overlay по клавише ESC
const onOverlayEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeOverlay();
  }
};

// Функция открытия overlay
function openOverlay () {
  uploadOverlay.classList.remove('hidden');

  // Вызов обработчика для закрытия overlay по клавише
  document.addEventListener('keydown', onOverlayEscape);
}

// Функция закрытия overlay
function closeOverlay () {
  uploadOverlay.classList.add('hidden');

  // Удаление обработчика для закрытия overlay по клавише
  document.removeEventListener('keydown', onOverlayEscape);
}

//Обработчик для открытия overlay по кнопке
upload.addEventListener('click', (evt) => { // Пока поставим клик для работы, изменим на change после
  evt.preventDefault(); // Убираем стандартное свойство
  openOverlay ();
});

// Обработчик для закрытия overlay по кнопке
closeUploadOverlayButton.addEventListener('click', closeOverlay);


///////////////////////////////////////////////////////
// Масштабирование картинки по клику

const scaleValue = parseInt(scaleControl.value, 10);

//Обьявление констант масштабирования
const scales = { //Перенести константы на вверх документа !!!!!!
  MIN: 25,
  MAX: 100,
};

// Функция уменьшения масштаба по кнопке
const onScaleSmallerButton = function () {
  let value = parseInt(scaleControl.value, 10);
  value = Math.max(value - 25, 25);
  scaleControl.value = `${value}%`;
  uploadImage.style.transform = `scale(${value / 100})`;
};

// Попытка убрать обработчик при достижении минимального значения
if (scaleValue >= scales.MIN) {
  scaleSmallerButton.addEventListener('click', onScaleSmallerButton);
} else {
  scaleSmallerButton.removeEventListener('click', onScaleSmallerButton);
}

// Функция увеличения масштаба по кнопке
const onScaleBiggerButton = function () {
  let value = parseInt(scaleControl.value, 10);
  value = Math.min(value + 25, 100);
  scaleControl.value = `${value}%`;
  uploadImage.style.transform = `scale(${value / 100})`;
};

// Попытка убрать обработчик при достижении максимального значения
if (scaleValue <= scales.MAX) {
  scaleBiggerButton.addEventListener('click', onScaleBiggerButton);
} else {
  scaleBiggerButton.removeEventListener('click', onScaleBiggerButton);
}

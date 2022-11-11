//Обьявление констант масштабирования
const Scales = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

// ---- Переменные ----
// Переменные для модального окна
const form = document.querySelector('.img-upload__form'); // Форма
const upload = form.querySelector('#upload-file'); // Инпут загрузки файла или в JS открытия overlay
const uploadModal = form.querySelector('.img-upload__overlay'); // Overlay
const closeUploadModalButton = uploadModal.querySelector('.img-upload__cancel'); // Кнопка закрытия overlay
const

// Переменные масштабирования изображения
const scaleControl = uploadModal.querySelector('.scale__control--value'); // Поле отображения значения масштаба
const scaleSmallerButton = uploadModal.querySelector('.scale__control--smaller'); // Кнопка уменьшения масштаба изображения
const scaleBiggerButton = uploadModal.querySelector('.scale__control--bigger'); // Кнопка увеличения масштаба изображения
const uploadImage = uploadModal.querySelector('.img-upload__preview').querySelector('img'); // Изображение

// Переменные фильтов и комметария
const radioButtons = form.querySelectorAll('input[name="effect"]');
const imageDescription = form.querySelector('.text__description');

// ---- Открытие и закрытие модального окна формы
// Функция закрытия overlay по клавише ESC
const isEscapeKey = (evtKey) => evtKey === 'Escape';

const onEscapeOverlay = (evt) => {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    closeOverlay();
  }
};

// Функция открытия overlay
function openOverlay () {
  uploadModal.classList.remove('hidden');

  // Вызов обработчика для закрытия overlay по клавише
  document.addEventListener('keydown', onEscapeOverlay);
}

// Функция сброса формы до стандартных настроек
const resetForm = function () {
  uploadImage.className = ''; // Сбросс фильтров
  radioButtons.forEach((element) => element.removeAttribute('checked')); // Удалине выбранных фильтров
  form.querySelector('input[id="effect-none"]').setAttribute('checked', true); // Возврат фильтра none
  uploadImage.style.transform = 'scale(1)'; // Сброс до 100% масштабирования изображения
  form.reset();
};

// Функция закрытия overlay
function closeOverlay () {
  uploadModal.classList.add('hidden');

  // Удаление обработчика для закрытия overlay по клавише
  document.removeEventListener('keydown', onEscapeOverlay);
  // Установка параметров по умолчанию.
  resetForm();
}

//Обработчик для открытия overlay по кнопке
upload.addEventListener('change', () => openOverlay ());

// Обработчик для закрытия overlay по кнопке
closeUploadModalButton.addEventListener('click', closeOverlay);

// ---- Масштабирование картинки по клику ----
// Функция получения и преобразование значения из input
const getInputValue = () => {
  const value = Number.parseInt(scaleControl.value, 10);
  if (Number.isNaN(value)) {
    return 0;
  }
  return value;
};

// Функция уменьшения масштаба по кнопке
const onScaleDecrease = function () {
  const value = Math.max(getInputValue() - Scales.STEP, Scales.MIN);
  scaleControl.value = `${value}%`;
  uploadImage.style.transform = `scale(${value / 100})`;
};

// Функция увеличения масштаба по кнопке
const onScaleIncrease = function () {
  const value = Math.min(getInputValue() + Scales.STEP, Scales.MAX);
  scaleControl.value = `${value}%`;
  uploadImage.style.transform = `scale(${value / 100})`;
};

// Вызываем обработчики на кнопки масштабирования
scaleSmallerButton.addEventListener('click', onScaleDecrease);
scaleBiggerButton.addEventListener('click', onScaleIncrease);

// ---- Накладывание фильтра на картинку по клику ---- //
// Функция присваивания имен эффектов
const getEffectsNames = function () {
  const radioEffects = {}; // Саздаем обьект эффектов
  // Функция создания обькта с именами эффектов и классами
  function createNames (value) {
    radioEffects[value] = `effects__preview--${value}`;
  }

  // Получение имен всех имен ээфектов фильтра
  radioButtons.forEach((effectName) => createNames(effectName.value));
  return radioEffects;
};

// Создаем обьект с именами и классами
const EffectNames = getEffectsNames();

// Функция присваивания класса изображению
const applyEffect = (evt) => {
  if (evt.target.type === 'radio') {
    // Сброс предыдущих фильтров
    uploadImage.className = '';
    radioButtons.forEach((element) => element.removeAttribute('checked'));
    // Установка настроек выбранного фильтра
    uploadImage.classList.add(EffectNames[evt.target.value]);
    evt.target.setAttribute('checked', true);
  }
};

// Обработчик клика по фильтру
document.querySelector('.effects__list').addEventListener('click', applyEffect);

export {form, imageDescription, closeOverlay, closeUploadModalButton, openOverlay, onEscapeOverlay, isEscapeKey};

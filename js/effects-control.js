import {uploadImage} from './form.js';

// Переменные фильтров
const radioButtons = document.querySelectorAll('input[name="effect"]');

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
    // Установка настроек выбранного фильтра
    uploadImage.classList.add(EffectNames[evt.target.value]);
    evt.target.checked = true;
  }
};

// Обработчик клика по фильтру
const onApplyEffect = document.querySelector('.effects__list').addEventListener('click', applyEffect);

export {onApplyEffect};

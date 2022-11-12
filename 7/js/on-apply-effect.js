import {sliderContainer, uploadImage} from './form.js';
import {Scale, scaleControl, getInputValue} from './image-scale.js';

//Перечисление переменных слайдера эффектов
const slider = sliderContainer.querySelector('.effect-level__slider');
const sliderValue = sliderContainer.querySelector('.effect-level__value');
let scaleValue = getInputValue(scaleControl);

const Effects = {
  none: {
    NAME: 'none',
    MIN: 0,
    MAX: 0,
    START: 0,
    STEP: 0,
    FILTER: '',
    UNIT: '',
  },
  chrome: {
    NAME: 'chrome',
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    FILTER: 'grayscale',
    UNIT: '',
  },
  sepia: {
    NAME: 'sepia',
    MIN: 0,
    MAX: 1,
    START: 1,
    STEP: 0.1,
    FILTER: 'sepia',
    UNIT: '',
  },
  marvin: {
    NAME: 'marvin',
    MIN: 0,
    MAX: 100,
    START: 100,
    STEP: 1,
    FILTER: 'invert',
    UNIT: '%',
  },
  phobos: {
    NAME: 'phobos',
    MIN: 0,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    FILTER: 'blur',
    UNIT: 'px',
  },
  heat: {
    NAME: 'heat',
    MIN: 1,
    MAX: 3,
    START: 3,
    STEP: 0.1,
    FILTER: 'brightness',
    UNIT: '',
  },
};

// Создаем слайдер с эффектами по умолчанию
noUiSlider.create(slider, {
  connect: 'lower',
  range: {
    min: Effects.none.MIN,
    max: Effects.none.MAX,
  },
  start: Effects.none.START,
  step: Effects.none.STEP,
});

const resetEffect = () => {
  uploadImage.className = '';
  // ВОПРОС
  // ВОПРОС
  // ВОПРОС
  // Не удаляется атрибут style и не перезаписывается при переключении с последнего фильтра на фильтр none
  uploadImage.style.transform = ''; // Не срабатывает
  scaleControl.style.filter = ''; // Не срабатывает
  uploadImage.removeAttribute('style'); // Не срабатывает
  scaleControl.value = `${Scale.MAX}%`;
  scaleValue = Scale.MAX;
};

resetEffect();

const applyEffect = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    resetEffect();
    // ВОПРОС
    // ВОПРОС
    // При нажатии выводилось в консоль сначала значение undefined, а потом нормальное, пришлось добавить условие. Что это может быть?
    if (typeof evt.target.value !== 'undefined') {

      uploadImage.classList.add(`effects__preview--${Effects[evt.target.value].NAME}`);
      if (Effects[evt.target.value].NAME === 'none') {
        console.log(Effects[evt.target.value].NAME);
        sliderContainer.classList.add('hidden');
        resetEffect();
      } else {
        sliderContainer.classList.remove('hidden');
      }

      slider.noUiSlider.on('update', () => {
        sliderValue.value = slider.noUiSlider.get();
        uploadImage.style.filter = `${Effects[evt.target.value].FILTER}(${slider.noUiSlider.get()}${Effects[evt.target.value].UNIT})`;
      });

      slider.noUiSlider.updateOptions({
        range: {
          min: Effects[evt.target.value].MIN,
          max: Effects[evt.target.value].MAX,
        },
        start: Effects[evt.target.value].START,
        step: Effects[evt.target.value].STEP,
      });
    }
  }
};

document.querySelector('.effects__list').addEventListener('click', applyEffect);

export {resetEffect};

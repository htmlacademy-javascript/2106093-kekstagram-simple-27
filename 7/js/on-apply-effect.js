import {resetScale , scaleControl, Scale} from './image-scale.js';

//Перечисление переменных слайдера эффектов
const sliderContainer = document.querySelector('.img-upload__form').querySelector('.effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider'); //sliderContainer.
const sliderValue = sliderContainer.querySelector('.effect-level__value');//sliderContainer.
const image = document.querySelector('.img-upload__preview').querySelector('img'); // Изображение

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

let currentEffect = Effects.none;

// Создаем слайдер с эффектами по умолчанию
noUiSlider.create(slider, {
  connect: 'lower',
  range: {
    min: currentEffect.MIN,
    max: currentEffect.MAX,
  },
  start: currentEffect.START,
  step: currentEffect.STEP,
});


const resetImageStyle = (img) => {
  img.className = '';
  img.style.transform = '';
  img.style.filter = '';
};

const resetImageEffect = () => {
  resetImageStyle(image);
  resetScale(scaleControl, Scale.MAX);
};

slider.noUiSlider.on('update', () => {
  sliderValue.value = slider.noUiSlider.get();
  image.style.filter = `${currentEffect.FILTER}(${slider.noUiSlider.get()}${currentEffect.UNIT})`;
});

const applyEffect = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    resetImageEffect();

    currentEffect = Effects[evt.target.value];

    if (typeof evt.target.value === 'undefined') {
      return;
    }

    image.classList.add(`effects__preview--${currentEffect.NAME}`);

    if (currentEffect.NAME === 'none') {
      sliderContainer.classList.add('hidden');
    } else {
      sliderContainer.classList.remove('hidden');
    }

    slider.noUiSlider.updateOptions({
      range: {
        min: currentEffect.MIN,
        max: currentEffect.MAX,
      },
      start: currentEffect.START,
      step: currentEffect.STEP,
    });
  }
};

document.querySelector('.effects__list').addEventListener('click', applyEffect);

export {resetImageEffect, sliderContainer};

const showDataError = () => {
  const message = document.createElement('p');

  message.textContent = 'Ошибка связи с сервером!';
  message.style.cssText = ['position: fixed',
    'bottom: 300px',
    'left: 0',
    'right: 0',
    'margin: 0 300px',
    'padding: 80px 30px',
    'text-align: center',
    'font-size: 30px',
    'font-weight: 700',
    'line-height: 34px',
    'background-color: rgb(0 0 0 / 90%)',
    'color: #ffe753',
    'border: 2px solid #ffffff'].join(';');

  document.body.append(message);
};

export {showDataError};

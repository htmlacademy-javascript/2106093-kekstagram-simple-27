import { showDataError } from './show-data-error.js';

const GET_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(GET_DATA_URL)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(showDataError);
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch(onFail);
};

export {getData, sendData};

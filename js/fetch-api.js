const getData = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((dataList) => {
      onSuccess(dataList);
    })
    .catch(() => {
      onError('Не удалось загрузить данные');
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch('https://23.javascript.pages.academy/keksobookings', {
    method: 'POST',
    body: body,
  })
    .then((response) => {
      response.ok ? onSuccess() : onError();
    })
    .catch(() => {
      onError();
    });

};

export {getData, sendData};

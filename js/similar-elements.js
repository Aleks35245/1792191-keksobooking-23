const TYPE_PALACE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

/* -функция для задания: (В список .popup__features выведите все доступные удобства в объявлении)*/
const fillFeatures = (featuresElement, featuresArray) => {
  featuresElement.innerHTML = ''; /* - очищаем старые данные из шаблона*/
  featuresArray.forEach((item) => { /* функция создает список из исходного массива*/
    const liElement = document.createElement('li'); /* создаем элемент списка*/
    liElement.classList.add('popup__feature', `popup__feature--${item}`); /* добавляем 2 класса*/
    featuresElement.appendChild(liElement); /* добавляем элемент списка в список*/
  });
};

/* В блок .popup__photos выведите все фотографии из списка offer.photos.
Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.*/
const fillPhotos = (photosElement, photosArray) => {
  photosElement.innerHTML = '';
  photosArray.forEach((itemPhoto) => {
    const newImg = document.createElement('img');
    newImg.src = itemPhoto;
    newImg.classList.add('popup__photo');
    newImg.width = '45';
    newImg.height = '40';
    newImg.alt = (`Фотография жилья ${itemPhoto}`);
    photosElement.appendChild(newImg);
  });
};


/*на основе временных данных для разработки и шаблона #card создайте DOM-элементы,
 соответствующие объявлениям, и заполните их данными*/
const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

/* - функция собирает данные для формы из массива SIMILARADVERT в const popupTemplate - в класс popup*/
//SIMILAR_ADVERT.forEach((item) => {
const createPopup = (item) => {
  const popupClone = popupTemplate.cloneNode(true); /* клон шаблона*/


  item.offer.title === undefined
    ? popupClone.querySelector('.popup__title').remove()
    : popupClone.querySelector('.popup__title').textContent = item.offer.title;
  /*fillField('.popup__title', item.offer.title);  /* то же самое, но ч/з функцию -
  popupClone.querySelector('.popup__title').textContent = item.offer.title;
  - добавляем в клон title из массива временных данных*/
  item.offer.type === undefined
    ? popupClone.querySelector('.popup__type').remove()
    : popupClone.querySelector('.popup__type').textContent = TYPE_PALACE[item.offer.type];
  //  - добавляем в клон type из массива временных данных*/
  item.offer.features === undefined
    ? popupClone.querySelector('.popup__features').remove()
    : fillFeatures(popupClone.querySelector('.popup__features'), item.offer.features); /* добавляем в
  клон features из массива временных данных*/
  item.offer.address === undefined
    ? popupClone.querySelector('.popup__text--address').remove()
    : popupClone.querySelector('.popup__text--address').textContent = item.offer.address;

  /* Выведите адрес offer.address в блок .popup__text--address*/
  item.offer.price === undefined
    ? popupClone.querySelector('.popup__text--price').remove()
    : popupClone.querySelector('.popup__text--price').textContent = `${item.offer.price} ₽/ночь`;
  /* то же самое, но ч/з функцию - popupClone.querySelector('.popup__text--price').textContent = `${item.offer.price} ₽/ночь`;/*Выведите цену offer.price
   в блок .popup__text--price строкой вида {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».*/
  item.offer.rooms === undefined
    ? popupClone.querySelector('.popup__text--capacity').remove()
    : popupClone.querySelector('.popup__text--capacity').textContent = `${item.offer.rooms} комнаты для ${item.offer.guests} гостей`;
  /*Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity строкой
вида {{offer.rooms}} комнаты для {{offer.guests}} гостей. Например, «2 комнаты для 3 гостей».*/
  item.offer.checkin === undefined
    ? popupClone.querySelector('.popup__text--time').remove()
    : popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`;
  /*Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text--time строкой вида Заезд после
   {{offer.checkin}}, выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00».*/
  item.offer.description === undefined
    ? popupClone.querySelector('.popup__description').remove()
    : popupClone.querySelector('.popup__description').textContent = item.offer.description;
  /*fillField('.popup__description', item.offer.description);  /* то же самое, но ч/з функцию -
  popupClone.querySelector('.popup__description').textContent = item.offer.description;
  В блок .popup__description выведите описание объекта недвижимости offer.description.*/
  item.offer.photos === undefined
    ? popupClone.querySelector('.popup__photos').remove()
    : fillPhotos(popupClone.querySelector('.popup__photos'), item.offer.photos);
  //добавляем в клон offer.photos из массива временных данных
  item.offer.author === undefined
    ? popupClone.querySelector('.popup__avatar').remove()
    : popupClone.querySelector('.popup__avatar').src = item.author;

  return popupClone;
};

export {createPopup};

import {randomDouble, randomInteger, getRandomArrayElement} from './utils.js';

// — модуль, который создаёт данные. Данные используются в main.js

/* массив строк — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10.
Перед однозначными числами ставится 0. Например, 01, 02...10.
Адреса изображений не повторяются.*/
const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

/* массив строк — массив случайной длины из значений. Значения не должны повторяться.*/
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

/*массив строк — массив д.б. случайной длины из значений:*/
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

/*- пустой массив с объектами. будем наполнять его до 10 с помощью цикла в main.js;*/
const SIMILAR_ADVERT = new Array(AVATAR.length).fill(null);

/* !!! Главная функция createAdvert, которая будет создавать нужный один объект, описывающий Одно Объявление.
Далее вставляем его в массив similarAdvert*/
for (let authorIndex = 0; authorIndex <= AVATAR.length - 1; authorIndex++) { /* цикл
  собирает объект newAdvert от 1 до 10 и добавляет объект в массив similarAdvert*/
  const latAdvert = randomDouble(35.65000, 35.70000, 5); /* — широта, число с плавающей
  точкой случайное значение от 35.65000 до 35.70000.*/
  const lngAdvert = randomDouble(139.70000, 139.80000, 5); /* — долгота, число с плавающей
  точкой случайное значение от 139.70000 до 139.80000*/
  const roomsAdvert = Math.floor(Math.random() * 10) + 1; /*- rooms — количество комнат.
    Случайное целое положительное число. Math.floor(Math.random() * 10) + 1
    -возвращает случайное целое число от 1 до 10 'источник https://schoolsw3.com/',*/
  const priceAdvert = Math.floor(Math.random() * 100) + 10;  /*- price — стоимость.
    Случайное целое положительное число. Math.floor(Math.random() * 100) + 10
    -возвращает случайное целое число от 10 до 100 'источник https://schoolsw3.com/',*/

  /* функция, которая собирает элементы для объекта
    newAdvert.location- местоположение в виде географических координат. Состоит из двух полей:*/
  const createLocation = () => ({
    lat: latAdvert,
    lng: lngAdvert,
  });

  const createOffer = () => { /* функция, которая собирает элементы для объекта
  newAdvert.offer Состоит из 11 полей:*/
    const countArrayFeatures = randomInteger(0, FEATURES.length); /* случайная длина
  значений (количество элементов) массива FEATURES*/
    const featuresShort = FEATURES.slice(); //создаем дубль массива FEATURES, будем его сокращать до countArrayFeatures с помощью цикла for
    if (countArrayFeatures > 0) {
      for (let i=0; i < countArrayFeatures; i++) { // уменьшаем массив до countArrayFeatures индексов
        const randomElementArray = randomInteger(0, featuresShort.length-1); // случайный индекс массива featuresShort
        featuresShort.splice(randomElementArray, 1); // удаляем случайный индекс массива
      }
    }
    const countArrayPhotos = randomInteger(0, PHOTOS.length); /* случайная длина
       значений (количество элементов) массива PHOTOS*/
    const PHOTOSSHORT = PHOTOS.slice(); //создаем дубль массива, будем его сокращать до countArrayPhotos с помощью цикла for
    if (countArrayPhotos > 0) {
      for (let i=0; i < countArrayPhotos; i++) { // уменьшаем массив до countArrayPhotos индексов
        const randomElementArray = randomInteger(0, PHOTOSSHORT.length-1); // случайный индекс массива PHOTOSSHORT
        PHOTOSSHORT.splice(randomElementArray, 1); // удаляем случайный индекс массива
      }
    }
    return {
      address: `${latAdvert}, ${lngAdvert}`, /*- address, строка — адрес предложения.*/
      title: `Предложение отеля по адресу: ${latAdvert}, ${lngAdvert}; стоимость ${priceAdvert} $`,
      /*- title, строка — заголовок предложения. Придумайте самостоятельно.*/
      price: priceAdvert,
      type: getRandomArrayElement(TYPE), //- type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
      rooms: roomsAdvert,
      guests: Math.floor(Math.random() * 11), /* - guests, число — количество гостей, которое можно разместить. Д.б. случайное целое
      положительное число. Math.floor(Math.random() * 11) --возвращает случайное целое число от 0 до 10 'источник https://schoolsw3.com/',*/
      checkin: getRandomArrayElement(CHECKIN), //- checkoin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
      checkout: getRandomArrayElement(CHECKOUT), //- checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
      features: featuresShort, /*- features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator,
          conditioner. Значения не должны повторяться.*/
      description: `Номер состоит из ${roomsAdvert} комнат и имеет такие опции как: ${featuresShort.join()}`,/* - description, строка — описание
          помещения. Придумайте самостоятельно.*/
      photos: PHOTOSSHORT,/* - берем массив PHOTOSSHORT - случайноукороченный массив PHOTOS. PHOTOS, массив строк — массив случайной длины из значений*/
    };
  };

  const newAdvert = () => ({
    author: AVATAR[authorIndex],
    offer: createOffer(),
    location: createLocation(),
  });
  SIMILAR_ADVERT[authorIndex] = newAdvert();
}

export {SIMILAR_ADVERT};

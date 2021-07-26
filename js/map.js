import { form, mapFilter, removeDisabledForms} from './active-switch.js';
import {createPopup} from './similar-elements.js';
import { getData } from './fetch-api.js';
import { showAlert } from './utils.js';
import { getFilteredPoint, setEventListenerFilter } from './fiter.js';
import { debounce } from './utils/debounce.js';

const LAT_CENTRE = 35.68950;
const LNG_CENTRE = 139.69200;
const MAP_SCALE = 12;
const NUMBERS_DECIMAL = 5;
const MAIN_PIN_SIZE = {
  width: 52,
  height: 52,
};

const PIN_SIZE = {
  width: 40,
  height: 40,
};

const POINTS_COUNT = 10;
const RENDER_DELAY = 500;

let dataPoints = [];

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [MAIN_PIN_SIZE.width, MAIN_PIN_SIZE.height],
  iconAnchor: [MAIN_PIN_SIZE.width/2, MAIN_PIN_SIZE.height],
});

const pinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [PIN_SIZE.width, PIN_SIZE.height],
  iconAnchor: [PIN_SIZE.width/2, PIN_SIZE.height],
});

const myAddress = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    // Это подписка на событие карты - добавим карте слушатель события load или по-русски «инициализация»,
    //и когда карта будет готова, выведем сообщение об этом в консоль.
    myAddress.value = `${LAT_CENTRE}, ${LNG_CENTRE}`;
    removeDisabledForms(form, 'ad-form');
  })
  .setView({
    lat: LAT_CENTRE,
    lng: LNG_CENTRE,
  }, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const mainPinMarker = L.marker(
  {
    lat: LAT_CENTRE,
    lng: LNG_CENTRE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const markerPosition = evt.target.getLatLng();
  myAddress.value = `${markerPosition.lat.toFixed(NUMBERS_DECIMAL)}, ${markerPosition.lng.toFixed(NUMBERS_DECIMAL)}`;
  return markerPosition;
});

const markerGroup = L.layerGroup().addTo(map);

const createMarkers = (arrayAds) => {
  arrayAds.forEach((element) => {
    const pinMarker = L.marker(
      {
        lat: element.location.lat,
        lng: element.location.lng,
      },
      {
        icon: pinIcon,
      },
    );
    pinMarker.addTo(markerGroup).bindPopup(createPopup(element),{
      keepInView: true,
    });
  });
  removeDisabledForms(mapFilter, 'map__filters');
};

const resetMarkersLayer = () => {
  markerGroup.clearLayers();
};

const updatePoints = (points) => {
  resetMarkersLayer();
  const filteredPoints = getFilteredPoint(points);
  createMarkers(filteredPoints);
};

map.whenReady(() => {
  getData((serverPoints) => {
    dataPoints = serverPoints;
    createMarkers(dataPoints.slice(0, POINTS_COUNT));
    setEventListenerFilter(debounce(() => updatePoints(dataPoints), RENDER_DELAY));
  }, showAlert);
});

const resetMap = () => {
  updatePoints(dataPoints);
  mainPinMarker.setLatLng({
    lat: LAT_CENTRE,
    lng: LNG_CENTRE,
  });
  myAddress.value = `${LAT_CENTRE}, ${LNG_CENTRE}`;
  map.setView({
    lat: LAT_CENTRE,
    lng: LNG_CENTRE,
  }, MAP_SCALE);
};

export {resetMap};

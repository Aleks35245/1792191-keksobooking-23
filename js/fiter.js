const DEFAULT_FILTER = 'any';
const POINTS_COUNT = 10;
const priceRange = {
  low: 10000,
  high: 50000,
};

const formFilters = document.querySelector('.map__filters');
const filterSelects = formFilters.querySelectorAll('.map__filter');
const filterPrice = formFilters.querySelector('#housing-price');
const filterType = formFilters.querySelector('#housing-type');
const filterRooms = formFilters.querySelector('#housing-rooms');
const filterGuests = formFilters.querySelector('#housing-guests');
const filterFeatures = formFilters.querySelectorAll('.map__checkbox');

const getFilteredPoint = (points) => {
  let filteredPoints = points.slice();
  if (filterType.value !== DEFAULT_FILTER) {
    filteredPoints = filteredPoints.filter((point) => point.offer.type === filterType.value);
  }

  if (filterPrice.value !== DEFAULT_FILTER) {
    switch(filterPrice.value) {
      case 'low':
        filteredPoints = filteredPoints.filter((point) => point.offer.price < priceRange.low);
        break;
      case 'middle':
        filteredPoints = filteredPoints.filter((point) => point.offer.price >= priceRange.low && point.offer.price <= priceRange.high);
        break;
      case 'high':
        filteredPoints = filteredPoints.filter((point) => point.offer.price > priceRange.high);
        break;
    }
  }

  if (filterRooms.value !== DEFAULT_FILTER) {
    filteredPoints = filteredPoints.filter((point) => point.offer.rooms.toString() === filterRooms.value);
  }

  if (filterGuests.value !== DEFAULT_FILTER) {
    filteredPoints = filteredPoints.filter((point) => point.offer.guests.toString() === filterGuests.value);
  }

  const checkedFeatures = formFilters.querySelectorAll('input:checked');
  if (checkedFeatures !== undefined) {
    checkedFeatures.forEach((input) => {
      filteredPoints = filteredPoints.filter((point) => {
        if (point.offer.features !== undefined) {
          return point.offer.features.indexOf(input.value) !== -1;
        }
      });
    });
  }
  return filteredPoints.slice(0, POINTS_COUNT);

};

const setEventListenerFilter = (callBack) => {
  filterSelects.forEach((select) => {
    select.addEventListener('change', () => {
      callBack();
    });
  });
  filterFeatures.forEach((input) => {
    input.addEventListener('change', () => {
      callBack();
    });
  });
};

const resetFilter = () => {
  filterSelects.forEach((select) => {
    select.value = DEFAULT_FILTER;
  });
  filterFeatures.forEach((item) => {
    item.checked = false;
  });
};

export {getFilteredPoint, setEventListenerFilter, resetFilter};

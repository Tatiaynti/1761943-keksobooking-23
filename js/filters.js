import {removeMarkerGroup} from './map.js';

const PRICES_KEYS = {
  'low': 10000,
  'high': 50000,
};

const mapFilters = document.querySelector('.map__filters');
const typeFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomsFilter = mapFilters.querySelector('#housing-rooms');
const guestsFilter = mapFilters.querySelector('#housing-guests');
const featuresFilter = mapFilters.querySelector('#housing-features');

const getFilteredByPrice = (price) => {
  switch (priceFilter.value) {
    case 'low':
      return price < PRICES_KEYS['low'];
    case 'middle':
      return price >= PRICES_KEYS['low'] && price <= PRICES_KEYS['high'];
    case 'high':
      return price > PRICES_KEYS['high'];
    default:
      return true;
  }
};

const getFilteredByRooms = (rooms) => roomsFilter.value === 'any' || rooms === +roomsFilter.value;
const getFilteredByGuests = (guests) => guestsFilter.value === 'any' || guests === +guestsFilter.value;
const getFilteredByType = (type) => typeFilter.value === 'any' || type === typeFilter.value;

const getFilteredByFeatures = (features) => {
  if (features) {
    const selectedFeatures = featuresFilter.querySelectorAll('input:checked');
    return [...selectedFeatures].every((item) => features.includes(item.value));
  }
  return false;
};

const filterOffers = ({offer}) =>
  getFilteredByRooms(offer.rooms) &&
  getFilteredByGuests(offer.guests) &&
  getFilteredByType(offer.type) &&
  getFilteredByPrice(offer.price) &&
  getFilteredByFeatures(offer.features);

const getFeaturesArray = (features, item) => {
  item.rank = item.offer.features && item.offer.features.length ? item.offer.features.length : 0;
  features.push(item);
  return features;
};

const setFilterFormChange = (cb) => {
  mapFilters.addEventListener('change', () => {
    removeMarkerGroup();
    cb();
  });
};


export {mapFilters, filterOffers, setFilterFormChange, getFeaturesArray};

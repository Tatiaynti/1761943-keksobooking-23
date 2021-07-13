import {getData} from './api.js';
import {onGetSuccess} from './api.js';
import {filterOffers} from './filters.js';
import {toggleActivationForm} from './form.js';
import {fillOfferTemplate} from './popup.js';


const OFFERS_COUNT = 10;
const LAT_CENTER_TOKIO = 35.68950;
const LNG_CENTER_TOKIO = 139.69171;
const CENTER_TOKIO = {
  lat: LAT_CENTER_TOKIO,
  lng: LNG_CENTER_TOKIO,
};
const ZOOM = 12;
const DECIMAL_POINTS = 5;
const TILE_LAYER_PNG = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_LAYER_COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const ICON_SIZE_MAIN = [52, 52];
const ICON_ANCOR_MAIN = [26, 52];
const MAIN_PIN_ATTRIBUTES = {
  iconUrl: './img/main-pin.svg',
  iconSize: ICON_SIZE_MAIN,
  iconAnchor: ICON_ANCOR_MAIN,
};

const ICON_SIZE_USUAL_PIN = [40, 40];
const ICON_ANCOR_USUAL_PIN = [20, 40];
const USUAL_PIN_ATTRIBUTES = {
  iconUrl: './img/pin.svg',
  iconSize: ICON_SIZE_USUAL_PIN,
  iconAnchor: ICON_ANCOR_USUAL_PIN,
};

const addressInput = document.querySelector('#address');

const mainPinIcon = L.icon(MAIN_PIN_ATTRIBUTES);
const usualPinIcon = L.icon(USUAL_PIN_ATTRIBUTES);

const map = L.map('map-canvas');

const tileLayer = L.tileLayer(
  TILE_LAYER_PNG,
  {
    attribution: TILE_LAYER_COPYRIGHT,
  },
);
tileLayer.addTo(map);

const marker = L.marker(
  CENTER_TOKIO,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
marker.addTo(map);

const inputCoordinates = (evt) => {
  addressInput.value = `${evt.target.getLatLng().lat.toFixed(DECIMAL_POINTS)}, ${evt.target.getLatLng().lng.toFixed(DECIMAL_POINTS)}`;
};
marker.on('moveend', inputCoordinates);

const markerGroup = L.layerGroup().addTo(map);

const removeMarkerGroup = () => {
  markerGroup.clearLayers();
};

const createMarkerWithInfo = (similarCard) => {
  const {location} = similarCard;

  const markerUsual = L.marker(location, usualPinIcon);

  markerUsual
    .addTo(markerGroup)
    .bindPopup(
      fillOfferTemplate(similarCard),
      {keepInView: true},
    );
};

const showMarkers = (offers) => {
  offers
    .filter(filterOffers)
    .slice(0, OFFERS_COUNT)
    .forEach(createMarkerWithInfo);
};

const setDefaultMainPin = () => marker.setLatLng(CENTER_TOKIO);
const setDefaultAddress = () => addressInput.value = `${LAT_CENTER_TOKIO}, ${LNG_CENTER_TOKIO}`;

const initializeMap = () => {
  map.on('load', () => {
    toggleActivationForm(true);
    setDefaultAddress();
    getData(onGetSuccess);
  })
    .setView(CENTER_TOKIO, ZOOM);
};

export {showMarkers, setDefaultMainPin, setDefaultAddress, removeMarkerGroup, initializeMap};

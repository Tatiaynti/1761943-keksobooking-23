import {toggleActivationForm} from './form.js';
import {similarCards} from './data.js';
import {fillOfferTemplate} from './popup.js';

const addressCard = document.querySelector('#address');
const LAT_CENTER_TOKIO = 35.68950;
const LNG_CENTER_TOKIO = 139.69171;
const CENTER_TOKIO = {
  lat: LAT_CENTER_TOKIO,
  lng: LNG_CENTER_TOKIO,
};
const ZOOM = 12;

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

const mainPinIcon = L.icon(MAIN_PIN_ATTRIBUTES);
const usualPinIcon = L.icon(USUAL_PIN_ATTRIBUTES);

const map = L.map('map-canvas')
  .on('load', () => {
    toggleActivationForm(true);
    addressCard.value = `${LAT_CENTER_TOKIO}, ${LNG_CENTER_TOKIO}`;
  })
  .setView(CENTER_TOKIO, ZOOM);

const TILE_LAYER_PNG = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_LAYER_COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

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

const markerGroup = L.layerGroup().addTo(map);

const decimalPoints = 5;
const inputCoordinates = (evt) => {
  addressCard.value = `${evt.target.getLatLng().lat.toFixed(decimalPoints)}, ${evt.target.getLatLng().lng.toFixed(decimalPoints)}`;
};
marker.on('moveend', inputCoordinates);

const createMarkerWithInfo = (similarCard) => {
  const {location} = similarCard;
  const {lat, lng} = location;
  const iconPosition = {lat, lng};

  const markerUsual = L.marker(iconPosition, usualPinIcon);

  markerUsual
    .addTo(markerGroup)
    .bindPopup(
      fillOfferTemplate(similarCard),
      {keepInView: true},
    );
};

similarCards.forEach((similarCard) => {
  createMarkerWithInfo(similarCard);
});

export {map};

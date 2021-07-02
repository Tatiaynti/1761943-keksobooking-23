import {toggleActivationForm} from './form.js';
import {similarCards} from './data.js';
import {fillOfferTemplate} from './popup.js';

const addressCard = document.querySelector('#address');
const LAT_CENTER_TOKIO = 35.68950;
const LNG_CENTER_TOKIO = 139.69171;
const ICON_SIZE_MAIN = [52, 52];
const ICON_ANCOR_MAIN = [26, 52];
const ICON_SIZE_USUAL_PIN = [40, 40];
const ICON_ANCOR_USUAL_PIN = [20, 40];

const usualPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: ICON_SIZE_USUAL_PIN,
  iconAnchor: ICON_ANCOR_USUAL_PIN,
});

const map = L.map('map-canvas')
  .on('load', () => {
    toggleActivationForm(true);
    addressCard.value = `${LAT_CENTER_TOKIO}, ${LNG_CENTER_TOKIO}`;
  })
  .setView({
    lat: LAT_CENTER_TOKIO,
    lng: LNG_CENTER_TOKIO,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  ).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: ICON_SIZE_MAIN,
  iconAnchor: ICON_ANCOR_MAIN,
});

const marker = L.marker(
  {
    lat: LAT_CENTER_TOKIO,
    lng: LNG_CENTER_TOKIO,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

const markerGroup = L.layerGroup().addTo(map);

marker.on('moveend', (evt) => {
  addressCard.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

similarCards.forEach((similarCard) => {

  const lat = similarCard.location.lat;
  const lng = similarCard.location.lng;

  const markerUsual = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: usualPinIcon,
    },
  );

  markerUsual
    .addTo(markerGroup)
    .bindPopup(
      fillOfferTemplate(similarCard),
      {
        keepInView: true,
      },
    );
});

export {map};

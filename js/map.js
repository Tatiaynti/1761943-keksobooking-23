import {firstOffer} from './data.js';
import {fillOfferTemplate} from './popup.js';

const mapCanvas = document.querySelector('.map__canvas');
mapCanvas.appendChild(fillOfferTemplate(firstOffer.author, firstOffer.offer));

export {mapCanvas};

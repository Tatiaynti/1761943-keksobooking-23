import { getData } from './api.js';
import {showMarkers} from './map.js';


getData((offers) => {
  showMarkers(offers);
});

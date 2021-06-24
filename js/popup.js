const similarOfferTemplate = document.querySelector('#card').content;
const offerType = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const fillOfferTemplate = (author, offer) => {
  const offerElement = similarOfferTemplate.cloneNode(true);

  const checkAvailability = () => {
    if (offer.title.length === 0) {offerElement.querySelector('.popup__title').remove();}
    if (offer.address.length === 0) {offerElement.querySelector('.popup__text--address').remove();}
    if (offer.price.length === 0) {offerElement.querySelector('.popup__text--price').remove();}
    if (offer.type.length === 0) {offerElement.querySelector('.popup__type').remove();}
    if ((offer.rooms.length === 0) || (offer.guests.length === 0)) {offerElement.querySelector('.popup__text--capacity').remove();}
    if ((offer.checkin.length === 0) || (offer.checkout.length === 0)) {offerElement.querySelector('.popup__text--time').remove();}
    if (offer.description.length === 0) {offerElement.querySelector('.popup__description').remove();}
    if (author.length === 0) {offerElement.querySelector('.popup__avatar').remove();}
    if (offer.features.length === 0) {offerElement.querySelector('.popup__features').remove();}
    if (offer.photos.length === 0) {offerElement.querySelector('.popup__photos').remove();}
  };

  offerElement.querySelector('.popup__title').textContent = offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  offerElement.querySelector('.popup__type').textContent = offerType[offer.type];
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  offerElement.querySelector('.popup__description').textContent = offer.description;
  offerElement.querySelector('.popup__avatar').src = author;

  const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);
  const featuresOffer = offerElement.querySelectorAll('.popup__feature');
  featuresOffer.forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });

  const offerPhotos = offerElement.querySelector('.popup__photos');
  offer.photos.find((photoSrc) => {
    const offerPhoto = offerPhotos.querySelector('.popup__photo').cloneNode(false);
    offerPhoto.src = photoSrc;
    offerPhotos.appendChild(offerPhoto);
  });
  offerPhotos.querySelector('.popup__photo').remove();

  checkAvailability();
  return offerElement;
};

export {fillOfferTemplate};

const similarOfferTemplate = document.querySelector('#card').content;
const offerType = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const checkAvailability = (element, content) => {
  if (content === undefined) {
    element.remove();
  }
  element.textContent = content;
};

const fillOfferTemplate = (author, offer) => {
  const offerElement = similarOfferTemplate.cloneNode(true);

  const popupTitle = offerElement.querySelector('.popup__title');
  const popupAddress = offerElement.querySelector('.popup__text--address');
  const popupPrice = offerElement.querySelector('.popup__text--price');
  const popupType = offerElement.querySelector('.popup__type');
  const popupCapacity = offerElement.querySelector('.popup__text--capacity');
  const popupTime = offerElement.querySelector('.popup__text--time');
  const popupDescription = offerElement.querySelector('.popup__description');
  const popupAvatar = offerElement.querySelector('.popup__avatar');

  checkAvailability(popupTitle, offer.title);
  checkAvailability(popupAddress, offer.address);
  checkAvailability(popupPrice, `${offer.price} ₽/ночь`);
  checkAvailability(popupType, offerType[offer.type]);
  checkAvailability(popupCapacity, `${offer.rooms} комнаты для ${offer.guests} гостей`);
  checkAvailability(popupTime, `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  checkAvailability(popupDescription, offer.description);

  popupAvatar.src = author;
  if (!author) {
    popupAvatar.remove();
  }

  const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);
  const popupFeature = offerElement.querySelectorAll('.popup__feature');
  popupFeature.forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });

  const popupPhotos = offerElement.querySelector('.popup__photos');
  offer.photos.forEach((photoSrc) => {
    const popupPhoto = popupPhotos.querySelector('.popup__photo').cloneNode(false);
    popupPhoto.src = photoSrc;
    popupPhotos.appendChild(popupPhoto);
  });
  popupPhotos.querySelector('.popup__photo').remove();

  return offerElement;
};

export {fillOfferTemplate};

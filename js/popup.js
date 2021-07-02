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

const fillOfferTemplate = (similarCard) => {
  const offerElement = similarOfferTemplate.cloneNode(true);

  const popupTitle = offerElement.querySelector('.popup__title');
  const popupAddress = offerElement.querySelector('.popup__text--address');
  const popupPrice = offerElement.querySelector('.popup__text--price');
  const popupType = offerElement.querySelector('.popup__type');
  const popupCapacity = offerElement.querySelector('.popup__text--capacity');
  const popupTime = offerElement.querySelector('.popup__text--time');
  const popupDescription = offerElement.querySelector('.popup__description');
  const popupAvatar = offerElement.querySelector('.popup__avatar');

  checkAvailability(popupTitle, similarCard.offer.title);
  checkAvailability(popupAddress, similarCard.offer.address);
  checkAvailability(popupPrice, `${similarCard.offer.price} ₽/ночь`);
  checkAvailability(popupType, offerType[similarCard.offer.type]);
  checkAvailability(popupCapacity, `${similarCard.offer.rooms} комнаты для ${similarCard.offer.guests} гостей`);
  checkAvailability(popupTime, `Заезд после ${similarCard.offer.checkin}, выезд до ${similarCard.offer.checkout}`);
  checkAvailability(popupDescription, similarCard.offer.description);

  if (similarCard.author.avatar) {
    popupAvatar.src = similarCard.author.avatar;
  }
  else {
    popupAvatar.remove();
  }

  const modifiers = similarCard.offer.features.map((feature) => `popup__feature--${feature}`);
  const popupFeature = offerElement.querySelectorAll('.popup__feature');
  popupFeature.forEach((item) => {
    const [, modifier] = item.classList;
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });

  const popupPhotos = offerElement.querySelector('.popup__photos');
  similarCard.offer.photos.forEach((photoSrc) => {
    const popupPhoto = popupPhotos.querySelector('.popup__photo').cloneNode(false);
    popupPhoto.src = photoSrc;
    popupPhotos.appendChild(popupPhoto);
  });
  popupPhotos.querySelector('.popup__photo').remove();

  return offerElement;
};

export {fillOfferTemplate};

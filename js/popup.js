const similarOfferTemplate = document.querySelector('#card')
  .content.querySelector('.popup');
const OfferType = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const renderElement = (element, content) => {
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
  const popupFeature = offerElement.querySelectorAll('.popup__feature');

  renderElement(popupTitle, similarCard.offer.title);
  renderElement(popupAddress, similarCard.offer.address);
  renderElement(popupPrice, `${similarCard.offer.price} ₽/ночь`);
  renderElement(popupType, OfferType[similarCard.offer.type]);
  renderElement(popupCapacity, `${similarCard.offer.rooms} комнаты для ${similarCard.offer.guests} гостей`);
  renderElement(popupTime, `Заезд после ${similarCard.offer.checkin}, выезд до ${similarCard.offer.checkout}`);
  renderElement(popupDescription, similarCard.offer.description);

  if (similarCard.author.avatar) {
    popupAvatar.src = similarCard.author.avatar;
  }
  else {
    popupAvatar.remove();
  }

  if (similarCard.offer.features) {
    const modifiers = similarCard.offer.features.map((feature) => `popup__feature--${feature}`);
    popupFeature.forEach((item) => {
      const [, modifier] = item.classList;
      if (!modifiers.includes(modifier)) {
        item.remove();
      }
    });
  }

  if (similarCard.offer.photos) {
    const popupPhotos = offerElement.querySelector('.popup__photos');
    similarCard.offer.photos.forEach((photoSrc) => {
      const popupPhoto = popupPhotos.querySelector('.popup__photo').cloneNode(false);
      popupPhoto.src = photoSrc;
      popupPhotos.appendChild(popupPhoto);
    });
    popupPhotos.querySelector('.popup__photo').remove();
  }
  else {
    offerElement.querySelector('.popup__photos').remove();
  }

  return offerElement;
};

export {fillOfferTemplate};


const mapCanvas = document.querySelector('.map__canvas');
const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');
const offerType = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const fillOfferTemplate = (author, offer) => {
  const offerElement = similarOfferTemplate.cloneNode(true);

  if (offer.title) {
    offerElement.querySelector('.popup__title').textContent = offer.title;
  } else {
    offerElement.querySelector('.popup__title').remove();
  }

  if (offer.address) {
    offerElement.querySelector('.popup__text--address').textContent = offer.address;
  } else {
    offerElement.querySelector('.popup__text--address').remove();
  }

  if (offer.price) {
    offerElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  } else {
    offerElement.querySelector('.popup__text--price').remove();
  }

  if (offer.type) {
    offerElement.querySelector('.popup__type').textContent = offerType[offer.type];
  } else {
    offerElement.querySelector('.popup__type').remove();
  }

  if ((offer.rooms) && (offer.guests)) {
    offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    offerElement.querySelector('.popup__text--capacity').remove();
  }

  if ((offer.checkin) && (offer.checkout)) {
    offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    offerElement.querySelector('.popup__text--time').remove();
  }

  if (offer.features.length > 0) {
    const featuresOffer = offerElement.querySelectorAll('.popup__feature');
    featuresOffer.forEach((item) => {
      if (offer.features.indexOf(item.classList[1].replace('popup__feature--', '')) === -1) {
        item.remove();
      }
    });
  } else {
    offerElement.querySelector('.popup__features').remove();
  }

  if (offer.description) {
    offerElement.querySelector('.popup__description').textContent = offer.description;
  } else {
    offerElement.querySelector('.popup__description').remove();
  }

  if (offer.photos.length > 0) {
    const offerPhotos = offerElement.querySelector('.popup__photos');
    offer.photos.forEach((photoSrc) => {
      const offerPhoto = offerPhotos.querySelector('.popup__photo').cloneNode(false);
      offerPhoto.src = photoSrc;
      offerPhotos.appendChild(offerPhoto);
    });
    offerPhotos.querySelector('.popup__photo').remove();
  } else {
    offerElement.querySelector('.popup__photos').remove();
  }

  if (author.avatar) {
    offerElement.querySelector('.popup__avatar').src = author.avatar;
  }
  else {
    offerElement.querySelector('.popup__avatar').remove();
  }
  mapCanvas.appendChild(offerElement);
};

export {fillOfferTemplate};

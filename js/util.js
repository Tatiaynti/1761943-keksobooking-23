const ALERT_TIMEOUT = 5000;
const POSITION_Z = 1000;
const TIMEOUT_DELAY = 500;

const isEsc = (key) => key === 'Escape' || key === 'Esc';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = POSITION_Z;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '150px';
  alertContainer.style.top = '200px';
  alertContainer.style.right = '150px';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_TIMEOUT);
};

const debounce = (callback) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), TIMEOUT_DELAY);
  };
}

export {showAlert, isEsc, debounce};

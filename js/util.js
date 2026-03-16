const body = document.body;

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const showModal = (modalNode, isVisible = true) => {
  if (isVisible) {
    modalNode.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    modalNode.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

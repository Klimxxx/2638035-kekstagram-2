import { showModal } from './util';
import './validation.js';

const inputNode = document.querySelector('.img-upload__input');
const modalNode = document.querySelector('.img-upload__overlay');
const closeButtonNode = document.querySelector('.img-upload__cancel');

inputNode.addEventListener('change', () => {
  showModal(modalNode);
});

closeButtonNode.addEventListener('click', () => {
  showModal(modalNode, false);
});


import { HASHTAG, MAX_DESCRPIPTION } from './constants.js';

const form = document.querySelector('#upload-select-image');
const descriptionNode = document.querySelector('.text__description');
const hashtagNode = document.querySelector('.text__hashtags');

const validation = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item)=>item.length);

const checkDescription = (text) => text.trim().length <= MAX_DESCRPIPTION;

const checkHashtag = (text) => {
  const words = getHashtags(text);
  return words.every((item)=> HASHTAG.test(item));
};

validation.addValidator(
  descriptionNode,
  checkDescription,
  `Лимит ${MAX_DESCRPIPTION} символов превышен!`
);

validation.addValidator(
  hashtagNode,
  checkHashtag,
  'Неправильный хештег'
);

// .split(' ').filter((item)=>item.length)

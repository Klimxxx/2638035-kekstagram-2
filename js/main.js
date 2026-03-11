import { createImageList } from './data.js';
import { render } from './render-cards.js';
import './form.js';

const photos = createImageList(25);
render(photos);

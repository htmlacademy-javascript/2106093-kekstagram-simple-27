import {displayRenderPictures} from './display-render-pictures.js';
import {validate} from './validate.js';
import { getData } from './api.js';
import './form.js';
import './image-scale.js';
import './on-apply-effect.js';

validate();
getData(displayRenderPictures);

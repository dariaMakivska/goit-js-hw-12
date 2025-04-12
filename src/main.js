import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const query = input.value.trim();

  if (query === '') {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          theme: 'dark',
        });
        return;
      }
      createGallery(images);
    })
    .catch(error => {
      console.error('Pixabay API error:', error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
    });
});

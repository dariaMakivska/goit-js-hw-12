import {
  getImagesByQuery,
  resetPage,
  incrementPage,
} from './js/pixabay-api.js';
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
const loadMore = document.querySelector('.load-more');
const loader = document.querySelector('#loader');

function showLoadMoreBtn() {
  loadMore.classList.remove('load-more-hidden');
}

function hideLoadMoreBtn() {
  loadMore.classList.add('load-more-hidden');
}
function showEndMessage() {
  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
    backgroundColor: '#EF4040',
    theme: 'dark',
  });
}

getBoundingClientRect();

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const query = input.value.trim();

  if (query === '') {
    return;
  }

  resetPage();
  clearGallery();
  hideLoadMoreBtn;
  showLoader();

  try {
    const images = await getImagesByQuery(query);

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

    const totalHits = images.length + (page - 1) * 15;
    if (totalHits < 100) {
      showLoadMoreBtn();
    } else {
      showEndMessage();
    }
  } catch (error) {
    console.error('Pixabay API error:', error);
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
});

loadMore.addEventListener('click', handleLoadClick);

async function handleLoadClick() {
  incrementPage();
  showLoader();

  const query = input.value.trim();

  try {
    const images = await getImagesByQuery(query);
    if (images.length === 0) {
      hideLoadMoreBtn();
      return;
    }
    createGallery(images);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

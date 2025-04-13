import {
  getImagesByQuery,
  resetPage,
  incrementPage,
  totalHits,
} from './js/pixabay-api.js';
import {
  createGallery,
  appendGallery,
  showLoader,
  hideLoader,
  clearGallery,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.search-input');
const loadMoreWrapper = document.querySelector('.load-more-wrapper');
const loadMore = document.querySelector('.load-more');
const loader = document.querySelector('#loader');

function showLoadMoreBtn() {
  loadMoreWrapper.classList.remove('load-more-hidden');
}

function hideLoadMoreBtn() {
  loadMoreWrapper.classList.add('load-more-hidden');
}
function showEndMessage() {
  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
    backgroundColor: '#EF4040',
    theme: 'dark',
  });
}

function smoothScroll() {
  const card = document.querySelector('.gallery-item');
  if (card) {
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}

hideLoadMoreBtn();

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const query = input.value.trim();

  if (query === '') {
    return;
  }

  resetPage();
  clearGallery();
  hideLoadMoreBtn();
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

    if (images.length < 15 || images.length >= totalHits) {
      showEndMessage();
    } else {
      showLoadMoreBtn();
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
      showEndMessage();
      return;
    }

    appendGallery(images);
    smoothScroll();

    if (images.length < 15 || images.length >= totalHits) {
      hideLoadMoreBtn();
      showEndMessage();
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

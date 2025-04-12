import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  gallery.innerHTML = '';

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
        </a>
        <div class="image-info">
          <p class="image-info-text">
            <span class="image-info-tag">Likes</span> ${likes}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Views</span> ${views}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Comments</span> ${comments}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Downloads</span> ${downloads}
          </p>
      </div>
</li>
  `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
  // console.log('Loader is shown');
}

export function hideLoader() {
  loader.classList.add('hidden');
  // console.log('Loader is hidden');
}

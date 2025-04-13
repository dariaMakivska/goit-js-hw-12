import axios from 'axios';

const API_KEY = '49643756-826760c59f13ca953f19ee970';
const URL = 'https://pixabay.com/api/';
let page = 1;
export let totalHits = 0;

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 15,
      },
    });
    totalHits = response.data.totalHits;
    return response.data.hits;
  } catch (error) {
    console.log(error);
    totalHits = 0;
    return [];
  }
}

export function resetPage() {
  page = 1;
}

export function incrementPage() {
  page += 1;
}

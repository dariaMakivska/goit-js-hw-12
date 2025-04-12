import axios from 'axios';

const API_KEY = '49643756-826760c59f13ca953f19ee970';
const URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.log(error);
      return [];
    });
}

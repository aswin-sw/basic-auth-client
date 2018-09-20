import fetch from '../utils/api';

let BASE_URL = 'http://localhost:3000/api/v1/content/';

export const fetchQuestions = id => {
  let url = `${BASE_URL}Questions`;

  return fetch
    .get(url)
    .then(result => {
      return result.data;
    })
    .catch(e => {
      console.log('error fetching question');
    });
};

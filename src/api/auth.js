import fetch from '../utils/api';

let BASE_URL = 'http://localhost:3000/api/v1/content/';

export const login = ({ email, password }) => {
  let url = `${BASE_URL}appUsers/login`;

  return fetch.post(url, { email, password }).then(result => {
    let { id: authToken } = result.data;
    localStorage['authToken'] = authToken;
  });
};

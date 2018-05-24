import axios from 'axios';

export const apiUrl = 'https://api.spotify.com/v1';

export default axios.create({
  baseURL: apiUrl,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

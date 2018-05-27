import axios from 'axios';
import { API_URL } from './urls';

export const currentUser = token =>
  axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

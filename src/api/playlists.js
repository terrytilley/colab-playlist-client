import axios from 'axios';
import { API_URL } from './urls';

export const getPlaylist = (token, userId, playlistId) =>
  axios.get(`${API_URL}/users/${userId}/playlists/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getPlaylists = token =>
  axios.get(`${API_URL}/me/playlists?limit=50`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

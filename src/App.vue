<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import qs from 'querystring';
import axios, { apiUrl } from './api/config';

export default {
  name: 'App',
  mounted() {
    const parsed = qs.parse(window.location.search);
    const accessToken = Object.values(parsed)[0];

    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
    }

    axios.get(`${apiUrl}/me`).then(response => console.log(response));
  },
};
</script>

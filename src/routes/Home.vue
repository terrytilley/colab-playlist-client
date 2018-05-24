<template>
  <div>
    <h1>Home</h1>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  mounted() {
    const config = {
      headers: { Authorization: `Bearer ${this.$store.getters.token}` },
    };

    axios
      .get('https://api.spotify.com/v1/me', config)
      .then(response => console.log(response));
  },
};
</script>

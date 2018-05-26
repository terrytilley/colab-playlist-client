<template>
  <div>
    <Playlists />
  </div>
</template>

<script>
import axios from 'axios';
import Playlists from '../components/Playlists.vue';

export default {
  name: 'Home',
  components: {
    Playlists,
  },
  mounted() {
    const config = {
      headers: { Authorization: `Bearer ${this.$store.getters.token}` },
    };

    axios.get('https://api.spotify.com/v1/me', config).then(res => {
      console.log('currentUser', res);
    });
  },
};
</script>

<template>
<v-layout row>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Playlists</v-toolbar-title>
      </v-toolbar>
      <v-list two-line>
        <template v-for="(item) in items">
          <v-list-tile :key="item.name" avatar>
            <v-list-tile-avatar>
              <img :src="item.image">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.name"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Playlists',
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    const config = {
      headers: { Authorization: `Bearer ${this.$store.getters.token}` },
    };

    axios.get('https://api.spotify.com/v1/me/playlists?limit=50', config).then(res => {
      res.data.items.forEach(item => {
        if (item.collaborative) {
          this.items.push({
            name: item.name,
            image: item.images.length ? item.images[0].url : null,
          });
        }
      });
    });
  },
};
</script>
